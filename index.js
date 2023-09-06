var flightDepartures = [
    {
        dayOfMonth: 5,
        month: 'January',
        year: 2023,
        flightNumber: 'DL123',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        departureTime: '08:00 AM',
        arrivalTime: '11:30 AM'
    },
    {
        dayOfMonth: 15,
        month: 'February',
        year: 2024,
        flightNumber: 'AA456',
        departureCity: 'Los Angeles',
        arrivalCity: 'Houston',
        departureTime: '10:30 AM',
        arrivalTime: '01:45 PM'
    },
    {
        dayOfMonth: 25,
        month: 'March',
        year: 2025,
        flightNumber: 'UA789',
        departureCity: 'Houston',
        arrivalCity: 'Chicago',
        departureTime: '02:15 PM',
        arrivalTime: '04:45 PM'
    },
    {
        dayOfMonth: 10,
        month: 'April',
        year: 2023,
        flightNumber: 'WN234',
        departureCity: 'Chicago',
        arrivalCity: 'New York',
        departureTime: '09:30 AM',
        arrivalTime: '12:45 PM'
    },
    {
        dayOfMonth: 20,
        month: 'May',
        year: 2024,
        flightNumber: 'DL567',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        departureTime: '01:00 PM',
        arrivalTime: '04:30 PM'
    },
    {
        dayOfMonth: 5,
        month: 'January',
        year: 2023,
        flightNumber: 'DL123',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        departureTime: '08:00 AM',
        arrivalTime: '11:30 AM'
    },
    {
        dayOfMonth: 15,
        month: 'February',
        year: 2024,
        flightNumber: 'AA456',
        departureCity: 'Los Angeles',
        arrivalCity: 'Houston',
        departureTime: '10:30 AM',
        arrivalTime: '01:45 PM'
    },
    {
        dayOfMonth: 25,
        month: 'March',
        year: 2025,
        flightNumber: 'UA789',
        departureCity: 'Houston',
        arrivalCity: 'Chicago',
        departureTime: '02:15 PM',
        arrivalTime: '04:45 PM'
    },
    {
        dayOfMonth: 10,
        month: 'April',
        year: 2023,
        flightNumber: 'WN234',
        departureCity: 'Chicago',
        arrivalCity: 'New York',
        departureTime: '09:30 AM',
        arrivalTime: '12:45 PM'
    },
    {
        dayOfMonth: 20,
        month: 'May',
        year: 2024,
        flightNumber: 'DL567',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        departureTime: '01:00 PM',
        arrivalTime: '04:30 PM'
    },
    // 30 more flight entries
    {
        dayOfMonth: 8,
        month: 'June',
        year: 2023,
        flightNumber: 'AA789',
        departureCity: 'Los Angeles',
        arrivalCity: 'Chicago',
        departureTime: '03:45 PM',
        arrivalTime: '06:15 PM'
    },
    {
        dayOfMonth: 18,
        month: 'July',
        year: 2024,
        flightNumber: 'UA234',
        departureCity: 'Chicago',
        arrivalCity: 'New York',
        departureTime: '11:00 AM',
        arrivalTime: '02:15 PM'
    },
    {
        dayOfMonth: 9,
        month: 'August',
        year: 2025,
        flightNumber: 'DL890',
        departureCity: 'New York',
        arrivalCity: 'Houston',
        departureTime: '05:30 AM',
        arrivalTime: '09:45 AM'
    },
    {
        dayOfMonth: 27,
        month: 'September',
        year: 2023,
        flightNumber: 'WN567',
        departureCity: 'Houston',
        arrivalCity: 'Los Angeles',
        departureTime: '08:30 AM',
        arrivalTime: '11:45 AM'
    },
    {
        dayOfMonth: 14,
        month: 'October',
        year: 2024,
        flightNumber: 'AA123',
        departureCity: 'Los Angeles',
        arrivalCity: 'New York',
        departureTime: '02:15 PM',
        arrivalTime: '05:30 PM'
    },
    {
        dayOfMonth: 3,
        month: 'November',
        year: 2025,
        flightNumber: 'DL456',
        departureCity: 'Chicago',
        arrivalCity: 'Houston',
        departureTime: '07:45 AM',
        arrivalTime: '11:00 AM'
    },
    {
        dayOfMonth: 19,
        month: 'December',
        year: 2023,
        flightNumber: 'UA678',
        departureCity: 'New York',
        arrivalCity: 'Los Angeles',
        departureTime: '10:00 AM',
        arrivalTime: '01:15 PM'
    },
];
var monthsToObject = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
};
// console.log(flightDepartures[0].departureCity); // Outputs "New York"
// console.log(flightDepartures[1].flightNumber);   // Outputs "UA456"

