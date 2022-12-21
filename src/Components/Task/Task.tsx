import React, {useState} from 'react'  
import {TiTick} from 'react-icons/ti' 
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import {Task} from '../../Types/types'


export const TaskDisplay = ({message}: Task) => {

    const [task, setTask] = useState<string>(message);
    const [isComplete, setIsComplete] = useState<boolean>(false)
    return (
        <div className="bg-maroon text-white flex space justify-between">
            {message}            
            <div className='flex pt-1'>
             <CiEdit/> 
             <TiTick/>
             <RiDeleteBin6Line/>
            </div>
        </div>
    )

}