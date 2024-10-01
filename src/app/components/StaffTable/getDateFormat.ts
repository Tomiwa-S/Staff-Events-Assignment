
export function dateFormat(value:string):string{
        const options : Intl.DateTimeFormatOptions ={
                weekday:'short',
                day:'numeric',
                month:'short',
                year:'numeric'
            }
        const date = new Date(value)
        
    return new Intl.DateTimeFormat("en-GB", options).format(date)
}