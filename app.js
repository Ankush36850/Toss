let headButton = document.querySelector(".head")
let tailButton = document.querySelector(".tail")
let user = document.querySelector(".userScore")
let Computer = document.querySelector(".computerScore")
let H_or_T = document.querySelector(".result")
let user_score = 0
let computer_Score = 0

headButton.addEventListener("click", toss)
tailButton.addEventListener("click", toss)


function toss(event){      
    let result = Math.round(Math.random())
    let choice = ["Head","Tail"]
    let random_choice = choice[result]
    let user_selection = event.target.innerText
    console.log(user_selection , random_choice)
    if(random_choice.toUpperCase() === user_selection.toUpperCase()){
        H_or_T.innerHTML = "Result : Win"
        user_score++      
        user.innerHTML = `User Score is : ${user_score}`
        Computer.innerHTML = `Computer Score is : ${computer_Score}`
    }
    else{
        H_or_T.innerHTML = "Result : Lose"
        computer_Score++
        user.innerHTML = `User Score is : ${user_score}`
        Computer.innerHTML = `Computer Score is : ${computer_Score}`
    }
}