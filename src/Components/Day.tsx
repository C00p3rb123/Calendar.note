import moment from "moment";
import React from "react";

type Props =  {
   date: number,
   abbreviation: string,
   
}

const Day: React.FC<Props> = ({date, abbreviation}) =>{

    
    return(
        <div className="flex flex-col items-center bg-white text-maroon border border-gray-300/50 h-40 w-48">
           <span>{abbreviation.toUpperCase()}</span>
           <span className="">{date}</span>         
            
        </div>
    )
}
    


export default Day