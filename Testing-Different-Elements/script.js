const button = document.getElementById('menuToggle')
const menu = document.getElementById('menu')
const closeButton = document.getElementById('closeButton')
const colorButton = document.getElementById('colorSwitch')
const rootElement = document.documentElement

button.addEventListener('click', function() {
    menu.classList.toggle('open')

})

closeButton.addEventListener('click', function(){
    menu.classList.toggle('open')
})

colorButton.addEventListener('click', function(){
   rootElement.classList.toggle('light-mode')
})

const counterDisplay = document.getElementById('counterDisplay')
const UpAndDown = document.getElementById('counter')

let count = 0

UpAndDown.addEventListener('click', function(e){
    if (count === 0){
        counterDisplay.textContent = 'ay ay ay, no lower than that!'
        count = 1
        }
    else{
         if (e.target.id === 'up'){
            count++
        } else if (e.target.id === 'down'){
            count--
        }
    counterDisplay.textContent = count
    } 
})

const firstParagraph = document.getElementById('firstParagraph')
const secondParagraph = document.getElementById('secondParagraph')
const thirdParagraph = document.getElementById('thirdParagraph')
const paragraphButton = document.getElementById('paragraphButton')
let counter = 0
let originalText = firstParagraph.textContent

const possibleParagraphs = [firstParagraph, secondParagraph, thirdParagraph]

paragraphButton.addEventListener('click', function(){

    counter = (counter + 1) % possibleParagraphs.length
    
    if (counter === 0){
        firstParagraph.textContent = originalText
    } else{
        firstParagraph.textContent = possibleParagraphs[counter].textContent
    }
  
})

const buttonForColor = document.getElementById('colorButton')

buttonForColor.addEventListener('click', function(){
    paragraphButton.classList.toggle('green')
})