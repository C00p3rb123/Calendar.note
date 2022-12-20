import {useMonth} from '../../Hooks/useMonth'
import { MonthTitle } from './MonthTitle'
import {useState} from "react"
import moment from 'moment'



type Props = {
    month: number
    format: number //accounting for monday being the first day of the week. 
}

const Month = ({month, format}: Props) => {

    const monthDisplayDates = useMonth(format, month)
    const style5rows = 1;

    return(
        <div className="flex flex-col items-center h-full w-4/5">                        
            <div className="grid grid-cols-7 h-full w-full pb-4 pr-5">
            {monthDisplayDates.map(week => {
                return(week.map(day =>{                    
                    return(day)
                }))
            })}            
        
        </div>
        </div>
        
    )}
   


export default Month