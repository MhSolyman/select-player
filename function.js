
let count = 0;
function myFunction(innerId,disable) {
    count++
    if (count <= 5) {
        let buttondis=document.getElementById(disable);
        buttondis.disabled= true
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
function playerAmount(count) {
    document.getElementById('player-doller').addEventListener('click', function () {

        let perplayerValue = document.getElementById("perplayer-value").value;
        let perplayerValueInt = parseInt(perplayerValue);
        let amount = document.getElementById('amount');
        let playerAmount = amount.innerText = perplayerValueInt * count;
        total(playerAmount)


    })
}

function total(playerAmount) {
    document.getElementById("total-cal").addEventListener("click", function () {
        let playerAmountInt = parseInt(playerAmount);
        let managerValue = document.getElementById("manager").value;
        let managerValueInt = parseInt(managerValue);
        let coachVakue = document.getElementById("coach").value;
        let coachVakueInt = parseInt(coachVakue);
        let all = playerAmountInt + managerValueInt + coachVakueInt;
        document.getElementById("total").innerText = all

    })


}



