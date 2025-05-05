
document.addEventListener('DOMContentLoaded', function() {

    // --- Menu Toggle Logic ---
    const navLinks = document.getElementById('navLinks');
    const hamburger = document.querySelector('.hamburger'); // Lấy phần tử hamburger

    // Thêm lắng nghe sự kiện click cho hamburger thay vì dùng onclick trong HTML
    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Tùy chọn: Đóng menu khi click vào một link trên mobile
    const navLinksMobile = document.querySelectorAll('.nav-links a');
    navLinksMobile.forEach(link => {
        link.addEventListener('click', () => {
            // Kiểm tra nếu menu đang mở và trên mobile trước khi đóng
            if (navLinks.classList.contains('active') && window.innerWidth <= 768) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Tùy chọn: Đóng menu khi click ra ngoài (trên mobile)
    document.addEventListener('click', function(event) {
        // Kiểm tra nếu click nằm ngoài navLinks và hamburger, menu đang mở và trên mobile
        const isClickInsideNav = navLinks.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);

        if (!isClickInsideNav && !isClickOnHamburger && navLinks.classList.contains('active') && window.innerWidth <= 768) {
             navLinks.classList.remove('active');
        }
    });


    // --- Hide/Show Navbar on Scroll (Mobile Only) Logic ---
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    // Lấy chiều cao ban đầu của navbar. Cần cập nhật khi resize.
    let navbarHeight = navbar.offsetHeight;

    window.addEventListener('scroll', function() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop; // Lấy vị trí cuộn hiện tại

        if (window.innerWidth <= 768) { // Khớp với breakpoint mobile trong CSS của bạn
            if (currentScrollTop > lastScrollTop && currentScrollTop > navbarHeight) {
                 // Cuộn xuống (current > last) VÀ đã cuộn qua khỏi chiều cao navbar
                 // Tránh ẩn nếu menu mobile đang mở
                 if (!navLinks.classList.contains('active')) {
                    navbar.classList.add('hidden'); // Ẩn navbar
                 }
            } else if (currentScrollTop < lastScrollTop || currentScrollTop <= 0) {
                 // Cuộn lên (current < last) hoặc ở đầu trang
                 navbar.classList.remove('hidden'); // Hiện navbar
            }
        } else {
             // Trên desktop hoặc màn hình lớn hơn (> 768px), đảm bảo navbar luôn hiển thị
             // Phòng trường hợp class 'hidden' còn sót lại khi resize
             if (navbar.classList.contains('hidden')) {
                navbar.classList.remove('hidden');
             }
        }

        // Cập nhật vị trí cuộn cuối cùng cho lần tiếp theo
        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop; // Đảm bảo không âm
    });

    // Cập nhật chiều cao navbar khi resize và xử lý trạng thái hiển thị
    window.addEventListener('resize', () => {
        navbarHeight = navbar.offsetHeight; // Tính toán lại chiều cao navbar sau khi resize

        // Sau khi resize, kiểm tra lại trạng thái hiển thị nếu đang ở mobile
         if (window.innerWidth <= 768) {
             const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
             // Nếu đang cuộn xuống và qua khỏi chiều cao mới
             if (currentScrollTop > navbarHeight && lastScrollTop > navbarHeight) {
                  // Tránh ẩn nếu menu mobile đang mở
                  if (!navLinks.classList.contains('active')) {
                    navbar.classList.add('hidden');
                 }
             } else { // Ngược lại, đảm bảo nó hiện
                 navbar.classList.remove('hidden');
             }
         } else {
              // Trên desktop, đảm bảo visible sau khi resize
              navbar.classList.remove('hidden');
         }
    });


    // --- AOS Initialization ---
    // Khởi tạo AOS sau khi DOM đã sẵn sàng
    AOS.init({
      // Tùy chọn cấu hình AOS toàn cục
      duration: 800, // Thời gian animation (miliseconds)
      once: true,    // Chỉ chạy animation một lần khi scroll vào
      mirror: false  // Không lặp lại animation khi scroll lên/xuống
      // Các tùy chọn khác có thể xem trong tài liệu của AOS
    });

}); // Kết thúc DOMContentLoaded
