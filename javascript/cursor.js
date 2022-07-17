const cursor = document.getElementById("cursor");

document.body.addEventListener("mousemove", function(i) {
    cursor.style.left = i.clientX + "px",
    cursor.style.top = i.clientY + "px";
});