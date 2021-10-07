var random = Math.random();
if (random >= '0.5') {
    var rand = 1;
} else {
    var rand = 2;
}

var ab_cookie = Cookies.get('ab_cookie');
switch (ab_cookie) {
    case 'a':
        break;
    case 'b':
        redirectToB();
        break;
    default:
        if (rand == 1) {
        		Cookies.set('ab_cookie', 'a', { expires: 3 });
        } else {
        		Cookies.set('ab_cookie', 'b', { expires: 3 });
            redirectToB();
        }
}

function redirectToB() {
    window.location = "https://houseofom.com/online200new";
}
