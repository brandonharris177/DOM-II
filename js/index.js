// Your code goes here
const logoHeading = document.querySelector(".logo-heading")

const nav = document.querySelector('.nav');
nav.addEventListener('mousedown', navClick)

function navClick(e){
    logoHeading.style.color = "blue";
    // console.log(`Its Working!`)
}

const homeBtn = document.getElementById("home");
homeBtn.addEventListener('mousedown', homeClick)

function homeClick(e){
    // console.log(`Its Working!`)
    const goHome = document.createElement('a');
    goHome.textContent = "Go Home!";
    goHome.style.fontWeight = "bold";
    goHome.href = "www.google.com";
    homeBtn.style.display = "none";
    nav.prepend(goHome);
    e.stopPropagation();
}

const aboutUsBtn = document.getElementById("about-us");
aboutUsBtn.addEventListener('dblclick', aboutClick);

function aboutClick(e){
    // console.log(`Its Working!`)
    const mysteryPic = document.createElement('img');
    const mysteryText = document.createElement('p')
    mysteryPic.src = "img/mystery.jpg";
    mysteryPic.style.width = "20%";
    mysteryText.textContent = "YOU SHALL KNOW NOTHING ABOUT US!!!"
    nav.append(mysteryPic);
    nav.append(mysteryText);
    const Text =  document.querySelectorAll("p");
    Text.style.display = "none";
}

const blogBtn = document.getElementById("blog");

blogBtn.addEventListener('click', blogClick);

function blogClick(e){
    // console.log(`Its Working!`);
    e.preventDefault()
};

const contatUsBtn = document.getElementById("contact-us");

const welcome = document.querySelector(".intro h2")

const intro = document.querySelector(".intro")

welcome.addEventListener('copy', multipy)

function multipy(e){
    const more = document.createElement('p');
    more.textContent = "Wubaluabadubdub!!!";
    more.style.fontWeight = "bold";
    more.style.fontSize = "4rem";
    intro.prepend(more);
    console.log(`Its Working!`);
}


const mapPic = document.getElementById("map-pic");

const waterwayPic = document.getElementById("waterway-pic");

const covePic = document.getElementById("cove-pic");

covePic.addEventListener('mouseenter', covePicEnter)
covePic.addEventListener('mouseleave', covePicLeave)

contentDestination = document.querySelector(".content-destination");

const akbar = document.createElement('p');
    akbar.textContent = "Its a Trap!!!";
    akbar.style.fontWeight = "bold";
    akbar.style.fontSize = "8rem";

function covePicEnter(e){
    // console.log(`Its Working!`)
    akbar.style.display = 'flex';
    contentDestination.append(akbar);
}

function covePicLeave(e){
    // console.log(`Its Still Working!`)
    akbar.style.display = 'none';
}

const funInSunBtn = document.getElementById("fun-in-sun");
funInSunBtn.addEventListener('wheel', funScroll)

function funScroll(e){
    funInSunBtn.style.display = 'none';
    // console.log(`Its Working!`)
}

const mountainDestination = document.getElementById("mountain-destination");

const mountainBtn = document.getElementById("mountain-btn");
mountainBtn.addEventListener('mouseover', mountainovr);

function mountainovr(e){
    mountainBtn.style.display = 'none';
    const bebo = document.createElement('p');
    bebo.textContent = "You wanna die Morty get in BEBO!";
    bebo.style.fontWeight = "bold";
    mountainDestination.append(bebo);
    // console.log(`Its Working!`)
}

const islandBtn = document.getElementById("island-btn");

const Body = document.querySelector('body');

window.addEventListener("resize", function(){
    // Body.style.display = 'none';
    const gottaGo = document.createElement('p');
    gottaGo.textContent = "They are messing with the screen Morty we gotta GO!!";
    gottaGo.style.fontWeight = "bold";
    gottaGo.style.fontSize = "10rem";
    Body.prepend(gottaGo);
});