
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
}



botonBlack.addEventListener('click', () => modBlack())

// fin de modo oscuro/claro


const inputColorBackgroud = document.getElementById('colorbackgroundimg')

// INICIO FILTROS 
const inputGlow = document.getElementById('rangeglow')
const imputOpacity = document.getElementById('rangeopacity')
const inputContrast = document.getElementById('rangecontrast')
const inputBlur = document.getElementById('rangeblur')
const inputRangeGrayScale = document.getElementById('rangegrayscale')
const inputSepia = document.getElementById('rangesepia')
const inputHue = document.getElementById('rangehue')
const inputCrowded = document.getElementById('rangecrowded')
const inputNegative  = document.getElementById('rangenegative')

//FIN PANEL IMAGEN 

//INICIO PANEL TEXTO

//texto superior
const inputOffTopText = document.getElementById('offtoptext')


//texto inferior 
const inputOffBottomText = document.getElementById('offbottomtext')


//tamaño de fuente 
const inputFontSize = document.getElementById('fontsize')


//color texto
const inputTextColor = document.getElementById('textcolor')

//color fondo 
const inputColorBackgroudText = document.getElementById('colorbackgroundtext')


//cheked fondo transparente 
const inputTransparentBackground = document.getElementById('transparentbackground')


//espaciado
const inputSpacing = document.getElementById('spacingtext')

//FIN PANEL TEXTO

//FIN DE PANELES