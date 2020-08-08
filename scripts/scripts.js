let stations = [{
        name: "Dancehall",
        songs: [{
                title: "Visegrip",
                artist: "QQ",
                image: "assets/visegrip.jpeg",
                sound: "assets/audio/01 QQ - Vise-Grip (CLEAN)[Sexting Riddim][Stadic x Jonny Blaze x Dj Perf].mp3",
            },
            {
                title: "Convo",
                artist: "Govana",
                image: "assets/Govana-Convo.jpg",
                sound: "assets/audio/GOVANA-HAMANTS-CONVO.mp3",
            },
        ],

    },
    {
        name: "R&B",
        songs: [{
                title: "Be Honest",
                artist: "Jorja Smith ft Burna Boy",
                image: "assets/jorjasmith-be-honest.jpg",
                sound: "assets/audio/Jorja_Smith_-_Be_Honest_ft_Burna_Boy_talkglitz.tv.mp3",
            },
            {
                title: "Bussit",
                artist: "Ari Lennox",
                image: "assets/ari-lennox-bussit.jpg",
                sound: "assets/audio/Ari-Lennox-Ft-Dreamville-BUSSIT-HipNplay.com.mp3",
            }
        ]

    },
    {
        name: "Hip-Hop",
        songs: [{
                title: "Yea Yea",
                artist: "Pop Smoke",
                image: "assets/Pop-Smoke-Shoot-for-the-Stars-Aim-for-the-Moon-Deluxe-Album-cover.jpg",
                sound: "assets/audio/06-Yea-Yea.mp3",
            },
            {

                title: "All Star",
                artist: "Lil Tecca ft Lil Tjay",
                image: "assets/allstar-lil-tecca.png",
                sound: "assets/audio/Lil_Tecca_Ft_Lil_Tjay_-_All_Star_stannova.com.mp3",
            }
        ]
    },
]

// console.log(stations);

let changeShuffle = () => {
    let stationChange = Math.floor(Math.random() * 3);
    // console.log(stationChange);
    let stationPlaying = stations[stationChange].name;
    let songChange = Math.floor(Math.random() * 2);
    // console.log(songChange);
    let songPlaying = stations[stationChange].songs[songChange].title;
    let songArtist = stations[stationChange].songs[songChange].artist;
    let musicUrl = stations[stationChange].songs[songChange].sound;
    let songCover = stations[stationChange].songs[songChange].image;
    
    // console.log(songPlaying);
    console.log("Now Playing:", songPlaying, "by", songArtist);

    document.getElementById("station").innerHTML ="Station:  " + stationPlaying;
    document.getElementById("artist").innerHTML = "Artist: " + songArtist;
    document.getElementById("song").innerHTML = "Song: " + songPlaying;
    document.getElementById("img").src = songCover;
    document.getElementById("music").setAttribute('src', musicUrl);
    document.getElementById("music").load();
    document.getElementById("music").play();
    return stationPlaying, songPlaying;
};

// changeShuffle();

