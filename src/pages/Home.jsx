import { Link } from 'react-router-dom'

const benefits = [
  {
    title: 'Size Özel Planlama',
    description:
      'Yaşam tarzınız, sağlık durumunuz ve hedefleriniz dikkate alınarak uygulanabilir bir beslenme planı oluşturulur.',
  },
  {
    title: 'Sürdürülebilir Alışkanlıklar',
    description:
      'Kısa süreli kısıtlayıcı diyetler yerine uzun vadede sürdürülebilecek sağlıklı beslenme alışkanlıkları hedeflenir.',
  },
  {
    title: 'Bilimsel Yaklaşım',
    description:
      'Beslenme süreci güncel bilgiler, etik değerler ve bireysel ihtiyaçlar doğrultusunda planlanır.',
  },
  {
    title: 'Düzenli Takip',
    description:
      'Süreç boyunca ilerlemeniz değerlendirilir, ihtiyaçlarınıza göre planınız güncellenir.',
  },
]

function Home() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">Diyetisyen Beyzanur Narbay</p>
          <h1>Sağlıklı beslenmeyi sürdürülebilir bir yaşam tarzına dönüştürün</h1>
          <p className="hero-text">
            Kişiye özel, bilimsel temelli ve uygulanabilir beslenme
            danışmanlığı ile hedeflerinize daha sağlıklı ve dengeli bir şekilde
            ilerlemenize destek oluyorum.
          </p>
          <div className="hero-actions">
            <Link className="button primary" to="/hizmetler">
              Hizmetler
            </Link>
            <Link className="button secondary" to="/iletisim">
              İletişim
            </Link>
          </div>
        </div>
      </section>

      <section className="home-about">
        <div className="home-about-copy">
          <p className="eyebrow">Kısa Tanıtım</p>
          <h2>Diyetisyen Beyzanur Narbay</h2>
          <p>
            Sağlıklı beslenmenin yasaklardan ve kısa süreli diyetlerden ibaret
            olmadığına inanıyorum. Amacım, danışanlarıma yaşam tarzlarına
            uygun, sürdürülebilir ve uygulanabilir beslenme alışkanlıkları
            kazandırarak hedeflerine daha sağlıklı ve kalıcı bir şekilde
            ulaşmalarına destek olmaktır.
          </p>
          <Link className="text-link" to="/hakkimda">
            Detaylı Bilgi Al
          </Link>
        </div>
        <div
          className="home-about-photo"
          aria-label="Diyetisyen fotoğraf alanı"
        >
          <span>Fotoğraf alanı</span>
        </div>
      </section>

      <section className="home-benefits">
        <div className="section-heading compact">
          <p className="eyebrow">Danışmanlık Süreci</p>
          <h2>Beslenme Sürecinde Size Ne Kazandırırım?</h2>
          <p>
            Danışmanlık süreci yalnızca liste hazırlamaktan ibaret değildir;
            alışkanlıklarınızı tanımak, sürdürülebilir çözümler oluşturmak ve
            sağlıklı beslenmeyi günlük yaşamınıza uyarlamak üzerine ilerler.
          </p>
        </div>
        <div className="benefit-grid">
          {benefits.map((benefit) => (
            <article className="benefit-card" key={benefit.title}>
              <h3>{benefit.title}</h3>
              <p>{benefit.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-cta">
        <h2>Sağlıklı beslenme sürecinize birlikte başlayalım</h2>
        <Link className="button primary" to="/iletisim">
          İletişime Geç
        </Link>
      </section>
    </div>
  )
}

export default Home
