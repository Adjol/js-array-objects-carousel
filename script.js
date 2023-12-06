
const images = [ 
    { image: 'img/01.webp', title: 'Marvel\'s Spiderman Miles Morale', text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.', }, 
    
    { image: 'img/02.webp', title: 'Ratchet & Clank: Rift Apart', text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.', }, 
    
    { image: 'img/03.webp', title: 'Fortnite', text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.", }, 
    
    { image: 'img/04.webp', title: 'Stray', text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city', }, 
    
    { image: 'img/05.webp', title: "Marvel's Avengers", text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.', } 
];



let container = document.querySelector(".container");


images.forEach((object, ind) => {
    container.innerHTML+=`
            <div class="item">
                <div id="nascondi">${ind}</div>
                <img src="${object.image}">
                <span class="title">${object.title} </span>
                <p class="description">${object.text}</p>

            </div>`;
    console.log(object.title);

});




const items = document.getElementsByClassName('item');


const arrowDown = document.querySelector(".fa-arrow-down");

const arrowUp = document.querySelector(".fa-arrow-up");

let activeItem = 0;

items[0].classList.add("active");

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





