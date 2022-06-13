export const drawPlayer = (ctx) => {
    const playerLeft = document.getElementById('playerLeft')
    const playerDown = document.getElementById('playerDown')
    const playerRight = document.getElementById('playerRight')
    const playerUp = document.getElementById('playerUp')

    return new Promise(() => {
        ctx.drawImage(playerDown, 0, 0)
    })
}