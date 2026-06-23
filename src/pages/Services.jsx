const services = [
  {
    title: 'Kilo Yönetimi',
    description:
      'Sağlıklı kilo verme, kilo alma veya mevcut kiloyu koruma sürecinde sürdürülebilir ve kişiye özel beslenme planları hazırlanır.',
  },
  {
    title: 'Hastalıklarda Beslenme',
    description:
      'Diyabet, obezite ve farklı sağlık durumlarında bireyin ihtiyaçlarına uygun, bilimsel temelli beslenme desteği sunulur.',
  },
  {
    title: 'Çocuk Beslenmesi',
    description:
      'Çocukların büyüme ve gelişme dönemlerine uygun, sağlıklı beslenme alışkanlıkları kazanmalarına destek olunur.',
  },
  {
    title: 'Gebelik ve Emziklilik Döneminde Beslenme',
    description:
      'Anne ve bebeğin ihtiyaçları göz önünde bulundurularak gebelik ve emzirme dönemine uygun beslenme planlaması yapılır.',
  },
  {
    title: 'Online Beslenme Danışmanlığı',
    description:
      'Uzaktan görüşmelerle kişinin hedeflerine ve yaşam düzenine uygun beslenme takibi sağlanır.',
  },
  {
    title: 'Sağlıklı Beslenme Eğitimi',
    description:
      'Etiket okuma, porsiyon kontrolü, öğün planlama ve sürdürülebilir sağlıklı beslenme alışkanlıkları konusunda rehberlik edilir.',
  },
]

function Services() {
  return (
    <section className="page-section wide">
      <div className="section-heading">
        <p className="eyebrow">Hizmetler</p>
        <h1>Danışmanlık Hizmetleri</h1>
        <p>
          Beslenme süreci; yaşam tarzınız, sağlık durumunuz, hedefleriniz ve
          ihtiyaçlarınız dikkate alınarak kişiye özel şekilde planlanır.
        </p>
      </div>
      <div className="card-grid service-grid">
        {services.map((service) => (
          <article className="content-card service-card" key={service.title}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
