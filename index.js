function mkbdum() {
    function dice() {
        var mkb=Math.random();
        var num =Math.floor((mkb*6)+1);
         return (num);
        
    }
    var randomNumber1 = dice();
    if (randomNumber1===1) {
        document.querySelector(".img1").setAttribute("src","./images/dice1.png");   
    }
    else if (randomNumber1===2) {
        document.querySelector(".img1").setAttribute("src","./images/dice2.png");    
    }
    else if (randomNumber1===3) {
        document.querySelector(".img1").setAttribute("src","./images/dice3.png");    
    }
    else if (randomNumber1===4) {
        document.querySelector(".img1").setAttribute("src","./images/dice4.png");    
    }
    else if (randomNumber1===5) {
        document.querySelector(".img1").setAttribute("src","./images/dice5.png");    
    }
    else if (randomNumber1===6) {
        document.querySelector(".img1").setAttribute("src","./images/dice6.png");    
    }

    function dice() {
        var mkb=Math.random();
        var num =Math.floor((mkb*6)+1);
         return (num);
        
    }
    var randomNumber2 = dice();
    if (randomNumber2===1) {
        document.querySelector(".img2").setAttribute("src","./images/dice1.png");   
    }
    else if (randomNumber2===2) {
        document.querySelector(".img2").setAttribute("src","./images/dice2.png");    
    }
    else if (randomNumber2===3) {
        document.querySelector(".img2").setAttribute("src","./images/dice3.png");    
    }
    else if (randomNumber2===4) {
        document.querySelector(".img2").setAttribute("src","./images/dice4.png");    
    }
    else if (randomNumber2===5) {
        document.querySelector(".img2").setAttribute("src","./images/dice5.png");    
    }
    else if (randomNumber2===6) {
        document.querySelector(".img2").setAttribute("src","./images/dice6.png");    
    }
    
    if (randomNumber1>randomNumber2) {
        document.querySelector("h1").textContent="Player 1 win";
        
    }
    else if (randomNumber1===randomNumber2){
        document.querySelector("h1").textContent="draw!";
    }
    else if ( randomNumber2>randomNumber1){
        document.querySelector("h1").textContent="Player 2 win";
    }
    
}


document.querySelector("input").addEventListener("click",mkbdum);


