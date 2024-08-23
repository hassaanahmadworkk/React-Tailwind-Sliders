const carousel = document.querySelector('.carousel');
let isDragStart = false,prevPageX,prevScrollLeft;
let arrowIcons =document.querySelectorAll('.material-symbols-outlined')
firstImg=carousel.querySelectorAll("img")[0];
let firstImgWidth=firstImg.clientWidth+218;
arrowIcons.forEach(icon=>{
    icon.addEventListener("click",()=>{
        carousel.scrollLeft+=icon.id =="next-slide" ? -firstImgWidth :firstImgWidth;


      //   const direction = icon.id === 'prev-slide' ? 1 : -1;
      // const scrollAmount = carousel.clientWidth * direction;
      // carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    })
})
const dragStart = (e) => {
  isDragStart = true;
  prevPageX=e.pageX;
  prevScrollLeft=carousel.scrollLeft;
  
};
const dragStop=()=>{
    isDragStart=false;
    carousel.classList.add("dragging")
}

const dragging = (e) => {
  if (!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging")
  let positionDiff = e.pageX- prevPageX;
  carousel.scrollLeft = prevScrollLeft-positionDiff;
};
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener("mousedown",dragStart)
carousel.addEventListener("mouseup",dragStop)

