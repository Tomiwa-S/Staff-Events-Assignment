'use client'
import { FC, useState } from 'react';
import Image from 'next/image';
import { Data, StaffMember } from './data';
import FiltersRow from './filters';
import Top from './top';
import { ViewSVG, InfoIcon, ArrowICon } from './svgs';



const StaffTable: FC = () => {


  const formatList = (items: string[]) => {
    return items.length > 1 ? (<span className='flex items-center gap-2'>{`${items[0]} & ${items.length - 1} more`}
    <InfoIcon info={items.join(', ')}/>
    </span>) : items[0];
  };

  const [staffData, setStaffData] = useState<StaffMember[]>(Data)
     
  const thStyle = "px-6 py-3 border-b border-gray-200 text-left text-sm font-medium text-gray-500";
  const defaultTdStyle = "px-6 py-4 whitespace-nowrap"

  function sortRow(columnName:keyof StaffMember){

    console.log(columnName)
    setStaffData(Data)
  }
  return (
    <div className="overflow-x-auto min-w-full bg-white border border-gray-200 p-4">
    <Top/>
        <FiltersRow/>
      <table className="min-w-full">

        <thead>
          <tr>
            <th className={thStyle} >Staff <ArrowICon svgClick={()=>sortRow('name')}/></th>
            <th className={thStyle} >Classes <ArrowICon svgClick={()=>sortRow('classes')}/></th>
            <th className={thStyle} >Location <ArrowICon svgClick={()=>sortRow('location')}/></th>
            <th className={thStyle} >Subjects <ArrowICon svgClick={()=>sortRow('subjects')}/></th>
            <th className={thStyle} >Status <ArrowICon svgClick={()=>sortRow('status')}/></th>
            <th className={thStyle} >Actions</th>
          </tr>
        </thead>


        <tbody>
          {staffData.map((staff, index) => (

            <tr key={index} className="border-b border-gray-200">

              <td className={defaultTdStyle + " text-sm font-medium text-gray-900"}>
                <Image className="rounded-full inline-block mr-2" width={32}  height={32} src={'/favicon.ico'} alt={staff.name}/>
                {staff.name}
              </td>
              <td className={defaultTdStyle + " text-sm text-gray-500"}>{formatList(staff.classes)}</td>
              <td className={defaultTdStyle + " text-sm text-gray-500"}>{formatList(staff.location)}</td>
              <td className={defaultTdStyle + " text-sm text-gray-500"}>{formatList(staff.subjects)}</td>
              <td className={defaultTdStyle}>

                <span
                  className={`px-4 py-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                    staff.status === 'Active' ? 'bg-green-100 text-green-800' : staff.status === 'Upcoming' ? 'bg-blue-100 text-blue-800' : 'bg-red-100 text-red-800'
                  }`}
                >
                  {staff.status}
                </span>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button className="text-indigo-600 hover:text-indigo-900">
                <ViewSVG/>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffTable;
