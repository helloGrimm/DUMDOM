// Skrypt odpowiedzialny za zmianę tła na stronie głównej 
var backgroundsImg = new Array (
    "images/background/Neon_Genesis_Evangelion_4.png",
    "images/background/Kaguya_sama_Love_Is_War_1.png",
    "images/background/Chainsaw_man_1.png",
    "images/background/One_Piece_1.png",
    "images/background/Kakegurui_1.png",
    "images/background/hunter_x_hunter_1.png"
);

// Odstęp po między następnym tłem (wartość w milisekundeach) 
var animationSpeed = 3500;
var index = 0;

// Funkcja odpowiedzialna za zmianę tła 
function change_img () {
    document.image.src = backgroundsImg[index];

    if (index < backgroundsImg.length - 1) {
        index++;
    } else {
        index = 0;
    }

    setTimeout("change_img ()", animationSpeed);
}

window.onload = change_img;