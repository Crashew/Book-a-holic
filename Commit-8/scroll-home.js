const scroll= document.querySelector('.homeImage');

let isDragStart= false, prevPageX, prevScrollLeft;
const dragStart = () => {
    isDragStart= true;
    prevPageX= e.pageX;
    prevScrollLeft= scroll.scrollLeft
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    scroll.scrollLeft= e.pageX;
}
const dragStop = () => {
    isDragStart= false;
}

scroll.addEventListener("mousedown", dragStart);
scroll.addEventListener("mousemove", dragging);
scroll.addEventListener("mouseup", dragStop);

//https://www.youtube.com/watch?v=7HPsdVQhpRw