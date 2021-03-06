// +1) Скачати картинки
// +2) Наповнити розмітку
// +-3) Створити через js модалку + В правому верхньому кутку хрестик на закриття
// +-4) В модалці має зявлятися по центру картинка з підписом
// +-5) При кліку на оверлей чи хрестик модалка пропадає
// 6) Пункти 3,4,5, активуються при кліку на картинку галереї (делегування).
// 7) Якщо все працює переписати на клас.
// *
// 1) Додати до модалки кнопку превю
// 2) При кліку на неї збоку зявляється панель з міні-картинками
// 3) При кліку на маленьку картинку змінюється картинка в модалці.
// 4) До міні-картинок додається бордер який підсвічує активне зображення.


const container = document.querySelector(`.div`);   //вызываем тег див 
const startImg = document.querySelector(`.startImg`); // вызываем главные картинки 

//Все остальные переменные при задаче всплывающего окна (разового действия) 
//нужно помещать в главную функцию, Закрываение окна тоже в этой функции будет
    
const  boxBtn = function(e){
    let bigLink = e.target.dataset.big;    // это переменная которая показывает путь к 2фотке через Data, нужно ее объявлять до пользования

    const model = document.createElement(`div`);  // создаем тег див
    const image = document.createElement(`img`);  // создаем тег имг
    const modelClose = document.createElement(`div`);
    model.classList.add (`model`);                   // создаем клас модел в теге див 
    image.classList.add (`image`);  // создаем клас имейж в теге имейж 
    modelClose.classList.add (`modelClose`);
    image.setAttribute(`src`, bigLink);  //создаем атрибут и добовляем туда переменную на картинку
    image.setAttribute('alt', 'this is an image');
    container.after(model);                       //ставим тег в иерархию дом
    model.append(image);                            //ставим тег в иерархию дом
    model.append(modelClose);                 //ставим тег в иерархию дом

    const closeImg = function () {            //функция по удалению всплывающего фото окна
    model.remove();   
      }
    modelClose.addEventListener(`click`, closeImg);   //связываем клик с тегом и функцией по удалению окна на крестик
    model.addEventListener(`click`, closeImg);         //связываем клик с тегом и функцией по удалению окна нажав просто на поле дива
} 


container.addEventListener(`click`, boxBtn);  //связываем клик с основным тегом и функцией где будет проходить вся логика. 
// не можно в глобальную область писать переменные которые будут использоватся в функции, они не бдут работать

