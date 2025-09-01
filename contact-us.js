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

    var submitclass = document.querySelector(".forms")
    var submitid = document.getElementById("submit-button")
    submitid.addEventListener("click", function () {
        alert("Your Queries submitted successfully.Thank You for updating us.We can resolve it quickly.")
    })
})