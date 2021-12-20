const thirtyOne = [4,6,7,9,11]
    
export const CalendarFunctions = (activeDay,firstDay,screenWidth) =>{
    if(activeDay.getDate()>=1 && activeDay.getDate()<=3 &&  !thirtyOne.includes(activeDay.getMonth()) ){
    firstDay.setDate(activeDay.getDate() -4)
    }
    if(activeDay.getDate()>=1 && activeDay.getDate()<=3 &&  activeDay.getMonth() ===2){
        firstDay.setDate(activeDay.getDate() - 6)
    }
    else{
    firstDay.setDate(activeDay.getDate() - 3)
    }
    const CheckMonth = () =>{
        activeDay.getDate()>3?firstDay.setMonth(activeDay.getMonth()):firstDay.setMonth(activeDay.getMonth()-1)
    }
    CheckMonth()

    let dates=[]
    let j =0;
    for (let i = 1; i < 8 && j < 7 ;i++) {
        if(i===4){
            dates[j] += activeDay
        }
        else{
            dates[j] += firstDay
        } 
         firstDay.setDate(firstDay.getDate() + 1)  

        j++;  
    }  
    if(screenWidth<800){
        dates.shift()
        dates.pop()
    }
    return dates
}

    
    



