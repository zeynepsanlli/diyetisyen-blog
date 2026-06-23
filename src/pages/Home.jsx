import { Link } from 'react-router-dom'

function Home() {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">Diyetisyen Beyzanur Narbay</p>
        <h1>Sağlıklı yaşam yolculuğunuzda yanınızdayım</h1>
        <p className="hero-text">
          Bilimsel, sürdürülebilir ve kişiye özel beslenme danışmanlığı.
        </p>
        <div className="hero-actions">
          <Link className="button primary" to="/iletisim">
            İletişime Geç
          </Link>
          <Link className="button secondary" to="/hizmetler">
            Hizmetleri İncele
          </Link>
        </div>
      </div>
      <div className="photo-placeholder" aria-label="Diyetisyen fotoğraf alanı">
        <span>Fotoğraf alanı</span>
      </div>
    </section>
  )
}

export default Home
