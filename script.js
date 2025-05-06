/* ========================================
  Google Fonts Import
  Using Poppins for a clean, modern look
  ========================================
*/
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');


/* ========================================
  Global Styles & Reset
  ========================================
*/
:root {
    /* Màu lấy cảm hứng từ my-self-reliance */
    --primary-color: #6B8E73; /* Xanh lá trầm */
    --secondary-color: #FAF7F0; /* Kem nhạt */
    --accent-color: #E0D8CC; /* Nâu/Xám nhạt */
    --text-color: #3A3A3A; /* Văn bản đậm */
    --text-light: #5A5A5A; /* Văn bản nhạt */
    --background-color: #ffffff; /* Nền trắng sạch */
    --border-color: #ddd; /* Viền */

    /* Khoảng cách - Điều chỉnh lớn hơn để thoáng đãng */
    --spacing-small: 15px;
    --spacing-medium: 30px;
    --spacing-large: 60px;
    --spacing-xl: 80px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Poppins', sans-serif; /* Sử dụng font Poppins */
    line-height: 1.7; /* Tăng line-height cho dễ đọc */
    color: var(--text-color);
    background-color: var(--background-color);
    overflow-x: hidden;
    font-size: 1rem;
}

/* Base Link Styles */
a {
    text-decoration: none;
    color: var(--primary-color);
    transition: color 0.3s ease, opacity 0.3s ease;
}

a:hover {
    color: #5a7a64; /* Màu đậm hơn khi hover */
    opacity: 0.9;
}

/* Container for centering content */
.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-medium); /* Padding hai bên */
}

/* ========================================
  Navbar
  ========================================
*/
.navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--spacing-small) var(--spacing-medium);
    background-color: var(--background-color);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08); /* Bóng đổ nhẹ hơn */
    position: sticky;
    top: 0;
    width: 100%;
    z-index: 1000;
}

.nav-left {
    display: flex;
    align-items: center;
}

.nav-logo img {
    height: 45px; /* Điều chỉnh kích thước logo */
    margin-right: var(--spacing-xl); /* Khoảng cách lớn hơn */
    display: block; /* Loại bỏ khoảng trống dưới ảnh */
}

.nav-links {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
}

.nav-links li {
    margin-right: var(--spacing-large); /* Khoảng cách lớn hơn */
}

.nav-links li:last-child {
    margin-right: 0;
}

.nav-links a {
    color: var(--text-color);
    font-weight: 500;
    padding: 5px 0;
    position: relative;
    transition: color 0.3s ease;
}

.nav-links a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-color);
    transition: width 0.3s ease;
}

.nav-links a:hover::after {
    width: 100%;
}

.hamburger {
    display: none;
    font-size: 1.8rem; /* Icon lớn hơn */
    cursor: pointer;
    color: var(--text-color);
}

.nav-right {
    display: flex;
    align-items: center;
}

.cart-icon {
    color: var(--text-color);
    font-size: 1.6rem; /* Icon lớn hơn */
    position: relative;
    display: flex;
    align-items: center;
    margin-left: var(--spacing-medium); /* Khoảng cách với cuối navbar */
}

.cart-count {
    position: absolute;
    top: -5px; /* Điều chỉnh vị trí */
    right: -5px; /* Điều chỉnh vị trí */
    background-color: var(--primary-color);
    color: white;
    font-size: 0.75rem; /* Kích thước count */
    font-weight: 600;
    border-radius: 50%;
    padding: 3px 7px;
    line-height: 1;
    min-width: 22px; /* Đảm bảo hình tròn đủ chỗ cho 2 chữ số */
    text-align: center;
}

/* ========================================
  Header (Hero Section)
  ========================================
*/
header {
    /* Sử dụng ảnh nền của bạn, đảm bảo ảnh có chất lượng cao */
    background: url('https://brhut.wordpress.com/wp-content/uploads/2025/04/image_editor_output_image579044326-17453251625004289009876351217128.png') no-repeat center center/cover;
    min-height: 70vh; /* Chiều cao lớn hơn */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: var(--spacing-xl) var(--spacing-medium);
    position: relative;
    overflow: hidden; /* Đảm bảo nội dung không tràn */
}

/* Optional: Overlay để chữ dễ đọc hơn */
header::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.4); /* Lớp phủ màu tối vừa phải */
    z-index: 1;
}

header > * {
    position: relative;
    z-index: 2;
}

header h1 {
    font-size: 3rem; /* Font size lớn hơn */
    margin-bottom: var(--spacing-medium);
    font-weight: 700; /* Đậm hơn */
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3); /* Bóng chữ nhẹ */
}

header p {
    font-size: 1.2rem; /* Font size lớn hơn */
    margin-bottom: var(--spacing-large);
    max-width: 800px; /* Giới hạn chiều rộng */
    opacity: 0.95;
    line-height: 1.8; /* Tăng line height */
    text-shadow: 1px 1px 2px rgba(0,0,0,0.2); /* Bóng chữ nhẹ */
}

