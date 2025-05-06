// Chờ cho toàn bộ cấu trúc DOM của trang được tải xong
document.addEventListener('DOMContentLoaded', function() {

    // --- Chức năng Menu Mobile ---
    // Lấy tham chiếu đến icon hamburger và menu navigation
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.getElementById('navLinks'); // Dùng ID đã đặt trong HTML

    // Kiểm tra xem các phần tử có tồn tại không trước khi thêm event listener
    if (hamburger && navLinks) {
        // Thêm sự kiện click vào icon hamburger
        hamburger.addEventListener('click', function() {
            // Toggle class 'active' cho menu links
            // Class 'active' này sẽ được dùng trong CSS để hiển thị/ẩn menu
            navLinks.classList.toggle('active');

            // Tùy chọn: Thay đổi icon hamburger thành icon đóng (X)
            // Cần thêm icon đóng vào HTML hoặc tạo qua CSS ::before/::after
            // Ví dụ: hamburger.querySelector('i').classList.toggle('fa-bars');
            // hamburger.querySelector('i').classList.toggle('fa-times');
        });

        // Tùy chọn: Đóng menu khi click vào một liên kết trong menu (Hữu ích cho các trang single-page)
        const navLinkItems = navLinks.querySelectorAll('a');
        navLinkItems.forEach(item => {
            item.addEventListener('click', function() {
                navLinks.classList.remove('active');
                // Tùy chọn: Đảm bảo icon trở lại hamburger
                // hamburger.querySelector('i').classList.remove('fa-times');
                // hamburger.querySelector('i').classList.add('fa-bars');
            });
        });
    } else {
        console.error("Không tìm thấy phần tử .hamburger hoặc #navLinks. Vui lòng kiểm tra lại HTML.");
    }


    // --- Khởi tạo Thư viện AOS (Animate On Scroll) ---
    // Kiểm tra xem thư viện AOS đã được tải chưa trước khi khởi tạo
    if (typeof AOS !== 'undefined') {
        AOS.init({
            // Các tùy chọn cho AOS (bạn có thể chỉnh sửa)
            duration: 1000, // Thời gian animation tính bằng ms
            easing: 'ease-in-out', // Kiểu animation
            once: true, // Chỉ animation khi cuộn xuống lần đầu
            mirror: false, // Không lặp lại animation khi cuộn lên/xuống
            anchorPlacement: 'top-bottom', // Vị trí element so với viewport để trigger animation
        });
         console.log("AOS đã được khởi tạo.");
    } else {
         console.error("Thư viện AOS chưa được tải. Vui lòng kiểm tra lại đường dẫn trong thẻ <script>.");
    }


    // --- Chú ý về Quotes Slider ---
    // Logic cho Quotes Slider phức tạp hơn và thường cần thư viện JS chuyên dụng
    // hoặc code tùy chỉnh để xử lý vuốt, nút điều hướng, auto-play,...
    // CSS hiện tại đã cho phép cuộn ngang.
    // Nếu bạn muốn một slider chuyên nghiệp, hãy tìm hiểu về SwiperJS, Slick Carousel, hoặc các thư viện tương tự.
    console.log("Chức năng Quotes Slider đầy đủ tính năng không có trong script cơ bản này. CSS hỗ trợ cuộn ngang.");

});
