'use strict';
const button = document.querySelector('.amazon');
let num = 0;
button.addEventListener('click', function () {
  num++;
  console.log(num);
});

console.log(button);
