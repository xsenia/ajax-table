document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    const dataWrap = document.getElementById('data-wrap');
    const filterHeader = document.getElementById('filter-header');


    const request = new XMLHttpRequest();
    request.open('GET', 'http://jsonplaceholder.typicode.com/users', true);
    request.setRequestHeader('Content-type', 'application/json');
    request.send();


    
    request.addEventListener('readystatechange', () => {
         
      if (request.readyState === 4 && request.status === 200) {

            const data = JSON.parse(request.responseText);

            const headerData = data[0];
            for (let key in headerData) {
                  filterHeader.innerHTML += '<div class="keys">' + key + '</div>';
            }  

            for (let i = 0; i < data.length; i++) {
                  let obj = data[i];
                  for (let key in obj) {
                        dataWrap.innerHTML += '<div class="value">' + obj[key] + '<div>';
                  }                  
            }

      }                    
    });
    
    
          
});