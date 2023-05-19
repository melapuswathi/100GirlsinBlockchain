// Get the div tag.
let clock = document.getElementById("clock");
// Get the body tag for later use to set suitable background.
let body = document.getElementsByTagName("body");
setInterval(()=>{
    // Creating a date object that represents current date and time.
    const time = new Date();
    // Getting hours,minutes and seconds for our digital clock.
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    let phase = "";
    // Making the clock format in such a way that if its 8 hours, 2 minutes and 30 seconds, it is represented as 08:02:30.Simply we are appending 0 if it is a single digit else leaving it as it is.
    if(hours < 10){
        hours = "0" + hours;
    }
    if(minutes< 10){
        minutes = "0"+minutes;
    }
    if(seconds <10){
        seconds = "0"+seconds;
    }

    // Logic to know if it is "AM" or "PM".
    if(hours < 12){
        phase = "AM";
    }
    else{
        phase = "PM";
    }
    
    // Setting Id to the body tag to display the suitable background.
    if(hours<12){
        body[0].id = "morning";
    }
    else if(hours <= 18){
        body[0].id = "noon";
    }
    else{
        body[0].id = "night";
    }
    // Setting the content(time) into our division tag.
    clock.innerHTML = `${hours}:${minutes}:${seconds} ${phase}`;
},1000);
