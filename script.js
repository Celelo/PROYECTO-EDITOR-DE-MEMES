
//inicio cambio de panel imagen y texto por boton 

const buttonImgMenu = document.getElementById('button-img-menu');
const buttonTextMenu = document.getElementById('button-text-menu');
const sectionImg = document.getElementById('panel-img');
const sectionText = document.getElementById('panel-text');
const inputXText = document.getElementById('input-x-text')
const inputXImg = document.getElementById('input-x-img')


const hideTextSection = () => {
    sectionText.classList.remove('hidden')
    sectionImg.classList.add('hidden')
    sectionText.classList.remove('hidden-panel')
}


const hideImgSection = () => {
    sectionImg.classList.remove('hidden')
    sectionText.classList.add('hidden')
    sectionImg.classList.remove('hidden-panel')
}


buttonImgMenu.addEventListener('click', () => hideImgSection());

buttonTextMenu.addEventListener('click', () => hideTextSection());


//paneles responsive
inputXImg.addEventListener('input', () => {
    sectionImg.classList.add('hidden-panel')
});

inputXText.addEventListener('input', () => {
    sectionText.classList.add('hidden-panel')
});
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


// inicio de filtros
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

//fin de filtros



// boton de resetear filtros img
const buttonResetFilters = document.getElementById('reset-filters')


buttonResetFilters.addEventListener('click', () => {
    imgMeme.style.filter = 'none'
})


// inicio de nombre input en  span del color fondo imagen
const inputColorBackgroud = document.getElementById('color-background-img')
const spanColor = document.getElementById('span-color')

const fondoMeme = () => {
    console.log(inputColorBackgroud.value)
    spanColor.innerHTML = `${inputColorBackgroud.value}`
}
//elejir color del fondo de la imagen
inputColorBackgroud.addEventListener('input', () => fondoMeme()); {
    inputColorBackgroud.oninput = () => {
        imgMeme.style.backgroundColor = `${inputColorBackgroud.value}`
    }
}
// fin de nombre span del color fondo imagen


// inicio de filtros para imagen meme 
const filtersMemeSelector = document.getElementById('modes-style-img')

const filtersImg = () => {
    imgMeme.style.backgroundBlendMode = `${filtersMemeSelector.value}`
}

filtersMemeSelector.addEventListener('change', () => filtersImg())

// fin de filtros para imagen meme

//FIN PANEL IMAGEN 

//INICIO PANEL TEXTO

// inicio desaparecer texto superior e inferior
const inputOffTopText = document.getElementById('off-top-text')
const inputOffBottomText = document.getElementById('off-bottom-text')

const hideTopText = () => {
    console.log(inputOffTopText.checked);
    if (inputOffTopText.checked) {
        containerTopText.classList.add('hidden')
        // containerTopText.style.backgroundColor = 'transparent'
        // containerTopText.style.position = 'absolute'
    } else {
        containerTopText.classList.remove('hidden')
    }
}

inputOffTopText.addEventListener('change', () => hideTopText())

const hideBottomText = () => {
    console.log(inputOffBottomText.checked);
    if (inputOffBottomText.checked) {
        containerBottomText.classList.add('hidden')
        // containerBottomText.style.backgroundColor = 'transparent'
        // containerBottomText.style.position = 'absolute'
    } else {
        containerBottomText.classList.remove('hidden')
    }
}

inputOffBottomText.addEventListener('change', () => hideBottomText())
// fin desaparecer texto superior e inferior




//tamaño de fuente 
const inputFontSize = document.getElementById('font-size')


inputFontSize.addEventListener('input', () => {
    topText.style.fontSize = `${inputFontSize.value}px`
    bottomText.style.fontSize = `${inputFontSize.value}px`
})


// inicio de descarga meme por boton
const meme = document.getElementById('container-meme')
const botonDowload = document.getElementById('dowload')

const downloadMeme = () => {
    domtoimage.toBlob(meme).then(function (blob) {
        window.saveAs(blob, "mi-meme.png");
    });
};

botonDowload.addEventListener('click', () => downloadMeme())
// fin de descarga meme por boton



// inicio de font family                                            **********************************************************
const inputTextColor = document.getElementById('text-color')
const fontSelector = document.getElementById('font-selector')

const changeFontFamily = () => {
    topText.style.fontFamily = `${fontSelector.value}`
    bottomText.style.fontFamily = `${fontSelector.value}`
}

fontSelector.addEventListener('change', () => changeFontFamily())
// fin de font family



// inicio de nombre input en span del color texto                
const spanColorText = document.getElementById('span-text-color')
const containerTopText = document.getElementById('container-top-text')
const containerBottomText = document.getElementById('container-bottom-text')
const topText = document.getElementById('top-text')
const bottomText = document.getElementById('bottom-text')


const inputColorText = () => {
    // console.log(inputTextColor.value)
    spanColorText.innerHTML = `${inputTextColor.value}`
}

