let textArea = document.querySelector("#textArea")
let countWordBtn = document.querySelector("#countWordBtn")
let p_displayWords = document.querySelector("#displayWords")

countWordBtn.addEventListener("click", countWords)

function countWords(){
    let text = textArea.value 
    console.log(text)
    let words = text.trim().split(" ")
    console.log(words)
    p_displayWords.innerHTML = words.length
}