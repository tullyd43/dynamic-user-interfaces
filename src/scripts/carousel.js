// eslint-disable-next-line no-unused-vars
const containerSpecs = function getContainerSpecs() {
    const container = document.querySelector(".carousel-container")
    let containerWidth = container.getBoundingClientRect()
    console.log(containerWidth)
    let containerStyles = window.getComputedStyle(container)
    let gapValue = containerStyles.gap
    console.log(gapValue)
}();

let currentX = 0;

function slideImage(direction) {
    const right = 320;
    const left = -320;
    const images = document.querySelectorAll("img");
    
    if (direction === "right") {
        images.forEach((image) => {
            image.style.translate = (`${currentX + right}px`);
        });
        currentX = currentX + right;
    } else if (direction === "left") {
        images.forEach((image) => {
            image.style.translate = `${currentX + left}px`;
        } )
        currentX = currentX + left;
    }
    if (currentX >= images.length * right || currentX <= images.length * left) {
        currentX = 0;
    }
    console.log(currentX);
}


const rightArrow = document.querySelector(".right");
const leftArrow = document.querySelector(".left");

rightArrow.addEventListener("click", function () {
    slideImage("right");
    //function to scale image size
});

leftArrow.addEventListener('click', function () {
    slideImage("left");
    //function to scale image size
});