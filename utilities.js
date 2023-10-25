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