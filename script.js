const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav'); 
const lines = document.querySelectorAll('.line'); 
const links = document.querySelectorAll('.nav_link');

burger.addEventListener('click', () => { 
  lines.forEach(line => {
    line.classList.toggle('anim');
  });
   menu.classList.toggle('anim');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('anim');
    lines.forEach(line => {
      line.classList.remove('anim');
    });
  });
});