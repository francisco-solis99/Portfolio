
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
    

    
    //FIXME: AYUDA EN EL CASO DE CARGAR DESDE UN TAMAÑO MOVIL
        /*Evaluar sin importar el viewport, si ipad(el media querie) hace match con el width de la ventana  console.log(ipad.matches);
        if(ipad.matches){   // es como si se pusiera -->  if(widthViewport <= 767)
            burgerButton.addEventListener('click', hideShow);  
            menu.addEventListener('click', hideMenu);
        }
    */



    //TODO:AYUDA EN EL CASO DE CARGAR DESDE UN TAMAÑO MOVIL
    //Ejecutar la funcion de validacion sin importar el tamaño del viewport
    validation(ipad);




    //TODO: AYUDA SI SE HACE RESIZE EN CUALQUIER PUNTO DEL WEB SITE
    //Agregando un listener al elemento ipad
    ipad.addListener(validation); //addEventListener: Se agrega un afuncion que va a escuchar si se hace resize, si pasa de algo mayor a 767 a algo menor de ese tamaño del media querie

    function validation(evento){
        // console.log(evento.matches);       <--Evaluar si hace match(true o false)
        if(evento.matches){
            burgerButton.addEventListener('click', hideShow);
            menu.addEventListener('click', hideMenu);
            // console.log('hola evento');   <--Evaluar si se ejecuta
        }
        else{
            burgerButton.removeEventListener('click', hideShow);
            // console.log('adios evento');  <--Evaluar si se ejecuta
            menu.removeEventListener('click', hideMenu);
        }
    }


    //TODO:Funciones que se activan para al ser escuchado su evento

    function hideMenu(){
        menu.classList.remove('is-active');
    }

    function hideShow(){ 
        
        menu.classList.toggle('is-active');

        // FIXME: Otra alternativa
        /*
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');    
        }
        else{
            menu.classList.add('is-active');
        }
        */
    }