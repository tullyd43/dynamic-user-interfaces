import { configOne } from "./carousel-config.js"


function insertImages(configObj) {
    let imageContainer = document.querySelector(configObj.container);
    configObj.imageList.forEach((image) => {
        let addImg = document.createElement("img");
        addImg.src = `${image}`;
        imageContainer.appendChild(addImg);
    });
};

// Get data on images in carousel
// Images are expected to be of equal size
// const imgSpecs = (function(config) {
// 	let carouselImages = document.querySelectorAll(".carousel-images"); // Select images in carousel
// 	let numImages = config.imageList.length;
// 	let imgSize = parseInt(
// 		window.getComputedStyle(carouselImages[0]).width,
// 		10
// 	);
// 	return {
// 		numImages,
// 		imgSize,
// 	};
// })();

let layoutOptions = {
    slideshow: function () {
        
    }
}

function createCarousel(configObj) {
    let insert = insertImages(configObj)
    return {
        insert,
    }
};

let one = createCarousel(configOne)
let two = createCarousel(configOne)