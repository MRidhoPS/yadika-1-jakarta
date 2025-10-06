import React from 'react'
import EkstrakulikulerCard from './stepCard'

export default function ekstrakulikulerSection() {
    return (
        <div className="w-full relative overflow-hidden mb-10 max-w-screen px-4 py-20 bg-gradient-to-b from-fuchsia-100 via-pink-50 to-fuchsia-100">
            <div className="flex flex-col">
                <h1 className="text-2xl sm:text-9xl font-extrabold text-fuchsia-800">Ekstrakulikuler</h1>
                <h2 className="text-2xl sm:text-4xl font-bold text-fuchsia-700">SMA YADIKA 1 JAKARTA</h2>
                <EkstrakulikulerCard />
            </div>
        </div>

    )
}
