import React, {useState} from "react";
import moment from 'moment';
import Day from "../Day";
import { format } from "path";
import { isDebuggerStatement } from "typescript";
import {useMonth} from '../../Hooks/useMonth'
import {GrNext, GrPrevious} from "react-icons/gr"


type Props = {
    month: number
    format: number //accounting for monday being the first day of the week. 
}

const Month = ({month, format}: Props) => {

    const monthDisplayDates = useMonth(format, month)

    return(
        <div className="flex justify-center"> 
        <button>
            <GrPrevious/>
            </button>                  
            <div className="grid grid-cols-7 w-fit pb-4 pr-5 pt-5">
            {monthDisplayDates.map(week => {
                return(week.map(day =>{                    
                    return(day)
                }))
            })}            
        
        </div>
        <button>
            <GrNext/>
        </button>
        </div>
        
    )}
   


export default Month