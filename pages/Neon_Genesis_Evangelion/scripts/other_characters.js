// Array that contains main characters from Neon Genesis Evangelion
let list_of_characters = new Array (
    "Shinhi_Ikari", "Asuka_Langley_Soryo",
    "Rei_Ayanami", "Miasto_Katsuragi", 
    "Kawaru_Nagisa", "Gendo_Ikari",
    "Ryoji_Kaji", "Ritsuko_Akagi",
    "Kensuke_Aida", "Maya_Ibuki",
    "Makoto_Hyuga", "Shigeru_Aoba",
    "Kouzou_Fuyutsuki", "Hikari_Horaki",
    "Keel_Lorenz",
);

// Array that contains angels from Neon Genesis Evangelion
let list_of_angels = new Array (
    "Adam", "Lilith", "Sachiel", "Shamshel",
    "Ramiel", "Gaghiel", "Israfel", "Sandalphon",
    "Matarael", "Schaquiel", "Ireul", "Leliel",
    "Bardiel", "Zeruel", "Arael", "Armisael",
    "Tabris", "Lilin",         
);

// Funkcja sortująca w kolejności alfabetycznej przekazaną do niej tablice 
function sort (array_to_sort) {
    let temp = ''; // zmienna pomocnicza

    for (let i = 0; i < array_to_sort.length; i++) {
        for (let j = i + 1; j < array_to_sort.length; j++) {
            // porównujemy element tabliczy o indeksie i { array_to_sort[i] } z
            // kolejnym elementem tablicy i + 1, czyli j { array_to_sort[j] }

            // localeCompare zwraca wartość z przedziały <-1, 1>
            // -1: oznacza, że array_to_sort[i] jest mniejsze alfabetycznie od array_to_sort[j] { array_to_sort[i] < array_to_sort[j] }
            // 0: oznacza, że wyrazy mają równą wartość alfabetyczną { array_to_sort[i] == array_to_sort[j] }
            // 1: oznacza, że array_to_sort[i] jest większe alfabetycznien od array_to_sort[j] { array_to_sort[i] > array_to_sort[j] }
            if (array_to_sort[i].localeCompare(array_to_sort[j]) > 0) {
                temp = array_to_sort[i];

                array_to_sort[i] = array_to_sort[j];
                array_to_sort[j] = temp; 
            }
        }
    }

    return array_to_sort;
}

function showCharacters (characters_array) {
    const element_path = document.getElementById('target');
    const file_path = '../';

    for (let i = 0; i < characters_array.length; i++) {
        console.log(characters_array[i]);
        element_path.innerHTML = `<div> <img src="../images/characters/thumbmail/${characters_array[i]}.png" alt="" </div>`;
    }
    
}

showCharacters(sort(list_of_characters));