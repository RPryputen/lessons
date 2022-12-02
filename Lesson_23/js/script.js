"use strict";


console.log("Видео 3");


console.log("While 1 to 5");
let num = 1;
while (num != 6) {
	console.log(num);
	num++;
}

console.log("do while 1 to 5");
let num2 = 1;
do {
	console.log(num2);
	num2++;
} while (num2 != 6);

console.log("for 1 to 5");
for (let num3 = 1; num3 != 6; num3++) {
	console.log(num3);
}

console.log("for to while");
let num4 = 0;
while (num4 < 3) {
	num4++;
	console.log(`Число: ${num4}`);
}

console.log("stop cycle #1 on size 1");
firstFor: for (let num5 = 0; num5 < 2; num5++){	
	for (let size = 0; size < 3; size++) {	
		console.log(size);	
		if (size == 1 ){		
		break firstFor;		
		}
	}	
}



console.log("Видео 4");



console.log("task 1");
let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
console.log(numOne);

console.log("task 2");
let value = parseFloat("135.58px");
console.log(value);

console.log("task 3");
let value2 = 58 + "Фрилансер"; {
	if (isNaN(value2)) {
		console.log('Результат выражениря NaN')
	}
}

console.log("task 4");
console.log(Math.max(10, 58, 39, -150, 0));

console.log("task 5");
console.log(Math.floor(58.858))




console.log("Видео 5");

console.log("task 2");
let text = 'фрилансер';
console.log(text[5]);

console.log("task 4");
let upperCase = 'фрилансер';
console.log(upperCase.toUpperCase());

console.log("task 5");
let lan = 'фрилансер';
console.log(lan.slice(3,6));





