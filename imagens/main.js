const $imgPrincipal = document.querySelector('.imagem-principal')

const $catOne = document.querySelector('.gato-um')
const $catTwo = document.querySelector('.gato-dois')
const $catThree = document.querySelector('.gato-tres')


function mudarImagemPrincipal(imagem) {
    $imgPrincipal.setAttribute('src', `./imagens/cat-${imagem}.jpg`)
    $imgPrincipal.setAttribute('alt', `Imagem gato ${imagem}`)

}


$catOne.addEventListener('click', () => {
    mudarImagemPrincipal('1')
})

$catTwo.addEventListener('click', () => {
    mudarImagemPrincipal('2')
})

$catThree.addEventListener('click', () => {
    mudarImagemPrincipal('3')
})