var dataEl = document.getElementById('flightsData');    

setInterval(function() {
    var date = new Date();  
    document.getElementById('todaydate').innerText =  date.toLocaleTimeString();
}, 1000);   

function addProduct() {
    var data = validate();
    console.log(data)
    if (data.flag)
        document.getElementById('msg').innerHTML = '<span style = "color:green">Product added</span>';
    else 
        document.getElementById('msg').innerHTML = '<span style = "color:red">Product not added</span>';
    
    flightDepartures.push({"id":data.pid, "pname":data.pname, "ptype":data.ptype, "price":data.price})
    console.log(flightDepartures) 
 
    var tableHeader = '<table><thead><tr> <th>Arrival City</th> \
    <th>Arrival Time</th> <th>Departure City</th> <th>departure Time</th> \
    <th>Flight Number</th> <th>day of Month</th> <th>Month</th>  <th>Year </th> </thead></table>';
    var tableBody='';
    for (let i = 0 ; i <flightDepartures.length;i++){
        tableBody = tableBody+'<tr><td> ' + flightDepartures[i].id+'</td><td> '+
                    flightDepartures[i].pname+ '</td><td> '+ flightDepartures[i].ptype + 
                    '</td><td> '+ flightDepartures[i].price;
    }
    dataEl.innerHTML = (tableHeader + tableBody + '</tbody><thead>')
}

function validate() {
    var departureCity = document.getElementById('ddlleavingcity').value; 
    var arrivalCity = document.getElementById('ddlreturningcity').value;    
    var flightClass = document.getElementById('ddlflightclass').value;  
    var startDay = document.getElementById('ddlday--from').value; 
    var startMonth = document.getElementById('ddlmonth--from').value;  
    var startYear = document.getElementById('ddlyear--from').value;
    var endDay = document.getElementById('ddlday--to').value;
    var endMonth = document.getElementById('ddlmonth--to').value;
    var endYear = document.getElementById('ddlyear--to').value;

    var flag = (departureCity && arrivalCity && flightClass && startDay && startMonth && startYear && endDay && endDay && endMonth && endYear)? true : false;
    return {departureCity:departureCity, arrivalCity:arrivalCity, flightClass:flightClass, startDay:startDay, startMonth:startMonth,
        startYear:startYear, endDay:endDay, endMonth:endMonth, endYear:endYear, flag:flag}
}

function showFlights() {
    var data = validate()
    if (data.flag)
        document.getElementById('msg').innerHTML = '<span style = "color:green">Product added</span>';
    else 
        document.getElementById('msg').innerHTML = '<span style = "color:red">Product not added</span>';
    var tableHeader = '<table><thead><tr> <th>Arrival City</th> \
    <th>Arrival Time</th> <th>Departure City</th> <th>departure Time</th> \
    <th>Flight Number</th> <th>Day</th> <th>Month</th>  <th>Year </th></thead><tbody>';
    var tableBody='';

    // console.log(monthsToObject[data.startMonth])
    var startDate = new Date(data.startYear, monthsToObject[data.startMonth] - 1, data.startDay);   
    var endDate = new Date(data.endYear, monthsToObject[data.endMonth] - 1, data.endDay);
    
    // console.log(startDate)
    // console.log(endDate)

    var flightDate = new Date(2021,2,2)

    for (let i = 0 ; i <flightDepartures.length;i++){
        var ele = '<tr><td> ' + flightDepartures[i].arrivalCity+'</td><td> '+
                    flightDepartures[i].arrivalTime+ '</td><td> '+ flightDepartures[i].departureCity + 
                    '</td><td> '+ flightDepartures[i].departureTime + '</td><td> '  + 
                    flightDepartures[i].flightNumber + '</td><td> '  + flightDepartures[i].dayOfMonth
                    + '</td><td> ' + flightDepartures[i].month
                    + '</td><td> '+ flightDepartures[i].year + '</td></tr>';
        
        flightDate = new Date(flightDepartures[i].year, monthsToObject[flightDepartures[i].month] -   1, flightDepartures[i].dayOfMonth);
        
        // console.log("flight date" + flightDate)
        // console.log(flightDate >= startDate)
        // console.log(flightDate <= endDate)
        if (flightDate >= startDate && flightDate <= endDate && 
            flightDepartures[i].arrivalCity == data.arrivalCity && 
            flightDepartures[i].departureCity == data.departureCity){
            tableBody = tableBody + ele;
        }
        console.log(ele)
    }

    dataEl.innerHTML = (tableHeader + tableBody + '</tbody></table>')
    console.log(tableBody)
}

