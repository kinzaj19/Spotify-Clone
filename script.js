let shreya = document.querySelector(".shreya")
let arjit = document.querySelector(".arjit")
let atif = document.querySelector(".atif")
let currentsong = new Audio
let current = ""
let currentind = 0
let progres = document.querySelector(".bar");


async function currentwork(index) {
    if (currentsong != "") {
        currentsong.pause()
        currentsong.currentTime = 0
        currentsong = eachs[index].querySelector("audio")
        currentind = index
        currentsong.play()
        document.querySelector(".pl").classList.add("none")
        document.querySelector(".pause").classList.remove("none")
        document.querySelector(".downpartpic").src = eachs[index].querySelector("img").src
        document.querySelector(".sideimg").src = eachs[index].querySelector("img").src
        document.querySelector(".sidename").innerHTML = eachs[index].querySelector(".sname").innerHTML
        document.querySelector(".sideauthor").innerHTML = eachs[index].querySelector(".aname").innerHTML
        document.querySelector(".songname").innerHTML = eachs[index].querySelector(".sname").innerHTML
        document.querySelector(".authorname").innerHTML = eachs[index].querySelector(".aname").innerHTML







    }
    else {
        currentsong = eachs[index].querySelector("audio")
        currentind = index
        currentsong.play()
        document.querySelector(".pl").classList.add("none")
        document.querySelector(".pause").classList.remove("none")
    }
    document.querySelector(".imgg").classList.remove("dis")
    document.querySelector(".downdet").classList.remove("dis")
    document.querySelector(".sideimg1").classList.remove("dis")
    document.querySelector(".sidename").classList.remove("dis")
    document.querySelector(".sideauthor").classList.remove("dis")
    let progress = document.querySelector(".bar");

    let aud = currentsong.duration
    let min = Math.floor(aud / 60)
    let sec = Math.floor(aud % 60)
    if (sec >= 0 && sec <= 9) {
        document.querySelector(".end").innerHTML = `${min}:0${sec}`
    }
    else {
        document.querySelector(".end").innerHTML = `${min}:${sec}`
    }





    currentsong.addEventListener("timeupdate", () => {
        let aud = currentsong.currentTime
        if (aud==currentsong.duration){
            currentind=(currentind + 1) % 5
            currentwork(currentind)
        }
        let min = Math.floor(aud / 60)
        let sec = Math.floor(aud % 60)
        if (sec >= 0 && sec <= 9) {
            document.querySelector(".start").innerHTML = `${min}:0${sec}`
        }
        else {
            document.querySelector(".start").innerHTML = `${min}:${sec}`
        }

        let per = (aud / currentsong.duration) * 100
        document.querySelector(".bar").value = per

        let value = progress.value;

        progress.style.background =
            `linear-gradient(
            to right,
            #1DB954 0%,
            #1DB954 ${value}%,
            #535353 ${value}%,
            #535353 100%
        )`;


    })

    progress.addEventListener("input", () => {
        let value = progress.value;
        let ct = (value * currentsong.duration) / 100
        currentsong.currentTime = ct
    });


}



let eachs = document.getElementsByClassName("eachsong")
for (let index = 0; index < 5; index++) {
    eachs[index].addEventListener("click", () => {
        currentwork(index)
    })


}

function load(vari) {
    vari.querySelector("audio").onloadedmetadata = () => {

        let aud = vari.querySelector("audio").duration;

        let min = Math.floor(aud / 60);
        let sec = Math.floor(aud % 60);

        if (sec >= 0 && sec <= 9) {
            vari.querySelector(".time").innerHTML = `${min}:0${sec}`;
        } else {
            vari.querySelector(".time").innerHTML = `${min}:${sec}`;
        }
    };
}



