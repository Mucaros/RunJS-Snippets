
const actingButton = document.getElementById('inputButton')
const input = document.getElementById('imageInput')
const preview = document.getElementById('preview')
const statArea = document.getElementById('statArea')

const musicStat = ['emo', 'punk', 'pop', 'rock', 'indie', 'house', 'blues', 'jazz']
const thingsToHate = ['slow traffic', 'taxes', 'narcissists', 'annoying people', 'stinky cheese']

actingButton.addEventListener('click', function(){
    input.click()
})

input.addEventListener('change', function (){
    const file = input.files[0]
    if (file){
        const imageURL = URL.createObjectURL(file)
        preview.src = imageURL
        preview.style.display = 'block'

        getStats(thingsToHate, musicStat)
    }
})


function getStats(thingsToHate, musicStat){
    let stats = {
        musicTaste: musicStat[Math.floor(Math.random() * musicStat.length)],
        age: Math.floor(Math.random() * 100),
        favouriteNumber: Math.floor(Math.random() * 100),
        hates: thingsToHate[Math.floor(Math.random() * thingsToHate.length)],
    }

    const finalText = `Mood Profile:
----------------------
🎧 Music Taste: ${stats.musicTaste}
🧓 Estimated Age: ${stats.age}
🔢 Favorite Number: ${stats.favouriteNumber}
🤨 Does not like: ${stats.hates}
`;

    typeText(finalText);
}

function typeText(text) {
    statArea.value = '';
    let index = 0;

    const typer = setInterval(() => {
        statArea.value += text.charAt(index);
        index++;

        if (index >= text.length) {
            clearInterval(typer);
        }
    }, 30); // Adjust speed here (in ms)
}