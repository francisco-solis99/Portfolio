
    /*
        TODO:
        Aplicar solo en media querie de 767px, usando otro API del navegador 
        y se llama window

        Leer el matchmedia
        console.log(window.matchMedia('screen and (max-width: 767px)'));
    
    */ 

    // El media querie asignado a una constante
    const ipad = window.matchMedia('screen and (max-width: 767px)');
    //Obteniendo los elementos del html
    const menu = document.querySelector('.header__menu');
    const burgerButton = document.getElementById('button-burger');
    /*  
        TODO: Para comprobar que se obtienen os elemntos
        console.log(menu);
        console.log(burgerButton);

    */

    //Evaluar sin imporatar nada, si ipad(el media querie) hace match con el width de la ventana
    if(ipad.matches){   // es como si se pusiera -->  if(widthViewport <= 767)
        burgerButton.addEventListener('click', hideShow);
        menu.addEventListener('click', hideMenu);
    }


    //Agregando un listener al elemento ipad
    ipad.addListener(validation); //addEventListener: Funcion que va escuchar un evento como click, hover, entre otros mas

    function validation(evento){
        // console.log(evento.matches);       <--Evaluar si hace match(true o false)
        if(evento.matches){
            burgerButton.addEventListener('click', hideShow);
            menu.addEventListener('click', hideMenu);
            // console.log('hola evento');
        }
        else{
            burgerButton.removeEventListener('click', hideShow);
            // console.log('adios evento');
            menu.removeEventListener('click', hideMenu);
        }


    }


    function hideMenu(){
        menu.classList.remove('is-active');
    }

    function hideShow(){ 
        
        menu.classList.toggle('is-active');

        // TODO: Otra alternativa
        /*
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');    
        }
        else{
            menu.classList.add('is-active');
        }
        */
    }