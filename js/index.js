// Your code goes here
const nav = document.querySelector('.nav');

const homeBtn = document.getElementById("home");
homeBtn.addEventListener('click', homeClick)

function homeClick(e){
    console.log(`Its Working!`)
    const goHome = document.createElement('a');
    goHome.textContent = "Go Home!";
    goHome.style.fontWeight = "bold";
    nav.prepend(goHome);
}

const aboutUsBtn = document.getElementById("about-us");
aboutUsBtn.addEventListener('click', aboutClick)

function aboutClick(e){
    console.log(`Its Working!`)
    const mysteryPic = document.createElement('img');
    const mysteryText = document.createElement('p')
    mysteryPic.src = "img/mystery.jpg";
    mysteryPic.style.width = "20%";
    mysteryText.textContent = "YOU SHALL KNOW NOTHING ABOUT US!!!"
    nav.append(mysteryPic);
    nav.append(mysteryText);
    const Text =  document.querySelectorAll("p");Text.style.display = "none";
}

const blogBtn = document.getElementById("blog");


const contatUsBtn = document.getElementById("contact-us");

const mapPic = document.getElementById("map-pic");

const waterwayPic = document.getElementById("waterway-pic");

const covePic = document.getElementById("cove-pic");

const funInSunBtn = document.getElementById("fun-in-sun");

const mountainBtn = document.getElementById("mountain-btn");


const islandBtn = document.getElementById("island-btn");