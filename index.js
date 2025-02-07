// Your code here
function createEmployeeRecord(firstName,familyName,title,payPerHour){
    return{
        firstname,
        familyName,
        title,
        payPerHour,
        timeInEvents : [],
        timeOutEvents : []
    }
}

// create a function employee records that will take in an array an array of employee data and return it as an object
function createEmployeeRecords(employeeArrays){
    return employeeArrays.map(createEmployeeRecord)
}

// create a timeinevent function that will handle the time the employee arrives at work
// The datastamp should be of the format ("YYYY-MM-DD HHMM")

function createTimeInEvent(employeeRecord,dateStamp){
    const [day , hour] = dateStamp.split(" ")

    employeeRecord.timeInEvents.push({
        type:"Timein",
        hour:parseInt(hour,10),
        date
    })
    return employeeRecord
}

// Create a timeoutevent function that will handle the time employees leave the work place

function createTimeOutEvent(employeeRecord,dateStamp){
    const [date,hour] = dateStamp.split("")

    employeeRecord.timeOutEvents.push({
        type:"Timeout",
        hour:parseInt(hour,10),
        date
    })
    return employeeRecord
}

// create a function that will calculate the hours worked on by a n employee on a specific date 

function hoursWorkedOndate(employeeRecord,date){
    const timeIn = employeeRecord.timeInEvents.find(event => event.date === date)
    const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date)

    return (timeIn.hour - timeOut.hour) / 100
}
// Create a function that will calculate the wages earned on a specific date 

function wagesEarnedOnDate(employeeRecord,date){
    const hoursWorked = hoursWorkedOndate(employeeRecord,date)
    return hoursWorked * employeeRecord.payPerHour
}

// create a function to calculate the wages earned on a given date 

function wagesEarnedOnDate(employeeRecord,date){
    const hourWorked = hoursWorkedOnDate(employeeRecord,date)
    return hourWorked * employeeRecord.payRatePerHour
  }
