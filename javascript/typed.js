const typedSpan = document.querySelector(".typed");

function typed() {
    try {
        new Typed(".typed", {
            strings: [
                "I'm Charles 🧙‍♂️",
                "you can call me Char 👋"
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
    } catch(error) {
        console.log(error);
    };
};

typed();