import { motion } from 'framer-motion'

const PAIN_CARDS = [
  {
    title: 'Necesitas un experto que no puedes pagar',
    body: 'El cumplimiento del RENE requiere un perfil híbrido: abogado ambiental, contador fiscal y analista de datos en uno. Ese perfil existe solo en despachos que cobran $150,000 MXN al mes.',
    badge: 'Costo: $150,000 MXN/mes en consultoría',
  },
  {
    title: 'Tus datos están en tres lugares distintos',
    body: 'Tus facturas están en el SAT. Tu electricidad en la CFE. Tus procesos en hojas de Excel que nadie entiende. Conciliar todo eso para una auditoría toma semanas de trabajo manual.',
    badge: 'Tiempo perdido: 4 a 8 semanas por reporte',
  },
  {
    title: 'Un Excel no te protege ante una inspección',
    body: 'Sin trazabilidad del origen de cada dato, sin versión normativa documentada, sin firma inmutable — tu reporte no tiene peso legal ante la SEMARNAT o el SAT. Eres vulnerable aunque los números sean correctos.',
    badge: 'Riesgo: Multas desde $500,000 MXN',
  },
]

function WarningIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <line x1="12" y1="9" x2="12" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  )
}

export default function Problem() {
  return (
    <section
      id="problema"
      className="section"
      style={{ background: 'linear-gradient(180deg, var(--bg) 0%, #08080f 100%)' }}
    >
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">El Problema</span>
          <h2 className="section-title" style={{ maxWidth: '700px' }}>
            El cumplimiento ESG en México está diseñado para hacerte fallar
          </h2>
          <p
            style={{
              fontSize: '16px',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              marginTop: '12px',
            }}
          >
            ¿Te reconoces en alguno de estos?
          </p>
        </motion.div>

        {/* Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {PAIN_CARDS.map((card, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                background: 'rgba(255, 77, 77, 0.03)',
                border: '1px solid rgba(255, 77, 77, 0.14)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                transition: 'border-color 250ms ease, background 250ms ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 77, 77, 0.3)'
                e.currentTarget.style.background = 'rgba(255, 77, 77, 0.05)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 77, 77, 0.14)'
                e.currentTarget.style.background = 'rgba(255, 77, 77, 0.03)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'rgba(255, 77, 77, 0.1)',
                  border: '1px solid rgba(255, 77, 77, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--danger)',
                  flexShrink: 0,
                }}
              >
                <WarningIcon />
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.2vw, 22px)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '14px',
                    lineHeight: 1.3,
                  }}
                >
                  {card.title}
                </h3>
                <p
                  style={{
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.7,
                  }}
                >
                  {card.body}
                </p>
              </div>

              {/* Badge */}
              <div
                style={{
                  padding: '10px 16px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(255, 77, 77, 0.08)',
                  border: '1px solid rgba(255, 77, 77, 0.2)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'var(--danger)',
                  letterSpacing: '0.03em',
                }}
              >
                ⚠ {card.badge}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
