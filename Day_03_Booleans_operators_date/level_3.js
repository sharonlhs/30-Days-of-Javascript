/* Level 3
Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/
const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; //start from 0, so add 1 to get actual month number
const day = now.getDate();
const hour = now.getHours().toString().padStart(2, "0"); // convert to string and pad with a leading zero if necessary
const minute = now.getMinutes().toString().padStart(2, "0");

const formattedDateTime = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2,"0")} ${hour}:${minute}`;

console.log(formattedDateTime);