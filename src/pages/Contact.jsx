import { useState } from 'react'
import axios from 'axios'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState('')
  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    setErrors({})

    axios
      .post(`${import.meta.env.VITE_API_URL}/api/contact/`, formData)
      .then(() => {
        setStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      })
      .catch((error) => {
        setStatus('error')
        if (error.response && error.response.data) {
          setErrors(error.response.data)
        }
      })
  }

  return (
    <div className="container py-5">
      <div className="mb-5">
        <span className="hero-badge">Contact</span>
        <h1 className="section-title mb-1" style={{ fontSize: '2.5rem' }}>
          Travaillons ensemble
        </h1>
        <p className="text-muted mb-0">
          Une opportunité, un projet, une question ? Écrivez-moi.
        </p>
      </div>

      {status === 'success' && (
        <div className="alert alert-success col-lg-8">
          Merci ! Votre message a bien été envoyé.
        </div>
      )}
      {status === 'error' && Object.keys(errors).length === 0 && (
        <div className="alert alert-danger col-lg-8">
          Une erreur est survenue. Réessayez plus tard.
        </div>
      )}

      <div className="card contact-card col-lg-8">
        <form onSubmit={handleSubmit} className="p-4">
          <div className="mb-3">
            <label className="form-label">Nom</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={'form-control' + (errors.name ? ' is-invalid' : '')}
              required
            />
            {errors.name && (
              <div className="invalid-feedback">{errors.name[0]}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={'form-control' + (errors.email ? ' is-invalid' : '')}
              required
            />
            {errors.email && (
              <div className="invalid-feedback">{errors.email[0]}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label">Sujet (facultatif)</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="form-control"
            />
          </div>

          <div className="mb-4">
            <label className="form-label">Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={'form-control' + (errors.message ? ' is-invalid' : '')}
              required
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">{errors.message[0]}</div>
            )}
          </div>

                  <button
            type="submit"
            className="btn btn-gradient btn-lg"
            disabled={status === 'sending'}
          >
            {status === 'sending' ? 'Envoi en cours...' : 'Envoyer le message'}
          </button>
        </form>
      </div>
    </div>
  )
}

export default Contact