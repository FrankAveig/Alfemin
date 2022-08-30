function isMobile() {
  if (sessionStorage.desktop)
      return false;
  else if (localStorage.mobile)
      return true;
  var mobile = ['iphone', 'ipad', 'android', 'blackberry', 'nokia', 'opera mini', 'windows mobile', 'windows phone', 'iemobile'];
  for (var i in mobile)
      if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0) return true;
  return false;
}

const formulario = document.querySelector('#formulario');
const buttonSubmit = document.querySelector('#submit');
const urlDesktop = 'https://web.whatsapp.com/';
const urlMobile = 'whatsapp://';
const telefono = '593986547598';

formulario.addEventListener('submit', (event) => {
event.preventDefault()
buttonSubmit.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i>'
buttonSubmit.disabled = true
setTimeout(() => {
  let nombre = document.querySelector('#nombre').value
  let apellidos = document.querySelector('#apellidos').value
  let email = document.querySelector('#email').value
  let servicio = document.querySelector('#servicio').value
  let telefono1 = document.querySelector('#telefono').value
  let comentarios = document.getElementById('comentarios').value
    


  let mensaje = 'send?phone=' + telefono + '&text=*Consulta*%0A%0A*Nombres*%0A' +  nombre + '%0A%0A*Apellidos*%0A' + apellidos +'%0A%0A*Teléfono*%0A'+telefono1+'%0A%0A*Servicio*%0A'+servicio+'%0A%0A*Descripción*%0A'+comentarios +  '%0A%0A*Correo electrónico*%0A' + email + ''
  if(isMobile()) {
      window.open(urlMobile + mensaje, '_blank')
  }else{
      window.open(urlDesktop + mensaje, '_blank')
  }
  buttonSubmit.innerHTML = '<i class="fab fa-whatsapp"></i> Enviar WhatsApp'
  buttonSubmit.disabled = false
}, 1000);
});