.button {
    display: inline-block;
    background-color: var(--primary-color);
    color: white;
    padding: var(--spacing-small) var(--spacing-large); /* Padding rộng hơn */
    border-radius: 5px; /* Bo tròn nhẹ */
    font-weight: 600;
    letter-spacing: 0.5px; /* Tăng khoảng cách chữ */
    transition: background-color 0.3s ease, transform 0.1s ease;
    text-transform: uppercase; /* Chữ in hoa */
    font-size: 1rem;
}

.button:hover {
    background-color: #5a7a64;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Thêm bóng đổ khi hover */
}

/* ========================================
  Quotes Section
  (Styled for elegance, horizontal scrollable)
  ========================================
*/
.quotes-slider-section {
    padding: var(--spacing-xl) 0; /* Padding lớn hơn */
    background-color: var(--secondary-color); /* Nền kem nhạt */
    overflow: hidden; /* Đảm bảo nội dung cuộn không tràn ra ngoài */
}

.quotes-slider-section h2 {
    text-align: center;
    margin-bottom: var(--spacing-large);
    color: var(--text-light); /* Màu chữ nhẹ */
    font-size: 1.4rem; /* Kích thước vừa phải */
    font-weight: 400; /* Độ dày nhẹ */
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Styling cho SVG, có thể cần điều chỉnh tùy theo ý đồ */
.quotes-slider-section h2 svg {
    margin: 0 var(--spacing-small);
    width: 25px; /* Kích thước nhỏ hơn */
    height: 25px;
    color: var(--primary-color); /* Màu xanh lá trầm */
    stroke-width: 1.5; /* Nét vẽ mảnh hơn */
}


.quotes-slider-wrapper {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    -webkit-overflow-scrolling: touch;
    padding: 0 var(--spacing-medium) var(--spacing-medium); /* Padding cho cuộn và thanh cuộn */
    margin: 0 auto;
    max-width: 100%;
    /* Để quotes có thể cuộn trên toàn bộ chiều rộng container */
    /* Nếu bạn muốn wrapper hẹp hơn container chính, bỏ comment dòng dưới */
    /* max-width: calc(1200px - var(--spacing-medium) * 2); */
}

/* Hide scrollbar */
.quotes-slider-wrapper::-webkit-scrollbar { display: none; }
.quotes-slider-wrapper { -ms-overflow-style: none; scrollbar-width: none; }


.quote-item {
    flex: 0 0 90%; /* Chiếm 90% chiều rộng container trên desktop */
    max-width: 600px; /* Giới hạn chiều rộng tối đa */
    margin-right: var(--spacing-medium);
    background-color: var(--background-color);
    padding: var(--spacing-large); /* Padding lớn hơn bên trong quote */
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08); /* Bóng đổ nhẹ nhàng */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    scroll-snap-align: start;
    border-left: 4px solid var(--primary-color); /* Viền màu chủ đạo bên trái */
}

.quote-item:last-child {
    margin-right: var(--spacing-medium); /* Giữ khoảng cách cuối cùng */
}


.quote-item blockquote {
    margin: 0;
    padding: 0;
}

.quote-item blockquote p {
    font-style: italic;
    margin-bottom: var(--spacing-small);
    color: var(--text-light);
    font-size: 1.1rem;
    line-height: 1.6;
}

.quote-item blockquote footer {
    text-align: right;
    font-size: 0.9rem;
    color: var(--text-color);
    font-weight: 500;
    margin-top: var(--spacing-small);
}


/* ========================================
  Categories Section
  ========================================
*/
.categories {
    padding: var(--spacing-xl) var(--spacing-medium);
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Cột rộng hơn */
    gap: var(--spacing-medium); /* Khoảng cách vừa phải */
}

.category {
    display: block;
    text-align: center;
    background-color: var(--background-color);
    border-radius: 8px;
    overflow: hidden;
    /* Loại bỏ box-shadow, tập trung vào ảnh và đường nét */
    /* box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05); */
    transition: transform 0.3s ease, opacity 0.3s ease;
    color: inherit;
    border: 1px solid var(--border-color); /* Viền nhẹ */
}

.category:hover {
    transform: translateY(-5px);
    opacity: 0.95;
    /* box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1); */
    border-color: var(--primary-color); /* Đổi màu viền khi hover */
}

.category img {
    width: 100%;
    height: 280px; /* Chiều cao lớn hơn cho ảnh */
    object-fit: cover;
    display: block;
}

.category h3 {
    margin: var(--spacing-medium) 0;
    font-size: 1.3rem; /* Font size lớn hơn */
    color: var(--text-color);
    font-weight: 600;
}

/* ========================================
  Footer
  ========================================
*/
footer {
    background-color: var(--text-color); /* Nền tối */
    color: white;
    padding: var(--spacing-large) var(--spacing-medium); /* Padding vừa phải */
    text-align: center;
}

.footer-content {
    margin-bottom: var(--spacing-medium);
    font-size: 0.95rem;
}

.footer-content p {
    margin: 8px 0; /* Khoảng cách giữa các dòng */
    color: rgba(255, 255, 255, 0.7); /* Chữ hơi mờ hơn */
}

