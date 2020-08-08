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
                title: "Slow Wine Bass Line",
                artist: "Lloyd",
                image: "assets/Lloyd-Ft.-Teddy-Riley-E28093-Slow-Wine-Bass-Line-Mp3-Audio-Download-300x300.jpg",
                sound: "assets/audio/Lloyd-Slow-Wine-Bass-Line-ft-Teddy-Riley.mp3.mp3",
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
                title: "Need Me",
                artist: "JI the Prince of NY",
                image: "assets/J.I-the-Prince-of-N.Y-Hood-Life-Krisis-Vol.-1-cover-art.jpg",
                sound: "",
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
    let stationPlaying = stations[stationChange];
    let songChange = Math.floor(Math.random() * 2);
    // console.log(songChange);
    let songPlaying = stations[stationChange].songs[songChange].title;
    let songArtist = stations[stationChange].songs[songChange].artist;
    let musicUrl = stations[stationChange].songs[songChange].sound;
    
    // console.log(songPlaying);
    console.log("Now Playing:", songPlaying, "by", songArtist);

    document.getElementById("station").innerHTML ="Station:  " + stations[stationChange].name;
    document.getElementById("artist").innerHTML = "Artist: " + stations[stationChange].songs[songChange].artist;
    document.getElementById("song").innerHTML = "Song: " + stations[stationChange].songs[songChange].title;
    document.getElementById("img").src = stations[stationChange].songs[songChange].image;
    document.getElementById("music").setAttribute('src', stations[stationChange].songs[songChange].sound);
    document.getElementById("music").load();
    document.getElementById("music").play();
    // document.getElementById("music").src= stations[stationChange].songs[songChange].music;
    return stationPlaying, songPlaying;
};

// changeShuffle();