
const images = [ 
    { image: 'consegna (3)/consegna/img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, 
    
    { image: 'consegna (3)/consegna/img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    
    { image: 'consegna (3)/consegna/img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    
    { image: 'consegna (3)/consegna/img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    
    { image: 'consegna (3)/consegna/img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];


let show = document.querySelector(".item");


images.forEach(function(image) {
    
    show.append(image);
});








const items = document.getElementsByClassName('item');

let activeItem = 0;

const arrowDown = document.querySelector(".fa-arrow-down");

const arrowUp = document.querySelector(".fa-arrow-up");



arrowDown.addEventListener("click", function() {

    if (activeItem < items.length - 1) {

        
        items[activeItem].classList.remove('active');

        activeItem++;

        items[activeItem].classList.add('active');

    } else if (activeItem === items.length - 1) {
        items[activeItem].classList.remove('active');

        activeItem = 0;
        items[activeItem].classList.add('active');
    }



});

arrowUp.addEventListener("click", function() {

    items[activeItem].classList.remove('active')

    if (activeItem === 0) {

        activeItem = items.length -1;



        items[activeItem].classList.add('active');
    } else {

        activeItem--;

        items[activeItem].classList.add('active');
    }
}); 





