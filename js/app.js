const btnRed = document.querySelector('.btn-red')
const text = document.querySelectorAll('.text')
const btnBlue = document.querySelector('.btn-blue')
const btnWhite = document.querySelector('.btn-white')
const active = document.querySelector('.active')
const title = document.querySelectorAll('.title')

btnRed.addEventListener('click', function () {
    text.forEach(el => {
        el.classList.remove('activeWhite')
        el.classList.remove('activeBlue')
        el.classList.add('activeRed')
    });
})

btnBlue.addEventListener('click', function () {
    text.forEach(el => {
        el.classList.remove('activeWhite')
        el.classList.remove('activeRed')
        el.classList.add('activeBlue')
    });
})

btnWhite.addEventListener('click', function () {
    text.forEach(el => {
        el.classList.remove('activeBlue')
        el.classList.remove('activeRed')
        el.classList.add('activeWhite')
    });
})

btnRed.addEventListener('click', function () {
    title.forEach(el => {
        el.classList.remove('activeBlue')
        el.classList.remove('activeWhite')
        el.classList.add('activeRed')
    });
})

btnBlue.addEventListener('click', function () {
    title.forEach(el => {
        el.classList.remove('activeWhite')
        el.classList.remove('activeRed')
        el.classList.add('activeBlue')
    });
})

btnWhite.addEventListener('click', function () {
    title.forEach(el => {
        el.classList.remove('activeBlue')
        el.classList.remove('activeRed')
        el.classList.add('activeWhite')
    });
})

console.log(btnBlue);
console.log(btnRed);
console.log(btnWhite);