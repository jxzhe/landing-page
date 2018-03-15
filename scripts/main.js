setInterval(navOffset, 500);
function navOffset() {
    navbarNav = document.getElementById('navbarNav');
    nav = document.getElementsByClassName('nav-offset');
    if (navbarNav.classList.contains('show')) {
        for (var i = 0; i < nav.length; ++i) {
            nav[i].style.marginTop = '-13rem';
            nav[i].style.paddingTop = '13rem';
        }
        document.body.setAttribute('data-offset', '144'); // somehow not working
    } else {
        for (var i = 0; i < nav.length; ++i) {
            nav[i].style.marginTop = '-4rem';
            nav[i].style.paddingTop = '4rem';
        }
        document.body.setAttribute('data-offset', '0'); // somehow not working
    }
}