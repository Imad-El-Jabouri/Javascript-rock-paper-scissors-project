/* NB  : `` <- you can do it with keyboard using (altGr + 7) */



let my_buttons = Array.from(document.getElementsByClassName("button"));
let image_1 = document.querySelector("#image_1");
let image_2 = document.querySelector("#image_2");



my_buttons.map(button => {
    button.addEventListener('click', (e) => {
        //console.log(e.target.innerText)
        /* Player Choice */
        let player_choice = button.innerHTML;
        image_1.src = `./img/${button.innerText}.png`;


        /* Computer Choice */
        const choices = ["rock", "paper", "scissors"];
        let random_computer_choice = Math.floor(Math.random() * 3)
        let computer_choice = choices[random_computer_choice];
        image_2.src = `./img/${computer_choice}.png`;
        //console.log(computer_choice);



        //Call Check_winner Function
        check_winner(player_choice, computer_choice);
        
    })
})



function check_winner(player_choice, computer_choice) {
    /* Player or Computer Winner Probabilies */
    let winner = document.querySelector("#result_h1");
    let counter_player = document.querySelector("#counter_player");
    let counter_computer = document.querySelector("#counter_computer");

    //Check for Tie
    if (computer_choice === player_choice) {
        winner.innerHTML = "Tie";
    }

    /* If (player/computer) choose */
    else if (player_choice === "rock") {
        if (computer_choice === "scissors") {
            winner.innerHTML = "Player Win";
            counter_player.innerHTML++;
        }
        if (computer_choice === "paper") {
            winner.innerHTML = "Computer Win";
            counter_computer.innerHTML++;
        }
    }
    else if (player_choice === "paper") {
        if (computer_choice === "rock") {
            winner.innerHTML = "Player Win";
            counter_player.innerHTML++;
        }
        if (computer_choice === "scissors") {
            winner.innerHTML = "Computer Win";
            counter_computer.innerHTML++;
        }
    }
    else if (player_choice === "scissors") {
        if (computer_choice === "rock") {
            winner.innerHTML = "Computer Win";
            counter_computer.innerHTML++;
        }
        if (computer_choice === "paper") {
            winner.innerHTML = "Player Win";
            counter_player.innerHTML++;
        }
    }
    else {
        winner.innerHTML;
    }

}