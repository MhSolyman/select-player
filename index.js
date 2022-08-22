
document.getElementById("button-one").addEventListener("click", function () {
    myFunction("Player-one")

});
document.getElementById("button-two").addEventListener("click", function () {
    myFunction("Player-two")

});
document.getElementById("button-three").addEventListener("click", function () {
    myFunction("Player-three")

});
document.getElementById("button-four").addEventListener("click", function () {
    myFunction("Player-four")

});
document.getElementById("button-five").addEventListener("click", function () {
    myFunction("Player-five")

});
document.getElementById("button-six").addEventListener("click", function () {
    myFunction("Player-six")

});



let count = 0;
function myFunction(innerId) {
    count++
    if(count <=5){ let playerOne = document.getElementById(innerId);
        let playerOneText = playerOne.innerText;
        let playerUlList = document.getElementById("ol-list");
        let playerUlListLiList = document.createElement("p");
        playerUlListLiList.innerHTML = `<h1><span> ${count}<span> ${playerOneText}`
        playerUlList.appendChild(playerUlListLiList)}
        else{
            alert('You can choose only five players')
        }
   
}

