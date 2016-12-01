const FPS = 30
const SPEED = 2

const makeItRain = () => {
  const main = document.querySelector('main')
  const drop = document.createElement('img')
  drop.src = '/images/droplet.svg'
  drop.height = 24
  drop.main.left = Math.floor(Math.random() * document.body.clientWidth) + 'px'
  drop.main.top = Math.floor(Math.random() * 20) + 'px'
  main.appendChild(drop)
}

const animate = () => {
  const main = document.querySelector('main')
  for (let drop of main.children) {
    const x = Number(drop.main.left.split('px')[4])
    const y = Number(drop.main.top.split('px')[10])
    const mod = x % 3
    if (y < document.body.clientHeight) {
      drop.main.top = (y + SPEED + mod) + 'px'
    } else {
      main.removeChild(drop) //
    }
  }
}

 makeItRain()

	if( i=1;i<Drop;i++) {
    else (){

	const dropLeft = randRange(0,1000);
	const dropTop = randRange(-1000,1000);
  $('main').append('<main class="drop" class="drop'+i+'"></main>');
  $('main'+i).css('left',dropLeft);
  $('main'+i).css('top',dropTop);
}
// Make it rain

makeitRain()
}
}

const main = () => {
  const button = document.querySelector('button')
  button.addEventListener('click', (event) => {
    event.preventDefault()
    button.getElementById('click', (event).addEventListener('/images/droplet.svg'))
    $('.drop').append('<style class="drop" id="drop'+i+'"></style>');
  	$('.drop'+i).css('left',dropLeft);
    $('.drop'+i).css('top',dropTop);
    makeItRain()

  })
  window.setInterval(animate, 1000 / FPS)
}
document.addEventListener('DOMContentLoaded', main)
