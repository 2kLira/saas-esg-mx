import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Plan data ─────────────────────────────────────────────────────────── */

const LICENCIA_PLANS = [
  {
    name: 'Plan Básico',
    for: 'PyMEs exportadoras',
    description: 'Para empresas que necesitan reportar Alcance 1 y 2 para cumplir con clientes internacionales o proveedores corporativos.',
    features: [
      'Licencia perpetua del sistema',
      'Hasta 500 CFDIs por mes',
      'Cálculo Alcance 1 y 2',
      'Reporte en PDF y Excel',
      'Trazabilidad SHA-256',
      '2 usuarios incluidos',
      'Capacitación inicial (4 horas)',
    ],
    maintenanceNote: 'El mantenimiento anual incluye actualización de factores de emisión cuando cambia la normativa. Sin él, los reportes futuros pueden quedar desactualizados.',
    highlighted: false,
    mostRequested: false,
    cta: 'Solicitar Cotización',
  },
  {
    name: 'Plan Profesional',
    for: 'Empresas sujetas al RENE',
    description: 'Para empresas con obligación legal de reportar al RENE. El sistema hace el cálculo; tú firmas el reporte.',
    features: [
      'Licencia perpetua del sistema',
      'CFDIs ilimitados',
      'Cálculo Alcance 1 y 2',
      'Reporte certificado para RENE',
      'Dashboard de emisiones',
      'Hasta 10 usuarios',
      'Capacitación inicial (8 horas)',
      'Soporte prioritario (6 meses incluidos)',
    ],
    maintenanceNote: 'Recomendado. La normativa RENE se actualiza periódicamente — el mantenimiento garantiza que tus reportes siempre reflejen los factores vigentes.',
    highlighted: true,
    mostRequested: true,
    cta: 'Solicitar Cotización',
  },
  {
    name: 'Plan Enterprise',
    for: 'Corporativos en el SCE o multi-planta',
    description: 'Para grandes empresas con múltiples plantas, obligaciones SCE o requerimientos de reporte bajo estándares internacionales.',
    features: [
      'Todo lo del plan Profesional',
      'Multi-planta',
      'Usuarios ilimitados',
      'Implementación asistida completa',
      'Capacitación extendida para todo el equipo',
      'Soporte legal 24/7 (primer año)',
      'SLA de disponibilidad garantizado',
    ],
    maintenanceNote: null,
    maintenanceBadgeText: 'Mantenimiento anual incluido (primer año)',
    highlighted: false,
    mostRequested: false,
    cta: 'Hablar con un especialista',
  },
]

const SUSCRIPCION_PLANS = [
  {
    name: 'Plan Básico',
    for: 'PyMEs exportadoras',
    features: [
      'Cálculo Alcance 1 y 2',
      'Hasta 500 CFDIs por mes',
      'Reporte en PDF y Excel',
      'Trazabilidad SHA-256',
      '2 usuarios incluidos',
      'Normativa siempre actualizada (incluido)',
      'Soporte por correo',
    ],
    excluded: ['Multi-planta'],
    highlighted: false,
    mostRequested: false,
    cta: 'Solicitar Cotización',
  },
  {
    name: 'Plan Profesional',
    for: 'Empresas sujetas al RENE',
    features: [
      'CFDIs ilimitados',
      'Cálculo Alcance 1 y 2',
      'Reporte certificado para RENE',
      'Dashboard de emisiones',
      'Hasta 10 usuarios',
      'Normativa siempre actualizada (incluido)',
      'Notificaciones de cambio normativo',
      'Soporte prioritario',
    ],
    excluded: ['Multi-planta'],
    highlighted: true,
    mostRequested: true,
    cta: 'Solicitar Cotización',
  },
  {
    name: 'Plan Enterprise',
    for: 'Corporativos en el SCE',
    features: [
      'Todo lo del plan Profesional',
      'Multi-planta',
      'Usuarios ilimitados',
      'Soporte legal 24/7',
      'SLA garantizado',
      'Normativa siempre actualizada (incluido)',
    ],
    excluded: [],
    highlighted: false,
    mostRequested: false,
    cta: 'Hablar con un especialista',
  },
]

