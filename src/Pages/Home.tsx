import React  from "react";
import Navigation from "../Components/Navigation";
import Month from "../Components/Month";
import Day from "../Components/Day";

const Home = () => {
    
    return (
        <div className="flex flex-col s bg-beige bg-cover h-screen content-center">
            <Navigation/>
            <div className="">
            <Month month={1} format={1}/>
            </div>         
           
             
            
            
        </div>
    )
}

export default Home;