import { motion } from 'framer-motion'

const STEPS = [
  {
    number: '01',
    title: 'Sube tus CFDIs',
    body: 'Descarga tus facturas XML del portal del SAT y súbelas a la plataforma. El sistema las valida y clasifica automáticamente.',
    note: 'También puedes ingresar consumos manuales de electricidad, gas y diésel.',
    icon: <UploadIcon />,
  },
  {
    number: '02',
    title: 'El sistema calcula',
    body: 'Nuestro motor aplica los factores de emisión oficiales de la SEMARNAT vigentes en la fecha de cada factura. Alcance 1 y Alcance 2. Sin errores. Sin interpretación.',
    note: null,
    icon: <CalcIcon />,
  },
  {
    number: '03',
    title: 'Descarga tu reporte',
    body: 'PDF o Excel listo para presentar ante el RENE, en una auditoría bancaria o ante tus clientes corporativos globales. Incluye hash de trazabilidad y referencia normativa por cálculo.',
    note: null,
    icon: <DocumentIcon />,
  },
]

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="section"
      style={{ background: 'var(--bg)' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '72px' }}
        >
          <span className="section-label">Cómo Funciona</span>
          <h2 className="section-title">
            Tres pasos. Sin curva de aprendizaje.
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '0',
            position: 'relative',
          }}
          className="steps-grid"
        >
          {STEPS.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 }}
              style={{
                padding: '40px 36px',
                borderRight: i < STEPS.length - 1 ? '1px solid var(--border)' : 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '24px',
                position: 'relative',
              }}
              className="step-item"
            >
              {/* Connector dot */}
              {i < STEPS.length - 1 && (
                <div
                  aria-hidden="true"
                  style={{
                    position: 'absolute',
                    right: '-5px',
                    top: '50px',
                    width: '9px',
                    height: '9px',
                    borderRadius: '50%',
                    background: 'var(--bg)',
                    border: '2px solid var(--border-emerald)',
                    zIndex: 1,
                  }}
                  className="connector-dot"
                />
              )}

              {/* Step number */}
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '64px',
                  fontWeight: 800,
                  lineHeight: 1,
                  color: 'transparent',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  backgroundImage: 'linear-gradient(135deg, var(--emerald) 0%, rgba(0, 232, 122, 0.3) 100%)',
                  letterSpacing: '-0.03em',
                  display: 'block',
                }}
              >
                {step.number}
              </span>

              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius)',
                  background: 'rgba(0, 232, 122, 0.08)',
                  border: '1px solid rgba(0, 232, 122, 0.18)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--emerald)',
                }}
              >
                {step.icon}
              </div>

              {/* Text */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2vw, 22px)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}
                >
                  {step.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: step.note ? '12px' : 0 }}>
                  {step.body}
                </p>
                {step.note && (
                  <p
                    style={{
                      fontSize: '13px',
                      color: 'var(--text-dim)',
                      lineHeight: 1.6,
                      padding: '10px 14px',
                      background: 'rgba(255,255,255,0.03)',
                      borderRadius: 'var(--radius-sm)',
                      borderLeft: '2px solid var(--border-emerald)',
                    }}
                  >
                    {step.note}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .step-item {
            border-right: none !important;
            border-bottom: 1px solid var(--border);
            padding: 32px 24px !important;
          }
          .step-item:last-child {
            border-bottom: none;
          }
          .connector-dot {
            display: none;
          }
        }
      `}</style>
    </section>
  )
}

function UploadIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="16 16 12 12 8 16" />
      <line x1="12" y1="12" x2="12" y2="21" />
      <path d="M20.39 18.39A5 5 0 0018 9h-1.26A8 8 0 103 16.3" />
    </svg>
  )
}

function CalcIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="8" y1="6" x2="16" y2="6" />
      <line x1="8" y1="10" x2="10" y2="10" />
      <line x1="14" y1="10" x2="16" y2="10" />
      <line x1="8" y1="14" x2="10" y2="14" />
      <line x1="14" y1="14" x2="16" y2="14" />
      <line x1="8" y1="18" x2="16" y2="18" />
    </svg>
  )
}

function DocumentIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <path d="M9 15l2 2 4-4" />
    </svg>
  )
}
