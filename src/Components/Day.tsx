import moment from "moment";
import React, {useState, useEffect} from "react";
import { TaskDisplay } from "./Task/Task";


type Props =  {
   date: number,
   abbreviation: string,
      
}

const Day: React.FC<Props> = ({date, abbreviation}) =>{

    const [isClicked, setIsClicked] = useState(false)
    const [task, setTask] = useState<JSX.Element>()
    const [tasks, setTasks] = useState<JSX.Element[]>([]) 


    useEffect(() => {
        console.log(task)
        console.log(isClicked)
        if(!isClicked && task){
            setTasks([...tasks, task])
            setTask(undefined)
        }
        console.log(tasks)
    }, [isClicked])
    
    
    return(
        <div className="flex flex-col items-center bg-white text-maroon border border-gray-300/50 w-full" onClick={() => setIsClicked(!isClicked)} >
           <span>{abbreviation.toUpperCase()}</span>
           <span className="">{date}</span>
           <div className="flex flex-col self-start w-full space-y-1 pb-1">
            {tasks.map(task => (
            <div className="bg-maroon text-white">
                {task}
            </div>
                ))}
           </div>
           {isClicked && <input autoFocus className="bg-maroon text-white self-start w-full" onChange={(text) => setTask(<TaskDisplay message={text.target.value}/>)}></input>}    

            
        </div>
    )
}
    


export default Day