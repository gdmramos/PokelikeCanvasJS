export const drawBackground = (ctx) => {
    // Faz sentido carregar dessa forma, mas o bundler coloca uma hash nas imagens, impedindo que o script consiga encontrar... caso dê um jeito no bundler é necessário adicionar um método onload na imagem para aguardar o carregamento.
    // const backgroundImage = new Image()
    // backgroundImage.src = '../../assets/images/PelletTown.png'

    const altBg = document.getElementById('background')

    altBg.onload = () => {
        ctx.drawImage(altBg, -400, -400)
    }

    return new Promise(() => {
    })
}