shreyainfo=["https://thfvnext.bing.com/th/id/OIP.cXAzujQgr0Ga6MF0mJ1YNgHaEK?r=0&o=7&cb=thfvnextfalcon2rm=3&rs=1&pid=ImgDetMain&o=7&rm=3","52,112,955 monthly listeners","Indian vocal prodigy Shreya Ghoshal began her impressive career at age four. Raised in a ..."]
atifinfo=["https://mmnews.tv/wp-content/uploads/2022/01/Atif-Aslam-2-scaled.jpg","29,786,687 monthly listeners","Atif Aslam is a celebrated Pakistani singer, songwriter, and actor known for his soul-stirring voice ..."]
arijitinfo=["https://thfvnext.bing.com/th/id/R.50366e7b873cf8c69078835ffcf522a1?rik=5iHlWTsu%2bqlzKw&pid=ImgRaw&r=0","55,061,546 monthly listeners","Celebrating and sharing love for music with all of you ..."]
let shreyasong = ["./assets/Lyrical _ Saiyaara Reprise - Female Song _ Ahaan, Aneet _ Tanishk, Faheem, Arslan _ Shreya _ Irshad.mp3", "./assets/Nagada Sang Dhol Full Video - Ram-Leela _ Shreya Ghoshal _Ranveer & Deepika _ Osman Mir.mp3", "./assets/Teri Ore _ Full Audio _Singh Is Kinng _Akshay K_Katrina K_Pritam_Rahat Fateh Ali Khan_Shreya Ghoshal.mp3", "./assets/Full Video_ Yeh Ishq Hai _ Jab We Met _ Kareena Kapoor, Shahid Kapoor _ Pritam _ Shreya Ghoshal.mp3", "./assets/Sun Raha Hai Na Tu Female Version By Shreya Ghoshal Aashiqui 2 Full Video Song _.mp3"]
let shreyasongname = ["Saiyaara", "Nagada Sang Dhol Baje", "Teri Ore", "Yeh Ishq Haye", "Sunn Raha Hai"]
let shreyaalbum = [
    "Saiyaara",
    "Ram-Leela",
    "Singh Is King",
    "Jab We Met",
    "Aashiqui 2"
]
let shreyapic = ["https://tse3.mm.bing.net/th/id/OIP.5hAkarzrskAjQ4hOtMZ1cgHaG3?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3", "https://images.justwatch.com/poster/45392606/s718/goliyon-ki-raasleela-ram-leela.%7Bformat%7D", "https://wallpapercave.com/wp/wp2754534.jpg", "https://stat5.bollywoodhungama.in/wp-content/uploads/2016/03/50386814.jpg", "https://tse1.explicit.bing.net/th/id/OIP.II6XXKUnyxkguCMS5OiXZwHaHa?r=0&cb=thfvnextfalcon2&w=1500&h=1500&rs=1&pid=ImgDetMain&o=7&rm=3"]

let shreyasingers = [
    "Mohit Chauhan, Shreya Ghoshal",
    "Shreya Ghoshal, Osman Mir",
    "Rahat Fateh Ali Khan, Shreya Ghoshal",
    "Shreya Ghoshal",
    "Shreya Ghoshal"
];

shreya.addEventListener("click", () => {
    progres.value = 0
    let songs = document.querySelectorAll(".eachsong")
    document.querySelector(".playpic").src = shreya.querySelector(".sing").src
    document.querySelector(".name").innerHTML = shreya.querySelector(".title").innerHTML
    for (let index = 0; index < songs.length; index++) {
        songs[index].querySelector("audio").src = shreyasong[index]
        songs[index].querySelector(".songcover").src = shreyapic[index]
        songs[index].querySelector(".sname").innerHTML = shreyasongname[index]
        songs[index].querySelector(".aname").innerHTML = shreyasingers[index]
        songs[index].querySelector(".album").innerHTML = shreyaalbum[index]

        load(songs[index])








    }
    
    let cre=document.querySelector(".credits")
    cre.querySelector(".creditpic").src=shreyainfo[0]
    cre.querySelector(".creditname").innerHTML="Shreya Goshal"
    cre.querySelector(".listen").innerHTML=shreyainfo[1]
    cre.querySelector(".descrip").innerHTML=shreyainfo[2]
    cre.classList.remove("dis")
    document.querySelector(".green").classList.remove("dis")
    document.querySelector(".info").classList.remove("dis")
    document.querySelector(".line").classList.remove("dis")
    document.querySelector(".song").classList.remove("dis")
    document.querySelector(".imgg").classList.add("dis")
    document.querySelector(".downdet").classList.add("dis")
    document.querySelector(".sideimg1").classList.add("dis")
    document.querySelector(".sidename").classList.add("dis")
    document.querySelector(".sideauthor").classList.add("dis")
    document.querySelector(".creditlist").classList.add("dis")
    

    

    


    current = "shreya"
})

let arjitsong = ["./assets/Apna Bana Le - Bhediya _ Varun Dhawan, Kriti Sanon_ Sachin-Jigar, Arijit Singh, Amitabh Bhattacharya.mp3", "./assets/Mast Magan Full Song with Lyrics _ 2 States _ Arijit Singh _ Arjun Kapoor, Alia Bhatt (1).mp3", "./assets/DARKHAAST Full Video Song _  SHIVAAY _ Arijit Singh & Sunidhi Chauhan _ Ajay Devgn _ T-Series.mp3", "./assets/Hawayein Lyrical Video - Jab Harry Met Sejal _ Shah Rukh Khan, Anushka _ Arijit Singh _ Pritam.mp3", "./assets/Ik Vaari Aa Full Song _ Raabta _ Sushant Singh Rajput & Kriti Sanon _ Pritam Arijit Singh Amitabh B (1).mp3"]

