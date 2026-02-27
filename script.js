const colors = [
  '#FFB3BA',
  '#BAE1FF',
  '#BAFFC9',
  '#FFFFBA',
  '#D5BAFF'
];

const tds = document.querySelectorAll('td');

tds.forEach(td => {
  let timeoutId;

  td.addEventListener('mouseenter', () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    td.style.backgroundColor = randomColor;
    td.style.color = '#989aa0';      // 글자색 흰색

    if (timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = null;
    }
  });

  td.addEventListener('mouseleave', () => {
    timeoutId = setTimeout(() => {
      td.style.backgroundColor = '';
      td.style.color = '';         // 글자색 원래대로
      timeoutId = null;
    }, 500); // 0.5초 뒤에 딱 사라짐
  });
});


// script.js
const nameToggle = document.querySelector('.name-toggle');
const content = document.getElementById('content');

nameToggle.addEventListener('click', () => {
  content.classList.toggle('show');
});
