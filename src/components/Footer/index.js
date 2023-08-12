import './footer.css';

function Footer() {
  return (
    <footer id="footer" className="bg-white">
      <div className="tcl-container">
        <div className="footer">
          <div className="tcl-row">
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-logo">
                <img src="/assets/images/Booking.png" alt="NuxtBlog Logo" />
              </div>
              <p>© 2023, All Rights Reserved.</p>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-2">
              <div className="footer-title">
                <p>Location</p>
              </div>
              <ul className="footer-content__list">
                <li>
                  <a href="/">Đà Lạt</a>
                </li>
                <li>
                  <a href="/">Nha Trang</a>
                </li>
                <li>
                  <a href="/">Vũng tàu</a>
                </li>
                <li>
                  <a href="/">Hà Nội</a>
                </li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-3">
              <div className="footer-title">
                <p>Liên hệ</p>
              </div>
              <ul className="footer-content__list">
                <li>97 Man Thiện, phường Hiệp Phú, Thành phố Thủ Đức</li>
                <li>038 6978 780</li>
              </ul>
            </div>
            {/* Footer Column */}
            <div className="tcl-col-12 tcl-col-sm-6 tcl-col-md-4 tcl-col-lg-4">
              <div className="footer-title">
                <p>Fanpage</p>
              </div>
              <div className="footer-facebook">
                <div
                  className="fb-page"
                  data-href="/"
                  data-tabs
                  data-width
                  data-height
                  data-small-header="false"
                  data-adapt-container-width="true"
                  data-hide-cover="false"
                  data-show-facepile="true"
                >
                  <blockquote cite="/" className="fb-xfbml-parse-ignore">
                    <a href="/">Website đặt tour</a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
