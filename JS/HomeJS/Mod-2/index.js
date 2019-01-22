/*
  Написать следующий скрипт:
  
    - При загрузке страницы пользователю предлагается ввести через prompt число. 
      Число введенное пользователем записывается в массив чисел.
      
    - Операция ввода числа пользователем и сохранение в массив продолжается до
      тех пор, пока пользователь не нажмет Cancel в prompt. Используйте цикл do...while.
      
    - После того как пользователь прекратил ввод нажав Cancel, необходимо взять 
      массив введенных чисел, сложить общую сумму всех элементов массива и 
      записать ее в переменную. Используйте цикл for или for...of.
      
    - По окончанию ввода, если массив не пустой,
     вывести alert с текстом `Общая сумма чисел равна ${сумма}`
      
  🔔 PS: Делать проверку того, что пользователь ввел именно число, а не произвольный набор 
      символов, не обязательно. Если хотите, в случае некорректного ввода покажите alert с текстом 
      'Было введено не число, попробуйте еще раз', при этом результат prompt записывать 
      в массив чисел не нужно, после чего снова пользователю предлагается ввести число в prompt.
*/

// // Проблема не запускается второй цыкл

// let userInput;
// const numbers = [];
// let total = 0;

// do{
//  userInput = prompt("Введите число");
//  numbers.push(Number(userInput));
// //  console.log(numbers);
//  }while(userInput!==null)

//  numbers.pop();

// console.log(numbers);


// // for (let i=0; i< numbers.length;i++){
// //  total = total+numbers[i];
// //  console.log(total, numbers[i]); 
// // }

// for (let el of numbers){
//   total += el;
// }
// console.log(total);


  // ⚠️ ЗАДАНИЕ ПОВЫШЕННОЙ СЛОЖНОСТИ - ВЫПОЛНЯТЬ ПО ЖЕЛАНИЮ
  
  // Напишите скрипт имитирующий авторизацию пользователя.
  
  // Есть массив паролей зарегистрированных пользователей passwords. 
  
  // При посещении страницы, необходимо попросить пользователя ввести свой пароль,
  // после чего проверить содержит ли массив passwords пароль введенный пользователем.
  
  // Пароль можно ввести не верно всего n раз, кол-во хранится в переменной attempts.
  // Подсказка: используйте цикл do...while.
  // Если был введен пароль который есть в массиве passwords, вывести alert 
  // с текстом 'Добро пожаловать!' и прекратить спрашивать пароль в цикле.

//   Если был введен не существующий пароль, отнять от лимита попыток единицу, 
//   вывести alert с текстом "Неверный пароль, у вас осталось n попыток", 
//   где n это оставшийся лимит. 
  
//   После того как пользователь закрыл alert, запросить пароль снова. 
//   Продолжать запрашивать пароль до тех пор, пока пользователь не введет 
//   существующий пароль, не кончатся попытки или пока пользователь 
//   не нажмет Cancel в prompt.
//   Если закончились попытки, вывести alert с текстом "У вас закончились попытки, аккаунт заблокирован!"
//   Если пользователь нажмет Cancel, прекратить выполнение цикла.
// */

// const passwords = ['qwerty'];
// let attempts = 3;
// let input;

// // //  второй вариант: работает
// do {
//   input = prompt("Введите пароль");
   
//   if (input===null) break;  //если ввод cancel  тогда отменить цыклы дальше

//     if (passwords.includes(input)){
//        alert("Пароль поддвержден!");  // тогда прекратить попытки и остановить цыкл дальше
//        attempts=0;
//        break;
//      } else {
//       attempts--;        // если не поддтвержден тогда запретить вход
//       alert("Вход запрещен");
//     }
//     if (attempts==0){ alert ("У вас закончились попытки, аккаунт заблокирован!");}  
//       } while(attempts!==0)   // запускать цыкл пока поытки не будут равнятся 0
