function randomElement (array){
  return array[Math.floor(Math.random() * array.length)];
}

const catNames = ['Baghera', 'sir floof', 'Baltasar', 'Beanie', 'puss in boots', 'mike']
const catAge = function(){return Math.floor(Math.random() * (15 - 5 + 1)) + 5}
const catType = ['void', 'orange', 'angel', 'fire', 'gray', 'not a cat', 'goose']
const catAttack = ['loaf', 'the bite of 87', 'rock riffs', 'karate chop', 'doomscrolling']
const dangerLevel = function(){return Math.floor(Math.random() * (15 - 5 + 1)) + 5;}
const health = function(){return Math.floor(Math.random() * (50 - 5 + 1)) + 5}

class kitty {
  constructor(name, age, type, attack, dangerLevel, health){
    this.name = name
    this.age = age
    this.type = type
    this.attack = attack
    this.dangerLevel = dangerLevel
    this.health = health
  }
  
  catCreator(){
    return {name: this.name,
            age: this.age,
            type: this.type,
            attack: this.attack,
            dangerLevel: this.dangerLevel,
            health: this.health
           }
  }
  
  describe(){
    return `You shall call me ${this.name}, I am ${this.age} years old, my type is ${this.type} and my special attack is ${this.attack}: dangerlevel ${this.dangerLevel}: health ${this.health}`
  }
  
  battlecry(targetcat){
    return `${this.name} unleashes their ultimate move ${this.attack} at nothing to assert dominance!`
  }
  
  punchingbag(){
    let health = 50
    return () => {
      if (health > this.dangerLevel){
      health -= this.dangerLevel
      return `*punchingbag* OW! that hurt, now i only have ${health} health!`
    } else {
      return "you destroyed the punching bag"
    }
    }
  }
  
  healthpotion(){
    if (this.health < 50){
      this.health += 10
      if (this.health >= 50){
        this.health = 50
        return 'My health is full'
      }
    return `${this.name} feels rejuvenated and its health is increased to ${this.health}`
  } else {
    return 'My health is full'
  }
  }
  
  attackothercat(targetcat){
    if (targetcat.health > 0){
      targetcat.health -= this.dangerLevel
      if (targetcat.health <= 0){
        targetcat.health = 0
        return `You defeated ${targetcat.name}, congratulations`
      }
    return `${this.name} attacked ${targetcat.name} with ${this.attack} and dealt ${this.dangerLevel} damage leaving da boss with ${targetcat.health} hitpoints`
    }
    else { 
      return `you have already defeated ${this.targetcat}!`
    }
  }

  enemystats(targetcat){
    return `Enemy Stats:
  - Name: ${targetcat.name}
  - Age: ${targetcat.age}
  - Type: ${targetcat.type}
  - Attack: ${targetcat.attack}
  - Danger Level: ${targetcat.dangerLevel}
  - Health: ${targetcat.health}`
}
}

const bossCat = {
  name: 'da boss',
  age: 1000,
  type: 'all for one',
  attack: 'money spread',
  dangerLevel: 15,
  health: 50
}

let newCat;
let punchFn = null
const button = document.getElementById('catButton')
const textBox = document.getElementById('catBox')
const selector = document.getElementById('actionSelector')

function makeKitty(){
   
   button.addEventListener('click', () => {
        newCat = new kitty(
    randomElement(catNames),
    catAge(),
    randomElement(catType),
    randomElement(catAttack),
    dangerLevel(),
    health()
)
bossCat.health = 50
punchFn = null
textBox.value = newCat.describe()})
}


function doSomething(){
    selector.addEventListener('keydown', (event) => {
       if (!newCat){textBox.value = "create a cat by pushing the button"
       return
    }
      if (event.key === 'Enter') {
      event.preventDefault()
      const chosenAction = selector.value.trim().toLowerCase()

    let result;

        if (chosenAction === 'punchingbag') {
          if (!punchFn) punchFn = newCat.punchingbag()
          result = punchFn()
        } else if (chosenAction === 'attackothercat'){
          result = newCat[chosenAction](bossCat)
        } else if (chosenAction === 'enemystats'){
          result = newCat[chosenAction](bossCat)
        }
          else if (typeof newCat[chosenAction] === 'function') {
          result = newCat[chosenAction]()
        } else {
          result = "That action doesn't exist!"
        }

        textBox.value = result
        selector.value = ""
    }})
}

makeKitty()
doSomething()