setInterval(navOffset, 500);

function navOffset() {
    navbarNav = document.getElementById('navbarNav');
    sections = document.querySelectorAll('main section')
    if (navbarNav.classList.contains('show')) {
        for (var i = 0; i < sections.length; ++i) {
            sections[i].style.marginTop = '-13rem';
            sections[i].style.paddingTop = '13rem';
        }
    } else {
        for (var i = 0; i < sections.length; ++i) {
            sections[i].style.marginTop = '-3.5rem';
            sections[i].style.paddingTop = '4.5rem';
        }
    }
}