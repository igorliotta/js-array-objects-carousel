console.log('Carosello Array di Oggetti');

const images = [
	{
		image: 'img/01.webp',
		title: "Marvel's Spiderman Miles Morale",
		text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
	},
	{
		image: 'img/02.webp',
		title: 'Ratchet & Clank: Rift Apart',
		text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
	},
	{
		image: 'img/03.webp',
		title: 'Fortnite',
		text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
	},
	{
		image: 'img/04.webp',
		title: 'Stray',
		text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
	},
	{
		image: 'img/05.webp',
		title: "Marvel's Avengers",
		text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
	},
]

console.log(images);

const carouselElement = document.querySelector('.carousel');
console.log(carouselElement);

for (let i = 0; i < images.length; i++) {
  const currentImg = images[i];
  console.log(currentImg);

  const html = `
  <img class="carousel__item" src="${currentImg.image}" alt="">
  <div class="img__info">
      <h3 class="title__img">${currentImg.title}</h3>
      <p class="text__img">${currentImg.text}</p>
  </div>`

  carouselElement.innerHTML += html;
//   console.log(carouselElement);
}

const itemElements = document.querySelectorAll('.carousel__item');
console.log(itemElements);

const imgInfoElements = document.querySelectorAll('.img__info');
console.log(imgInfoElements);

let currentIndex = 0;

let activeItem = itemElements[currentIndex];
let activeImgInfo = imgInfoElements[currentIndex];

activeImgInfo.classList.add('active');
activeItem.classList.add('active');
console.log(activeItem, activeImgInfo);


const btnRight = document.querySelector('.carousel .button__right');
const btnLeft = document.querySelector('.carousel .button__left');
console.log(btnRight, btnLeft);

btnRight.addEventListener('click', function () {
    // console.log('funziona');
    const activeImgSlideElement = itemElements[currentIndex];
    activeImgSlideElement.classList.remove('active');
    const activeImgSlideInfoTextElement = imgInfoElements[currentIndex];
    activeImgSlideInfoTextElement.classList.remove('active');
    console.log(activeImgSlideElement, activeImgSlideInfoTextElement);

    if (currentIndex === itemElements.length - 1) {
        currentIndex = 0;
       } else {
        currentIndex++;
       }
    
       const nextImgSlideElement = itemElements[currentIndex];
       nextImgSlideElement.classList.add('active');
       const nextActiveImgSlideInfoTextElement = imgInfoElements[currentIndex];
       nextActiveImgSlideInfoTextElement.classList.add('active');

})

btnLeft.addEventListener('click', function () {
    // console.log('funziona');
    const activeImgSlideElement = itemElements[currentIndex];
    activeImgSlideElement.classList.remove('active');
    const activeImgSlideInfoTextElement = imgInfoElements[currentIndex];
    activeImgSlideInfoTextElement.classList.remove('active');
    console.log(activeImgSlideElement, activeImgSlideInfoTextElement);

    if (currentIndex === 0) {
        currentIndex = itemElements.length - 1;
    } else {
        currentIndex--;
    }

    const nextImgSlideElement = itemElements[currentIndex];
    nextImgSlideElement.classList.add('active');
    const nextActiveImgSlideInfoTextElement = imgInfoElements[currentIndex];
    nextActiveImgSlideInfoTextElement.classList.add('active');
})