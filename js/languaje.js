const bodySpanish = document.getElementById('body');
const bodyEnglish = document.getElementById('body2');
let flag= true


function languaje(){
    if (flag){
        spanish()
    }else{
        english()
    }
    
}

function english(){
    console.log('hola')
    if (bodyEnglish.classList.contains('hide')){
        bodyEnglish.classList.remove('hide');
        bodySpanish.classList.add('hide');
        flag=false;
        guardarEstadoStorage()
    }
}

function spanish(){
    if (bodySpanish.classList.contains('hide')){
        bodySpanish.classList.remove('hide');
        bodyEnglish.classList.add('hide');
        flag=true;
        guardarEstadoStorage()
    }
}


function guardarEstadoStorage(){
    const estadoGuardar = JSON.stringify(flag)
    localStorage.setItem('flag',estadoGuardar);
}

function obtenerEstadoStorage(){
    const estadoStorage =localStorage.getItem('flag');
    flag = estadoStorage == null ? flag : JSON.parse(estadoStorage)
}
obtenerEstadoStorage()
languaje()