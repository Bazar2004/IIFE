// №264
// №1⊗jsPmFCInr

// Определите, не запуская код, что выведется в консоль:

// !function() {
// 	console.log('!');
// }();

// Выведется !
// №2⊗jsPmFCInr

// Определите, не запуская код, что выведется в консоль:

// function() {
// 	console.log('!');
// }();

// Выведется синтак ошибка, так как не читается, нужно поставить +,! или сделать функцию в скобки
// №265
// №1⊗jsPmFCATV

// Определите, не запуская код, что выведется в консоль:

// let result = function() {
// 	return '!';
// }();
		
// console.log(result);

// Выведется !

// №2⊗jsPmFCATV

// Определите, не запуская код, что выведется в консоль:

// let result = function() {
// 	return '!';
// };
		
// console.log(result);

// выведется функция  ƒ () {
// 	return '!';
// }
// №3⊗jsPmFCATV

// Определите, не запуская код, что выведется в консоль:
// let result = function() {
// 	return '!';
// };
		
// console.log(result());

// Выведется !

// №266
// let result = function() {return 1;}() 
// 	+ function() {return 2;}(); 
// console.log(result);

// Выведется 3

// №267 
// №1⊗jsPmFCRB

// Определите, не запуская код, что выведется в консоль:

// let result = (function() {
// 	return '!';
// }());

// console.log(result);

// выведется !
// №2⊗jsPmFCRB

// Определите, не запуская код, что выведется в консоль:

// let result = (function() {
// 	return '!';
// })();

// console.log(result);
// // выведется !
// №3⊗jsPmFCRB

// Определите, не запуская код, что выведется в консоль:

// let result = (function() {
// 	return '!';
// });

// console.log(result);

// выведется функция ƒ () {
// 	return '!';
// }
// №4⊗jsPmFCRB

// Определите, не запуская код, что выведется в консоль:
// let result = (function() {
// 	return '!';
// });

// console.log(result());

// выведется !

// №268 
// №1⊗jsPmFCPr

// Определите, не запуская код, что выведется в консоль:
// (function(num1, num2) {
// 	console.log(num1 + num2);
// })(1, 2);

// выведется 3
// №269 
// №1⊗jsPmFCMC

// Допишите следующий код так, чтобы его запуск алертом выводил '!':

// (function() {
// 	return function(){
//         return function(){
//             console.log('!')
//         };
//     };
// })()()();
// №2⊗jsPmFCMC
// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// (function(num1) {
//     return function(num2) {
//         console.log(num1 + num2);
//     }
// })(1)(2);
// №3⊗jsPmFCMC

// Допишите следующий код так, чтобы его запуск выводил сумму переданных параметрами чисел:

// (function() {
// 	// какой-то код
// })(1)(2)(3);
// (function(num1) {
//     return function(num2) {
//         return function(num3) {
//             console.log(num1 + num2 + num3);
//         }
//     }
// })(1)(2)(3);
// №270
// №1⊗jsPmFCPS

// Определите, не запуская код, что выведется в консоль:
// let str = 'str';

// (function() {
// 	console.log(1);
// })();

// выведется 1
// №2⊗jsPmFCPS

// Определите, не запуская код, что выведется в консоль:

// let str = 'str'

// (function() {
// 	console.log(1);
// })();

// выведется 1
// №271
// №1⊗jsPmFCPS

// Определите, не запуская код, что выведется в консоль:
// let str = 'str';

// (function() {
// 	console.log(1);
// })();

// выведется 1
// №2⊗jsPmFCPS

// Определите, не запуская код, что выведется в консоль:
// let str = 'str'

// (function() {
// 	console.log(1);
// })();


// Выведется ошибка так как функция продолжается, необходимо
//  было поставить точку с запятой перед созданием функции.

// №272

// №1⊗jsPmFCCl

// Не подсматривая в мой код, 
// самостоятельно реализуйте такой же счетчик.

// let func = (function(){
//     let num =1;

//     return function() {
//         console.log(num);
//         num++;
//     }
// })();

// func()


// №2⊗jsPmFCCl

// Модифицируйте работу счетчика так, чтобы он считал до 5,
//  а потом отсчет начинался сначала.

// let func = (function(){
//     let num = 1;
//     return function() {
//         console.log(num);
//         num++;
//         if (num > 5) {
//             num = 1;
//         }
//     }
// })();

// func()
// func()
// func()
// func()
// func()
// func()