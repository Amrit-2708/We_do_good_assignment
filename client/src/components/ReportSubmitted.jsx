import React from 'react'
import { useNavigate } from 'react-router-dom'

const ReportSubmitted = () => {
    const navigate = useNavigate();



    function handleClick() {
        navigate('/', { replace: true });
    }

    return (
        <div className='flex flex-col h-screen bg-lime-200'>
            <div className='flex justify-end p-8'>
                <button onClick={handleClick} className='rounded-3xl bg-green-400 cursor-pointer border p-4'>Homepage</button>
            </div>

            <div className='flex pt-24 justify-center items-center'>
                <h1 className='text-6xl'>Report Submitted Successfully</h1>
            </div>
        </div>
    )
}

export default ReportSubmitted
