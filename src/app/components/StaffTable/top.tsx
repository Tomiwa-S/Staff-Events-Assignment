import { SynchronizeIcon, TableLightIcon, NoirCalendarIcon } from "./svgs"



export default function Top(){
    return (<>
    <span className="flex w-[100%] justify-between">
    <p className="left-item text-xl font-semibold">Staff Events</p>

    <span className="right-item rounded-full border-2 flex gap-2 py-1 px-2">
    <SynchronizeIcon/>
    Synchronize
    </span>
    </span>

    <span className="flex w-[100%] justify-between items-center my-4">
    <p className="left-item text-base">All Events</p>

    <span className="right-item flex gap-2 py-1 px-2 items-center mb-4">
    Switch Views
    <TableLightIcon/>
    <NoirCalendarIcon/>
    </span>
    </span>
    </>)
}