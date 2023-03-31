let headButton = document.querySelector(".head")
let tailButton = document.querySelector(".tail")
let user = document.querySelector(".userScore")
let Computer = document.querySelector(".computerScore")
let H_or_T = document.querySelector(".result")
let user_score = []
let computer_Score = []

headButton.addEventListener("click", toss)
tailButton.addEventListener("click", toss)


function toss(){      
    let result = Math.round(Math.random())
    if(result == 1){
        H_or_T.innerHTML = "Result : Win"
        user_score.push(result)
        computer_Score.push(result - 1)       
        user.innerHTML = `User Score is : ${calculate(user_score)}`
        Computer.innerHTML = `Computer Score is : ${calculate(computer_Score)}`
    }
    else{
        H_or_T.innerHTML = "Result : Lose"
        user_score.push(result)
        computer_Score.push(result + 1)
        user.innerHTML = `User Score is : ${calculate(user_score)}`
        Computer.innerHTML = `Computer Score is : ${calculate(computer_Score)}`
    }
}

function calculate(data){
    let sum = 0
    for(let t of data){
        sum = sum + t
    }
    return sum
}



