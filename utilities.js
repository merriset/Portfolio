

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
    } 
}



function scrollWitness() {
    const element = document.documentElement;
    const transformTarget = document.getElementById("linkBanner");
    let y = element.scrollTop;
    if(y.toFixed() > 500) {
        transformTarget.style.position = "fixed";
    }
    else {
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