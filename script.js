
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

// inicio color fondo imagen
const inputColorBackgroud = document.getElementById('color-background-img')
const spanColor = document.getElementById('span-color')

const fondoMeme = () => {
    console.log(inputColorBackgroud.value)   
    spanColor.innerHTML = `${inputColorBackgroud.value}`
}

inputColorBackgroud.addEventListener('input', () => fondoMeme())
// fin color fondo imagen

// INICIO FILTROS 
const inputBrightness = document.getElementById('range-glow')
const inputOpacity = document.getElementById('range-opacity')
const inputContrast = document.getElementById('range-contrast')
const inputBlur = document.getElementById('range-blur')
const inputRangeGrayScale = document.getElementById('range-gray-scale')
const inputSepia = document.getElementById('range-sepia')
const inputHue = document.getElementById('range-hue')
const inputCrowded = document.getElementById('range-crowded')
const inputNegative = document.getElementById('range-negative')



const filters = () => {
    imgMeme.style.filter = (`brightness(${inputBrightness.value}) opacity(${inputOpacity.value}) blur(${inputBlur.value}px) contrast(${inputContrast.value}%) grayscale(${inputRangeGrayScale.value}%) hue-rotate(${inputHue.value}deg) sepia(${inputSepia.value}%) saturate(${inputCrowded.value}%) invert(${inputNegative.value})`);
}

inputBrightness.addEventListener('input', () => filters())
inputOpacity.addEventListener('input', () => filters())
inputContrast.addEventListener('input', () => filters())
inputBlur.addEventListener('input', () => filters())
inputRangeGrayScale.addEventListener('input', () => filters())
inputSepia.addEventListener('input', () => filters())
inputHue.addEventListener('input', () => filters())
inputCrowded.addEventListener('input', () => filters())
inputNegative.addEventListener('input', () => filters())


//FIN PANEL IMAGEN 

//INICIO PANEL TEXTO

//texto superior e inferior
const inputOffTopText = document.getElementById('off-top-text')
const inputOffBottomText = document.getElementById('off-bottom-text')
const textTop = document.getElementById('text-top')
const textBottom = document.getElementById('text-bottom')

const hideBotomText = () => {
    console.log(inputOffBottomText.Checked);
    if (inputOffBottomText.Checked) {
        textBottom.classList.add('hidden');
    } else {
        textBottom.classList.remove('hidden')
    }
};

//tamaño de fuente 
const inputFontSize = document.getElementById('font-size')


// inicio color texto y color en fondo del texto meme
const inputTextColor = document.getElementById('text-color')
const spanColorText = document.getElementById('span-text-color')
const backgroundTextTop = document.getElementById('container-top-text')
const backgroundTextBottom = document.getElementById('container-bottom-text')
let color;


const inputColorText = (e) => {
        console.log(inputTextColor.value)
        spanColorText.innerHTML = `${inputTextColor.value}`
    }

inputTextColor.addEventListener('input', () => inputColorText())

// fin color texto

// inicio color fondo 
const inputColorBackgroudText = document.getElementById('color-background-text')
const inputBackgroundText = document.getElementById('span-background-text')


const inputColorBackgroundText = () => {
    console.log(inputColorBackgroudText.value)
    inputBackgroundText.innerHTML = `${inputColorBackgroudText.value}`
}

inputColorBackgroudText.addEventListener('input', () => inputColorBackgroundText())
// fin color fondo 

//cheked fondo transparente 
const inputTransparentBackground = document.getElementById('transparent-background')


//espaciado
const inputSpacing = document.getElementById('spacing-text')

//FIN PANEL TEXTO

//FIN DE PANELES