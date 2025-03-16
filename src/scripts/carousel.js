
const carouselSpecs = function getCarouselSpecs() {
    const container = document.querySelector(".carousel-container")
    let containerStyles = window.getComputedStyle(container)
    let width = parseInt(containerStyles.width, 10)
    let gap = parseInt(containerStyles.gap, 10)
    let imageList = document.querySelectorAll("img");
    let imageWidth = parseInt(window.getComputedStyle(imageList[0]).width, 10)
    return {
        containerStyles,
        width,
        gap,
        imageList,
        imageWidth,
    }
}();

function setInitialImg() {
    let sumImageWidth = carouselSpecs.imageList.length * carouselSpecs.imageWidth
    console.log(sumImageWidth)
    let imageGaps = (carouselSpecs.imageList.length - 1) * carouselSpecs.gap
    let carouselContentWidth = sumImageWidth + imageGaps
    return console.log(carouselContentWidth)
}

setInitialImg()

console.log(carouselSpecs.width)
console.log(carouselSpecs.gap)

let currentX = 0;

function slideImage(direction) {
    const right = 320;
    const left = -320;
    // change to use containerspecs instead of x
    if (direction === "right") {
        carouselSpecs.imageList.forEach((image) => {
            image.style.translate = (`${currentX + right}px`);
        });
        currentX = currentX + right;
    } else if (direction === "left") {
        carouselSpecs.imageList.forEach((image) => {
			image.style.translate = `${currentX + left}px`;
		});
        currentX = currentX + left;
    }
    if (
		currentX >= carouselSpecs.imageList.length * right ||
		currentX <= carouselSpecs.imageList.length * left
	) {
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