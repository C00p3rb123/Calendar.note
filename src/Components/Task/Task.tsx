import React, {useEffect, useState} from 'react'  
import {TiRefresh, TiTick} from 'react-icons/ti' 
import {RiDeleteBin6Line} from 'react-icons/ri'
import {CiEdit} from 'react-icons/ci'
import {Task} from '../../Types/types'



export const TaskDisplay = ({identifier, message}: Task) => {

    const [isComplete, setIsComplete] = useState<boolean>(false)
    const [isEdit, setIsEdit] = useState<boolean>(false)

    useEffect(() => {
        
    })
    return (
        isEdit ? <input autoFocus className='bg-maroon'></input>:
        <div className="bg-maroon flex justify-between text-white ">
            {message}            
            <div className='flex pt-1'>
             <CiEdit onClick={() => {
               setIsEdit(!isEdit)
               isEdit && <input className='bg-black text-white'></input>
               console.log(isEdit + "hi")
             }}/> 
             <TiTick/>
             <RiDeleteBin6Line/>
            </div>
        </div>
    )

}