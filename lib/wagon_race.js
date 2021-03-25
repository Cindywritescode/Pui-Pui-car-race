// TODO: write your code here

// remove the active class add it to next td
// 1. select td has active class and remove it
// 2. select the next td of the item , add the active class on

// react once click - creat keyup event on the document. 
// 1. check if it's the correect key
// 2. run the function in part I

// two player playing at the same time

const PLAYER_ONE_KEY = "j"
const PLAYER_TWO_KEY = "f"
const ACTIVE_CLASS = "active"

document.addEventListener("keyup", (event) => {
    // console.log(event);
    if (event.key === "j") {
        const player1 = document.querySelector('tr#player1-race .active')

        if (player1.nextElementSibling) {
            player1.classList.remove("active")
            player1.nextElementSibling.classList.add("active")
        } else {
            alert("Police wins! 🏆");
            window.location.reload();
        }

    }

    if (event.key === "f") {
        const player2 = document.querySelector('tr#player2-race .active')

        if (player2.nextElementSibling) {
            player2.classList.remove("active")
            player2.nextElementSibling.classList.add("active")
        } else {
            alert("Pui Pui wins! 🏆");
            window.location.reload();
        }
    }
});

