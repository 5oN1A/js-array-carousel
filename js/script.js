const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
];

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];

const fullImg = document.querySelector(".full-img-container img");
const fullImgTitle = document.querySelector(".full-img-text h1");
const fullImgDescription = document.querySelector(".full-img-text p");
//const sidebarContainer = document.querySelector(".side-img-container");
//console.log(imgSidebar);


let currentIndex = 0;

//ciclo le immagini 
for (let i = 0; i < items.length; i++) {

    let currentItem = items[i];
    let currentTitle = title[i];
    let currentText = text[i];
 //   let sideBarImg = items[i];

    if (i === currentIndex) {
        fullImg.src = `${currentItem}`;
        console.log(fullImg);
        fullImgTitle.innerHTML = `${currentTitle}`;
        console.log(fullImgTitle);
        fullImgDescription.innerHTML = `${currentText}`;
        console.log(fullImgDescription);
    }

}



const arrowUp = document.querySelector(".fa-chevron-up");
const arrowDown = document.querySelector(".fa-chevron-down");

let newFullImg = document.querySelector(".full-img-container img");
let newFullImgTitle = document.querySelector(".full-img-text h1");
let newFullImgDescription = document.querySelector(".full-img-text p");

arrowDown.addEventListener("click", function () {

    currentIndex = currentIndex + 1;

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
    }

    newFullImg.src = `${items[currentIndex]}`;
    newFullImgTitle.innerHTML = `${title[currentIndex]}`;
    newFullImgDescription.innerHTML = `${text[currentIndex]}`;

  
});

arrowUp.addEventListener("click", function () {

    currentIndex = currentIndex - 1;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }

    newFullImg.src = `${items[currentIndex]}`;
    newFullImgTitle.innerHTML = `${title[currentIndex]}`;
    newFullImgDescription.innerHTML = `${text[currentIndex]}`;

});



let imgFull =document.querySelector(".full-img-container img");
console.log(imgFull);
