// // global variables
let selectedPlayers = document.getElementById('selectedPlayers')

// // budget section starts
// let dolSign = document.querySelectorAll('.dolSign');
// dolSign.forEach(function(dol) {
//     dol.style.display = 'none';
// })

// let calculateBtn = document.getElementById('calculateBtn');
// calculateBtn.addEventListener('click', function() {
//     let perPlayerPrice = document.getElementById('playerPriceInput').value;
//     let isNaN = nanCheck(perPlayerPrice)
//     if (isNaN) {
//         return
//     }
//     let totalPlayersExpense = perPlayerPrice * selectedPlayers.childElementCount
//     dolSign[0].style.display = 'block'
//     playersExpense(totalPlayersExpense)
// })

// // players expense
// function playersExpense(playerPrice) {
//     let expense = document.getElementById('expense')
//     expense.innerText = playerPrice
// }

// // total expense
// function totalExpense(totalPrice) {
//     let total = document.getElementById('total')
//     total.innerText = totalPrice
// }

// // NaN checking
// function nanCheck(number) {
//     if (isNaN(number)) {
//         alert("Please calculate valid numbers")
//         return true
//     }
// }

// let calculateTotal = document.getElementById("calculateTotal")
// calculateTotal.addEventListener("click", function() {
//     let playersExpense = parseInt(document.getElementById('expense').innerText)
//     let managerPriceString = document.getElementById("managerPrice").value
//     let managerPrice = parseInt(managerPriceString)
//     let couchPriceString = document.getElementById("couchPrice").value
//     let couchPrice = parseInt(couchPriceString)
//     let totalPrice = playersExpense + managerPrice + couchPrice
//     let isNaN = nanCheck(totalPrice)
//     let isNaN2 = nanCheck(managerPriceString)
//     let isNaN3 = nanCheck(couchPriceString)
//     if (isNaN || isNaN2 || isNaN3) {
//         return
//     }
//     dolSign[1].style.display = 'block'
//     totalExpense(totalPrice)
//     console.log(isNaN);
// })
// // budget section ends


// // selectedPlayers section starts
// let selectBtn = document.querySelectorAll(".selectBtn")
// selectBtn.forEach(function(item) {
//     item.addEventListener("click", function(e) {
//         let playerName = e.target.parentNode.children[0].innerText
//         if (selectedPlayers.childElementCount == 5) {
//             alert('Only 5 players are allowed')
//             return false
//         }
//         let li = document.createElement('li')
//         li.innerHTML = `<span>${playerName}</span> <button class="cancel">X</button></li>`
//         selectedPlayers.appendChild(li)
//         e.target.setAttribute("disabled", "true")
//         e.target.innerText = "selected"

//         // players cancel button
//         let cancelBtn = document.querySelectorAll(".cancel")
//         cancelBtn.forEach(function(cancel) {
//             cancel.addEventListener("click", function(e) {
//                 let liText = e.target.parentNode.children[0].innerText
//                 e.target.parentNode.remove()
//                 selectBtn.forEach(function(select) {
//                     if (liText == select.parentNode.children[0].innerText) {
//                         select.removeAttribute("disabled")
//                         select.innerText = "select"
//                     }
//                 })
//             })

//         })
//     })
// })

// // prviously selected player cancel button
// let initialCancelBtn = document.getElementById("close")
// initialCancelBtn.addEventListener("click", function(e) {
//     let liText = e.target.parentNode.children[0].innerText
//     e.target.parentNode.remove()
//     selectBtn.forEach(function(select) {
//         if (liText == select.parentNode.children[0].innerText) {
//             select.removeAttribute("disabled")
//             select.innerText = "select"
//         }
//     })
// })