import React from "react";  
import moment from "moment";
import Day from "../Components/Day";


export const useMonth =(formatStart: number, month: number) => {

    let TotalCells = 35;
    const daysInWeek = 7;
    const daysinMonth = (moment().month(month).date());
    const startofMonth: moment.Moment = moment().startOf('month').month(month);
    const availableCells: number = TotalCells - startofMonth.weekday() - formatStart;
    var monthDate: moment.Moment = (startofMonth.subtract(startofMonth.weekday() - formatStart, 'days'));

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
                
         

