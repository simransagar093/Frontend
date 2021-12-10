burger= document.querySelector('.burger')
navbar= document.querySelector('.navbar')
navlist = document.querySelector('.nav-list')
rightnav= document.querySelector('.rightnav')


burger.addEventListener('click' , () => {
    rightnav.classList.toggle('v-class-resp');
    navlist.classList.toggle('v-class-resp');

    navbar.classList.toggle('h-nav-resp');


})



// this piece of code is for contact us
document.querySelector('#contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
  });


//   for logiconst
$(document).ready(function(){
    $("form").submit(function(){
      alert("Great Job !");
    });
  });