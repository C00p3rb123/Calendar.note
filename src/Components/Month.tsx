import React, {useState} from "react";
import moment from 'moment';
import Day from "./Day";
import { format } from "path";
import { isDebuggerStatement } from "typescript";

type Props = {
    month: number
    format: number //accounting for monday being the first day of the week. 
}

const Month = ({month, format}: Props) => {
    let TotalCells = 35;
    const daysInWeek = 7;
    const daysinMonth = (moment().month(month).date())   
    const startofMonth: moment.Moment = moment().startOf('month').month(month);
    const availableCells: number = TotalCells-startofMonth.weekday()-format;    
    var monthDate: moment.Moment = (startofMonth.subtract(startofMonth.weekday()-format, 'days'));
    
    let rows = (): number => {if(availableCells < daysinMonth){
        return((TotalCells+daysInWeek)/daysInWeek)
    }
    return(TotalCells/daysInWeek)
    } 
    const monthDisplayDates = new Array(rows()).fill([]).map(() => {
        return(new Array(daysInWeek).fill(null).map(() => {         
          
            let date = monthDate.date();
            let abbreviation = monthDate.format('ddd')            
            monthDate = monthDate.add(1, 'days');          
            return(<Day abbreviation={abbreviation} date={date}/>
            
            )        
        }))})    
        
    return(
        <div>
                   
            <div className="grid grid-cols-7 w-fit">
            {monthDisplayDates.map(week => {
                return(week.map(day =>{                    
                    return(day)
                }))
            })}            
        
        </div>
        </div>
        
    )}
   


export default Month