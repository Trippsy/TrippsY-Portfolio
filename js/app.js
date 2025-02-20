const menu = document.querySelector('#menu')
const menuBar = document.querySelector('#menu-bar')
menu.addEventListener('click', function () {
  let Display = menuBar.style.display
  Display = 'none'
  if (menuBar.style.display === 'none') {
    menuBar.style.display = 'block'
    console.log(Display);

  } else {
    menuBar.style.display = 'none'
    console.log(Display);
  }
})
// const button = document.querySelector('.button');
// const inputs = document.querySelectorAll('input');
// const form = document.querySelector('form');
// form.addEventListener('submit',function(event) {

//   event.preventDefault();
//   const name = event.currentTarget.name.value;
//   console.log(name);
//   const email = event.currentTarget.email.value;
//   console.log(email);
//   const project = event.currentTarget.project.value;
//   console.log(project);
//   const message = event.currentTarget.message.value;
//   console.log(message);
// });