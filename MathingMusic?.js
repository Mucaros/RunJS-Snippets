//MUSIC THEORY CODE

let notes = ['a', 'a#', 'b', 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#']
let triads = [1, 3, 5]
let majorFormula = [2,2,1, 2,2,2,1]


function majorScaleBuilder (notes, majorFormula) {
  let allMajors = []
  
  for (let i = 0; i < notes.length; i++){
      let root = notes[i]
      let scale = [root]
      let index = i
      
      for (let step of majorFormula){
         index = (index + step) % notes.length
        scale.push(notes[index])
      } 
    allMajors[root] = scale
  }
return allMajors
}


majorscales = majorScaleBuilder(notes, majorFormula)


class triadCreator{
  constructor(scale){
    this.scale = scale
  }
  
  getTriads(){
    let triads = []
      
    for (let i = 0; i < this.scale.length - 1; i++){
      let root = this.scale[i]
      let third = this.scale[(i + 2) % 7]
      let fifth = this.scale[(i + 5) % 7]
      
      triads.push([root, third, fifth])
    }
    return triads
  }
  
    get7th(){
    let seventh = []
      
    for (let i = 0; i < this.scale.length - 1; i++){
      let root = this.scale[i]
      let third = this.scale[(i + 2) % 7]
      let fifth = this.scale[(i + 4) % 7]
      let seven = this.scale[(i + 6) % 7] 
      
      seventh.push([root, third, fifth, seven])
    }
    return seventh
  }
  
}


class ChordProgression{
  constructor(chords){
    this.chords = chords
  }

  classicProgression(){
    let progression = []
      progression.push(this.chords[0])
      progression.push(this.chords[4])
      progression.push(this.chords[5])
      progression.push(this.chords[3])

    return progression
  }
  
   chordNames(){
    let progression = this.classicProgression()
    let names = []
    for (let i = 0; i < progression.length; i++){
      let root = progression[i][0]
      names.push(`${root.toUpperCase()}maj7`) //not everything should be major (FIX LATER)
    }
    return names
  }
  
}


for (let key in majorscales) {
  const triads = new triadCreator(majorscales[key])
  const sevenths = triads.get7th()
  const progression = new ChordProgression(sevenths)
  const chordNames = new ChordProgression(sevenths)
 // console.log(`Key of ${key.toUpperCase()} in I, V, VI, IV:`)
  console.log(progression.classicProgression())
 // console.log('----------------')
  console.log(chordNames.chordNames())
}







