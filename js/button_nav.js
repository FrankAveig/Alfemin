 const menu = document.querySelector('.menu');
const burgerButton = document.querySelector('.burger-button');

const menu2 = document.querySelector('.menu2');
const burgerButton2 = document.querySelector('.burger-button2');

    burgerButton2.addEventListener('click',hideshow2);

      function hideshow2(){
        if (menu2.classList.contains('is-active')){
          menu2.classList.remove('is-active');
        }else{
        menu2.classList.add('is-active');
        }
      }

    burgerButton.addEventListener('click',hideShow);

    function hideShow(){
      if (menu.classList.contains('is-active')){
        menu.classList.remove('is-active');
      }else{
      menu.classList.add('is-active');
      }
    }