// var flag = false;

// function navOffset() {
//     navbarNav = document.getElementById('navbarNav');
//     if (flag === false && navbarNav.classList.contains('show')) {
//         document.styleSheets[0].addRule('main section::before', 'top: 13rem;');
//         document.styleSheets[0].addRule('main section::after', 'top: 13rem;');
//         document.styleSheets[0].addRule('main section', 'margin-top: -13rem;');
//         document.styleSheets[0].addRule('main section', 'padding-top: 14rem;');
//         flag = true;
//     } else if (flag === true && !navbarNav.classList.contains('show')) {
//         document.styleSheets[0].addRule('main section::before', 'top: 3.5rem;');
//         document.styleSheets[0].addRule('main section::after', 'top: 3.5rem;');
//         document.styleSheets[0].addRule('main section', 'margin-top: -3.5rem;');
//         document.styleSheets[0].addRule('main section', 'padding-top: 4.5rem;');
//         flag = false;
//     }
// }
// setInterval(navOffset, 500);