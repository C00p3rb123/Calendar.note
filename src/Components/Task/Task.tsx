import React, {useEffect, useState} from 'react'  
import {TiRefresh, TiTick} from 'react-icons/ti' 
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import {Task} from '../../Types/types'

type Props = {
    taskDetails: Task,
    setTasks: React.Dispatch<React.SetStateAction<Task[]>>, 
    tasks: Task[]
}


export const TaskDisplay = ({taskDetails, setTasks, tasks}: Props) => {

    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [taskText, setTaskText] = useState(taskDetails.message); 
    
  
    return (
        isEdit ? <input autoFocus className="bg-maroon text-white w-full" onChange={(text) => {
            setTaskText(text.target.value)
        }} onClick={(e) =>  }
         ></input> :
    <div className='flex bg-maroon text-white justify-between items-end'>
        {taskDetails.message}
        <div className='flex'>
            <CiEdit onClick={(event) => {
                setIsEdit(true)
                event.stopPropagation();    
            }} />
            <TiTick />
            <RiDeleteBin6Line/>
        </div>

    </div>)

}