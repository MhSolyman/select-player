document.getElementById("button-one").addEventListener("click", function () {
    let playerOne = document.getElementById("Player-one");
    let playerOneText = playerOne.innerText;
    let playerUlList = document.getElementById("ol-list");
    let playerUlListLiList=document.createElement("li");
    playerUlListLiList.innerText=playerOneText;
    playerUlList.appendChild(playerUlListLiList)
    console.log(playerUlListLiList)

   
})


