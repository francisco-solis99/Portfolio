

    const menu = document.querySelector('.header__menu');
    const burgerButton = document.getElementById('button-burger');
    /*  
        TODO: Par comprobar que se obtienen os elemntos
        console.log(menu);
        console.log(burgerButton);

    */

    burgerButton.addEventListener('click', hideShow);

    function hideShow(){
        if(menu.classList.contains('is-active')){
            menu.classList.remove('is-active');    
        }
        else{
            menu.classList.add('is-active');
        }
    }