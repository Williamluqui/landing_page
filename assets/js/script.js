
// /*=============== SCROLL REVEAL ANIMATION ===============*/
// const sr = ScrollReveal({
//     origin: 'top',
//     distance: '60px',
//     duration: 2500,
//     delay: 400,
//     reset: true
// })


// sr.reveal(`.menu`)
// sr.reveal(`.img`, {delay: 600})
// sr.reveal(`.content-foto`, {delay: 610})
// sr.reveal(`.containerh1`, {delay: 750})
// sr.reveal(`.fab`, {delay: 800})
// sr.reveal(`.fas`, { delay: 850})

// sr.reveal(`.content-foto:after`, {delay: 1000})

const bottom = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
    delay: 400,
})
bottom.reveal(`.animacao`, {delay: 800})

/* Menu Hamburger mobile */
const btnMobile = document.getElementById('btn-mobile');

function menu(event){
    if (event.type === 'touchstart') event.preventDefault() ;
    const nav = document.getElementById('nav');
    nav.classList.toggle('active')
}
btnMobile.addEventListener('click', menu );
btnMobile.addEventListener('touchstart', menu );

/* efeito digitação */
const element = document.querySelector(' h5');
const textToType = ` Desenvolvedor Web Backend`;
for (let i in textToType) {
    setTimeout(() => element.textContent += textToType[i], 150 * i);
    
}

const tabs = document.querySelectorAll('[data-target]'),
      tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc =>{
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t =>{
            t.classList.remove('filter-tab-active')
        })
        tab.classList.add('filter-tab-active')
    })
})
