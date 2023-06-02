import './Footer.css';
export default function FooterComponent() {
  return (
    <footer>
      <section className="footer-container">
        <div className="brand">
          <img src="/images/logo.png" alt="logo" />
          <p>choose healthy food for the body and for the earth</p>
        </div>
        <div className="item">
          <h5>Layanan</h5>
          <ul>
            <li>
              <a href="#">Tentang Kami</a>
            </li>
            <li>
              <a href="#">Kebijakan dan Privasi</a>
            </li>
            <li>
              <a href="#">Hubungi Kami</a>
            </li>
            <li>
              <a href="#">Bantuan</a>
            </li>
          </ul>
        </div>
        <div className="item">
          <h5>Features</h5>
          <ul>
            <li>
              <a href="#">Diet</a>
            </li>
            <li>
              <a href="#">Calori</a>
            </li>
            <li>
              <a href="#">Carbon</a>
            </li>
          </ul>
        </div>
        <div className="partner">
          <h5>Challenge Partner & Mitra</h5>
          <div className="image-partner">
            <img src="images/danone.png" className="danone" alt="danone" />
            <img src="images/skilvul.png" className="skilvul" alt="skilvul" />
          </div>
        </div>
      </section>
      <hr className="line-footer" />

      <div className="copyright">
        <p>Copyright © FE-35 & BE-17 - Calc Health | All Right Reserved</p>
        <div className="social-media">
          <img src="images/Facebook 1.png" alt="facebook" />
          <img src="images/Instagram 1.png" alt="instagram" />
          <img src="images/Twitter 1.png" alt="twitter" />
          <img src="images/Youtube 1.png" alt="youtube" />
        </div>
      </div>
    </footer>
  );
}
