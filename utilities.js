

window.onload = function mobileCheck() {
    if (navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)) 
    {
        const links = document.getElementsByClassName("link");
        for (let i = 0; i < links.length; i++) {
            links[i].style.fontSize = "small";
        }

        const h1s = document.getElementsByTagName("h1");
        for (let i = 0; i < h1s.length; i++) {
            h1s[i].style.fontSize = "3rem";
        }

        const h2s = document.getElementsByTagName("h2");
        for (let i = 0; i < h2s.length; i++) {
            h2s[i].style.fontSize = "1rem";
        }

    }

}

window.onresize = function rsize() {

    const banner = document.getElementById("portraitBanner");
    const name = document.getElementById("nameHeader");

    if(window.innerWidth.toFixed() < 820) {
        banner.style.backgroundSize = "150vw";
        banner.style.height = "100px";
        name.style.top = "70%"
    }
    else {
        banner.style.backgroundSize = "100vw"
        banner.style.height = "0";
        name.style.top = "50%"
    }
}


function loadRSize() {
    const banner = document.getElementById("portraitBanner");
    const name = document.getElementById("nameHeader");

    if(window.innerWidth.toFixed() < 820) {
        banner.style.backgroundSize = "150vw";
        banner.style.height = "100px";
        name.style.top = "70%"
    }
    else {
        banner.style.backgroundSize = "100vw"
        banner.style.height = "0";
        name.style.top = "50%"
    }
}

function scrollWitness() {
    const transformTarget = document.getElementById("linkBanner");
    let top = transformTarget.getBoundingClientRect().top;

    const greet = document.getElementById("portraitBanner");
    let line = greet.getBoundingClientRect().bottom;

    if(top.toFixed() <= 0) {
        transformTarget.style.position = "fixed";
    }
    if(line.toFixed() >= 0) {
        transformTarget.style.position = "relative";
    }
}

function pageScroll(idTag) {
    const banner = document.getElementById("linkBanner");
    const target = document.getElementById(idTag);
    const offset = -(banner.offsetHeight);

    let y = target.getBoundingClientRect().top + window.pageYOffset + offset;
    if(document.documentElement.scrollTop.toFixed() < 500)
    {
        y += offset;
    }
    window.scrollTo({top: y, behavior: 'smooth'});

}