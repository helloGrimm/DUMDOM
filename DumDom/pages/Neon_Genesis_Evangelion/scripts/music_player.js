let previous = document.getElementById('previous');
let play = document.getElementById('play');
let next = document.getElementById('next');
let auto_play = document.getElementById('auto');

let album_cover = document.getElementById('cover_art');
let element_title = document.getElementById('title');
let element_artist = document.getElementById('artist');

let mute_song = document.getElementById('range');
let volume_value = document.getElementById('volume_range')
let value = document.getElementById('value');
let duration_time = document.getElementById('duration');

let song_volume = 0;
let timer;
let index = 0;
let auto = 0;
let song = false;

let track = document.createElement('audio');

let play_icon = document.getElementById('play');
let pause_icon = document.getElementById('pause');
let repeat = document.getElementById('icon');

// Spis wszystkich piosenek, autorów i okładek albumów
let list_of_songs = [
    {   
        title: 'Come sweet death, second impact',
        path: '../images/music/music/Come_sweet_death_second_impact.mp3',
        artist: 'Megumi Hayashibara',
        cover_art: '../images/music/cover_art/cover_art-1.jpg'
    },

    {
        title: 'Dilemmatic triangle opera',
        path: '../images/music/music/Dilemmatic_triangle_opera.mp3',
        artist: 'Megumi Hayashibara',
        cover_art: '../images/music/cover_art/cover_art-2.jpg'
    },

    {
        title: 'Fly Me To the Moon',
        path: '../images/music/music/Fly_Me_To_the_Moon.mp3',
        artist: 'Shiro Sagisu, Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-3.jpg'
    },

    {
        title: 'Kokoro yo Genshi ni Modore',
        path: '../images/music/music/Kokoro_yo_Genshi_ni_Modore.mp3',
        artist: 'Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-4.jpg'
    }, 

    {
        title: 'KOMM, SUSSER TOD',
        path: '../images/music/music/KOMM_SUSSER_TOD.mp3',
        artist: 'ARIANNE',
        cover_art: '../images/music/cover_art/cover_art-5.jpg'
    }, 

    {
        title: 'KYOU NO HI WA SAYOUNARA',
        path: '../images/music/music/KYOU_NO_HI_WA_SAYOUNARA.mp3',
        artist: 'Megumi Hayashibara',
        cover_art: '../images/music/cover_art/cover_art-6.jpg'
    }, 

    {
        title: 'Mugen Houyou',
        path: '../images/music/music/Mugen_Houyou.mp3',
        artist: 'Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-7.jpg'
    }, 

    {
        title: 'Shiawase wa Tsumi no Nioi',
        path: '../images/music/music/Shiawase_wa_Tsumi_no_Nioi.mp3',
        artist: 'Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-8.jpg'
    },

    {
        title: "Soul's Refrain",
        path: '../images/music/music/Soul_s_Refrain.mp3',
        artist: 'Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-9.jpg'
    }, 

    {
        title: "THANATOS -IF I CAN'T BE YOURS-",
        path: '../images/music/music/THANATOS_IF_I_CANT_BE_YOURS.mp3',
        artist: 'Loren & Mash',
        cover_art: '../images/music/cover_art/cover_art-10.jpg'
    }, 

    {
        title: "The Cruel Angel's Thesis",
        path: '../images/music/music/The_Cruel_Angels_Thesis.mp3',
        artist: 'Yoko Takahashi',
        cover_art: '../images/music/cover_art/cover_art-11.jpg'
    }, 

    {
        title: 'TSUBASA WO KUDASAI',
        path: '../images/music/music/TSUBASA_WO_KUDASAI.mp3',
        artist: 'Megumi Hayashibara',
        cover_art: '../images/music/cover_art/cover_art-12.jpg'
    }
];

function mute () {
    song_volume = volume_value.value;

    track.volume = 0;
    volume_value.value = 0;
    value.innerHTML = '0';

    mute_song.setAttribute('class', 'ti ti-volume-off');
    mute_song.setAttribute('onclick', 'unmute()');
}

function unmute () {    
    track.volume = song_volume / 100;
    volume_value.value = song_volume;
    value.innerHTML = song_volume;

    song_volume = 0;

    mute_song.setAttribute('class', 'ti ti-volume');
    mute_song.setAttribute('onclick', 'mute()');
}

function playSong () {
    track.play()
    play.setAttribute('onclick', 'pauseSong()');
    play.innerHTML = '<i class="ti ti-player-pause"></i>';
}

function pauseSong () {
    track.pause();
    play.setAttribute('onclick', 'playSong()');
    play.innerHTML = '<i class="ti ti-player-play"></i>';
}

function nextSong () {
    if (index < list_of_songs.length - 1) { 
        index++; 
        load(index);
        playSong();
    } else { 
        index = 0; 
        load(index)
        playSong();
    }
}

function previousSong() {
    if (index > 0) {
        index--;
        load(index);
        playSong();
    } else {
        index = list_of_songs.length - 1;
        load(index);
        playSong();
    }
}

function autoPlay () {
    if (auto == 1) {
        auto = 0;
        repeat.style.color = 'var(--icon-secondary)';
    } else {
        auto = 1;
        repeat.style.color = 'var(--title-secondary)';
    }
}

function volume () {
    value.innerHTML = volume_value.value;
    track.volume = volume_value.value / 100;
}

function duration () {
     track.currentTime = track.duration * (duration_time.value / 100);
}

function slider () {
    let position = 0;

    if (!isNaN(track.duration)) {
        position = track.currentTime * (100 / track.duration);
        duration_time.value = position; 
    }

    if (track.ended) {
        play.innerHTML = '';
    
        if (auto == 1) {
            index++; 
            load(index);
            playSong();
        }
    }
}

function resetSlider () {
    duration_time.value = 0; 
}

function load (index) {
    clearInterval(timer)
    resetSlider();

    track.src = list_of_songs[index].path;
    element_title.innerHTML = list_of_songs[index].title;
    element_artist.innerHTML = list_of_songs[index].artist; 
    album_cover.innerHTML = `<img src="${list_of_songs[index].cover_art}" alt="${list_of_songs[index].title}">`;

    timer = setInterval(slider, 1000)
}

window.onload = load(index);