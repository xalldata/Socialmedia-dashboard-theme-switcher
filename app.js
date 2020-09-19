var body = document.querySelector('body');
var cards = document.querySelectorAll('.cards');
var smallCards = document.querySelectorAll('.small-card');
var left = document.querySelector('.left')

var number = document.querySelectorAll('.number');
var nbrSmall = document.querySelectorAll('.nbr-small');

var mode = document.querySelector('.mode');

var svg = document.querySelector('.mode .svg');
var darkMode = document.querySelector('.right span');

var subTitle = document.querySelector('.subtitle');


mode.addEventListener('click', function() {
    body.classList.toggle('darkbody');

    cards.forEach(card => {
        card.classList.toggle('darkcards');
    })    

    smallCards.forEach(smallCard => {
        smallCard.classList.toggle('darkcards');
    })

    number.forEach(number => {
        number.classList.toggle('dark-nbr');
    })

    nbrSmall.forEach(number => {
        number.classList.toggle('dark-nbr');
    })
    left.classList.toggle('dark-nbr');
    subTitle.classList.toggle('dark-nbr');
    darkMode.classList.toggle('dark-nbr');

    svg.classList.toggle('svg');
    svg.classList.toggle('svg-left');
})
