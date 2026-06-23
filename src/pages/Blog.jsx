const posts = [
  {
    title: 'Sürdürülebilir Beslenme Nedir?',
    description:
      'Günlük yaşamınıza uyum sağlayan, uzun vadede korunabilir beslenme alışkanlıklarına kısa bir bakış.',
  },
  {
    title: 'Çocuklarda Sağlıklı Beslenme Alışkanlıkları',
    description:
      'Çocukluk döneminde dengeli beslenmeyi destekleyen temel yaklaşımlar ve ailelerin rolü.',
  },
  {
    title: 'Diyabette Beslenme Neden Önemlidir?',
    description:
      'Kan şekeri yönetiminde beslenme planının etkisi ve bireysel takibin önemi.',
  },
]

function Blog() {
  return (
    <section className="page-section wide">
      <div className="section-heading">
        <p className="eyebrow">Blog</p>
        <h1>Beslenme üzerine notlar</h1>
        <p>
          Sağlıklı yaşam ve beslenme hakkında bilgilendirici yazılar yakında
          burada yer alacak.
        </p>
      </div>
      <div className="card-grid blog-grid">
        {posts.map((post) => (
          <article className="content-card blog-card" key={post.title}>
            <p className="blog-label">Örnek Yazı</p>
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Blog
