//what should i do?

const tasks = [
  'You should code',
  'You should play the guitar',
  'Have you worked out yet?',
  'Do a spin',
  'Cuddle the cat',
  'annoy your sisters',
  'play Rocket League'
]

const AncientBeings = [
  'Consulting the bottomless pit...',
  'Asking the void...',
  'Maybe my cat knows...',
  'O great eldrich being...'
]

function iShouldDoWhat (tasks, ask){
  let randomNumber = Math.floor(Math.random() * tasks.length);
  let randomNumber2 = Math.floor(Math.random() * ask.length)
  console.log(ask[randomNumber2])
  setTimeout( () => {return console.log(`response: ${tasks[randomNumber]}`)}, 2000)
}

// iShouldDoWhat(tasks, AncientBeings)





//kittys(cats)
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
  
  battleCry(){
    return `${this.name} unleashes their ultimate move ${this.attack}!`
  }
  
  punchingBag(){
    let health = 50
    return () => {
      health -= this.dangerLevel
      return `*punchingbag* OW! that hurt, now i only have ${health} health!`
    }
  }
  
  healthPotion(){
    this.health += 10
    return `${this.name} feels rejuvenated and its health is increased to ${this.health}`
  }
  
  attackOtherCat(targetcat){
    targetcat.health -= this.dangerLevel
    return `${this.name} attacked ${targetcat.name} with ${this.attack} and dealt ${this.dangerLevel} damage`
  }
}
 

let cat1 = new kitty(
  randomElement(catNames),
  catAge(),
  randomElement(catType),
  randomElement(catAttack),
  dangerLevel(),
  health()
)

let cat2 = new kitty(
  randomElement(catNames),
  catAge(),
  randomElement(catType),
  randomElement(catAttack),
  dangerLevel(),
  health()
)

const beatTheBag = cat1.punchingBag()
console.log(cat1.describe())
console.log(cat1.battleCry())
console.log(beatTheBag())
console.log(cat1.healthPotion())
console.log(cat1.attackOtherCat(cat2))


































