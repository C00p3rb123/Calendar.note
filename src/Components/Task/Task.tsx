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
        isEdit ? <input type="text" value={taskText} autoFocus className="bg-maroon text-white w-full" onChange={(text) => {
            setTaskText(text.target.value)
            console.log(taskDetails.identifier)
        }} onClick={(e) => {
            if(taskDetails.message !== taskText){
                tasks[taskDetails.identifier].message = taskText;
                setTasks(tasks)
                setIsEdit(false)
                e.stopPropagation();
            }
        } }        
         ></input> :
    <div className='flex bg-maroon text-white justify-between items-end'>
        {taskDetails.isComplete ? <s>{taskDetails.message}</s> : taskDetails.message}
        <div className='flex'>
            <CiEdit onClick={(event) => {
                setIsEdit(true)
                event.stopPropagation();    
            }} />
            <TiTick onClick={(e) => {
                tasks[taskDetails.identifier].isComplete= true; 
                setTasks(tasks)                
                e.stopPropagation() 
                setIsComplete(!isComplete)            
            }}/>
            <RiDeleteBin6Line onClick={(e) => {
                setTasks(tasks.filter((task) => task.identifier !== taskDetails.identifier).map((task, i)=>{
                    task.identifier = i; 
                    return(task)
                }))
                e.stopPropagation()
                
            }}/>
        </div>

    </div>)

}