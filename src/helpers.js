function convertDateAndTimeStringToDateTime (date,time) {
    const myDate = new Date();
    myDate.setDate(date.slice(0,2));
    myDate.setMonth(date.slice(3,5)-1);
    myDate.setFullYear(date.slice(-4));
    myDate.setHours(time.slice(0,2),time.slice(-2),'00','000');

    return myDate;
}

function convertDateToString (date,format){
    const myTempDate = new Date(date);
    const yyyy = myTempDate.getFullYear().toString();
    const MM = (myTempDate.getMonth()+1).toString().padStart(2,'0');
    const dd = myTempDate.getDate().toString().padStart(2,'0');
    const hh = myTempDate.getHours().toString().padStart(2,'0');
    const mm = myTempDate.getMinutes().toString().padStart(2,'0');
    if(format === 'dd/MM/yyyy'){
        return dd + '/' + MM + '/' + yyyy;
    }
    if(format === 'hh:mm'){
        return hh + ':' + mm;
    }
}

function durationCalculator(from,until){
    const myTempDateFrom = new Date(from);
    const myTempDateUntil = new Date(until);
    let durationInMilSec = myTempDateUntil.getTime() - myTempDateFrom.getTime();
    return durationInMilSec;
}

function durationFormatter(duration){
    let durationInMinutes = duration / 60000;
    let remainder = durationInMinutes % 60;
    if(remainder === 0){
        let durationHours = durationInMinutes / 60
        return durationHours.toString().padStart(2,'0') + 'h00m';
    } else {
        let durationHours = Math.floor(durationInMinutes / 60);
        return durationHours.toString().padStart(2,'0') + 'h' + remainder.toString().padStart(2,'0') + 'm';
    }
}

export { convertDateAndTimeStringToDateTime, convertDateToString, durationCalculator, durationFormatter };