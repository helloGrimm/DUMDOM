// Skrypt odpowiedzialny za zmianę tła na stronie głównej 
var backgroundsImg = new Array (
    "../../images/One_Piece_Main/One_Piece_1.jpg",
    "../../images/One_Piece_Main/One_Piece_2.jpg",
    "../../images/One_Piece_Main/One_Piece_3.jpg",
    "../../images/One_Piece_Main/One_Piece_4.jpg",
    "../../images/One_Piece_Main/One_Piece_5.jpg",
    "../../images/One_Piece_Main/One_Piece_6.jpg",
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