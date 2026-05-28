const FOOTER_LINKS = ['Cómo funciona', 'Precios', 'Contacto']
const COMPLIANCE = ['NIS', 'RENE', 'SCE', 'GHG Protocol', 'SEMARNAT']

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        background: '#050709',
        padding: '60px 24px 32px',
      }}
    >
      <div className="container">
        {/* Main row */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto 1fr',
            gap: '40px',
            alignItems: 'start',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Left: brand */}
          <div>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '2px',
                fontFamily: 'var(--font-display)',
                fontSize: '20px',
                fontWeight: 700,
                color: 'var(--text)',
                marginBottom: '12px',
              }}
            >
              ESG
              <span style={{ color: 'var(--emerald)', fontSize: '22px' }}>·</span>
              MX
            </a>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-dim)',
                lineHeight: 1.65,
                maxWidth: '280px',
              }}
            >
              Sistema de gestión de huella de carbono para la industria mexicana.
              Nuevo León, México.
            </p>
          </div>

          {/* Center: links */}
          <nav aria-label="Footer navigation">
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
              {[
                { label: 'Cómo funciona', href: '#como-funciona' },
                { label: 'Precios', href: '#precios' },
                { label: 'Contacto', href: '#contacto' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    style={{
                      fontSize: '14px',
                      color: 'var(--text-dim)',
                      transition: 'color 200ms ease',
                      cursor: 'pointer',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text-muted)' }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right: copyright */}
          <div style={{ textAlign: 'right' }}>
            <p
              style={{
                fontSize: '13px',
                color: 'var(--text-dim)',
                lineHeight: 1.5,
              }}
            >
              © {year} SAAS Legal Tech ESG
            </p>
            <p
              style={{
                fontSize: '12px',
                color: 'rgba(238, 242, 255, 0.18)',
                marginTop: '4px',
              }}
            >
              Confidencial
            </p>
            <a
              href="mailto:contacto@saasesg.mx"
              style={{
                display: 'inline-block',
                marginTop: '12px',
                fontSize: '13px',
                color: 'var(--text-dim)',
                transition: 'color 200ms ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--emerald)' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-dim)' }}
            >
              contacto@saasesg.mx
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="divider" style={{ marginBottom: '24px' }} />

        {/* Bottom row: compliance badges */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '8px',
          }}
        >
          {COMPLIANCE.map((badge) => (
            <span
              key={badge}
              style={{
                padding: '4px 12px',
                borderRadius: '100px',
                background: 'rgba(255, 255, 255, 0.025)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                fontFamily: 'var(--font-mono)',
                fontSize: '10px',
                color: 'rgba(238, 242, 255, 0.3)',
                letterSpacing: '0.08em',
              }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .footer-grid > div:first-child p { max-width: 100% !important; }
          .footer-grid > div:last-child { text-align: center !important; }
        }
      `}</style>
    </footer>
  )
}