const FAQ_ITEMS = [
  {
    q: '¿Necesito conocimientos técnicos para usar la plataforma?',
    a: 'No. Si sabes descargar tus facturas del SAT, sabes usar ESG·MX. Tu operador junior puede generar su primer reporte en menos de una hora.',
  },
  {
    q: '¿Qué tan legalmente válido es el reporte?',
    a: 'Cada reporte incluye el hash SHA-256 del documento, la versión normativa aplicada y la referencia a la disposición legal de cada cálculo. Está diseñado para ser defendible ante el SAT y la SEMARNAT.',
  },
  {
    q: '¿Qué pasa si adquiero la licencia y después cambia la normativa?',
    a: 'Sin mantenimiento activo, el sistema seguirá funcionando con los factores de emisión de la versión que adquiriste. Para reportes futuros con normativa actualizada, el mantenimiento anual cubre esa actualización. Te notificamos con tiempo cuando hay un cambio que te afecta.',
  },
  {
    q: '¿Puedo migrar de suscripción a licencia después?',
    a: 'Sí. Si decides adquirir la licencia permanente después de usar la suscripción, descontamos los meses pagados del precio de la licencia. Habla con nosotros y lo estructuramos.',
  },
]

/* ── Sub-components ────────────────────────────────────────────────────── */

function CheckIcon({ color = 'var(--emerald)' }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function GoldBadge({ text }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        padding: '4px 10px',
        borderRadius: '100px',
        background: 'rgba(232, 197, 71, 0.1)',
        border: '1px solid rgba(232, 197, 71, 0.25)',
        fontFamily: 'var(--font-mono)',
        fontSize: '10px',
        fontWeight: 500,
        color: 'var(--gold)',
        letterSpacing: '0.04em',
      }}
    >
      <span style={{ fontSize: '8px' }}>★</span>
      {text}
    </span>
  )
}

function FeatureList({ features, excluded = [] }) {
  return (
    <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {features.map((f, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(0,232,122,0.1)', border: '1px solid rgba(0,232,122,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
            <CheckIcon />
          </span>
          {f}
        </li>
      ))}
      {excluded.map((f, i) => (
        <li key={`x-${i}`} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-dim)', lineHeight: 1.5 }}>
          <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px', color: 'var(--text-dim)' }}>
            <CrossIcon />
          </span>
          {f}
        </li>
      ))}
    </ul>
  )
}

function PlanCard({ plan, isLicencia }) {
  const contactHref = '#contacto'
  const handleCTA = (e) => {
    e.preventDefault()
    document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <article
      style={{
        background: plan.highlighted ? 'rgba(0, 232, 122, 0.05)' : 'var(--bg-card)',
        border: plan.highlighted ? '1px solid rgba(0, 232, 122, 0.25)' : '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        position: 'relative',
        boxShadow: plan.highlighted ? '0 0 50px rgba(0, 232, 122, 0.08)' : 'none',
        transition: 'border-color 250ms ease',
      }}
    >
      {plan.mostRequested && (
        <div
          style={{
            position: 'absolute',
            top: '-13px',
            left: '50%',
            transform: 'translateX(-50%)',
            padding: '4px 16px',
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
          Más solicitado
        </div>
      )}

      <div>
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '20px',
            fontWeight: 700,
            color: 'var(--text)',
            marginBottom: '6px',
          }}
        >
          {plan.name}
        </h3>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{plan.for}</p>
      </div>

      {isLicencia && plan.description && (
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.65, borderTop: '1px solid var(--border)', paddingTop: '20px' }}>
          {plan.description}
        </p>
      )}

      <FeatureList features={plan.features} excluded={plan.excluded || []} />

      {/* Maintenance badge */}
      {isLicencia && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <GoldBadge text={plan.maintenanceBadgeText || 'Mantenimiento anual disponible'} />
          {plan.maintenanceNote && (
            <p style={{ fontSize: '12px', color: 'var(--text-dim)', lineHeight: 1.6 }}>
              {plan.maintenanceNote}
            </p>
          )}
        </div>
      )}

      <a
        href={contactHref}
        onClick={handleCTA}
        className={plan.highlighted ? 'btn btn-primary' : plan.cta === 'Hablar con un especialista' ? 'btn btn-gold' : 'btn btn-emerald-outline'}
        style={{ justifyContent: 'center', fontSize: '14px', padding: '13px 20px', marginTop: 'auto' }}
      >
        {plan.cta}
      </a>
    </article>
  )
}

function FAQItem({ item, isOpen, onToggle }) {
  return (
    <div
      style={{
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-sm)',
        overflow: 'hidden',
        transition: 'border-color 250ms ease',
        borderColor: isOpen ? 'rgba(0, 232, 122, 0.2)' : 'var(--border)',
      }}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          padding: '20px 24px',
          background: isOpen ? 'rgba(0, 232, 122, 0.04)' : 'transparent',
          color: 'var(--text)',
          textAlign: 'left',
          fontSize: '15px',
          fontWeight: 500,
          lineHeight: 1.4,
          transition: 'background 200ms ease',
          cursor: 'pointer',
          border: 'none',
          fontFamily: 'var(--font-body)',
        }}
      >
        {item.q}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: isOpen ? 'rgba(0,232,122,0.15)' : 'rgba(255,255,255,0.06)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: isOpen ? 'var(--emerald)' : 'var(--text-muted)',
            flexShrink: 0,
            fontSize: '18px',
            lineHeight: 1,
          }}
        >
          +
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p
              style={{
                padding: '0 24px 20px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}
            >
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ── Main component ────────────────────────────────────────────────────── */

export default function Pricing() {
  const [activeTab, setActiveTab] = useState('licencia')
  const [openFAQ, setOpenFAQ] = useState(null)

  const plans = activeTab === 'licencia' ? LICENCIA_PLANS : SUSCRIPCION_PLANS

  return (
    <section id="precios" className="section" style={{ background: 'var(--bg)' }}>
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '48px' }}
        >
          <span className="section-label">Precios</span>
          <h2 className="section-title">
            Elige cómo quieres trabajar con nosotros.
          </h2>
          <p className="section-subtitle">
            Sin precios publicados — cada implementación es distinta. Lo que sí te decimos: hay una opción para cada tipo de empresa.
          </p>
        </motion.div>

        {/* Tab toggle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'inline-flex',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--border)',
            borderRadius: '100px',
            padding: '4px',
            marginBottom: '48px',
            gap: '4px',
          }}
        >
          {[
            { id: 'licencia', label: 'Licencia Permanente' },
            { id: 'suscripcion', label: 'Suscripción Mensual' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                padding: '10px 24px',
                borderRadius: '100px',
                fontSize: '14px',
                fontWeight: 500,
                transition: 'all 200ms ease',
                background: activeTab === tab.id ? (tab.id === 'licencia' ? 'rgba(232,197,71,0.12)' : 'rgba(0,232,122,0.12)') : 'transparent',
                color: activeTab === tab.id ? (tab.id === 'licencia' ? 'var(--gold)' : 'var(--emerald)') : 'var(--text-muted)',
                border: activeTab === tab.id ? `1px solid ${tab.id === 'licencia' ? 'rgba(232,197,71,0.25)' : 'rgba(0,232,122,0.25)'}` : '1px solid transparent',
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                whiteSpace: 'nowrap',
              }}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Intro card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-intro'}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            style={{
              background: activeTab === 'licencia' ? 'rgba(232,197,71,0.05)' : 'rgba(0,232,122,0.05)',
              borderLeft: `3px solid ${activeTab === 'licencia' ? 'var(--gold)' : 'var(--emerald)'}`,
              border: `1px solid ${activeTab === 'licencia' ? 'rgba(232,197,71,0.15)' : 'rgba(0,232,122,0.15)'}`,
              borderRadius: 'var(--radius)',
              padding: '20px 24px',
              marginBottom: '40px',
              fontSize: '15px',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
            }}
          >
            {activeTab === 'licencia'
              ? 'Adquieres el sistema una sola vez. Es tuyo. Sin pagos mensuales, sin dependencia de nuestra disponibilidad, sin sorpresas en tu estado de resultados. Incluye implementación asistida y capacitación de tu equipo.'
              : 'Sin inversión inicial. Pagas mes a mes y cancelas cuando quieras. Ideal si quieres probar el sistema antes de adquirir la licencia, o si prefieres un gasto operativo predecible sobre una inversión de capital.'}
          </motion.div>
        </AnimatePresence>

        {/* Plan cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab + '-plans'}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
              marginBottom: '48px',
            }}
          >
            {plans.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} isLicencia={activeTab === 'licencia'} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Licencia: Maintenance callout */}
        <AnimatePresence mode="wait">
          {activeTab === 'licencia' && (
            <motion.div
              key="maintenance-callout"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(232,197,71,0.04)',
                border: '1px solid rgba(232,197,71,0.15)',
                borderRadius: 'var(--radius)',
                padding: '32px',
                marginBottom: '48px',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{ color: 'var(--gold)', flexShrink: 0 }}>
                <ShieldRefreshIcon />
              </div>
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '18px',
                    fontWeight: 700,
                    color: 'var(--text)',
                    marginBottom: '12px',
                  }}
                >
                  ¿Qué incluye el mantenimiento anual?
                </h3>
                <p style={{ fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '16px' }}>
                  La normativa ambiental en México cambia. Los factores de emisión de la SEMARNAT se actualizan. Las NIS evolucionan. Sin mantenimiento, tu sistema calcula con datos desactualizados — y un reporte con factores viejos no te protege en una auditoría.
                </p>
                <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '16px' }}>
                  El mantenimiento anual incluye:
                </p>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '16px' }}>
                  {[
                    'Actualización de factores de emisión cuando cambia la normativa oficial',
                    'Alertas cuando un cambio normativo afecta tus reportes históricos',
                    'Correcciones de errores del sistema',
                    'Soporte técnico por correo',
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                      <span style={{ width: '18px', height: '18px', borderRadius: '50%', background: 'rgba(232,197,71,0.1)', border: '1px solid rgba(232,197,71,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '1px' }}>
                        <CheckIcon color="var(--gold)" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: '13px', color: 'var(--text-dim)', fontStyle: 'italic' }}>
                  Es opcional. Pero si tu empresa está sujeta al RENE, lo recomendamos.
                </p>
              </div>
            </motion.div>
          )}

          {/* Suscripción: comparison nudge */}
          {activeTab === 'suscripcion' && (
            <motion.div
              key="comparison-nudge"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--border)',
                borderRadius: 'var(--radius)',
                padding: '20px 24px',
                marginBottom: '48px',
                fontSize: '14px',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
              }}
            >
              <strong style={{ color: 'var(--text)' }}>¿Licencia o suscripción?</strong> En la suscripción, las actualizaciones normativas están incluidas porque el sistema vive en nuestra infraestructura. Si optas por licencia permanente, el mantenimiento anual cumple la misma función — y a partir del segundo año, la licencia suele ser más económica.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Shared divider */}
        <div className="divider" style={{ marginBottom: '64px' }} />

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
        >
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(20px, 2.5vw, 28px)',
              fontWeight: 700,
              color: 'var(--text)',
              marginBottom: '32px',
            }}
          >
            Preguntas frecuentes
          </h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '800px' }}>
            {FAQ_ITEMS.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openFAQ === i}
                onToggle={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ShieldRefreshIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9.5 9a2.5 2.5 0 015 0c0 1.5-1 2.5-2.5 4" />
      <circle cx="12" cy="16.5" r=".5" fill="currentColor" />
    </svg>
  )
}
