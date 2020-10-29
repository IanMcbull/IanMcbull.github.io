const launchDate = new Date('11/4/2020 08:00:00');
console.log(launchDate)

let counter = setInterval(()=>{
 
    //Get todays date and time
    let today = new Date().getTime();
    //get the difference between the dates
    let difference = launchDate - today;
    //calculate the days hours minutes and seconds
    let days = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    //Display the results in the respective boxes
    document.querySelector('#days').innerHTML = `${days}d`;
    document.querySelector('#hours').innerHTML = `${hours}h`;
    document.querySelector('#min').innerHTML = `${minutes}m`;
    document.querySelector('#sec').innerHTML = `${seconds}s`;

    // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.querySelector("#project_section_Header").innerHTML = "EXPIRED";
  }
},1000)

document.querySelector('#year').innerHTML = new Date().getUTCFullYear();

