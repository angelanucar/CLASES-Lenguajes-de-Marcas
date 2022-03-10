// HAMBURGUESA 
const toggleButton = document.getElementById('button-menu')
const navWrapper = document.getElementById('nav')

toggleButton.addEventListener('click', hamburguesa)

function hamburguesa (){
    toggleButton.classList.toggle('close')
    navWrapper.classList.toggle('show')
}

// BUSCADOR
const inputBuscar = document.getElementById('buscar');
inputBuscar.addEventListener('keyup', filtro);

function filtro(){
    let valorInput = inputBuscar.value;
    let cards = document.getElementsByClassName('card');

    for(let i = 0; i < cards.length; i++){
        if(cards[i].innerHTML.includes(valorInput)){
            cards[i].style.display = 'block';
        }else{
            cards[i].style.display = 'none';
        }
    }
}