var images=[
    "url(images/being_cover.jpg)",
    "url(images/CosmicR_cover.jpg)",
    "url(images/moai_cover.png)",
    "url(images/fungiCity_cover.png)",
    "url(images/cat_impact_cover.png)",
    "url(images/crossing_liminal_cover.png)",
]

var links=[
    "project_1.html",
    "project_2.html",
    "project_1.html",
    "project_2.html",
    "https://lijiayii.itch.io/cat-impact",
    "https://itch.io/jam/games-now-jam-autumn2023/rate/2363964",

]

var randomImage=document.getElementById('randomImage');

function randomImg(){
    console.log("Randomize images");
    var randomIndex=Math.floor(Math.random()*(images.length));
    randomImage.style.backgroundImage=images[randomIndex];
    randomImage.href=links[randomIndex];
}

setInterval(randomImg,2000);