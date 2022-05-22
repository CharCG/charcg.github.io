const ageSpan = document.querySelector(".age");
const typedSpan = document.querySelector(".typed");

function age() {
    return(Date.now() - new Date("19 October 2006 00:09:00 GMT+7").getTime()) / (365 * 24 * 60 * 60 * 1000);
};

function typed() {
    try {
        new Typed(".typed", {
            strings: [
                "Charles",
                "CharCG"
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    } catch(error) {
        console.log(error);
    };
};

ageSpan.innerText = age();
typed();