let arjitsongname = ["Apna Bana Le", "Mast Magan", "Darkhaast", "Hawayein", "Ik Vaari Aa"];

let arjitalbum = [
    "Bhediya",
    "2 States",
    "Shivaay",
    "Jab Harry Met Sejal",
    "Raabta"
];
let arjitpic = ["https://tse4.mm.bing.net/th/id/OIP.MVMIptUt_wD1Pm3tVrdARQHaHa?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3", "https://tse4.mm.bing.net/th/id/OIP.DKH4T2_T1DHMeX5YOMKfjQHaHa?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3", "https://i.pinimg.com/originals/b5/49/56/b549565620413efc5b50f0cfb77e1585.jpg", "https://wallpapers.oneindia.com/ph-1024x768/2017/07/jab-harry-met-sejal_149940505910.jpg", "https://m.media-amazon.com/images/I/A172a5FxVaL._SL1500_.jpg"]

let arijitsingers = [
    "Arijit Singh, Sachin-Jigar",
    "Arijit Singh, Chinmayi Sripada",
    "Arijit Singh, Sunidhi Chauhan",
    "Arijit Singh",
    "Arijit Singh"
];



arjit.addEventListener("click", () => {
    progres.value = 0
    let songs = document.querySelectorAll(".eachsong")
    document.querySelector(".playpic").src = arjit.querySelector(".sing").src
    document.querySelector(".name").innerHTML = arjit.querySelector(".title").innerHTML
    for (let index = 0; index < songs.length; index++) {

        songs[index].querySelector(".songcover").src = arjitpic[index]
        songs[index].querySelector(".sname").innerHTML = arjitsongname[index]
        songs[index].querySelector(".aname").innerHTML = arijitsingers[index]
        songs[index].querySelector(".album").innerHTML = arjitalbum[index]
        songs[index].querySelector("audio").src = arjitsong[index]
        load(songs[index])





    }
    document.querySelector(".green").classList.remove("dis")
    document.querySelector(".info").classList.remove("dis")
    document.querySelector(".line").classList.remove("dis")
    document.querySelector(".song").classList.remove("dis")
    document.querySelector(".song").classList.remove("dis")
    let cre=document.querySelector(".credits")
    cre.querySelector(".creditpic").src=arijitinfo[0]
    cre.querySelector(".creditname").innerHTML="Arijit Singh"
    cre.querySelector(".listen").innerHTML=arijitinfo[1]
    cre.querySelector(".descrip").innerHTML=arijitinfo[2]
    document.querySelector(".credits").classList.remove("dis")
    document.querySelector(".imgg").classList.add("dis")
    document.querySelector(".downdet").classList.add("dis")
    document.querySelector(".sideimg1").classList.add("dis")
    document.querySelector(".sidename").classList.add("dis")
    document.querySelector(".sideauthor").classList.add("dis")
    document.querySelector(".creditlist").classList.add("dis")



    current = "arijit"
})

let atifsong = ["./assets/Atif Aslam_ Pehli Dafa Song (Video) _ Ileana D’Cruz _ Latest Hindi Song 2017 _ T-Series.mp3", "./assets/Dil Diyan Gallan Song _ Tiger Zinda Hai _ Salman Khan, Katrina Kaif _ Atif Aslam _ Vishal & Shekhar.mp3", "./assets/Tera Hone Laga Hoon Lyrical - Ajab Prem Ki Ghazab Kahani _ Atif Aslam _ Ranbir, Katrina K _ Pritam.mp3", "./assets/Pehli Nazar Mein - Aatif Aslam (Lyrics).mp3", "./assets/Be Intehaan - Atif Aslam( lyrics video).mp3"]

let atifsongname = ["Pehli Dafa", "Dil Diyan Gallan", "Tera Hone Laga Hoon", "Pehli Nazar Me", "Be Intehaan"];

let atifalbum = [
    "Pehli Dafa (Single)",
    "Tiger Zinda Hai",
    "Ajab Prem Ki Ghazab Kahani",
    "Race",
    "Race 2"
];
let atifpic = ["https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/7e/06/f5/7e06f500-2d05-879b-18a1-e901d1a43d65/8903431633866_cover.jpg/1200x1200bf-60.jpg", "https://thfvnext.bing.com/th/id/R.9e05cb0c10d4548c1f21aa637b448eac?rik=m%2fd0g73sClku6w&riu=http%3a%2f%2fwww.yashrajfilms.com%2fimages%2fdefault-source%2fMusic%2ftiger-zinda-hai.jpg%3fsfvrsn%3dd925cacc_6&ehk=ArodtWWfgFQiQSPvzChNM7sa2jtkOUg79DTtlo4EyX0%3d&risl=&pid=ImgRaw&r=0", "https://i.pinimg.com/originals/1f/90/32/1f9032ce3b8dfd1bfd130a2926946a3f.jpg", "https://m.media-amazon.com/images/I/51uObzHhYgL._AC_.jpg", "https://3.bp.blogspot.com/-cvKJv9bV6hw/UQAggrQiEJI/AAAAAAAABRs/kF3i1ZdFmYM/s1600/307098,xcitefun-race-2-wallpaper-1.jpg"]

