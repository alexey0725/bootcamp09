
  // Напишите скрипт имитирующий авторизацию администратора в панели управления. 
  // При загрузке страницы у посетителя запрашивается логин через prompt:
  
  //   - Если посетитель нажал Cancel — показывать alert с 
  // текстом 'Отменено пользователем!'
  //   - Если было введено что либо другое, что не совпадает со 
  //   значением константы adminLogin, 
  //      показывать alert с текстом 'Доступ запрещен, неверный логин!'   
  //   - Если был введен логин совпадающий со значением константы adminLogin, 
  //     спрашивать пароль через prompt.
    
  // При вводе пароля:
  
  //     - Если нажали Cancel, показывать alert с текстом 'Отменено пользователем!'
  //     - Если введен пароль который не совпадает со значением константы adminPassword,
  //       показывать alert с текстом 'Доступ запрещен, неверный пароль!'        
  //     - Если введён пароль который совпадает со значением константы adminPassword, 
  //       показывать alert с текстом 'Добро пожаловать!'
        
  // 🔔 PS: для удобства и чистоты кода сохраните в переменные
  //  сообщения отображаемые в alert

const adminLogin = 'admin';
const adminPassword = 'm4ngo1zh4ackz0r';
let userLogin = prompt("Введите логин");
let cancel = 'Отменено пользователем!';
let m ="Доступ запрещен, неверный логин!";
let p ="Добро пожаловать!";
let d ="Доступ запрещен, неверный пароль!";

if (userLogin==null) {alert(cancel);}
else if (userLogin!==adminLogin) {alert(m);}
else if (userLogin===adminLogin)
{
  let x = prompt("Введите пароль");
if (x==null) {alert(cancel);}
else if (x!==adminPassword) {alert(d);}
else if (x===adminPassword) {
  alert(p)
  ;}
}

 



