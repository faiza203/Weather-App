const dateDiv = document.getElementById("date");
const weatherCondition = document.getElementById("weathercon");

const tempStatus = "Clouds";

const getCurrrentDay = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sunday"]
    dateDiv.innerText = days[currentDay];
}

getCurrrentDay()