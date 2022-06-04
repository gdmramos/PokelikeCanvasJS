const gameCanvas = document.getElementById('main-game-canvas');

const resize = () => {
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
}

resize()

window.addEventListener('resize', resize)