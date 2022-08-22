
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
    if (count <= 5) {
        let playerOne = document.getElementById(innerId);
        let playerOneText = playerOne.innerText;
        let playerUlList = document.getElementById("ol-list");
        let playerUlListLiList = document.createElement("p");
        playerUlListLiList.innerHTML = `<p><span> ${count}<span> ${playerOneText}</p>`
        playerUlList.appendChild(playerUlListLiList)

        playerAmount(count)
    }
    else {
        alert('You can choose only five players')
    }


}
function playerAmount(count){document.getElementById('player-doller').addEventListener('click', function () {

    let perplayerValue = document.getElementById("perplayer-value").value;
    let perplayerValueInt = parseInt(perplayerValue);
    let amount = document.getElementById('amount');
    let playerAmount=amount.innerText = perplayerValueInt * count;
    total(playerAmount)


})}

function total(playerAmount){ document.getElementById("total-cal").addEventListener("click",function(){
    let playerAmountInt=parseInt(playerAmount);
    let managerValue=document.getElementById("manager").value;
    let managerValueInt = parseInt(managerValue);
    let coachVakue=document.getElementById("coach").value;
    let coachVakueInt=parseInt(coachVakue);
    let all= playerAmountInt+managerValueInt+coachVakueInt;
    document.getElementById("total").innerText= all

})


}



