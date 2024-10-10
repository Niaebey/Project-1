// Aos Script..................
AOS.init(
    {
    duration:2000,
    offset: 80,
   }
);
// Typed JS Script..............
const typed = new Typed('.typerText', {
    strings: ['Web developer', 'App Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true,
}); 
    

// Nav Menu JS Script................
let NavLinks = document.querySelector('.nav-links');
let Open = document.querySelector('.open');
let Close = document.querySelector('.close');

Open.addEventListener('click', () => {
    NavLinks.style.display='block'
    Open.style.display='none'
    Close.style.display='inline-block'
})
Close.addEventListener('click', () => {
    NavLinks.style.display = 'none'
    Open.style.display = 'inline-block'
    Close.style.display = 'none'
});


// Nav Link JS Script................
let AllNavLink = document.querySelectorAll('.nav-links li a');

const removeActive =()=>AllNavLink.forEach(item => {
    item.classList.remove('active')
})

AllNavLink.forEach(item => {
    item.addEventListener('click', () => {
        removeActive();
        item.classList.add('active');
    })
});