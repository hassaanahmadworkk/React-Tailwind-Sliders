// const initslider = () => {
//   const imageList = document.querySelector('.slider-wrapper .image-list');
//   const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');
//   slideButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const direction = button.id === 'prev-slide' ? -1 : 1;
//       console.log(direction);
//       const scrollAmount = imageList.clientWidth * direction;
//       console.log(scrollAmount);
//       imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     });
//   });
// };
// window.addEventListener('load', initslider);

// const initslider = () => {
//   const slideButtons = document.querySelectorAll('.slider-wrapper .slide-button');
//   const imageList = document.querySelector('.slider-wrapper .image-list');

//   slideButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//       const direction = button.id === 'prev-slide' ? -1 : 1;
//       const scrollAmount = imageList.clientWidth * direction;
//       imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
//     });
//   });
// };
// window.addEventListener('load', initslider);

const initslider = () => {
  const slideButtons = document.querySelectorAll(
    '.slider-wrapper .slide-button'
  );
  const imageList = document.querySelector('.slider-wrapper .image-list');

  slideButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const direction = button.id === 'prev-slide' ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
  });
};
window.addEventListener('load', initslider);
