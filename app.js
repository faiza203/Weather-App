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
    console.log(currentDayByMonth);
    dateDiv.innerText = `${month[currentMonth]} ${currentDayByMonth} |${days[currentDay]}| `;
}
getCurrrentDate();