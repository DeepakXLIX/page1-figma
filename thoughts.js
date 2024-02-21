let btn1 = document.querySelector('#thoughts .container .row .common-cls:nth-child(2)');
let btn2 = document.querySelector('#thoughts .container .row .common-cls:last-child');

let show_more1 = () => {
    let classes = btn2.className;
    if (!(classes.includes('my-display-block'))) {
        btn1.classList.add('my-display-none');
        btn2.classList.remove('my-display-none');
    }
}
let show_more2 = () => {
    let classes = btn1.className;
    if (!(classes.includes('my-display-block'))) {
        btn2.classList.add('my-display-none');
        btn1.classList.remove('my-display-none');
    }
}

