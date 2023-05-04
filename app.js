const music = new Audio('audio/6.mp3');
//music.play();

//id song
const songs = [
    {
        id:'1',
        songName:` Anh đã ổn hơn <br><div class="subtitle">MCK</div>`,
        poster: "img/1.jpg"
    },
    {
        id:'2',
        songName:`Bước qua nhau <br><div class="subtitle">Vũ.</div>`,
        poster: "img/2.jpg"
    },
    {
        id:"3",
        songName: `vaicaunoicokhiennguoithaydoi <br><div class="subtitle"> GREY D x tlinh</div>`,
        poster: "img/3.jpg",
    },
    {
        id:"4",
        songName: `Tháng năm <br><div class="subtitle">Soobin</div>`,
        poster: "img/4.jpg",
    },
    {
        id:"5",
        songName: `Và thế là hết <br><div class="subtitle">Chillies</div>`,
        poster: "img/5.jpg",
    },
    {
        id:"6",
        songName: `Muộn rồi mà sao còn <br><div class="subtitle">Sơn Tùng M-TP</div>`,
        poster: "img/6.jpg",
    },
    {
        id:"7",
        songName: `Dear <br><div class="subtitle">RPT Gonzo, Lê Hiếu</div>`,
        poster: "img/7.jpg",
    },
    {
        id:"8",
        songName: `Nàng thơ <br><div class="subtitle">Hoàng Dũng</div>`,
        poster: "img/8.jpg",
    },
    {
        id:"18",
        songName: `Die For You <br><div class="subtitle">The Weeknd</div>`,
        poster: "img/18.jpg",
    }, 
    {
        id:"19",
        songName: `Stay <br><div class="subtitle">Justin Bieber, The Kid LAROI</div>`,
        poster: "img/19.jpg",
    }, 
    {
        id:"20",
        songName: `double take <br><div class="subtitle">dhruv</div>`,
        poster: "img/20.jpg",
    }, 
    {
        id:"21",
        songName: `Cheating on You <br><div class="subtitle">Charlie Puth</div>`,
        poster: "img/21.jpg",
    }, 
    {
        id:"22",
        songName: `Leave The Door Open <br><div class="subtitle">Bruno Mars, Anderson Paak, Silk Sonic</div>`,
        poster: "img/22.jpg",
    }, 
    {
        id:"23",
        songName: `Cupid <br><div class="subtitle">FIFTY FIFTY</div>`,
        poster: "img/23.jpg",
    }, 
    {
        id:"24",
        songName: `Flower <br><div class="subtitle">Jisoo</div>`,
        poster: "img/24.jpg",
    }, 
    {
        id:"25",
        songName: `Shoong! <br><div class="subtitle">Taeyang, LISA</div>`,
        poster: "img/25.jpg",
    }, 
    {
        id:"9",
        songName: `Em là <br><div class="subtitle">Mono</div>`,
        poster: "img/9.jpg",
    },
    {
        id:"10",
        songName: `Yêu anh đi mẹ anh bán bánh mì <br><div class="subtitle">Phúc Du</div>`,
        poster: "img/10.jpg",
    },
    {
        id:"11",
        songName: `See tình <br><div class="subtitle">Hoàng Thùy Linh</div>`,
        poster: "img/11.jpg",
    },
    {
        id:"12",
        songName: `Bí mật nhỏ <br><div class="subtitle">B Ray, Hoàng Tôn, Helia</div>`,
        poster: "img/12.jpg",
    },
    {
        id:"13",
        songName: `Bật nhạc lên <br><div class="subtitle">HIEUTHUHAI, Harmonie</div>`,
        poster: "img/13.jpg",
    },
    {
        id:"14",
        songName: `Nếu lúc đó <br><div class="subtitle"> tlinh, 2pillz</div>`,
        poster: "img/14.jpg",
    },
    {
        id:"15",
        songName: `Thích em hơi nhiều <br><div class="subtitle">Wren Evans</div>`,
        poster: "img/15.jpg",
    },
    {
        id:"16",
        songName: `Missing You <br><div class="subtitle">Phương Ly</div>`,
        poster: "img/16.jpg",
    },
    {
        id:"17",
        songName: `Đã lỡ yêu em nhiều <br><div class="subtitle">Justatee</div>`,
        poster: "img/17.jpg",
    },
    
]

