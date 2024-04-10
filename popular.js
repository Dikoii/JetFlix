const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

const nextButton = document.querySelector('.carousel_right');
const prevButton = document.querySelector('.carousel_left');

const dotsNav = document.querySelector('.navigations');
const dots = Array.from(dotsNav.children);



const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) =>{
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-'+ targetSlide.style.left +')';           
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const moveButton = (currentCircle, targetCircle) =>{
    currentCircle.classList.remove('current_circle');
    targetCircle.classList.add('current_circle');
}


nextButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current_slide');                
    const nextSlide = currentSlide.nextElementSibling;                                                    

    const currentCircle = dotsNav.querySelector('.current_circle');
    const nextCircle = currentCircle.nextElementSibling;

    if(nextSlide){
        prevButton.classList.remove('is_hidden');
        if(!nextSlide.nextElementSibling){
            nextButton.classList.add('is_hidden');
        }
    }

    moveToSlide(track, currentSlide, nextSlide);
    moveButton(currentCircle, nextCircle);
})


prevButton.addEventListener('click', e=>{
    const currentSlide = track.querySelector('.current_slide');                
    const prevSlide = currentSlide.previousElementSibling;     
    
    const currentCircle = dotsNav.querySelector('.current_circle');
    const prevCircle = currentCircle.previousElementSibling;

    if(prevSlide){
        nextButton.classList.remove('is_hidden');
        if(!prevSlide.previousElementSibling){
            prevButton.classList.add('is_hidden');
        }
    }

    moveToSlide(track, currentSlide, prevSlide);
    moveButton(currentCircle, prevCircle);
})



const navbarNav = document.querySelector(".resp-navbar");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

