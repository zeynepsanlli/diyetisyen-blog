const contactEmail = 'dytbeyzanurnarbay@gmail.com'
const instagramUrl = 'https://www.instagram.com/dytbeyzanurnarbay?igsh=dzV6YmJ2MnAyamk1'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-brand-section">
          <h2 className="footer-title">Diyetisyen Beyzanur Narbay</h2>
          <p className="footer-description">
            Bilimsel, sürdürülebilir ve kişiye özel beslenme danışmanlığı.
          </p>
        </div>
        <div className="footer-info-section">
          <div className="footer-info-item">
            <span className="footer-info-label">Mail</span>
            <a href={`mailto:${contactEmail}`} className="footer-link">
              {contactEmail}
            </a>
          </div>
          <div className="footer-info-item">
            <span className="footer-info-label">Instagram</span>
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-instagram-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="instagram-icon"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>dytbeyzanurnarbay</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2026 Diyetisyen Beyzanur Narbay. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  )
}

export default Footer
