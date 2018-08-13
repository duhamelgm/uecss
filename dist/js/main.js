function headerButtonDisplay(){
    var buttonHeaderState = document.getElementById("navbar");
    if (buttonHeaderState.className === "menu-nav-normal"){
        buttonHeaderState.className += " menu-nav-responsive";

    } else {

        buttonHeaderState.className = "menu-nav-normal";
    }

}

