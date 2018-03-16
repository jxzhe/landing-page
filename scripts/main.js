setInterval(navOffset, 500);

function navOffset() {
    navbarNav = document.getElementById('navbarNav');
    if (navbarNav.classList.contains('show')) {
        document.styleSheets[0].addRule('main section::before', 'top: 13rem !important;');
        document.styleSheets[0].addRule('main section::after', 'top: 13rem !important;');
        document.styleSheets[0].addRule('main section', 'margin-top: -13rem !important;');
        document.styleSheets[0].addRule('main section', 'padding-top: 14rem !important;');
    } else {
        document.styleSheets[0].addRule('main section::before', 'top: 3.5rem !important;');
        document.styleSheets[0].addRule('main section::after', 'top: 3.5rem !important;');
        document.styleSheets[0].addRule('main section', 'margin-top: -3.5rem !important;');
        document.styleSheets[0].addRule('main section', 'padding-top: 4.5rem !important;');
    }
}