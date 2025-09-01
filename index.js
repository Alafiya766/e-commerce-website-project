document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.querySelector(".overlay")
    var open = document.querySelector(".menu")
    var close = document.getElementById("close")
    var side = document.querySelector(".side-navbar")
    open.addEventListener("click", function () {
        side.style.left = "0"
        overlay.style.display = "block"
        
    })
    close.addEventListener("click", function () {
        side.style.left = "-60%"
        overlay.style.display = "none"
    })
})

