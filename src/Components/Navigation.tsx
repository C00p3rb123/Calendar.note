import React from 'react'
import {BsCalendarPlus} from 'react-icons/bs'
import moment from 'moment'
//BsCalendarPlus
const Navigation = () =>{


    return(
        <div className='h-20 flex justify-between bg-redbrown items-center font-robo ' >
            <div className='font pl-10 pb-2 font text-xl flex items-center w-[262px] text-maroon'>
                <span className='flex-none'>CALENDAR.</span><span className=' flex-none basis-1/4 italic'>NOTE</span><div className='grow'><BsCalendarPlus/></div>
            </div>            
                <ul className='flex gap-14 pr-20 text-maroon'>
                    <li>About</li>
                    <li>Import</li>
                    <li>Login</li>
                </ul>            
        </div>
    )
}

export default Navigation;