const buttonElement = document.querySelector('#menu');

const sidebarData = [
    {
        fa: 'محصولات',
        en: 'Products'
    },
    
];

buttonElement.addEventListener('click', () => {

    const sectionElement = document.querySelector('section');

    const hide=document.querySelector('.header').classList.toggle('hide');

    sectionElement.toggleAttribute('sidebar-hidden');
    sectionElement.classList.remove('on')
});
const buttoneMenumobil = document.querySelector('#mobile');
buttoneMenumobil.addEventListener('click',()=> {
    const divMobile = document.querySelector('.burgermenu');
    const off = document.querySelector('.header').classList.toggle('on');
    const sectionElement = document.querySelector('section');
    sectionElement.removeAttribute('sidebar-hidden');
    sectionElement.classList.remove('hide')
})