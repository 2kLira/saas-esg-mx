import { useState } from 'react'
import { motion } from 'framer-motion'

export default function FinalCTA() {
  const [form, setForm] = useState({ nombre: '', empresa: '', email: '', telefono: '' })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      console.log('Demo request:', form)
      setSubmitting(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <section
      id="contacto"
      style={{
        position: 'relative',
        overflow: 'hidden',
        padding: '100px 24px',
        background: '#07090F',
      }}
    >
      {/* Radial glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse 70% 60% at 50% 30%, rgba(0, 232, 122, 0.1) 0%, rgba(0, 232, 122, 0.04) 40%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(1px)',
        }}
      />

      {/* Grid */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(0, 232, 122, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 232, 122, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      <div
        className="cta-grid container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'start',
        }}
      >
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-label">Dar el primer paso</span>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(30px, 4vw, 50px)',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--text)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}
          >
            La próxima auditoría puede ser la más fácil que hayas tenido.
          </h2>
          <p
            style={{
              fontSize: 'clamp(15px, 1.8vw, 17px)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              marginBottom: '48px',
            }}
          >
            Agenda una demo de 30 minutos. Te mostramos cómo funciona con datos reales de empresas en Nuevo León.
          </p>

          {/* Trust items */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              { icon: <LockIcon />, text: 'Datos seguros — cifrado AES-256 en tránsito y en reposo' },
              { icon: <ContractIcon />, text: 'Sin contrato de permanencia — cancela cuando quieras' },
              { icon: <SpeedIcon />, text: 'Demo con tus propios datos reales de Nuevo León' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(0, 232, 122, 0.08)',
                    border: '1px solid rgba(0, 232, 122, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--emerald)',
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.6, marginTop: '7px' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <div
            style={{
              background: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: 'var(--radius-lg)',
              padding: '40px',
            }}
          >
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <div
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'rgba(0, 232, 122, 0.15)',
                    border: '1px solid rgba(0, 232, 122, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--emerald)',
                    margin: '0 auto 24px',
                  }}
                >
                  <CheckLargeIcon />
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '24px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}
                >
                  Solicitud recibida
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                  Nos pondremos en contacto contigo en menos de 24 horas para coordinar tu demo.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '22px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '28px',
                  }}
                >
                  Agendar mi demo
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <Field
                    label="Nombre completo"
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Lic. María González"
                    value={form.nombre}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Empresa"
                    id="empresa"
                    name="empresa"
                    type="text"
                    placeholder="Industrias del Norte S.A. de C.V."
                    value={form.empresa}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Correo corporativo"
                    id="email"
                    name="email"
                    type="email"
                    placeholder="direccion@empresa.com.mx"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                  <Field
                    label="Teléfono"
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="+52 81 1234 5678 (opcional)"
                    value={form.telefono}
                    onChange={handleChange}
                    required={false}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="btn btn-primary"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    fontSize: '16px',
                    padding: '16px 24px',
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  {submitting ? 'Enviando...' : 'Agendar Mi Demo Gratuita →'}
                </button>

                <p
                  style={{
                    textAlign: 'center',
                    marginTop: '16px',
                    fontSize: '12px',
                    color: 'var(--text-dim)',
                    lineHeight: 1.5,
                  }}
                >
                  Sin compromisos · Sin tarjeta de crédito · Solo 30 minutos
                </p>
              </form>
            )}
          </div>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 860px) {
          .cta-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}

function Field({ label, id, name, type, placeholder, value, onChange, required }) {
  return (
    <div>
      <label
        htmlFor={id}
        style={{
          display: 'block',
          fontSize: '13px',
          fontWeight: 500,
          color: 'var(--text-muted)',
          marginBottom: '6px',
          letterSpacing: '0.01em',
        }}
      >
        {label}{required && <span style={{ color: 'var(--emerald)', marginLeft: '3px' }}>*</span>}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={type === 'email' ? 'email' : type === 'tel' ? 'tel' : 'on'}
        style={{
          width: '100%',
          padding: '13px 16px',
          background: 'rgba(255, 255, 255, 0.05)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text)',
          fontSize: '15px',
          fontFamily: 'var(--font-body)',
          outline: 'none',
          transition: 'border-color 200ms ease, background 200ms ease',
          WebkitAppearance: 'none',
        }}
        onFocus={(e) => {
          e.currentTarget.style.borderColor = 'rgba(0, 232, 122, 0.4)'
          e.currentTarget.style.background = 'rgba(0, 232, 122, 0.04)'
        }}
        onBlur={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)'
        }}
      />
    </div>
  )
}

function LockIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" /><path d="M7 11V7a5 5 0 0110 0v4" /></svg>
}

function ContractIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="9" y1="13" x2="15" y2="13" /><line x1="9" y1="17" x2="15" y2="17" /></svg>
}

function SpeedIcon() {
  return <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
}

function CheckLargeIcon() {
  return <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 12l5 5L20 7" /></svg>
}
