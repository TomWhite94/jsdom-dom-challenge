
let plus = document.getElementById("plus")
let minus = document.getElementById("minus")
let pause = document.getElementById("pause")
let counter = document.getElementById("counter")
let seconds = 0
let submit = document.getElementById("submit")
let commentForm = document.getElementById("comment-form")
let list = document.getElementById("list")
let commentInput = document.getElementById("comment-input")
let likes = document.getElementsByClassName("likes")[0]
let heart = document.getElementById("heart")

let toggle = true
// counter.innerText = seconds
// debugger
document.addEventListener("DOMContentLoaded", function() {
    
 
let count = setInterval(increment, 1000);
    
    heart.addEventListener("click", function(e){
        e.preventDefault()
        newLi = document.createElement("li")
        newLi.innerHTML = `${seconds} has been liked`

        likes.appendChild(newLi)


    })
    

   pause.addEventListener("click", function() {
    if (pause.innerText == `pause`) {
        clearInterval(count)
    pause.innerText = `play`
    } else {
    pause.innerText = `pause`
    count = setInterval(increment, 1000)
    }
   })

    function increment() {
    
    seconds++ 
    counter.innerText = seconds
    }

    plus.addEventListener("click", function() {
        seconds = seconds + 1
        counter.innerText = seconds
    
    
    })

    minus.addEventListener("click", function(){

        seconds = seconds - 1
        counter.innerText = seconds

    })

    submit.addEventListener("click", function(e){
        e.preventDefault()
        comment = commentInput.value
        newLi = document.createElement("li")
        newLi.innerText = `${comment}`
        list.appendChild(newLi)
    })


});






