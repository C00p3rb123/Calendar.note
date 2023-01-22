import moment from "moment";
import React, {useState, useEffect, useRef} from "react";
import { useTasks } from "../Hooks/useTasks";
import { TaskDisplay } from "./Task/Task";
import {AiOutlinePlus} from 'react-icons/ai'

type Props =  {
   date: number,
   abbreviation: string,
      
}
//todo: isClicked to retrun for ui experience. Everytime u click day a task is added. 
//todo: Probably want to change structure so this only renders data rather than rendering and handling data. For eg we have a day and then day column(which has the data)

const Day: React.FC<Props> = ({date, abbreviation}) =>{

    const  {tasks, setTasks, id} = useTasks(); 
    const [isClicked, setIscClicked] = useState(false)
    const [taskText, setTaskText] = useState<string>()

    useEffect(() => {
        if(!isClicked && taskText){
            setTasks([...tasks, {
                identifier: id,
                message: taskText
            }])
            setTaskText(undefined)
            id.current = id.current+1;
            
        }
    },[isClicked])
    
    return(
        <div className="flex flex-col items-center bg-white text-maroon border border-gray-300/50 w-full" onClick={() => {
          setIscClicked(false)          
        } } >
           <span>{abbreviation.toUpperCase()}</span>
           <span className="">{date}</span> 
           <span className="text-redbrown pb-2 pt-1 hover:bg-beige"><AiOutlinePlus onClick={() => {
          setIscClicked(!isClicked)          
          console.log(isClicked)
        } } /></span>          
           <div className="flex flex-col self-start w-full space-y-1 pb-1">
        
            {tasks.map(task => (
            
             <TaskDisplay identifier={task.identifier} message={task.message}/>              
            
            ))}
           </div>   
           {isClicked && <input autoFocus className="bg-maroon text-white w-full" onChange={(text) => setTaskText(text.target.value)}></input> }
        </div>
        
    )
}  
export default Day