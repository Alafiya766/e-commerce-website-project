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

    
    var productcontainer = document.getElementById("products");
    var search = document.getElementById("search-bar");
    var productlist = productcontainer.querySelectorAll("div");

    search.addEventListener("keyup", function (event) {
        var enteredvalue = event.target.value.toUpperCase();
        for (c = 0; c < productlist.length; c++) {
            var productname = productlist[c].querySelector("h4").textContent;
            if (productname.toUpperCase().indexOf(enteredvalue) < 0) {
                productlist[c].style.display = "none";
            } else {
                productlist[c].style.display = "block";
            }
        }
    });
});
