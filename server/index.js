const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

mongoose
    .connect(
        process.env.MONGODB_URI
    )
    .then(() => {
        console.log("Connected to MongoDB Atlas");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB Atlas", err);
    });

const ReportSchema = new mongoose.Schema({
    ngoId: {
        type: String,
        required: true,
    },
    peopleHelped: {
        type: Number,
        required: true,
    },
    eventsConducted: {
        type: Number,
        required: true,
    },
    fundsUtilized: {
        type: Number,
        required: true,
    },
    month: {
        type: String,
        required: true,
        match: /^\d{4}-(0[1-9]|1[0-2])$/,
    },
});

const Report = mongoose.model("reports", ReportSchema);

app.post("/report", async (req, res) => {
    console.log('Incoming data:', req.body);
    const { ngoId, peopleHelped, eventsConducted, fundsUtilized, month } = req.body;

    try {
        const data = await Report.create({
            ngoId,
            peopleHelped,
            eventsConducted,
            fundsUtilized,
            month,
        });
        const unique_ngo = await data.save();
        console.log('succesfull', unique_ngo);
        res.status(200).send({ message: "Report submitted successfully" });
        console.log(unique_ngo);
    } catch (error) {
        console.log('error is this: ', error);
        res.status(500).send({ message: "Error submitting report" });
    }
});

app.get("/dashboard", async (req, res) => {
    try {
        const { month } = req.query;
        if (!month || !/^\d{4}-(0[1-9]|1[0-2])$/.test(month)) {
            return res.status(400).json({ message: 'Invalid or missing month format (YYYY-MM).' });
        }

        const reports = await Report.find({ month });
        console.log("data aya ki nahi: ", reports);

        const totalNGOs = reports.length;
        const totalPeopleHelped = reports.reduce((sum, r) => sum + r.peopleHelped, 0);
        const totalEvents = reports.reduce((sum, r) => sum + r.eventsConducted, 0);
        const totalFunds = reports.reduce((sum, r) => sum + r.fundsUtilized, 0);

        // res.status(200).send({month, totalNGOs, totalPeopleHelped, totalEvents, totalFunds});
        //the above line also works perfectly

        res.status(200).json({
            month,
            totalNGOsReporting: totalNGOs,
            totalPeople: totalPeopleHelped,
            totalEventsConducted: totalEvents,
            totalFundsUtilized: totalFunds,
        });
    } catch(error) {
        console.log('yeh hai error', error);
        res.status(500).json({ message: 'Failed to retrieve dashboard data.' });
    }
});


app.listen(3001, () => {
    console.log("server is running");
});
