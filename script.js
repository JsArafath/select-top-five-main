console.log("hello")




// const selectButton = document.getElementsByClassName('btn');

// for (const button of selectButton) {
//     button.addEventListener('click', function (event) {
//         const playerName = event.target.parentNode.firstElementChild.innerText;
//         const playerDisable = event.target;
//         // create condition
//         if (document.getElementsByTagName('li').length == '5') {
//             alert(`sorry you can't select more than 5 players`);
//             return;
//         }
//         if (document.getElementsByTagName('li').length <= 5) {
//             this.disabled = true;
//             playerDisable.style.backgroundColor = 'gray';
//         } else {
//             playerDisable.style.backgroundColor = '#015196';
//         }
//         // create li tag
//         const unorderList = document.getElementById('unorder-list');
//         const unorderListInner = document.createElement('li');
//         // create class name
//         unorderListInner.classList.add('font-bold', 'text-liColor', 'py-2');
//         unorderList.appendChild(unorderListInner)
//         // create span tag inner li tag
//         const spanLi = document.createElement('span');
//         spanLi.classList.add('pl-3', 'font-normal', 'text-white'); // add class name in span tag
//         spanLi.innerText = playerName;
//         unorderListInner.appendChild(spanLi);
//     })
// }
// // common function to get input value
// function getInputValueById(elementId) {
//     const input = document.getElementById(elementId);
//     const inputString = input.value;
//     const inputNumber = parseInt(inputString);
//     return inputNumber;
// }

// document.getElementById('Calculate').addEventListener('click', function () {
//     const input = getInputValueById('input1');
//     const liLength = document.getElementsByTagName('li').length;
//     const playerCost = liLength * input;
//     const playerCostTag = document.getElementById('playerCost');
//     if (isNaN(input)) {
//         alert('Please enter a valid number!');
//         return playerCostTag.innerText = '0';
//     } else {
//         playerCostTag.innerText = playerCost;
//     }
// })

// document.getElementById('total').addEventListener('click', function () {
//     const playerCostTag = document.getElementById('playerCost');
//     const playerCostTagString = playerCostTag.innerText;
//     const playerCostTagNumber = parseInt(playerCostTagString);
//     const manager = getInputValueById('input2');
//     const cotch = getInputValueById('input3');
//     const input = document.getElementById('input1');
//     const inputValue = input.value;
//     if (inputValue == '') {
//         return alert('first enter per player cost')
//     }
//     const totalCost = cotch + manager + playerCostTagNumber;
//     const totalCostTag = document.getElementById('totalCost');
//     if (isNaN(manager && cotch)) {
//         alert('please enter a valid number')
//         return totalCostTag.innerText = '0';
//     } else {
//         totalCostTag.innerText = totalCost;
//     }
// })









// function getElementById(getElementId, isTrue) {
//     let elementId = document.getElementById(getElementId);
//     let elementContent;

//     if (isTrue === true) {
//         elementContent = parseInt(elementId.value);
//     } else {
//         elementContent == parseInt(elementId.innerText)
//     }
//     elementId = elementContent;
//     return elementContent;
// }



// function playerAdded() {

//     let playerAddList = document.getElementById("player-table");
//     playerAddList.innerHTML = "";

//     for (i = 0; i < playerDetails.length; i++) {
//         let addPlayerName = playerDetails[i].playerName;
//         let addSelectBtn = playerDetails[i].selectBtn;


//         if (i != 5) {
//             let playerList = document.createElement("tr");
//             playerList.innerHTML = `
//             <td>${i + 1}</td>
//             <td>${addPlayerName}</td>
//         `;
//             playerAddList.appendChild(playerList);

//             addSelectBtn.setAttribute("disabled", true)


//             document.getElementById("per-player-clculate-btn").addEventListener("click", function() {
//                 // let perPlayer = document.getElementById("per-player")
//                 // let perPlayerPrice = parseInt(perPlayer.value);
//                 let perPlayer = getElementById("per-player", true);
//                 let clculatePerPlayerPrice = perPlayer * i;
//                 //let clculatePerPlayerPrice = perPlayerPrice *  i;

//                 // display player expenses
//                 let playerExpenses = document.getElementById("player-expenses");
//                 let playerExpensesPrice = parseInt(playerExpenses.innerText);
//                 playerExpenses.innerText = clculatePerPlayerPrice.toFixed(2);

//                 // Calculate Total
//                 document.getElementById("calculate-total").addEventListener("click", function() {

//                     // Manager
//                     let manager = getElementById("manager", true)
//                     // let manager = document.getElementById("manager");
//                     // let managerPrice = parseInt(manager.value);

//                     // Coach
//                     coach = getElementById("manager", true)
//                     // let coach = document.getElementById("coach");
//                     // let coachPrice = parseInt(coach.value);

//                     let managerCoachTotal = manager + coach


//                     // Total expenses
//                     let totalExpenses = playerExpensesPrice + managerCoachTotal;

//                     // display total price
//                     let total = document.getElementById("total");
//                     total.innerText = totalExpenses.toFixed(2)
//                 })

//             })

//         } else {
//             alert("Your Alreay Added 5 Players");
//             return
//         }
//     }
// }


// let playerDetails = [];

// function selectPlayers(element) {
//     let playerName = element.parentNode.children[0].innerText;
//     let selectBtn = element.parentNode.children[2];
//     //console.log(selectBtn)
//     let playerObj = {
//         playerName: playerName,
//         selectBtn: selectBtn
//     }

//     playerDetails.push(playerObj);

//     let setPlayerList = playerAdded(playerDetails);

// }