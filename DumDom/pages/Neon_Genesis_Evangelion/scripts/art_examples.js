// Skrypt odpowiedzialny za zmianę tła na stronie głównej 
var backgroundsImg = new Array (
    "../images/art_examples/thumbnail/thumbnail_1.jpeg",
    "../images/art_examples/thumbnail/thumbnail_2.jpeg",
    "../images/art_examples/thumbnail/thumbnail_3.jpg",
    "../images/art_examples/thumbnail/thumbnail_4.jpg",
    "../images/art_examples/thumbnail/thumbnail_5.jpg",
    "../images/art_examples/thumbnail/thumbnail_6.jpg",
    "../images/art_examples/thumbnail/thumbnail_7.jpeg",
    "../images/art_examples/thumbnail/thumbnail_8.jpeg",
    "../images/art_examples/thumbnail/thumbnail_9.jpeg",
    "../images/art_examples/thumbnail/thumbnail_10.jpeg"
);

// Odstęp po między następnym tłem (wartość w milisekundeach) 
var animationSpeed = 3500;
var index = 0;

// Funkcja odpowiedzialna za zmianę tła 
function change_img () {
    document.getElementById('art_examples').src = backgroundsImg[index];

    if (index < backgroundsImg.length - 1) {
        index++;
    } else {
        index = 0;
    }

    setTimeout("change_img ()", animationSpeed);
}

window.onload = change_img;