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
      .post('http://127.0.0.1:8000/api/contact/', formData)
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
      <h1 className="mb-4">Me contacter</h1>

      {status === 'success' && (
        <div className="alert alert-success">Merci ! Ton message a bien été envoyé.</div>
      )}
      {status === 'error' && Object.keys(errors).length === 0 && (
        <div className="alert alert-danger">Une erreur est survenue. Réessaie plus tard.</div>
      )}

      <form onSubmit={handleSubmit} className="col-lg-8 p-0">
        <div className="mb-3">
          <label className="form-label">Nom</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} className={'form-control' + (errors.name ? ' is-invalid' : '')} required />
          {errors.name && <div className="invalid-feedback">{errors.name[0]}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} className={'form-control' + (errors.email ? ' is-invalid' : '')} required />
          {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
        </div>

        <div className="mb-3">
          <label className="form-label">Sujet (facultatif)</label>
          <input type="text" name="subject" value={formData.subject} onChange={handleChange} className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea name="message" rows="5" value={formData.message} onChange={handleChange} className={'form-control' + (errors.message ? ' is-invalid' : '')} required></textarea>
          {errors.message && <div className="invalid-feedback">{errors.message[0]}</div>}
        </div>

        <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
          {status === 'sending' ? 'Envoi en cours...' : 'Envoyer'}
        </button>
      </form>
    </div>
  )
}

export default Contact