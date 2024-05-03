let navBar = document.getElementById('nav-bar')
let burguer = document.getElementById('burguer')

burguer.addEventListener('click', (e) => {
    e.preventDefault();

    navBar.classList.toggle('active');
})