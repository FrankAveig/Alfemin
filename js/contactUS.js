function isMobile() {
  if (sessionStorage.desktop)
      return false;
  else if (localStorage.mobile)
      return true;
  var mobile2 = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile2)
      if (navigator.userAgent.toLowerCase().indexOf(mobile2[i].toLowerCase()) > 0) return true;
  return false;
}

const formulario2 = document.querySelector('#formulario2');
const buttonSubmit2 = document.querySelector('#submit2');
const urlDesktop2 = 'https://web.whatsapp.com/';
const urlMobile2 = 'whatsapp://';
const telefono2 = '593986547598';

formulario2.addEventListener('submit', (event) => {
  event.preventDefault()
  buttonSubmit2.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
  buttonSubmit2.disabled = true
  setTimeout(() => {
  let nombre2 = document.querySelector('#nombre2').value
  let apellidos2 = document.querySelector('#apellidos2').value
  let email2 = document.querySelector('#email2').value
  let servicio2 = document.querySelector('#servicio2').value
  let telefono12 = document.querySelector('#telefono2').value
  let comentarios2 = document.getElementById('comentarios2').value


  let mensaje2 = 'send?phone=' + telefono2 + '&text=*Consulta*%0A%0A*Nombres*%0A' +  nombre2 + '%0A%0A*Apellidos*%0A' + apellidos2 +'%0A%0A*Teléfono*%0A'+telefono12+'%0A%0A*Servicio*%0A'+servicio2+'%0A%0A*Descripción*%0A'+comentarios2 +  '%0A%0A*Correo electrónico*%0A' + email2 + ''
  if(isMobile()) {
    window.open(urlMobile2 + mensaje2, '_blank')
  }else{
    alert('a');
      window.open(urlDesktop2 + mensaje2, '_blank')
  }
  buttonSubmit2.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
  buttonSubmit2.disabled = false
}, 1000);
});