.footer-content a {
    color: white;
    text-decoration: none;
    transition: color 0.3s ease;
}

.footer-content a:hover {
    color: var(--primary-color); /* Highlight khi hover */
    text-decoration: underline;
}

.footer-social {
    display: flex;
    justify-content: center;
    gap: var(--spacing-medium);
    margin-top: var(--spacing-medium); /* Khoảng cách trên */
}

.social-link {
    color: rgba(255, 255, 255, 0.7);
    font-size: 1.6rem; /* Kích thước icon lớn hơn */
    transition: color 0.3s ease;
}

.social-link:hover {
    color: white; /* Sáng lên khi hover */
}


/* ========================================
  Responsive Design (Media Queries)
  ========================================
*/

/* Tablet and smaller desktops */
@media (max-width: 992px) {
    :root {
        --spacing-large: 50px;
        --spacing-xl: 70px;
    }

    .nav-logo img {
        height: 40px;
        margin-right: var(--spacing-large);
    }

    .nav-links li {
        margin-right: var(--spacing-large);
    }

    header h1 {
        font-size: 2.2rem;
    }

    header p {
        font-size: 1.1rem;
    }

    .quote-item {
        flex: 0 0 90%; /* Chiếm 90% chiều rộng trên tablet */
        max-width: 550px;
    }

    .categories {
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: var(--spacing-medium);
    }

    .category img {
        height: 240px;
    }
}

/* Mobile */
@media (max-width: 768px) {
     :root {
        --spacing-small: 10px;
        --spacing-medium: 20px;
        --spacing-large: 30px;
        --spacing-xl: 40px;
    }

    .navbar {
        padding: var(--spacing-small) var(--spacing-medium);
    }

     .nav-left {
        flex-grow: 1;
        justify-content: space-between;
    }

    .nav-logo img {
        height: 35px;
        margin-right: 0;
    }

    .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 55px; /* Điều chỉnh vị trí dưới navbar mobile */
        left: 0;
        width: 100%;
        background-color: var(--background-color);
        box-shadow: 0 5px 5px rgba(0, 0, 0, 0.1);
        padding: var(--spacing-medium);
        z-index: 999;
    }

    .nav-links.active {
        display: flex;
    }

    .nav-links li {
        margin: var(--spacing-small) 0;
        text-align: center;
    }

    .nav-links a {
        padding: var(--spacing-small) 0;
        width: 100%;
    }

    .nav-links a::after {
         left: 50%;
         transform: translateX(-50%);
         width: 0; /* Đảm bảo ẩn trên mobile */
    }
     .nav-links a:hover::after {
        width: 50%; /* Độ rộng gạch chân khi hover trên mobile */
     }

    .hamburger {
        display: block;
        font-size: 1.5rem;
    }

    .cart-icon {
        font-size: 1.4rem;
        margin-left: var(--spacing-medium);
    }


    header {
        min-height: 60vh; /* Giảm nhẹ chiều cao */
        padding: var(--spacing-large) var(--spacing-medium);
    }

    header h1 {
        font-size: 1.8rem;
    }

    header p {
        font-size: 1rem;
        line-height: 1.5;
    }

    .button {
        padding: var(--spacing-small) var(--spacing-medium);
        font-size: 0.9rem;
    }


    .quotes-slider-section {
        padding: var(--spacing-large) 0;
    }

     .quotes-slider-section h2 {
        font-size: 1.2rem;
        margin-bottom: var(--spacing-medium);
    }

    .quote-item {
        flex: 0 0 95%;
        max-width: 400px; /* Giới hạn nhỏ hơn */
        margin-right: var(--spacing-small);
        padding: var(--spacing-medium);
    }

    .quote-item blockquote p {
        font-size: 1rem;
    }


     .categories {
        grid-template-columns: 1fr;
        padding: var(--spacing-large) var(--spacing-medium);
        gap: var(--spacing-medium);
    }

    .category img {
        height: 220px;
    }

     .category h3 {
        font-size: 1.1rem;
        margin: var(--spacing-medium) 0;
    }

    footer {
        padding: var(--spacing-medium);
    }

    .footer-social {
        gap: var(--spacing-medium);
    }
     .social-link {
        font-size: 1.4rem;
     }
}

/* Adjust padding for very small screens */
@media (max-width: 480px) {
     :root {
        --spacing-small: 8px;
        --spacing-medium: 15px;
        --spacing-large: 25px;
        --spacing-xl: 30px;
    }

    .navbar {
         padding: var(--spacing-small);
    }
     .cart-icon {
        margin-left: var(--spacing-medium);
     }

     header h1 {
        font-size: 1.5rem;
     }

     header p {
        font-size: 0.9rem;
     }

     .quotes-slider-wrapper {
        padding: 0 var(--spacing-small) var(--spacing-small);
     }
    .quote-item {
        flex: 0 0 100%; /* Chiếm toàn bộ chiều rộng */
        max-width: none; /* Không giới hạn max width */
        margin-right: var(--spacing-small);
        padding: var(--spacing-medium) var(--spacing-small);
    }


     .categories {
         padding: var(--spacing-large) var(--spacing-small);
     }
}
