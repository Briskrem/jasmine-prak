const hamburger1 = document.querySelector('.hamburger');
const hamburger2 = document.querySelector('.hamburger-2');
const sidebar = document.querySelector('aside');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('.section')


hamburger1.addEventListener('click', e => {
    console.log('cheese')
    sidebar.classList.add('active');
});

hamburger2.addEventListener('click', e => {
    sidebar.classList.remove('active');
});

navbar.addEventListener('click', e => {
    e.preventDefault()
    
    if(e.target.matches('.nav-anchor')){
        sections.forEach(x => {
            if(x.id.toLocaleLowerCase() !== e.target.classList[0]) x.style.display = 'none'
            else x.style.display = 'flex'
        })
    }
})
