// SHOW MENU
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

// SHOW MENU
// Validate if constant exists

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

// MENU HIDDEN
// Validate if constant exists

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

// Remove menu mobile
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');

    navMenu.classList.remove('show-menu');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

// Chage background header
function scrollHeader() {
    const header = document.getElementById('header');

    // When the scroll is greater than 100 viewport height, add the scroll-header class to the header tag
    if (this.scrollY >= 100) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}

window.addEventListener('scroll', scrollHeader);

// SWIPER DISCOVER
var swiper = new Swiper('.discover__container', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 20,
    coverflowEffect: {
        rotate: 30,
    },
});

// VIDEO

const videoFile = document.getElementById('video-file'),
    videoButton = document.getElementById('video-button'),
    videoIcon = document.getElementById('video-icon');

function playPause() {
    if (videoFile.paused) {
        // play video
        videoFile.play();

        // Se cambia el ícono
        videoIcon.classList.add('ri-pause-line');
        videoIcon.classList.remove('ri-play-line');
    } else {
        // pausar video
        videoFile.pause();

        // Se cambia el ícono
        videoIcon.classList.add('ri-play-line');
        videoIcon.classList.remove('ri-paused-line');
    }
}

videoButton.addEventListener('click', playPause);

function finalVideo() {
    // Video ends, icon change

    videoIcon.classList.add('ri-play-line');
    videoIcon.classList.remove('ri-paused-line');
}

videoFile.addEventListener('ended', finalVideo);

// SHOW SCROLL UP

function scrollUp() {
    const scrollUp = document.getElementById('scroll-up');

    // When the scroll is higther than 200 viewport heigh, add the show-scroll

    if (this.scrollY >= 200) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}

window.addEventListener('scroll', scrollUp);

// DARK LIGHT THEME

const themeButton = document.getElementById('theme-button');
const darkTheme = 'dark-theme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
    themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line';

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
        darkTheme
    );
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](
        iconTheme
    );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    themeButton.classList.toggle(iconTheme);
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});

// SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    distance: '60px',
    duration: 2800,
    // Reset true
});

sr.reveal(
    `.home__data, .home__social-link, .home__info,
            .discover__container,
            .experience__data, .experience__overlay,
            .place__card,
            .sponsor__content`,
    {
        origin: 'top',
        interval: 100,
    }
);

sr.reveal(
    `.about__data,
            .video__description,
            .subscribe__description`,
    {
        origin: 'left',
    }
);

sr.reveal(
    `.about__img-overlay,
            .video__content,
            .subscribe__form`,
    {
        origin: 'right',
        interval: 100,
    }
);
