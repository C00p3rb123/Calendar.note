import React from "react";  
import moment from "moment";
import Day from "../Components/Day";


export const useMonth =(formatStart: number, month: number) => {

    let TotalCells = 35;
    const daysInWeek = 7;
    const daysinMonth = (moment().month(month).daysInMonth());
    const startofMonth: moment.Moment = moment().startOf('month').month(month);
    const startofMonthWeekday = () => {
        if(startofMonth.weekday() === 0){
            return daysInWeek;
        }
        return(startofMonth.weekday())
    }
    const availableCells: number = TotalCells - startofMonthWeekday(); //startofMonth weekday refers to the number of the weeekday eg monday = 1, tues = 2
    var monthDate: moment.Moment = (startofMonth.subtract(startofMonthWeekday() - formatStart, 'days')); //calculates the first monday of the month

    const rows = (): number => {
        if (availableCells < daysinMonth) {
            return ((TotalCells + daysInWeek) / daysInWeek);
        }
        return (TotalCells / daysInWeek);
    };
    const monthDisplayDates = new Array(rows()).fill([]).map(() => {
        return (new Array(daysInWeek).fill(null).map(() => {

            let date = monthDate.date();
            let abbreviation = monthDate.format('ddd');
            monthDate = monthDate.add(1, 'days');
            return(<Day abbreviation={abbreviation} date= {date}/>)
        }));

    });

    return(monthDisplayDates)
}
                
         

