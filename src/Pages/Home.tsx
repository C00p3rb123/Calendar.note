import React, {useEffect, useState}  from "react";
import Navigation from "../Components/Navigation";
import Month from "../Components/Month/Month";
import Day from "../Components/Day";
import moment from "moment";
import { GrPrevious, GrNext } from "react-icons/gr";
import GridLoader from "../../node_modules/react-spinners/GridLoader"

const Home = () => {
    const [month, setMonth] = useState(moment().month());
    const [monthFormatted, setMonthFormatted] = useState<string>();

    useEffect(() => {
        setMonthFormatted(moment().month(month).format('MMMM YYYY'));
        

    }, [month])

    const nextMonth = () => {
        setMonth(month+1);          
    }

    const previousMonth = () => {
        setMonth(month-1) 
           
    }    
    return (
        <div className="flex flex-col s bg-beige bg-cover h-screen">
            <Navigation/>
            {monthFormatted ?
             <div className="flex flex-col items-center grow">
             <div className="flex pt-5 pr-6 pb-3">
                 <button className="pr-3"onClick={() => 
                 previousMonth()
                 }>
                 <GrPrevious />
                 </button>
                 {`${monthFormatted}`}
                 <button className="pl-3" onClick={() => 
                 nextMonth()
                 }>
                 <GrNext />
                 </button>
             </div>                                               
         <Month month={month} format={1}/>
         </div>: <div className="flex justify-center grow items-center "> <GridLoader color="maroon"/> </div>}                            
        </div>
    )
}

export default Home;