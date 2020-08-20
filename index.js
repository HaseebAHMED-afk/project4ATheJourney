var background = document.querySelector(".background")

var frames3 = [
    {background:"#6696ba"},
    {background:"#e2e38b"},
    {background:"#e7a553"},
    {background:"#7e4b68"},
    {background:"#292965"},
    {background:"#6696ba"}
]

var timing3 = {
    duration:20000,
    iterations : Infinity
}

background.animate(frames3 , timing3 )

var cactus2 = document.querySelector(".cactus2");

var frames = [
    {transform:"translateX(600px)"},
    {transform:"translateX(-1920px)"}
]

var timing = {
    duration : 3000,
    iterations : Infinity
}

var cactus2 = cactus2.animate(frames , timing);

var streetLight = document.querySelector(".streetLight");

var frames1 = [
    {transform:"translateX(600px)"},
    {transform:"translateX(-1920px)"}
]

var timing1 = {
    duration : 3000,
    iterations: Infinity
}

var streetLight = streetLight.animate(frames1,timing1)

var cactus1 = document.querySelector(".cactus1");

var frames2 = [
    {transform:"translateX(600px)"},
    {transform:"translateX(-1920px)"}
]

var timing2 = {
    duration : 25000,
    iterations: Infinity
}

cactus1 = cactus1.animate(frames2,timing2);


setInterval(()=>{
    if (cactus2.playbackRate > 0.4){
        cactus2.playbackRate *= .5;
    streetLight.playbackRate *= .5;
    cactus1.playbackRate *= .5;
    }
    
},2000)


document.addEventListener("click",()=>{
    
        cactus2.playbackRate *= 1.5;
        cactus1.playbackRate *= 1.5;
        streetLight.playbackRate *= 1.5;
    
   
})

// var sun = document.querySelector(".sun");

// var frames4 = [
//     {transform:"translateY(-300px)"}
// ]

// var timing4 = {
//     duration: 2000,
//     iterations: Infinity,
//     direction: "alternate"
// }

// sun.animate(frames4 , timing4);



// var moon = document.querySelector(".moon");

// var frames5 = [
//     {transform:"translateY(-300px)"}
// ]

// var timing5 = {
//     duration: 2000,
//     iterations: Infinity,
//     direction: "alternate"
// }

// moon.animate(frames5 , timing5);

