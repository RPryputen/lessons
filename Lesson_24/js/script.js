"use strict"


console.log('Vid 1 Task 4');
let showMessage;
if (2 > 1) {
	showMessage = function () {
		console.log('Message');
	}
}
showMessage();



console.log('Vid 2 Task 2');
let users = ['Ваня', "Иштван",];
users.push('Оля');
users.splice(users.indexOf("Иштван"), users.indexOf("Иштван"), "Петя");
let show = users.shift();
console.log(show);
users.unshift('Маша', 'Паша');
console.log(users);



console.log('Vid 2 Task 3');
let arr = ['Ваня', 'Иштван', 'Оля',];
let delIshtvan = arr.splice(arr.indexOf("Иштван"), arr.indexOf("Иштван"));
console.log(delIshtvan);



console.log('Vid 2 Task 4');
let str = 'Ваня,Иштван,Оля';
let result = str.split(',');
console.log(result);




console.log('Vid 3 Task 1');
const sayHi = document.querySelector('[data-say-hi]');
const value = sayHi.getAttribute('data-say-hi');
console.log(value);

console.log('Vid 3 Task 2');
const yonchis = document.getElementsByTagName('li');
let yonchi;
for (let item of yonchis) {
	if (item.textContent == 'Йончи') {
		yonchi = item;
	}
}
console.log(yonchi);

console.log('Vid 3 Task 3');
const like = document.getElementsByClassName('like');
console.log(like);

console.log('Vid 4 Task 1');
const width = document.documentElement;
const mainWidth = width.clientWidth;
const windowWidth = window.innerWidth;
console.log(windowWidth - mainWidth);

console.log('Vid 4 Task 2');
function scrollPage() {
	window.scrollTo({
		top: 100,
		left: 0,
		behavior: "smooth"
	});
};
setTimeout(scrollPage, 1000);

console.log('Vid 4 Task 3');
const elem1 = document.querySelector('.page');
const elem2 = document.querySelector('.js__first');
const elem3 = document.querySelector('.like');
const getElem1 = elem1.getBoundingClientRect();
const getElem2 = elem2.getBoundingClientRect();
const getElem3 = elem3.getBoundingClientRect();
console.log(getElem1);
console.log(getElem2);
console.log(getElem3);