let atifsingers = [
    "Atif Aslam",
    "Atif Aslam",
    "Atif Aslam, Alisha Chinai",
    "Atif Aslam",
    "Atif Aslam, Sunidhi Chauhan"
];

atif.addEventListener("click", () => {
    progres.value = 0
    let songs = document.querySelectorAll(".eachsong")
    document.querySelector(".playpic").src = atif.querySelector(".sing").src
    document.querySelector(".name").innerHTML = atif.querySelector(".title").innerHTML
    for (let index = 0; index < songs.length; index++) {
        songs[index].querySelector("audio").src = atifsong[index]
        songs[index].querySelector(".songcover").src = atifpic[index]
        songs[index].querySelector(".sname").innerHTML = atifsongname[index]
        songs[index].querySelector(".aname").innerHTML = atifsingers[index]
        songs[index].querySelector(".album").innerHTML = atifalbum[index]

        load(songs[index])







    }
    document.querySelector(".green").classList.remove("dis")
    document.querySelector(".info").classList.remove("dis")
    document.querySelector(".line").classList.remove("dis")
    document.querySelector(".song").classList.remove("dis")
    let cre=document.querySelector(".credits")
    cre.querySelector(".creditpic").src=atifinfo[0]
    cre.querySelector(".creditname").innerHTML="Atif Aslam"
    cre.querySelector(".listen").innerHTML=atifinfo[1]
    cre.querySelector(".descrip").innerHTML=atifinfo[2]
    document.querySelector(".credits").classList.remove("dis")
    document.querySelector(".imgg").classList.add("dis")
    document.querySelector(".downdet").classList.add("dis")
    document.querySelector(".sideimg1").classList.add("dis")
    document.querySelector(".sidename").classList.add("dis")
    document.querySelector(".sideauthor").classList.add("dis")
    document.querySelector(".creditlist").classList.add("dis")

    current = "atif"
})



function randomnum() {
    return (Math.floor(Math.random() * 5))
}
document.querySelector(".green").addEventListener("click", () => {
    let r = randomnum()
    currentwork(r)
})
document.querySelector(".pl").addEventListener("click", () => {
    document.querySelector(".pl").classList.add("none")
    document.querySelector(".pause").classList.remove("none")
    currentsong.play()

})

document.querySelector(".pause").addEventListener("click", () => {
    document.querySelector(".pause").classList.add("none")
    document.querySelector(".pl").classList.remove("none")
    currentsong.pause()

})





let back = document.querySelector(".back")
back.addEventListener("click", () => {
    currentind = (currentind - 1 + 5) % 5
    currentwork(currentind)



}
)
let forward = document.querySelector(".forward")
forward.addEventListener("click", () => {
    currentind = (currentind + 1) % 5
    currentwork(currentind)
})

document.querySelector(".home").addEventListener("click", () => {
    document.querySelector(".green").classList.add("dis")
    document.querySelector(".info").classList.add("dis")
    document.querySelector(".line").classList.add("dis")
    document.querySelector(".song").classList.add("dis")
    document.querySelector(".imgg").classList.add("dis")
    document.querySelector(".downdet").classList.add("dis")
    document.querySelector(".sideimg1").classList.add("dis")
    document.querySelector(".sidename").classList.add("dis")
    document.querySelector(".sideauthor").classList.add("dis")
    document.querySelector(".credits").classList.add("dis")

    currentsong.pause()

    document.querySelector(".start").innerHTML = "0:00"
    document.querySelector(".end").innerHTML = "0:00"
    progres.value = 0
    currentsong.currentTime = 0
    document.querySelector(".playpic").src = "https://s.yimg.com/fz/api/res/1.2/dtvM_G7ikjx9dqqPPKGMmA--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpbGw7aD00MTI7cHhvZmY9NTA7cHlvZmY9MTAwO3E9ODA7c3M9MTt3PTM4OA--/https://i.pinimg.com/736x/6c/ba/74/6cba747f7bd375dc945fcf3219bca5c8.jpg"
    document.querySelector(".name").innerHTML = "Welcome Back!"
    document.querySelector(".creditlist").classList.remove("dis")





})


