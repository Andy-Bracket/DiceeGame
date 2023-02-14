function checkRefresh() {
    if (!sessionStorage.getItem("rollDice")) {
      sessionStorage.setItem("rollDice", "extra")
   
    } else(
      getRandom()
    )
   
  }




window.onload = function getRandom(){
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    // document.getElementsByClassName('img1').innerHTML = "img src = images/dice"+randomNumber1+".png";
    // document.getElementsByClassName('img2').innerHTML += "img src = images/dice"+randomNumber2+".png";

    document.querySelector('.img1').setAttribute("src", "images/dice"+randomNumber1+".png")
    document.querySelector('.img2').setAttribute("src", "images/dice"+randomNumber2+".png")

    if (randomNumber1 > randomNumber2) {
        document.querySelector('h1').innerHTML = "🚩 Player 1 Wins!"
    } 
    
    else if (randomNumber1 === randomNumber2) {
        document.querySelector('h1').innerHTML = "It's a Draw!"
    } 
    
    else {
        document.querySelector('h1').innerHTML = "Player 2 Wins! 🚩"   
    };
}

document.querySelector("body").onload = checkRefresh();