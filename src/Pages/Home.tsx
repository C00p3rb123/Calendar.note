import React, {useEffect, useState}  from "react";
import Navigation from "../Components/Navigation";
import Month from "../Components/Month/Month";
import moment from "moment";

const Home = () => {
    const [month, setMonth] = useState(moment().month());
    const [monthFormatted, setMonthFormatted] = useState<string>();

    useEffect(() => {
        setMonthFormatted(moment().month(month).format('MMMM'))

    }, [month])

    
    return (
        <div className="flex flex-col s bg-beige bg-cover h-screen justify-between">
            <Navigation/>
            <div className="flex flex-col items-center">
            {`${monthFormatted}`}          
            <Month month={1} format={1}/>
            </div>
            
                    
           
             
            
            
        </div>
    )
}

export default Home;