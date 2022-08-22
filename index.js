
document.getElementById("button-one").addEventListener("click", function () {
  

    
myFunction("Player-one")
   
})
let count=0;
function myFunction(innerId) {
    count++
    let playerOne = document.getElementById(innerId);
    let playerOneText = playerOne.innerText;
    let playerUlList = document.getElementById("ol-list");
    let playerUlListLiList=document.createElement("p");
    playerUlListLiList.innerHTML=`<h1><span> ${count}<span> ${playerOneText}`
    playerUlList.appendChild(playerUlListLiList)
  }

