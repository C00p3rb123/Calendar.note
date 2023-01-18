import React, {useEffect, useState} from 'react'  
import {TiRefresh, TiTick} from 'react-icons/ti' 
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import {Task} from '../../Types/types'



export const TaskDisplay = ({id}: Task) => {

    const [taskText, setTaskText] = useState<string>("");
    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(true)

   
    return (
        taskText ?
        <div className="bg-maroon text-white ">
            {taskText}            
            <div className='flex pt-1'>
             <CiEdit onClick={() => {
               setIsEdit(true)
               
             }}/> 
             <TiTick/>
             <RiDeleteBin6Line/>
            </div>
        </div>: 

        <input className="bg-maroon autofocus text-white self-start w-full" onChange={(text) => setTaskText(text.target.value)}></input>
    )

}