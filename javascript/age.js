const ageSpan = document.querySelector(".age");

function age() {
    return(Date.now() - new Date("19 October 2006 00:09:00 GMT+7").getTime()) / (365 * 24 * 60 * 60 * 1000);
};

ageSpan.innerText = age();