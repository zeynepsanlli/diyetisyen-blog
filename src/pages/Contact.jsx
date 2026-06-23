import { useState } from 'react'

const contactEmail = 'zeynepsanli2002@gmail.com'
const instagramUrl =
  'https://www.instagram.com/dytbeyzanurnarbay?igsh=dzV6YmJ2MnAyamk1'
const formEndpoint = `https://formsubmit.co/ajax/${contactEmail}`

function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState(null)

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
          <div>
            <span>Mail</span>
            <p>
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </p>
          </div>
          <div>
            <span>Konum</span>
            <p>İstanbul, Türkiye</p>
          </div>
          <div>
            <span>Instagram</span>
            <p>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                dytbeyzanurnarbay
              </a>
            </p>
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
