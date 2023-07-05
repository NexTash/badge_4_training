function datechanged() {
    let date = document.getElementById("datofbirth").value
    let display = document.getElementById("display")


    date = new Date(date);
    const month = date.getMonth() + 1; // Months are zero-based in JavaScript
    const day = date.getDate();

    if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
        display.innerHTML = "Aquarius";
    } else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
        display.innerHTML =  "Pisces";
    } else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        display.innerHTML =  "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        display.innerHTML =  "Taurus";
    } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
        display.innerHTML =  "Gemini";
    } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
        display.innerHTML =  "Cancer";
    } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
        display.innerHTML =  "Leo";
    } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
        display.innerHTML =  "Virgo";
    } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
        display.innerHTML =  "Libra";
    } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
        display.innerHTML =  "Scorpio";
    } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
        display.innerHTML =  "Sagittarius";
    } else {
        display.innerHTML =  "Capricorn";
    }


    display.innerHTML += "<br> Good By " +  display.innerHTML
}