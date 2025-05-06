document.addEventListener('DOMContentLoaded', function() { // Sửa 'Document' thành 'document'

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


    // --- Horizontal Scroll Animation for Quotes Slider ---
    // Lấy khung chứa slider và các item trích dẫn
    const quotesSliderWrapper = document.querySelector('.quotes-slider-wrapper');
    const quoteItems = document.querySelectorAll('.quotes-slider-wrapper .quote-item');

    // Chỉ chạy code nếu tìm thấy khung slider và có item
    if (quotesSliderWrapper && quoteItems.length > 0) {

        // Tùy chọn cho Intersection Observer
        const observerOptions = {
            root: quotesSliderWrapper, // Thiết lập khung cuộn ngang làm "root" (khung nhìn)
            rootMargin: '0px', // Không thêm margin cho root
            threshold: 0.5 // Kích hoạt khi 50% của item nằm trong khung nhìn
        };

        // Hàm callback sẽ chạy khi một item giao nhau với root
        const observerCallback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Nếu item nằm trong khung nhìn
                    entry.target.classList.add('is-in-view'); // Thêm class để kích hoạt CSS animation
                    // Nếu chỉ muốn animation chạy 1 lần duy nhất cho mỗi item, bỏ comment dòng dưới:
                    // observer.unobserve(entry.target);
                } else {
                    // Nếu item đi ra khỏi khung nhìn
                     entry.target.classList.remove('is-in-view'); // Xóa class để có thể re-animate khi cuộn lại
                }
            });
        };

        // Tạo Intersection Observer
        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Bắt đầu theo dõi từng item trích dẫn
        quoteItems.forEach(item => {
            observer.observe(item);
        });
    }
    // --- Kết thúc Horizontal Scroll Animation ---


    // --- AOS Initialization ---
    AOS.init({
      duration: 800,
      once: true,
      mirror: false
    });

});
