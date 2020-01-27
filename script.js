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
                  console.log('obj: ', obj.company);
                  dataWrap.innerHTML += `<div class="row">
                        <div class="value">${obj.id}</div>
                        <div class="value">${obj.name}</div>
                        <div class="value">${obj.username}</div>
                        <div class="value">${obj.email}</div>
                        <div class="value">${obj.address.city}</div>
                        <div class="value">${obj.phone}</div>
                        <div class="value">${obj.website}</div>
                        <div class="value">${obj.company.name}</div>
                        </div>
                  `;                                
            }

      }                    
    });
    
    
          
});