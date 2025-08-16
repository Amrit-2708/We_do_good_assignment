import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const navigate = useNavigate();
    const [month, setMonth] = useState();
    const [data, setData] = useState(null);

    function handleClick()
    {
        navigate('/');
    }   

    async function handleSearch() {
        if (!month) {
            alert("Please select a month first");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:3001/dashboard`, {
                params: { month }
            });
            console.log(response);
            setData(response.data);
        } catch (error) {
            console.error(error);
            alert("Error fetching dashboard data");
        }
    }

    return (
        <div className='bg-amber-500 h-screen'>
            <div className='flex justify-end p-6'>
                <button className='rounded-2xl border p-2 cursor-pointer' onClick={handleClick}>Go to Homepage</button>
            </div>
            <div className='flex justify-center p-8'>
                <h1 className='text-4xl'>Hi admin, You can see the report for the month here</h1>
            </div>

            <div className='flex justify-center'>
                <label
                    className="pr-6 font-medium flex items-center text-gray-900"
                >
                    Select the month & year you want to see the report for:
                </label>
                <div className="mt-2 mr-4">
                    <input
                        id="report"
                        name="report"
                        type="month"
                        min="2000-01"
                        max="2025-06"
                        required
                        placeholder="YYYY-MM"
                        onChange={(e) => {
                            setMonth(e.target.value);
                        }}
                        autoComplete="monthly_report"
                        className="block rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                </div>
                <button className='rounded border p-2 w-36 cursor-pointer' onClick={handleSearch}>Search</button>
            </div>

            {data && (
                <div className="mt-8 flex justify-center">
                    <div className="bg-white rounded-xl shadow-lg p-6 w-[500px]">
                        <h2 className="text-2xl font-semibold mb-4">Report Summary for {data.month}</h2>
                        <p><strong>Total NGOs Reporting:</strong> {data.totalNGOsReporting}</p>
                        <p><strong>Total People Helped:</strong> {data.totalPeople}</p>
                        <p><strong>Total Events Conducted:</strong> {data.totalEventsConducted}</p>
                        <p><strong>Total Funds Utilized:</strong> ₹{data.totalFundsUtilized}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard
