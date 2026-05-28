import { motion } from 'framer-motion'

const COMPLIANCE_BADGES = ['NIS', 'RENE', 'SCE', 'GHG Protocol', 'SEMARNAT']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
})

export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        position: 'relative',
        minHeight: '92vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Grid background */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(238, 242, 255, 0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(238, 242, 255, 0.022) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          pointerEvents: 'none',
        }}
      />

      {/* Radial emerald glow */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '900px',
          height: '600px',
          background: 'radial-gradient(ellipse 65% 55% at 50% 40%, rgba(0, 232, 122, 0.11) 0%, rgba(0, 232, 122, 0.04) 45%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(2px)',
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '200px',
          background: 'linear-gradient(to bottom, transparent, var(--bg))',
          pointerEvents: 'none',
        }}
      />

      <div
        className="container"
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: '0',
        }}
      >
        {/* Eyebrow */}
        <motion.div {...fadeUp(0)}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 16px',
              borderRadius: '100px',
              background: 'rgba(0, 232, 122, 0.08)',
              border: '1px solid rgba(0, 232, 122, 0.2)',
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '0.15em',
              color: 'var(--emerald)',
              textTransform: 'uppercase',
              marginBottom: '32px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--emerald)',
                boxShadow: '0 0 8px var(--emerald)',
                flexShrink: 0,
              }}
            />
            Cumplimiento RENE · SAT · SEMARNAT
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.1)}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(32px, 5.5vw, 72px)',
            fontWeight: 800,
            lineHeight: 1.12,
            color: 'var(--text)',
            maxWidth: '880px',
            marginBottom: '28px',
            letterSpacing: '-0.02em',
          }}
        >
          Tu empresa ya debería estar reportando.{' '}
          <span
            style={{
              color: 'transparent',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              backgroundImage: 'linear-gradient(135deg, #ffffff 0%, rgba(238,242,255,0.7) 100%)',
            }}
          >
            El SAT y la SEMARNAT no esperan.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          {...fadeUp(0.2)}
          style={{
            fontSize: 'clamp(16px, 2.2vw, 20px)',
            color: 'var(--text-muted)',
            maxWidth: '680px',
            lineHeight: 1.7,
            marginBottom: '44px',
          }}
        >
          SAAS LEGAL TECH ESG convierte tus facturas del SAT y datos operativos
          en reportes de huella de carbono auditables para el RENE y las NIS —
          sin consultores, sin Excels, sin riesgo.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...fadeUp(0.3)}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            justifyContent: 'center',
            marginBottom: '72px',
          }}
        >
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-primary"
            style={{ fontSize: '16px', padding: '16px 32px', gap: '10px' }}
          >
            Agendar Demo Gratuita
            <ArrowRight />
          </a>
          <a
            href="#como-funciona"
            onClick={(e) => {
              e.preventDefault()
              document.querySelector('#como-funciona')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn btn-ghost"
            style={{ fontSize: '16px', padding: '16px 32px' }}
          >
            Ver cómo funciona
          </a>
        </motion.div>

        {/* Trust bar */}
        <motion.div
          {...fadeUp(0.4)}
          style={{ width: '100%', maxWidth: '760px' }}
        >
          <div
            style={{
              height: '1px',
              background: 'linear-gradient(90deg, transparent, var(--border), transparent)',
              marginBottom: '28px',
            }}
          />
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '11px',
              letterSpacing: '0.12em',
              color: 'var(--text-dim)',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Diseñado para cumplimiento de:
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '10px',
              justifyContent: 'center',
            }}
          >
            {COMPLIANCE_BADGES.map((badge) => (
              <span
                key={badge}
                style={{
                  padding: '7px 16px',
                  borderRadius: '100px',
                  background: 'rgba(238, 242, 255, 0.04)',
                  border: '1px solid rgba(238, 242, 255, 0.1)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  fontWeight: 500,
                  color: 'rgba(238, 242, 255, 0.65)',
                  letterSpacing: '0.06em',
                }}
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8h10M8.5 3.5L13 8l-4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
