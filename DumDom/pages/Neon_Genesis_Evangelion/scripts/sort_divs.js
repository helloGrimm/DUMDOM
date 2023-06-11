// Array that contains main characters from Neon Genesis Evangelion
let list_of_characters = new Array (
    'Asuka_Langley_Soryu', 'Yui_Ikari', 'Toji_Suzuhara', 
    'Shinji_Ikari', 'Misato_Katsuragi', 'Rei_Ayanami',
    'Ritsuko_Akagi', 'Gendo_Ikari', 'Ryoji_Kaji',
    'Kozo_Fuyutsuki', 'Kensuke_Aida', 'Maya_Ibuki',
    'Hikari_Horaki', 'Makoto_Hyuga', 'Shiger_Aoba',
    'Kaworu_Nagisa', 'Pen_Pen', 'Lilith',
    'Zeruel', 'Leliel', 'Sachiel', 
    'Ireul', 'Schaquiel', 'Matarael', 
    'Sandalphon', 'Israfel', 'Gaghiel'
);

// Array that contains angels from Neon Genesis Evangelion
let list_of_angels = new Array (
    'Lilith', 'Zeruel', 'Leliel', 'Sachiel', 
    'Ireul', 'Schaquiel', 'Matarael', 
    'Sandalphon', 'Israfel', 'Gaghiel'
);


// Funkcja sortująca w kolejności alfabetycznej przekazaną do niej tablice 
function sort (type) {
    let temp = ''; // zmienna pomocnicza

    for (let i = 0; i < list_of_characters.length; i++) {
        for (let j = i + 1; j < list_of_characters.length; j++) {
            // porównujemy element tabliczy o indeksie i { array_to_sort[i] } z
            // kolejnym elementem tablicy i + 1, czyli j { array_to_sort[j] }

            // localeCompare zwraca wartość z przedziały <-1, 1>
            // -1: oznacza, że array_to_sort[i] jest mniejsze alfabetycznie od array_to_sort[j] { array_to_sort[i] < array_to_sort[j] }
            // 0: oznacza, że wyrazy mają równą wartość alfabetyczną { array_to_sort[i] == array_to_sort[j] }
            // 1: oznacza, że array_to_sort[i] jest większe alfabetycznien od array_to_sort[j] { array_to_sort[i] > array_to_sort[j] }
            if (list_of_characters[i].localeCompare(list_of_characters[j]) > 0) {
                temp = list_of_characters[i];

                list_of_characters[i] = list_of_characters[j];
                list_of_characters[j] = temp; 
            }
        }
    }

    if (type == 'ascending') {
        showOnSite(list_of_characters);
    } else if (type == 'descending') {
        showOnSite(list_of_characters.reverse());
    }
    
}

function showOnSite (array_to_show) {
    let section = document.querySelector('section');
    section.innerHTML = '';
    let element, link;

    for (let i = 0; i < array_to_show.length; i++) {
        link = document.createElement('a');
        link.setAttribute('href', `${array_to_show[i].toLowerCase()}.html`);
        link.innerHTML = `<img src="../images/characters/thumbmail/${array_to_show[i]}.png" alt="${array_to_show[i]}">`;
        // element.src = `../images/characters/thumbmail/${array_to_show[i]}.png`;
        // element.setAttribute('alt', `${array_to_show[i]}`)
        section.appendChild(link)
    }

}

showOnSite(list_of_characters)