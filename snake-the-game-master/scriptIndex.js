function setLevel() {
   let level = null;
     console.log(level);
    if (document.getElementById("level1").checked) {
        level = 800;
    } else if (document.getElementById("level2").checked) {
        level = 650;
    } else if (document.getElementById("level3").checked) {
        level = 400;
    } else if (document.getElementById("level4").checked) {
        level = 250;
    } else if (document.getElementById("level5").checked) {
        level = 100;
    } else {
        level = 800;
    }

    console.log(level);
    window.open("./jogo.html?level="+level) ; 
     //?"+level ;
}
