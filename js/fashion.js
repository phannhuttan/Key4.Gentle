function changeimg(a, b) {
    let c = document.getElementsByClassName('tab')
    for (i = 0; i < c.length; i++) {
        c[i].style.backgroundColor = 'white';

    }
    b.style.backgroundColor = 'rgb(73, 69, 69';
    document.getElementById(a).style.display = 'flex';
    switch (a) {
        case 'Celebrity-Style':
            document.getElementById('Street-Style').style.display = 'none';
            document.getElementById('Models').style.display = 'none';
            document.getElementById('Trends').style.display = 'none';
            break;
        case 'Street-Style':
            document.getElementById('Celebrity-Style').style.display = 'none';
            document.getElementById('Models').style.display = 'none';
            document.getElementById('Trends').style.display = 'none';
            break;
        case 'Models':
            document.getElementById('Street-Style').style.display = 'none';
            document.getElementById('Celebrity-Style').style.display = 'none';
            document.getElementById('Trends').style.display = 'none';
            break;
        case 'Trends':
            document.getElementById('Street-Style').style.display = 'none';
            document.getElementById('Models').style.display = 'none';
            document.getElementById('Celebrity-Style').style.display = 'none';
            break;
    }

}

function index(a) {
    a.style.display = 'none'
    let c = document.getElementById('index');
    c.style.display = 'block';
}

function index1() {
    let a = document.getElementById('show');
    let c = document.getElementById('index');
    c.style.display = 'none';
    a.style.display = 'flex';
}
window.onscroll = function() {
    var a = document.documentElement.scrollTop;
    b = document.getElementById('index');
    c = document.getElementById('show');
    if (a > 350) {
        b.style.display = 'none'
        c.style.display = 'none'
    } else {
        d = b.style.display;
        if (d == 'none') {
            b.style.display = 'none'
            c.style.display = 'block'
        } else {
            b.style.display = 'block'
            c.style.display = 'block'
        }
    }
}