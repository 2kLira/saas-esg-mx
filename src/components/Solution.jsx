import { motion } from 'framer-motion'

const BEFORE = [
  'Semanas de trabajo manual',
  'Dependencia de consultores caros',
  'Reportes en Excel sin respaldo legal',
  'Miedo a cada auditoría',
  'Errores humanos imposibles de rastrear',
]

const AFTER = [
  'Reporte listo en horas, no semanas',
  'Tu equipo junior lo opera solo',
  'Trazabilidad completa por cada cálculo',
  'Respaldo legal ante SAT y SEMARNAT',
  'Actualización automática de normativa',
]

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M6 16h20M18 9l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function Solution() {
  return (
    <section
      id="solucion"
      className="section"
      style={{ background: '#080b12' }}
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
          <span className="section-label">La Solución</span>
          <h2 className="section-title">
            De tus facturas del SAT a un reporte auditable. En minutos.
          </h2>
        </motion.div>

        {/* Before / After */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '32px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
          className="solution-grid"
        >
          {/* Before */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(255, 77, 77, 0.04)',
              border: '1px solid rgba(255, 77, 77, 0.15)',
              borderRadius: 'var(--radius)',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--danger)',
                marginBottom: '24px',
              }}
            >
              Antes de ESG·MX
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {BEFORE.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '15px',
                    color: 'var(--text-muted)',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(255, 77, 77, 0.12)',
                      border: '1px solid rgba(255, 77, 77, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--danger)',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <CrossIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Arrow divider */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              color: 'var(--emerald)',
              width: '64px',
              flexShrink: 0,
            }}
            className="solution-arrow"
          >
            <ArrowIcon />
          </motion.div>

          {/* After */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{
              background: 'rgba(0, 232, 122, 0.04)',
              border: '1px solid rgba(0, 232, 122, 0.15)',
              borderRadius: 'var(--radius)',
              padding: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--emerald)',
                marginBottom: '24px',
              }}
            >
              Con ESG·MX
            </p>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {AFTER.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '12px',
                    fontSize: '15px',
                    color: 'var(--text)',
                    lineHeight: 1.5,
                  }}
                >
                  <span
                    style={{
                      width: '22px',
                      height: '22px',
                      borderRadius: '50%',
                      background: 'rgba(0, 232, 122, 0.12)',
                      border: '1px solid rgba(0, 232, 122, 0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--emerald)',
                      flexShrink: 0,
                      marginTop: '1px',
                    }}
                  >
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Callout box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            background: 'rgba(0, 232, 122, 0.04)',
            border: '1px solid rgba(0, 232, 122, 0.15)',
            borderLeft: '3px solid var(--emerald)',
            borderRadius: 'var(--radius)',
            padding: '28px 32px',
            display: 'flex',
            gap: '16px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ color: 'var(--emerald)', fontSize: '20px', flexShrink: 0, marginTop: '2px' }}>
            <ShieldIcon />
          </span>
          <p style={{ fontSize: '15px', color: 'var(--text-muted)', lineHeight: 1.7 }}>
            <strong style={{ color: 'var(--text)', fontWeight: 600 }}>
              Nuestro motor de cálculo es 100% determinístico
            </strong>{' '}
            — basado en reglas normativas, no en inteligencia artificial. Cada número puede ser
            explicado, auditado y defendido ante cualquier autoridad.
          </p>
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .solution-grid {
            grid-template-columns: 1fr !important;
          }
          .solution-arrow {
            transform: rotate(90deg);
            margin: 0 auto;
          }
        }
      `}</style>
    </section>
  )
}

function ShieldIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}
