
// console.log(document);
console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = ITEMLIST;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all);
console.log(document.all[10]);
document.all[10].textContent = 'Hello';
console.log(document.images);

console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1] = textContent= 'Hello Bold';
li[1].style.fontWeight = 'bold';
li[1].style.fontColor = 'green';

var titl = document.getElementsByClassName('title');
titl[0].style.fontWeight = 'bold';
titl[0].style.color = "green";

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 5px black';

var input = document.querySelector('input');
input.value = 'your name here'

var submit = document.querySelector('input[type="submit"]');
submit.value = "SEND";

var item = document.querySelector('.list-group-item');
item.style.color = "red";

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = "yellow";

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = "blue";

var secondItem = document.querySelector('.list-group-item:nth-child(3)');
secondItem.style.color = "pink";


var odd = document.querySelector('li:nth-child(odd)');
var even = document.querySelector('li:nth-child(even)');

for(var i = 0; i < odd.length; i++){
  odd[i].style.backgroundColor = '#f4f4f4'; 
  even[i].style.backgroundColor = '#ccc';
}
