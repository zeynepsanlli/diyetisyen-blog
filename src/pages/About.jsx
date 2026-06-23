const biography = [
  "2002 yılında İstanbul'da doğdum. 2025 yılında İstanbul Medeniyet Üniversitesi Beslenme ve Diyetetik bölümünden mezun oldum. Beslenme ve Diyetetik lisans eğitimimi bilimsel ve etik değerlere bağlı bir yaklaşımla tamamladım.",
  'Eğitim sürecim boyunca klinik beslenme, toplum beslenmesi ve toplu beslenme sistemleri alanlarında staj yaparak farklı yaş ve ihtiyaç gruplarına yönelik beslenme planları hazırlama konusunda deneyim kazandım.',
  'Mesleki gelişim sürecimde özellikle diyabet, obezite, çocuk beslenmesi, gebelik ve emziklilik döneminde beslenme konularına ilgi duymaktayım. Aldığım eğitimler ve sertifikalar sayesinde bireylerin yaşam tarzlarına uygun, sürdürülebilir ve uygulanabilir beslenme alışkanlıkları kazanmalarına destek olmayı hedefliyorum.',
  'Beslenme danışmanlığında tek tip listeler yerine kişiye özel, bilimsel temellere dayanan ve günlük yaşamla uyumlu çözümler sunmanın önemli olduğuna inanıyorum. Her bireyin ihtiyaçlarının farklı olduğunu bilerek danışanlarıma sağlıklı yaşam yolculuklarında rehberlik etmeyi amaçlıyorum.',
  'Çözüm odaklı yaklaşımım, ekip çalışmasına yatkınlığım ve sorumluluk bilincim sayesinde danışanlarımla güvene dayalı bir iletişim kurmaya özen gösteriyorum.',
  'Ayrıca çocuklarda beslenme, gebelik ve emziklilik döneminde beslenme, anne-bebek beslenmesi, sağlıklı yaşam alışkanlıkları ve gıda hijyeni alanlarında çeşitli eğitim ve sertifika programlarına katılarak mesleki gelişimimi sürekli olarak sürdürmekteyim.',
  'Amacım yalnızca kısa süreli sonuçlar elde etmek değil, sağlıklı beslenmeyi kalıcı ve sürdürülebilir bir yaşam biçimi haline getirmektir.',
]

const interests = [
  'Diyabet ve Obezitede Beslenme',
  'Çocuk Beslenmesi',
  'Gebelik ve Emziklilik Döneminde Beslenme',
  'Anne, Bebek ve Çocuk Beslenmesi',
  'Sağlıklı Yaşam ve Sürdürülebilir Beslenme',
  'Gıda Güvenliği ve Hijyen Uygulamaları',
]

function About() {
  return (
    <section className="about-page">
      <div className="about-photo-placeholder">
        <span>Fotoğraf alanı</span>
      </div>
      <article className="about-content">
        <p className="eyebrow">Hakkımda</p>
        <h1>Diyetisyen Beyzanur Narbay</h1>
        <div className="about-text">
          {biography.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>
      <section className="about-interests" aria-labelledby="interests-title">
        <h2 id="interests-title">İlgi Alanlarım ve Eğitimlerim</h2>
        <div className="interest-grid">
          {interests.map((interest) => (
            <article className="interest-card" key={interest}>
              <span>{interest}</span>
            </article>
          ))}
        </div>
      </section>
    </section>
  )
}

export default About
