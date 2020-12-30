const dateDiv = document.getElementById("date");
const weatherCondition = document.getElementById("weathercon");

const tempStatus = "Clouds";
const currentDate = new Date();

const getCurrrentDate = () => {
    const currentDay = currentDate.getDay();
    const days = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sunday"];
    const month = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"]
    const currentMonth = currentDate.getMonth();

    dateDiv.innerText = `${month[currentMonth]} |${days[currentDay]}| `;
}
getCurrrentDate();