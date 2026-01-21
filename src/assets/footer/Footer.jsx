import './Footer.css'

export function Footer() {
  return (
    <>
      <footer class="site-footer">
        <div class="footer-container">
          <div class="footer-column">
            <h4>Images</h4>
            <ul>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Life at Images</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Resources</h4>
            <ul>
              <li>
                <a href="#">Help Center</a>
              </li>
              <li>
                <a href="#">Developers</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Learn How to Take Photos</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Community</h4>
            <ul>
              <li>
                <a href="#">Partners portal</a>
              </li>
              <li>
                <a href="#">Affiliate and Referral</a>
              </li>
              <li>
                <a href="#">Awards</a>
              </li>
            </ul>
          </div>

          <div class="footer-column">
            <h4>Conditions</h4>
            <ul>
              <li>
                <a href="#">Terms of use</a>
              </li>
              <li>
                <a href="#">Privacy policy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
            </ul>
          </div>

          <div class="footer-column app-column">
            <h4>Get the App</h4>
            <div class="app-buttons">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Google Play"
              />
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>Follow us</p>

          <div class="social-icons">
            <a href="#">in</a>
            <a href="#">f</a>
            <a href="#">ig</a>
            <a href="#">x</a>
            <a href="#">▶</a>
          </div>

          <span>© 2026 images. All rights reserved.</span>
        </div>
      </footer>
    </>
  );
}
