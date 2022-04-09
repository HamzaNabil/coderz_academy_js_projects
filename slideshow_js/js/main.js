let myImage = document.getElementById("slideshow");
let images = ["images/1.jpg", "images/2.png", "images/3.jpg", "images/4.jpg"];
let i = 0;

function slideshow() {
    myImage.setAttribute('src', images[i]); // images[2]

    if(i == images.length - 1) {
        i = 0;
    } else {
        i++; // i = 2
    }

    setTimeout(function() {
        slideshow();
    }, 2000)
}

slideshow();