function headerButtonDisplay(){
    var buttonHeaderState = document.getElementById("navbar");
    if (buttonHeaderState.className === "menu-nav-normal"){
        buttonHeaderState.className += " menu-nav-responsive";

        var normalMenuHeight = 257;
        var animatedMenuHeight = 53;
        document.getElementById("navbar").style.height = 53;

        var idMenu = setInterval(frameMenu, 17);

        function frameMenu(){
            if(normalMenuHeight <= animatedMenuHeight){
                console.log(normalMenuHeight);
                clearInterval(idMenu);
            } else {
                animatedMenuHeight += 10;
                console.log(animatedMenuHeight);
                document.getElementById("navbar").style.height = animatedMenuHeight + "px";
            }
        }

    } else {

        var normalMenuHeight = 53;
        var animatedMenuHeight = 257;
        document.getElementById("navbar").style.height = 257;

        var idMenu = setInterval(frameMenu, 17);

        function frameMenu(){
            if(normalMenuHeight >= animatedMenuHeight){
                console.log(normalMenuHeight);
                clearInterval(idMenu);
                buttonHeaderState.className = "menu-nav-normal";
            } else {
                animatedMenuHeight -= 10;
                console.log(animatedMenuHeight);
                document.getElementById("navbar").style.height = animatedMenuHeight + "px";
            }
        }
    }

}