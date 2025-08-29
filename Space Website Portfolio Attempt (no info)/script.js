const lightColors = ['#EFF7F6', '#B2F7EF', '#7BDFF2' ]
const darkColors = ['#E55812', '#0E4749', '#002626' ]

const animation = ['fall-left', 'fall-right', 'fall-both']

let lastX = 0
let lastY = 0

document.addEventListener('mousemove', (event) => {

    const distance = Math.sqrt(
  Math.pow(event.clientX - lastX, 2) + Math.pow(event.clientY - lastY, 2)
);


const randomLightColor = lightColors[Math.floor(Math.random() * lightColors.length)]
const randomDarkColor = darkColors[Math.floor(Math.random() * darkColors.length)]


if (distance > 100){
   
const chosenAnimation = animation[Math.floor(Math.random() * animation.length)]

const dot = document.createElement('i')
dot.classList.add('fa-solid', 'fa-star', 'dot')
if (document.documentElement.classList.contains('inverted'))
    {dot.style.color = randomDarkColor}
else {dot.style.color = randomLightColor}

dot.style.animationName = chosenAnimation


    dot.style.left = `${event.clientX}px`;
    dot.style.top = `${event.clientY}px`;


document.body.appendChild(dot)


    setTimeout(() => {dot.remove()}, 1000)

lastX = event.clientX
lastY = event.clientY
}
})


window.addEventListener('scroll', function (){
    const offset = this.window.scrollY * 0.5
    this.document.body.style.backgroundPosition = `0px ${offset}px`
})

const spButton = document.getElementById('spButton')
const savedColor = localStorage.getItem('backgroundColor')
let inverted = savedColor === 'true'

if (inverted){
  document.documentElement.classList.add('inverted')
}

if (spButton){
    spButton.addEventListener('click', () => {
      inverted = !inverted

      document.documentElement.classList.toggle('inverted', inverted)
   
      localStorage.setItem('backgroundColor', inverted)
})
}

const navItems = document.querySelectorAll('.list-holder li')

navItems.forEach(item => {
  item.addEventListener('mousemove', e => {
    const pullStrength = 2
    const rect = item.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * pullStrength;
    const y = (e.clientY - rect.top - rect.height / 2) * pullStrength;

    item.style.transform = `translate(${x * 0.6}px, ${y * 0.6}px)`;
    item.style.transition = `transform 0.3s ease-out`;
  });

  item.addEventListener("mouseleave", () => {
    item.style.transform = `translate(0, 0)`;
  });
});

console.log(navItems)

const earth = document.getElementById('earthImg')

if (earth){
  earth.addEventListener('click', function(){
    earth.classList.toggle('big-planet')
  })
}


const reveals = document.querySelectorAll('.reveal'); // i do not understand this fully//

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // optional
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(elem => observer.observe(elem));

const title = document.querySelector('.title')

title.addEventListener('click', function(){
   window.location.href = '../home/index.html';
})

