
//inicio cambio de panel imagen y texto por boton 

// boton img y texto
const buttonImgMenu = document.getElementById('button-img-menu');

const buttonTextMenu = document.getElementById('button-text-menu');

//sections img y text
const sectionImg = document.getElementById('panel-img');

const sectionText = document.getElementById('panel-text');


//event handler de img y text 
const hideTextSection = () => {
    sectionText.classList.remove('hidden')
    sectionImg.classList.add('hidden')
}


const hideImgSection = () => {
    sectionImg.classList.remove('hidden')
    sectionText.classList.add('hidden')
}


// event listener de img y text
buttonImgMenu.addEventListener('click', () => hideImgSection())

buttonTextMenu.addEventListener('click', () => hideTextSection())

//fin cambio de panel imagen y texto por boton 


//INICIO DE PANELES

//INICIO PANEL IMAGEN 

//inicio de imagen meme e input URL
const inputUrl = document.getElementById('meme-url')
const imgMeme = document.getElementById('meme-img')
console.log(imgMeme)
console.log(inputUrl)

const changeBackground = () => {
    imgMeme.style.backgroundImage = `url('${inputUrl.value}')`
}
inputUrl.addEventListener('input', () => changeBackground())

// fin de imagen meme e input URL




// inicio de modo oscuro/claro

//header
const modHeader = document.getElementById('header-mods-colors')
const modBody = document.getElementById('body-mods-colors')
const botonWhite = document.getElementById('button-white')
const botonBlack = document.getElementById('button-black')

const modBlack = () => {
    modHeader.classList.remove('header-white')
    modHeader.classList.add('header-black')
    modBody.classList.remove('body-white')
    modBody.classList.add('body-black')
    sectionImg.classList.remove('aside-white')
    sectionText.classList.remove('aside-white')
    sectionImg.classList.add('aside-black')
    sectionText.classList.add('aside-black')
    botonBlack.classList.add('hide-button')
    botonWhite.classList.remove('hide-button')
}

const modWhite = () => {
    modHeader.classList.add('header-white')
    modHeader.classList.remove('header-black')
    modBody.classList.add('body-white')
    modBody.classList.remove('body-black')
    sectionImg.classList.add('aside-white')
    sectionText.classList.add('aside-white')
    sectionImg.classList.remove('aside-black')
    sectionText.classList.remove('aside-black')
    botonBlack.classList.remove('hide-button')
    botonWhite.classList.add('hide-button')

}

botonBlack.addEventListener('click', () => modBlack())

botonWhite.addEventListener('click', () => modWhite())

// fin de modo oscuro/claro


const inputColorBackgroud = document.getElementById('color-background-img')

// INICIO FILTROS 
const inputGlow = document.getElementById('range-glow')
const inputOpacity = document.getElementById('range-opacity')
const inputContrast = document.getElementById('range-contrast')
const inputBlur = document.getElementById('range-blur')
const inputRangeGrayScale = document.getElementById('range-gray-scale')
const inputSepia = document.getElementById('range-sepia')
const inputHue = document.getElementById('range-hue')
const inputCrowded = document.getElementById('range-crowded')
const inputNegative = document.getElementById('range-negative')


const filtersInputs = (e) => {
    // console.log('e.target.value')
    imgMeme.style.filter = `brightness${inputGlow.value} opacity(1) blur(0px) contrast(100%) grayscale(0%) hue-rotate(0deg) sepia(0%) saturate(100%) invert(0`
}

console.log(inputGlow.value)

// const filters = (e) => {
//     console.log(e.target.value)
// }

inputGlow.addEventListener('input', () => filtersInputs())

//FIN PANEL IMAGEN 

//INICIO PANEL TEXTO

//texto superior
const inputOffTopText = document.getElementById('off-top-text')


//texto inferior 
const inputOffBottomText = document.getElementById('off-bottom-text')


//tamaño de fuente 
const inputFontSize = document.getElementById('font-size')


//color texto
const inputTextColor = document.getElementById('text-color')

//color fondo 
const inputColorBackgroudText = document.getElementById('color-background-text')


//cheked fondo transparente 
const inputTransparentBackground = document.getElementById('transparent-background')


//espaciado
const inputSpacing = document.getElementById('spacing-text')

//FIN PANEL TEXTO

//FIN DE PANELES