const rgbCode = document.querySelector("#rgbCode")
const squares = document.querySelectorAll(".square")

function wrong(){
    alert("You clicked the wrong color!")
}

function correct(){
    alert("You clicked the correct color!")
}

function changeColor(){
    console.clear()
    console.log("Why cheat? :c");

    const r = Math.floor(Math.random()*256)
    const g = Math.floor(Math.random()*256)
    const b = Math.floor(Math.random()*256)

    const guess = [r, g, b]

    rgbCode.innerHTML = `RGB(${r}, ${g}, ${b})`
    //console.log(r, g, b);

    for (let i = 0; i < squares.length; i++) {
        const r = Math.floor(Math.random()*256)
        const g = Math.floor(Math.random()*256)
        const b = Math.floor(Math.random()*256)
        
        squares[i].style.backgroundColor = `rgb(${r}, ${g}, ${b})`
        squares[i].addEventListener("click", wrong)
    }

    const answer = Math.floor(Math.random()*6)
    console.log(`Answer: ${answer+1}`);

    squares[answer].style.backgroundColor = `rgb(${guess[0]}, ${guess[1]}, ${guess[2]})`
    squares[answer].removeEventListener('click', wrong)
    squares[answer].addEventListener("click", correct)
}

changeColor()