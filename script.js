document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const dataWrap = document.getElementById('dataWrap');

    const request = new XMLHttpRequest();    
      
    request.open('GET', 'http://jsonplaceholder.typicode.com/users', true); //настроить ajax запрос. Первый параметр - метод отправки сообщения GET, Post. Второй - URL -  куда будет отправлен запрос, это может  быть локальный адрес. Третий -  asinc = true  по умолчанию.
    
    request.setRequestHeader('Content-type', 'application/json'); //мы осуществляем http запрос, а он состоит из заголовка и боди. Тут устнавливается заголовок. Первый парам - имя, второй - его значение

    request.send(); //метод открывает соединение и отправляет запрос. и параметром передает данные на сервер
    
    request.addEventListener('readystatechange', () => {
         
          if (request.readyState === 4 && request.status === 200) {
                //переводим из JSON в объект: 
                const data = JSON.parse(request.responseText);                

                for (let i = 0; i < data.length; i++) {
                  let obj = data[i];
                  for (let key in obj) {
                        dataWrap.innerHTML += '<tr><td>' + key + '</td><td>' + obj[key] + '</td></tr>';
                  }
                  
                }
           
          }  else {
            dataWrap.innerHTML = 'Ошибка';
          }                      
    });
    
    
          
});