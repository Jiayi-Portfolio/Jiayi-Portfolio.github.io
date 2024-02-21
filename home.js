var images=[
    "url(images/being_cover.jpg)",
    "url(images/CosmicR_cover.jpg)",
    "url(images/moai_cover.png)",
    "url(images/fungiCity_cover.png)",
    "url(images/moon_rover_cover.png)",
    "url(images/cat_impact_cover.png)",
    "url(images/crossing_liminal_cover.png)",
    "url(images/face_cover.png)",
    "url(images/nora_cover.jpg)",
    "url(images/odyssey_cover.png)",
    "url(images/nora_cover.jpg)",
    "url(images/ItsGoingToBeLate_cover.png)",
]

var links=[
    "project_1.html",
    "project_2.html",
    "project_4.html",
    "project_3.html",
    "project_5.html",
    "https://lijiayii.itch.io/cat-impact",
    "https://itch.io/jam/games-now-jam-autumn2023/rate/2363964",
    "https://newmedia.dog/courses/audiovisual-studio/2023/jiayi-li/",
    "https://youtu.be/yCFVTMXcpxM?si=J8U6TcDyNoD9lz5P",
    "https://lijiayii.itch.io/gravity-odyssey",
    "https://readymag.website/u3749671887/3946875/otherworks/",
]

var randomImage=document.getElementById('randomImage');

function randomImg(){
    console.log("Randomize images");
    var randomIndex=Math.floor(Math.random()*(images.length));
    randomImage.style.backgroundImage=images[randomIndex];
    randomImage.href=links[randomIndex];
}

setInterval(randomImg,2000);