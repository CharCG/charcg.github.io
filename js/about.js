try {
    new Typed(".typed", {
        strings: [
            "Student.",
            "Developer.",
        ],
        typeSpeed: 75,
        backSpeed: 50,
        loop: true
    });
} catch(error) {
    console.log(error);
};