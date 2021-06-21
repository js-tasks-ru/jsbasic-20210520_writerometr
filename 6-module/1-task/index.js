/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    let body = document.querySelector('body');
    
    let tbl = body.appendChild(document.createElement('table'));
     this.elem = tbl;
    
    let tblHead = tbl.appendChild(document.createElement('thead'));
    let tblBody = tbl.appendChild(document.createElement('tbody'));
    let tblHeadTr = tblHead.appendChild(document.createElement('tr'));

    tblHeadTr.appendChild(document.createElement('th')).textContent = 'Имя';
    tblHeadTr.appendChild(document.createElement('th')).textContent = 'Возраст';
    tblHeadTr.appendChild(document.createElement('th')).textContent = 'Зарплата';
    tblHeadTr.appendChild(document.createElement('th')).textContent = 'Город';

    for (let i = 0; i < rows.length; i++){
  this.name = rows[i].name;
   this.age = rows[i].age;
   this.salary = rows[i].salary;
   this.city = rows[i].city;
   
  

   
   let tblBodyTr = tblBody.appendChild(document.createElement('tr'));
   tblBodyTr.appendChild(document.createElement('td')).textContent = this.name;
   tblBodyTr.appendChild(document.createElement('td')).textContent = this.age;
   tblBodyTr.appendChild(document.createElement('td')).textContent = this.salary;
   tblBodyTr.appendChild(document.createElement('td')).textContent = this.city;
   tblBodyTr.appendChild(document.createElement('td')).insertAdjacentHTML('afterbegin', "<button class='deleteButton'>X</button>");
   tblBodyTr.lastChild.onclick = () => tblBodyTr.remove();
    } 
  let buttons = document.querySelectorAll('.deletedeleteButton');
  console.log(buttons);
  }
  
}