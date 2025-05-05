document.addEventListener('DOMContentLoaded', function() {

    // --- Menu Toggle Logic ---
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const navLinksMobile = document.querySelectorAll('.nav-links a');
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active') && window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active') && window.innerWidth <= 768) {
             navLinks.classList.remove('active');
        }
    });

    // --- Hide/Show Navbar on Scroll (Mobile Only) Logic ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    let navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (window.innerWidth <= 768) {
            if (currentScrollTop > lastScrollTop && currentScrollTop > navbarHeight) {
                 if (!navLinks.classList.contains('active')) {
                    navbar.classList.add('hidden');
                 }
            } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 0) {
                 navbar.classList.remove('hidden');
            }
        } else {
             if (navbar.classList.contains('hidden')) {
                navbar.classList.remove('hidden');
             }
        }
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    });

    window.addEventListener('resize', () => {
        navbarHeight = navbar.offsetHeight;
         if (window.innerWidth <= 768) {
             const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
             if (currentScrollTop > navbarHeight && lastScrollTop > navbarHeight) {
                  if (!navLinks.classList.contains('active')) {
                    navbar.classList.add('hidden');
                 }
             } else {
                 navbar.classList.remove('hidden');
             }
         } else {
              navbar.classList.remove('hidden');
         }
    });

    // --- AOS Initialization ---
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });

});
