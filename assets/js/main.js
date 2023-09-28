
                    /*FECHAMENTO DE MENU*/

const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'), 
    navClose = document.getElementById('nav-close')

                    /*Menu Fechado*/    
/* Validar se a Constante (NavToggle Existir) */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

                    /*Menu Aberto*/    
/* Validar se a Constante (NavFechar) existir */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

                    /*Remover Menu Mobile*/
const navLink = document.querySelectorAll('.nav_link')

const actionLink = () =>{
    const navMenu = document.getElementById('nav-menu')
    // Quando clicamos em cada nav_link (Link do menu) , removemos a classe show-menu. Fecha o menu ao clicar em algum link do menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', actionLink))


                    /*SOMBRA DO CABEÇALHO*/
const ShadowHeader = () =>{
    const header = document.getElementById('header')
    // Quando a rolagem for maior que 50 altura da janela de visualização, adicione a classe shadow-header
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                        : header.classList.remove('shadow-header')
}
window.addEventListener('scroll', ShadowHeader)



/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
    contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
    e.preventDefault()

    // serviceID - templateID - #form - publicKey
    

    emailjs.sendForm('service_t5dgiyf','template_zyhu5s1','#contact-form','wQPw0AlTRY7hVJSKN')
    .then(() => {
        // Show sent message
        contactMessage.textContent = ' Message sent successfully ✅'

        // Remove message after five seconds
        setTimeout(() => {
            contactMessage.textContent = ''
        },5000)

        // Clear input fields
        contactForm.reset() 

    }, () => {
        // Show error message
        contactMessage.textContent = 'Message not sent (service error) ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)




/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)




/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }    
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

    // Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

    // We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'    

    // We Validate if the user previously shose a topic
    if(selectedTheme){
        // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
        document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
        themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
    }

    // Activate / deactivate the theme manually with the button
    themeButton.addEventListener('click', () =>{
        // Add or remove the dark / icon theme
        document.body.classList.toggle(darkTheme)
        themeButton.classList.toggle(iconTheme)
        // We save the theme and the current icon thar the user chose
        localStorage.setItem('selected-theme', getCurrentTheme())
        localStorage.setItem('selected-icon', getCurrentIcon())
    })

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true // Animations Repeat
})

sr.reveal('.home_perfil, .about_image, .contact_mail', {origin: 'right'})
sr.reveal('.home_name, .home_info, .about_container, .section_title-1, .about_info, .contact_social, .contact_data', {origin: 'left'})
sr.reveal('.services_card, .projects_card', {interval: 100})