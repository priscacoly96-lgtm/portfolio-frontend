import { useState } from 'react'
import axios from 'axios'
import { Zap, Send, Mail, MapPin } from 'lucide-react'

// À modifier avec tes vraies infos
const EMAIL = '' // mets ton vrai e-mail entre les guillemets, sinon la carte Email ne s'affiche pas
const LOCATION = 'Dakar, Sénégal'
const GITHUB_URL = 'https://github.com/priscacoly96-lgtm'

function GithubIcon({ size = 26 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

const emptyForm = { name: '', email: '', subject: '', message: '' }

function Contact() {
  const [form, setForm] = useState(emptyForm)
  const [status, setStatus] = useState('')

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/api/contact/`, form)
      setStatus('success')
      setForm(emptyForm)
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="container ct-page">
      <div className="ct-head">
        <span className="ct-badge">
          <Zap size={18} /> Contact
        </span>
        <h1 className="ct-title">Travaillons ensemble</h1>
        <p className="ct-subtitle">
          Une opportunité, un projet, une question ? Écrivez-moi.
        </p>
      </div>

      <form className="ct-form" onSubmit={handleSubmit}>
        <div className="ct-row">
          <div className="ct-field">
            <label htmlFor="name">Nom complet</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Votre nom"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="ct-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="vous@email.com"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="ct-field">
          <label htmlFor="subject">Sujet</label>
          <input
            id="subject"
            name="subject"
            type="text"
            placeholder="Objet du message"
            value={form.subject}
            onChange={handleChange}
            required
          />
        </div>

        <div className="ct-field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="6"
            placeholder="Votre message..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </div>

        <button
          type="submit"
          className="ct-send"
          disabled={status === 'sending'}
        >
          <Send size={20} />
          {status === 'sending' ? 'Envoi...' : 'Envoyer le message'}
        </button>

        {status === 'success' && (
          <p className="ct-msg ct-ok">Message envoyé avec succès, merci !</p>
        )}
        {status === 'error' && (
          <p className="ct-msg ct-ko">
            Une erreur est survenue. Vérifie les champs et réessaie.
          </p>
        )}
      </form>

                 <div className="ct-infos">
        <div className="ct-info">
          <Mail size={28} className="ct-info-violet" />
          <h3>Email</h3>
          <p>{EMAIL}</p>
        </div>
        <div className="ct-info">
          <MapPin size={28} className="ct-info-blue" />
          <h3>Localisation</h3>
          <p>{LOCATION}</p>
        </div>
        <a
          className="ct-info"
          href={GITHUB_URL}
          target="_blank"
          rel="noreferrer"
        >
          <span className="ct-info-violet">
            <GithubIcon />
          </span>
          <h3>Réseaux</h3>
          <p>GitHub</p>
        </a>
      </div>
    </div>
  )
}

export default Contact