Array.from(document.getElementsByClassName('songItem')).forEach((e, i)=>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

//search data start
let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    //console.log(poster);
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = "#" + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
                            <div class="content">
                                ${songName}
                            </div>
    `;
    search_results.appendChild(card);
});


let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_results.getElementsByTagName('a')
    
    for (let index = 0; index < items.length; index++) {
        let as = items[index].getElementsByClassName('content')[0];
        let text_value = as .textContent || as.innerHTML;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[index].style.display = "flex";
        } else {
            items[index].style.display = "none";
        }

        if (input.value == 0) {
            search_results.style.display = "none";
        } else {
            search_results.style.display = "";
        }
    }
})
//search data end


//chạy bài hát
let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementsByClassName('wave')[0];

masterPlay.addEventListener('click',()=> {
    if (music.paused || music.currentTime <=0) {
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    } else {
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const makeAllplays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
            el.style.background = "rgb(105, 105, 105, 0)";
    })
}

//Các chức năng phát nhạc
let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        music.src = `audio/${index}.mp3`;
        poster_master_play.src =`img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        download_music.href = `audio/${index}.mp3`;
        let song_title = songs.filter((els)=>{
            return els.id == index;
        });

        song_title.forEach(elss =>{
            let {songName} = elss;
            title.innerHTML = songName;
            download_music.setAttribute('download', songName);
        });

        makeAllBackgrounds();
        Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
        makeAllplays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
    });
})


//Thanh phát nhạc
let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if (sec1 < 10) {
        sec1 = `0${sec1}` ;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    if (sec2 < 10) {
        sec2 = `0${sec2}`
    }
    currentStart.innerText = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr /music_dur)*100);
    seek.value = progressBar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
});

//volumn
let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_dot = document.getElementById('vol_dot');
let vol_bar = document.getElementsByClassName('vol_bar')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
});

//next or back bài hát
let back = document.getElementById('back');
let next = document.getElementById('next');
    
back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let song_title = songs.filter((els)=>{
        return els.id == index;
    });

    song_title.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
})

next.addEventListener('click', ()=>{
    index ++;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let song_title = songs.filter((els)=>{
        return els.id == index;
    });

    song_title.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
    });

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');

});



//Bài hát nổi bật(trái phải)

//Bài hát nổi bật(trái phải)


let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_song = document.getElementsByClassName('pop_song')[0];


pop_song_left.addEventListener('click', ()=>{
    pop_song.scrollLeft -= 330;
});
pop_song_right.addEventListener('click', ()=>{
    pop_song.scrollLeft += 330;
});

//nghệ sĩ (trái phải)
let pop_art_left  = document.getElementById('pop_art_left');
let pop_art_right  = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_left.addEventListener('click', ()=>{
    Artists_bx.scrollLeft -= 330;
})
pop_art_right.addEventListener('click', ()=>{
    Artists_bx.scrollLeft += 330;
});


//thay đổi chức năng phát
let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', ()=>{
    let a = shuffle.innerHTML;

    switch (a) {
        case "next":
            shuffle.classList.add('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'repeat';
            break;
        
       case"repeat":
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.remove('bi-music-note-beamed');
            shuffle.classList.add('bi-shuffle');
            shuffle.innerHTML = 'random';
            break;
       case"random":
       shuffle.classList.remove('bi-arrow-repeat');
            shuffle.classList.add('bi-music-note-beamed');
            shuffle.classList.remove('bi-shuffle');
            shuffle.innerHTML = 'next';
            break;     
    }
});

//bài hát kế tiếp
const next_music = () => {
    if (index == songs.length) {
            index = 1
    } else {
            index ++;
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;
    let song_title = songs.filter((els)=>{
        return els.id == index;
    });

    song_title.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

//lặp lại
const repeat_music = () => {
    index;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;
    let song_title = songs.filter((els)=>{
        return els.id == index;
    });

    song_title.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

//ngẫu nhiên
const random_music = () => {
    if (index == songs.length) {
        index = 1
    } else {
        index = Math.floor((Math.random() * songs.length) + 1);
    }
    music.src = `audio/${index}.mp3`;
    poster_master_play.src =`img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `audio/${index}.mp3`;
    let song_title = songs.filter((els)=>{
        return els.id == index;
    });

    song_title.forEach(elss =>{
        let {songName} = elss;
        title.innerHTML = songName;
        download_music.setAttribute('download', songName);
    });

    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[index-1].style.background = "rgb(105, 105, 105, .1)";
    makeAllplays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
}

music.addEventListener('ended', ()=>{
    let b = shuffle.innerHTML;

    switch (b) {
        case 'repeat':
            repeat_music();
            break;
        case 'next':
            next_music();
            break;
        case 'random':
            random_music();
            break;
    }
})

//chức năng chon thể loại
// Lấy tất cả các tab và danh sách phát
const tabs = document.querySelectorAll('.tab-item');
const playlists = document.querySelectorAll('.menu_song');

// Xử lý sự kiện click trên tab
tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    // Loại bỏ lớp "active" trên tất cả các tab và danh sách phát
    tabs.forEach((tab) => tab.classList.remove('active'));
    playlists.forEach((playlist) => playlist.classList.remove('active'));
    // Thêm lớp "active" vào tab và danh sách phát được chọn
    tab.classList.add('active');
    playlists[index].classList.add('active');
  });
});

