import { useState } from 'react'

const contactEmail = 'zeynepsanli2002@gmail.com'
const mailLink =
  'mailto:zeynepsanli2002@gmail.com?subject=Beslenme%20Dan%C4%B1%C5%9Fmanl%C4%B1%C4%9F%C4%B1%20Hakk%C4%B1nda'
const instagramUrl =
  'https://www.instagram.com/dytbeyzanurnarbay?igsh=dzV6YmJ2MnAyamk1'
const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState(null)
  const [isEmailCopied, setIsEmailCopied] = useState(false)

  const handleCopyEmail = async () => {
    await navigator.clipboard.writeText(contactEmail)
    setIsEmailCopied(true)
    window.setTimeout(() => {
      setIsEmailCopied(false)
    }, 2500)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setIsSubmitting(true)
    setFormStatus(null)

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'Yeni danışan iletişim formu mesajı')
    formData.append('_template', 'table')
    formData.append('_captcha', 'false')

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form gönderilemedi')
      }

      form.reset()
      setFormStatus({
        type: 'success',
        message:
          'Mesajınız başarıyla gönderildi. En kısa sürede dönüş yapılacaktır.',
      })
    } catch {
      setFormStatus({
        type: 'error',
        message:
          'Mesaj gönderilirken bir sorun oluştu. Lütfen mail ile iletişime geçin.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="page-section wide">
      <div className="section-heading">
        <p className="eyebrow">İletişim</p>
        <h1>Randevu ve sorularınız için ulaşın</h1>
        <p>
          Danışmanlık süreci ve uygun randevu seçenekleri için iletişime
          geçebilirsiniz.
        </p>
      </div>
      <div className="contact-layout">
        <div className="contact-panel">
          <div className="email-block">
            <span>Email</span>
            <div className="email-copy-row">
              <p>{contactEmail}</p>
              <button
                className="copy-button"
                onClick={handleCopyEmail}
                type="button"
              >
                Maili Kopyala
              </button>
            </div>
            {isEmailCopied && (
              <p className="copy-message">Mail adresi kopyalandı.</p>
            )}
          </div>
          <div>
            <span>Konum</span>
            <p>İstanbul</p>
          </div>
          <div className="contact-actions">
            <a className="button primary" href={mailLink}>
              Mail Gönder
            </a>
            <a
              className="button secondary"
              href={instagramUrl}
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label>
            Ad Soyad
            <input
              disabled={isSubmitting}
              name="name"
              placeholder="Adınız ve soyadınız"
              required
              type="text"
            />
          </label>
          <label>
            Email
            <input
              disabled={isSubmitting}
              name="email"
              placeholder="ornek@email.com"
              required
              type="email"
            />
          </label>
          <label>
            Mesaj
            <textarea
              disabled={isSubmitting}
              name="message"
              placeholder="Mesajınızı yazın"
              required
              rows="5"
            />
          </label>
          <button className="button primary" disabled={isSubmitting} type="submit">
            {isSubmitting ? 'Gönderiliyor...' : 'Gönder'}
          </button>
          {formStatus && (
            <p className={`form-status ${formStatus.type}`}>
              {formStatus.message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

export default Contact
