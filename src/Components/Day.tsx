import moment from "moment";
import React, {useState, useEffect, useRef} from "react";
import { TaskDisplay } from "./Task/Task";
import {AiOutlinePlus} from 'react-icons/ai'
import {Task} from "../Types/types"

type Props =  {
   date: number,
   abbreviation: string,
      
}
//todo: isClicked to retrun for ui experience. Everytime u click day a task is added. 
//todo: Probably want to change structure so this only renders data rather than rendering and handling data. For eg we have a day and then day column(which has the data)

const Day: React.FC<Props> = ({date, abbreviation}) =>{

    const [id, setId] = useState(0);
    const [tasks, setTasks] = useState<Task[]>([])
    const [isClicked, setIscClicked] = useState(false)
    const [taskText, setTaskText] = useState<string>()

    useEffect(() => {
        if(!isClicked && taskText){
            setTasks([...tasks, {
                identifier: id,
                message: taskText
                
            }])
            setTaskText(undefined)
            setId(id+1)            
        }
    },[isClicked])
    
    return(
        <div className="flex flex-col items-center bg-white text-maroon border border-gray-300/50 w-full" onClick={() => {
          setIscClicked(!isClicked)
          {console.log(tasks)}          
        } } >
           <span>{abbreviation.toUpperCase()}</span>
           <span className="">{date}</span>                   
           <div className="flex flex-col self-start w-full space-y-1 pb-1">
        
            {tasks.map(task => (
            
             <TaskDisplay taskDetails={task} setTasks={setTasks} tasks={tasks}/>              
            
            ))}
           </div>   
           {isClicked && <input autoFocus className="bg-maroon text-white w-full" onChange={(text) => setTaskText(text.target.value)}></input> }
        </div>
        
    )
}  
export default Day