let toggleTheme = document.getElementById('toggle-theme');
let theme = sessionStorage.getItem("mode") == null ? "" : sessionStorage.getItem("mode");
toggleTheme.onclick = function() {
    
    if(theme == "" || theme == "2") {
        sessionStorage.setItem("mode", "1"); // Dark
        theme = "1";
    } else {
        sessionStorage.setItem("mode", "2"); // White
        theme = "2";
    }

    if(theme == "1") {
        darkTheme();
    } else {
        whiteTheme();
    }
};

function darkTheme() {
    
    // body color
    document.body.style.backgroundColor = "black";
    document.querySelector("header").style.color = "white";
    let navArr = document.querySelectorAll("nav ul li a");
    for (let index = 0; index < navArr.length; index++) {
        navArr[index].style.color = "white";
    }
    document.querySelector("main").style.color = "white";

}

function whiteTheme() {
    // body color
    document.body.style.backgroundColor = "white";
    document.querySelector("header").style.color = "black";
    let navArr = document.querySelectorAll("nav ul li a");
    for (let index = 0; index < navArr.length; index++) {
        navArr[index].style.color = "black";
    }
    document.querySelector("main").style.color = "black";
}