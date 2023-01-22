import React, {useEffect, useState} from 'react'  
import {TiRefresh, TiTick} from 'react-icons/ti' 
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import {Task} from '../../Types/types'

type Props = {
    task: Task,
    setTask: React.Dispatch<React.SetStateAction<Task[]>>, 
    tasks: Task[]
}


export const TaskDisplay = ({task, setTask, tasks}: Props) => {

    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)
    const [taskText, setTaskText] = useState(task.message); 
    
  
    return (<div className=''>
        {task.message}
        <div>
            <CiEdit />
            <TiTick />
            <RiDeleteBin6Line/>
        </div>

    </div>)

}