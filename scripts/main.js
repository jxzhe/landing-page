setInterval(dataWowOffset, 1000);
function dataWowOffset() {
    wow = document.getElementsByClassName("wow");
    if (document.documentElement.clientWidth <= 575) {
        for (var i = 0; i < wow.length; ++i) {
            wow[i].setAttribute('data-wow-offset', '320');
        }
    } else {
        for (var i = 0; i < wow.length; ++i) {
            wow[i].setAttribute('data-wow-offset', '128');
        }
    }
}