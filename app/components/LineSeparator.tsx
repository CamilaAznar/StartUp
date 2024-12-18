'use client'


import { useNightMode } from "../context/NightModeContext"


export const LineSeparator = () => {
    const { nightMode } = useNightMode()

    return (
        <div className={`py-40 ${nightMode ? 'bg-black' : ''}`}>
            <div className={`w-1/3  bg-gradient-to-r ${nightMode ? 'from-blue-400 to-blue-800 h-[0.5px]' : 'from-blue-400 to-blue-900 h-[1px]'} mx-auto rounded-full`}></div>
        </div>
    )
}