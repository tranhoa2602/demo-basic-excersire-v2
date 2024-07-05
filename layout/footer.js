document.addEventListener("DOMContentLoaded", function () {
  const footerPlaceholder = document.getElementById("footer-placeholder");
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = `
                 <div class="footer_logo">
        <a href="#"> <img src="/assets/images/header_logo.png" alt="" /> </a>
      </div>
      <div class="container">
        <div class="footer-section about">
          <h2 data-i18n="footer.about_us">About Us</h2>
          <p data-i18n="footer.about_us_text_1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et
            lobortis diam.
          </p>
          <p data-i18n="footer.about_us_text_2">
            Duis tellus enim, vestibulum eget varius id, vulputate ed mi. Nullam
            feugiat, diam quis interdum varius.
          </p>
          <a href="#" class="btn" data-i18n="footer.start_learning_now">Start Learning Now</a>
        </div>
        <div class="footer-section courses">
          <h2 data-i18n="footer.popular_courses">Popular Courses</h2>
          <ul>
            <li><a href="#" data-i18n="footer.course_power_electronics">Power Electronics</a></li>
            <h3 data-i18n="footer.free">Free</h3>
            <li><a href="#" data-i18n="footer.course_intro_to_calculus">Introduction to Calculus</a></li>
            <h3 data-i18n="footer.free">Free</h3>
            <li><a href="#" data-i18n="footer.course_basic_laws">Basic Laws and Policies</a></li>
            <h3 data-i18n="footer.free">Free</h3>
          </ul>
        </div>
        <div class="footer-section links">
          <h2 data-i18n="footer.quick_links">Quick Links</h2>
          <ul>
            <li>
              <i class="fa-solid fa-angle-right"></i><a href="#" data-i18n="footer.all_courses">All Courses</a>
            </li>
            <li>
              <i class="fa-solid fa-angle-right"></i
              ><a href="#" data-i18n="footer.summer_sessions">Summer Sessions</a>
            </li>
            <li>
              <i class="fa-solid fa-angle-right"></i
              ><a href="#" data-i18n="footer.professional_courses">Professional Courses</a>
            </li>
            <li>
              <i class="fa-solid fa-angle-right"></i
              ><a href="#" data-i18n="footer.privacy_policy">Privacy Policy</a>
            </li>
            <li>
              <i class="fa-solid fa-angle-right"></i
              ><a href="#" data-i18n="footer.terms_of_use">Terms of Use</a>
            </li>
          </ul>
        </div>
        <div class="footer-section contact">
          <h2 data-i18n="footer.contact_us">Contact Us</h2>
          <ul>
            <li data-i18n="footer.address">
              <i class="fa-solid fa-location-arrow"></i>123 Design Themes Inc.
              <br />Mary Jane St, Sydney 2233, Australia
            </li>
            <li data-i18n="footer.phone"><i class="fa-solid fa-mobile"></i>Phone: +11 (2) 7654 2233</li>
            <li data-i18n="footer.fax"><i class="fa-solid fa-fax"></i>Fax: +11 (5) 7654 2244</li>
            <li data-i18n="footer.email"><i class="fa-regular fa-envelope"></i>Email: lms@gmail.com</li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p data-i18n="footer.copyright">Copyright © 2020 LMS Theme All Rights Reserved | Design Themes</p>
        <div class="social-links">
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-youtube"></i>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-skype"></i>
        </div>
      </div>
                `;
  }
});
