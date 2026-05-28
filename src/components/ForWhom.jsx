import { motion } from 'framer-motion'

const SEGMENTS = [
  {
    title: 'PyME Exportadora',
    icon: <GlobeIcon />,
    body: 'Tus clientes internacionales ya te están pidiendo reportes ESG como condición de contrato. Genera tu reporte de Alcance 1 y 2 sin necesidad de un consultor.',
    ideal: 'Empresas con clientes en EU o Europa que exigen cumplimiento ESG',
    highlighted: false,
    badge: null,
  },
  {
    title: 'Empresa Industrial (RENE)',
    icon: <FactoryIcon />,
    body: 'Estás obligado por ley a reportar al RENE si tus emisiones superan las 25,000 toneladas de CO₂e al año. Nosotros hacemos el cálculo, tú firmas el reporte.',
    ideal: 'Empresas sujetas al RENE en sectores como manufactura, química, alimentaria o automotriz',
    highlighted: true,
    badge: 'Más elegido',
  },
  {
    title: 'Corporativo (SCE)',
    icon: <BuildingIcon />,
    body: 'Si tu empresa está en el Sistema de Comercio de Emisiones, necesitas reportes con el más alto nivel de trazabilidad y rigor legal.',
    ideal: 'Grandes empresas industriales o que cotizan en bolsa',
    highlighted: false,
    badge: null,
  },
]

export default function ForWhom() {
  return (
    <section
      id="para-quien"
      className="section"
      style={{ background: 'linear-gradient(180deg, #080b12 0%, var(--bg) 100%)' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Para Quién Es</span>
          <h2 className="section-title">
            Diseñado para empresas como la tuya
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}
        >
          {SEGMENTS.map((seg, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.1 }}
              style={{
                background: seg.highlighted
                  ? 'rgba(0, 232, 122, 0.05)'
                  : 'var(--bg-card)',
                border: seg.highlighted
                  ? '1px solid rgba(0, 232, 122, 0.25)'
                  : '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                position: 'relative',
                transition: 'border-color 250ms ease, background 250ms ease',
                boxShadow: seg.highlighted
                  ? '0 0 50px rgba(0, 232, 122, 0.08)'
                  : 'none',
              }}
              onMouseEnter={(e) => {
                if (!seg.highlighted) {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'
                  e.currentTarget.style.background = 'var(--bg-card-hover)'
                }
              }}
              onMouseLeave={(e) => {
                if (!seg.highlighted) {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }
              }}
            >
              {/* Badge */}
              {seg.badge && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    padding: '4px 14px',
                    background: 'var(--emerald)',
                    borderRadius: '100px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#07090F',
                    letterSpacing: '0.08em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {seg.badge}
                </div>
              )}

              {/* Icon */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  borderRadius: 'var(--radius)',
                  background: seg.highlighted ? 'rgba(0,232,122,0.1)' : 'rgba(255,255,255,0.04)',
                  border: `1px solid ${seg.highlighted ? 'rgba(0,232,122,0.2)' : 'var(--border)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: seg.highlighted ? 'var(--emerald)' : 'var(--text-muted)',
                }}
              >
                {seg.icon}
              </div>

              {/* Text */}
              <div style={{ flex: 1 }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(18px, 2.2vw, 21px)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}
                >
                  {seg.title}
                </h3>
                <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {seg.body}
                </p>
              </div>

              {/* Ideal for */}
              <div
                style={{
                  padding: '12px 16px',
                  background: seg.highlighted ? 'rgba(0, 232, 122, 0.05)' : 'rgba(255,255,255,0.03)',
                  border: `1px solid ${seg.highlighted ? 'rgba(0, 232, 122, 0.15)' : 'var(--border)'}`,
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '4px',
                  }}
                >
                  Ideal para:
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  {seg.ideal}
                </p>
              </div>

              {/* CTA */}
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className={seg.highlighted ? 'btn btn-primary' : 'btn btn-ghost'}
                style={{
                  justifyContent: 'center',
                  fontSize: '14px',
                  padding: '12px 20px',
                }}
              >
                Agendar Demo
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function GlobeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
}

function FactoryIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M2 20V10l5-5 4 4 5-6 6 7v10H2z" />
      <rect x="6" y="15" width="3" height="5" />
      <rect x="11" y="15" width="3" height="5" />
    </svg>
  )
}

function BuildingIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M3 9h18M9 21V9" />
      <rect x="13" y="13" width="3" height="4" />
    </svg>
  )
}
