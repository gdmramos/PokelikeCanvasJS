import '../assets/styles/reset.css'
import '../assets/styles/style.css'

import MainGame from "./game";

const gameCanvas = document.getElementById('main-game-canvas');

const ctx = gameCanvas.getContext('2d')

const Game = new MainGame();

const resize = () => {
    gameCanvas.width = window.innerWidth
    gameCanvas.height = window.innerHeight
}

resize()

window.addEventListener('resize', resize)
Game.draw(ctx)

