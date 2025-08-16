import React from "react";
import Navbar from "./Navbar";

import {
    ArrowPathIcon,
    CloudArrowUpIcon,
    FingerPrintIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";

const features = [
    {
        name: "Who We Are",
        description:
            "At We Do Good, we believe in the power of data to drive change. Our platform is designed to help non-governmental organizations (NGOs) across India efficiently submit their monthly reports and visualize their impact through an intuitive dashboard.",
        icon: CloudArrowUpIcon,
    },
    {
        name: "For NGOs",
        description:
            "Easily log in to submit your monthly reports. Our user-friendly interface allows you to provide updates on your activities, achievements, and challenges faced. By sharing your data, you contribute to a larger narrative of social impact.",
        icon: LockClosedIcon,
    },
    {
        name: "For Admins",
        description:
            "Gain insights into the collective impact of NGOs across India. Our admin dashboard provides a comprehensive overview of submitted reports, allowing you to analyze trends, identify areas of improvement, and celebrate successes.",
        icon: ArrowPathIcon,
    },
    {
        name: "Join Us in Making a Difference",
        description:
            "We invite NGOs to register and start submitting their reports today. Together, we can create a transparent and accountable ecosystem that showcases the incredible work being done across the country.",
        icon: FingerPrintIcon,
    },
];

const Homepage = () => {
    return (
        <div>
            <Navbar />
            <div className="bg-amber-300 py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-2xl font-semibold text-indigo-600">
                            We Do Good
                        </h2>
                        <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
                            Welcome to the Reporting Portal
                        </p>
                        {/* <p className="mt-6 text-lg/8 text-gray-700">
                            Welcome to We Do Good Reporting Portal
                        </p> */}
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                            {features.map((feature) => (
                                <div key={feature.name} className="relative pl-16">
                                    <dt className="text-base/7 font-semibold text-gray-900">
                                        <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg bg-indigo-600">
                                            <feature.icon
                                                aria-hidden="true"
                                                className="size-6 text-white"
                                            />
                                        </div>
                                        {feature.name}
                                    </dt>
                                    <dd className="mt-2 text-base/7 text-gray-600">
                                        {feature.description}
                                    </dd>
                                </div>
                            ))}
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Homepage;