inputTextColor.addEventListener('input', () => inputColorText()); {
    inputTextColor.oninput = () => {
        topText.style.color = `${inputTextColor.value}`
        bottomText.style.color = `${inputTextColor.value}`
    }
}
// fin color de nombre input en span del color texto 





// inicio de nombre input en span del color fondo en texto 
const inputColorBackgroudText = document.getElementById('color-background-text')
const inputBackgroundText = document.getElementById('span-background-text')


const inputColorBackgroundText = () => {
    console.log(inputColorBackgroudText.value)
    inputBackgroundText.innerHTML = `${inputColorBackgroudText.value}`
}
//elejir color de fondo del texto 
inputColorBackgroudText.addEventListener('input', () => inputColorBackgroundText()); {
    inputColorBackgroudText.oninput = () => {
        topText.style.background = `${inputColorBackgroudText.value}`
        bottomText.style.background = `${inputColorBackgroudText.value}`
    }

}
// fin de nombre input en span del color fondo en texto



// inicio de escribir texto top y bottom
const inputTextTop = document.getElementById('text-top')
const inputTextBottom = document.getElementById('text-bottom')
inputTextTop.oninput = () => {
    topText.innerHTML = `${inputTextTop.value}`
}

inputTextBottom.oninput = () => {
    bottomText.innerHTML = `${inputTextBottom.value}`
}

// fin de escribir texto top y bottom







//cheked fondo transparente /********///////////////////////////////////// */
const inputTransparentBackground = document.getElementById('transparent-background')

const transparentBackground = () => {
    console.log(inputTransparentBackground.checked);
    if (inputTransparentBackground.checked) {
        containerTopText.style.backgroundColor = 'transparent'
        containerBottomText.style.backgroundColor = 'transparent'
        containerTopText.style.position = 'absolute'
        containerBottomText.style.position = 'absolute'
      } else { 
        containerTopText.style.backgroundColor = `${inputColorBackgroudText.value}`
        containerBottomText.style.backgroundColor = `${inputColorBackgroudText.value}`
        containerTopText.style.position = 'static'
        containerBottomText.style.position = 'static'
      }
}

inputTransparentBackground.addEventListener('input', () => transparentBackground())

//$('top-text').style.position = 'absolute'
// $('bottom-text').style.position = 'absolute'
// } else {
//   $('top-text').style.position = 'static'
//   $('bottom-text').style.position = 'static'



// if (inputTransparentBackground.checked) {
//     topText.style.backgroundColor = 'transparent'
//     bottomText.style.backgroundColor = 'transparent'
//     containerTopText.style.position = 'absolute'
//     containerBottomText.style.position = 'absolute'

// } else {
//     topText.style.backgroundColor = `${inputColorBackgroudText.value}`
//     bottomText.style.backgroundColor = `${inputColorBackgroudText.value}`
    
// }

// contorno del texto 
const outlineNone = document.getElementById('text-outline-none')
const outlineClear = document.getElementById('text-outline-clear')
const outlineDark = document.getElementById('text-outline-dark')


outlineClear.addEventListener('click', () => {
    topText.classList.add('stroke-white')
    bottomText.classList.add('stroke-white')
    topText.classList.remove('stroke-black')
    bottomText.classList.remove('stroke-black')
})

outlineDark.addEventListener('click', () => {
    topText.classList.add('stroke-black')
    bottomText.classList.add('stroke-black')
    topText.classList.remove('stroke-white')
    bottomText.classList.remove('stroke-white')
})

outlineNone.addEventListener('click', () => {
    topText.classList.remove('stroke-black')
    bottomText.classList.remove('stroke-black')
    topText.classList.remove('stroke-white')
    bottomText.classList.remove('stroke-white')
})

//espaciado 
const inputSpacing = document.getElementById('spacing-text')

inputSpacing.addEventListener('input', () => {
    topText.style.padding = `${inputSpacing.value}px`
    bottomText.style.padding = `${inputSpacing.value}px`
})


//interlineado 
const leading = document.getElementById('select-leading')

leading.addEventListener('change', () => {
    containerTopText.style.lineHeight = `${leading.value}`
    containerBottomText.style.lineHeight = `${leading.value}`
})




//botones para mover texto 
const buttonLeft = document.getElementById('button-left')
const buttonCenter = document.getElementById('button-center')
const buttonRight = document.getElementById('button-right')

buttonLeft.addEventListener('click', () => {
    topText.style.textAlign = 'left'
    bottomText.style.textAlign = 'left'
})

buttonCenter.addEventListener('click', () => {
    topText.style.textAlign = 'center'
    bottomText.style.textAlign = 'center'
})

buttonRight.addEventListener('click', () => {
    topText.style.textAlign = 'right'
    bottomText.style.textAlign = 'right'
})


//FIN PANEL TEXTO

//FIN DE PANELES


