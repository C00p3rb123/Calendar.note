import moment from "moment";
import React, {useState, useEffect, useRef} from "react";
import { useTasks } from "../Hooks/useTasks";
import { TaskDisplay } from "./Task/Task";


type Props =  {
   date: number,
   abbreviation: string,
      
}
//todo: isClicked to retrun for ui experience. Everytime u click day a task is added. 

const Day: React.FC<Props> = ({date, abbreviation}) =>{

    const  {tasks, setTasks, id} = useTasks(); 
    const isClicked = useRef(false);
     
    
    return(
        <div className="flex flex-col items-center bg-white text-maroon border border-gray-300/50 w-full" onClick={() => {
            isClicked.current = !isClicked.current
            console.log(isClicked)
            if(isClicked){
                <TaskDisplay id={id}/>
                
            }           
          
        } } >
           <span>{abbreviation.toUpperCase()}</span>
           <span className="">{date}</span>
           <div className="flex flex-col self-start w-full space-y-1 pb-1">
            {tasks.map(task => (
            
                task           
            
            ))}
           </div>   
        </div>
    )
}  
export default Day