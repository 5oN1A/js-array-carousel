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

const fullImgContainer = document.querySelector(".full-img-container");


let currentIndex = 3;

//ciclo le immagini 
for (let i = 0; i < items.length; i++) {
    
    const currentItem = items[i];

    let classeActive = "";      
    
    if (i === currentIndex) {
        classeActive = "active";
    }
    const tagImg = `<img class="${classeActive}" src="${currentItem}" alt="immagine #${i}">`;

fullImgContainer.innerHTML += tagImg;
}

const arrowUp = document.querySelector(".fa-chevron-up");
const arrowDown = document.querySelector(".fa-chevron-down")


arrowUp.addEventListener ("click", function(){

    
    let activeElement = document.querySelector(".full-img-container .active");

    activeElement.classList.remove("active");

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = items.length - 1;
      }

      console.log(currentIndex)

    let itemsList = fullImgContainer.querySelectorAll("img");

     console.log(itemsList);

    let nextActiveElement = itemsList[currentIndex];
    
   nextActiveElement.classList.add("active");

})

arrowDown.addEventListener ("click", function(){

    
    let activeElement = document.querySelector(".full-img-container .active");

    activeElement.classList.remove("active");

    currentIndex++;

    if (currentIndex > items.length - 1) {
        currentIndex = 0;
      }

      console.log(currentIndex)

    let itemsList = fullImgContainer.querySelectorAll("img");

     console.log(itemsList);

    let nextActiveElement = itemsList[currentIndex];
    
   nextActiveElement.classList.add("active");

})


