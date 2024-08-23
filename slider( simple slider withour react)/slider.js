// const slides = document.querySelectorAll('.slide');
// var counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });
// const goNext = () => {
//   counter++
//   slideImage();
//   translateX();
// };
// const goPrev = () => {
//   counter--
//   slideImage();
// };

// const slideImage = () => {
//   slides.forEach((slide) => {
//     slide.style.transform = `translateX(-${counter * 100}%)`;
//   });
// };

// const slides=document.querySelectorAll(".slide");
// var counter=0;
// slides.forEach((slide,index) =>{
//     slide.style.left=`${index*100}%`;
// }
// )
// const goNext=()=>{
//     counter++;
//     slideImage();
// }
// const goPrev=()=>{
//     counter--
//     slideImage();
// }
// const slideImage=()=>{
//     slides.forEach((slide)=>{
//         slide.style.transform=`translateX(-${counter * 100}%)`
//     })
// }

// const slides = document.querySelectorAll('.slide');
// var counter = 0;

// slides.forEach((slide, index) => {
//   slide.style.left = `${index * 100}%`;
// });

// const goNext=()=>{
//     counter++;
//     slideImage();
// }
// const goPrev=()=>{
//     counter--;
//     slideImage();
// }
// const slideImage =()=>{
//     slides.forEach((slide)=>{
//         slide.style.transform=`translateX(-${counter *100}%)`
//     })
// }

const slides = document.querySelectorAll('.slide');
let counter = localStorage.getItem('sliderIndex') || 0;

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const slideImage = () => {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};
//
slideImage();

const goNext = () => {
  counter = (counter + 1) % slides.length;
  slideImage();
  localStorage.setItem('sliderIndex', counter);
};

const goPrev = () => {
  counter = (counter - 1 + slides.length) % slides.length;
  slideImage();
  localStorage.setItem('sliderIndex', counter);
};


// const slides = document.querySelectorAll('.slide')
// let counter=0;

// slides.forEach((slide,index)=>{
//     slide.style.left=`${index*100}%`
// })

// const slideImage=()=>{
//     slides.forEach((slide)=>{
//         slide.style.transform=`translateX(-${counter*100}%)`
//     })
// }
// const goNext=()=>{
//     counter=(counter+1) %slides.length;
//     slideImage();
// }
// const goPrev=()=>{
//     counter=(counter-1 +slides.length)%slides.length;
//     slideImage();
// }