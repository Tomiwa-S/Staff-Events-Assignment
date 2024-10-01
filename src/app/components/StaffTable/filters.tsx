'use client';
import { ChangeEvent, useRef, useState} from 'react';
import { dateFormat } from './getDateFormat';
import { SearchIcon } from './svgs';






export default function FiltersRow(){
      const [PeriodFrom, setPeriodFrom] = useState<string>('')
      const [PeriodTo, setPeriodTo] = useState<string>('')
      const generalStyle = "flex items-center bg-white rounded-lg shadow-md px-2 py-0 h-[2rem] text-sm";
      const dateToInputRef = useRef<HTMLInputElement | null>(null);
      const dateFromInputRef = useRef<HTMLInputElement | null>(null);
      const openDateToPicker = ()=>{
        if(dateToInputRef.current){
            dateToInputRef.current.showPicker();
            
        }
      }
      const openDateFromPicker = ()=>{
        if(dateFromInputRef.current){
            dateFromInputRef.current.showPicker();
            
        }
      }


    return(
    <><span className='font-semibold text-base text-gray-500'>Filters</span>
    <div className="flex space-x-4 py-4 text-gray-500">
    <div className={generalStyle}>
        <span >Location:</span>
        <select className="ml-2 text-black font-semibold outline-none">
        <option>All</option>
        <option>Ikeja</option>
        <option>Ajah</option>
        <option>Sangotedo</option>
    
        </select>
    </div>

    
    <div className={generalStyle}>
        <span className='text-nowrap' >Quick Period:</span>
        <select className="ml-2 text-black font-semibold outline-none">
        <option>This Week</option>
        <option>Last week</option>
        <option>Last month</option>

        </select>
    </div>

  
    <div className={generalStyle}  onClick={openDateFromPicker}>
        <span className='text-nowrap'>Period From: <span className='font-semibold'>{PeriodFrom}</span></span>
        <input id='date'
        type='date'
        ref={dateFromInputRef}
        className='absolute opacity-0 pointer-events-none'
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{
            const value = event.target.value;
            setPeriodFrom(dateFormat(value))
        }}
        />
        <select className='border-0'></select>
       
    </div>


    <div className={generalStyle}  onClick={openDateToPicker}>
        <span className='text-nowrap'>Period To: <span className='font-semibold'>{PeriodTo}</span></span>
        <input id='date'
        type='date'
        ref={dateToInputRef}
        className='absolute opacity-0 pointer-events-none'
        onChange={(event:ChangeEvent<HTMLInputElement>)=>{
            const value = event.target.value;
            setPeriodTo(dateFormat(value))
        }}
        />
        <select className='border-0'></select>
       
    </div>

    
    <div className="flex items-center border border-gray-300 rounded-lg bg-gray-100 p-2 h-[2rem] text-sm w-full">
        <SearchIcon/>
        <input
            type="text"
            placeholder="Search Events by Name"
            className="ml-2 bg-gray-100 outline-none placeholder-gray-500 w-full"
        />
    </div>

    </div>
    </>)
    }
