import React from 'react'
import Steps from './stepCard'

export default function ekstrakulikuler() {
    return (
        <div className='w-full relative overflow-hidden mb-10 max-w-screen px-4 py-20 bg-gradient-to-b from-gray-200 via-gray-50 to-gray-200'>
            <div className='flex flex-col'>
                <h1 className='text-2xl sm:text-9xl font-extrabold text-blue-950'>Ekstrakulikuler</h1>
                <h2 className='text-2xl sm:text-4xl font-bold text-blue-950'>SMA YADIKA 1 JAKARTA</h2>
                <Steps />


            </div>
        </div>
    )
}
