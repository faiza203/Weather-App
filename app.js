const dateDiv = document.getElementById("date");
const weatherCondition = document.getElementById("weathercon");

const tempStatus = "Clouds";
const currentDate = new Date();

const getCurrrentDate = () => {
    const currentDay = currentDate.getDay();
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sunday"];
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"]
    const currentMonth = currentDate.getMonth();
    const currentDayByMonth = currentDate.getDate();
    const hour = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const time = hour > 12 ? `${hour - 12}:${minutes} PM ` : `${hour}:${minutes} AM`;
    console.log(time);
    dateDiv.innerText = `
        ${ month[currentMonth] }
        ${ currentDayByMonth } | ${ days[currentDay] } | ${time}`;
}
getCurrrentDate();