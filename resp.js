burg = document.querySelector('.burg')
navbar = document.querySelector('.navbar')
all = document.querySelector('.all')


burg.addEventListener('click',()=>{
navbar.classList.toggle('h-nav-res');
all.classList.toggle('opag-res');
})