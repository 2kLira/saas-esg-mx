import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'Problema', href: '#problema' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Precios', href: '#precios' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'background 300ms ease, border-color 300ms ease, box-shadow 300ms ease',
          background: scrolled ? 'rgba(7, 9, 15, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
          boxShadow: scrolled ? '0 4px 30px rgba(0,0,0,0.4)' : 'none',
        }}
      >
        <div
          style={{
            maxWidth: 'var(--container)',
            margin: '0 auto',
            padding: '0 24px',
            height: '68px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              fontFamily: 'var(--font-display)',
              fontSize: '22px',
              fontWeight: 700,
              color: 'var(--text)',
              letterSpacing: '-0.01em',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            ESG
            <span style={{ color: 'var(--emerald)', fontSize: '24px', lineHeight: 1 }}>·</span>
            MX
          </a>

          {/* Desktop nav */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                style={{
                  padding: '8px 14px',
                  fontSize: '14px',
                  fontWeight: 400,
                  color: 'var(--text-muted)',
                  borderRadius: 'var(--radius-sm)',
                  transition: 'color 200ms ease, background 200ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
              className="btn btn-gold"
              style={{ padding: '9px 20px', fontSize: '14px', marginLeft: '8px' }}
            >
              Agendar Demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              width: '44px',
              height: '44px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 'var(--radius-sm)',
              background: 'transparent',
              border: '1px solid var(--border)',
              color: 'var(--text)',
              transition: 'background 200ms ease',
              flexShrink: 0,
            }}
            className="hamburger-btn"
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(7, 9, 15, 0.98)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              padding: '24px',
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href) }}
                style={{
                  width: '100%',
                  maxWidth: '320px',
                  textAlign: 'center',
                  padding: '18px 24px',
                  fontSize: '22px',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 500,
                  color: 'var(--text-muted)',
                  borderRadius: 'var(--radius)',
                  border: '1px solid transparent',
                  transition: 'all 200ms ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--text)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.background = 'var(--bg-card)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-muted)'
                  e.currentTarget.style.borderColor = 'transparent'
                  e.currentTarget.style.background = 'transparent'
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contacto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.2, delay: NAV_LINKS.length * 0.05 }}
              onClick={(e) => { e.preventDefault(); handleNavClick('#contacto') }}
              className="btn btn-primary"
              style={{ marginTop: '16px', width: '100%', maxWidth: '320px', justifyContent: 'center', fontSize: '16px', padding: '18px 24px' }}
            >
              Agendar Demo Gratuita
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hamburger-btn { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </>
  )
}

function HamburgerIcon({ open }) {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <motion.line
        x1="3" y1={open ? '10' : '5'} x2="17" y2={open ? '10' : '5'}
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={{ rotate: open ? 45 : 0, y: open ? 0 : 0 }}
        style={{ transformOrigin: '10px 10px' }}
      />
      <motion.line
        x1="3" y1="10" x2="17" y2="10"
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.line
        x1="3" y1={open ? '10' : '15'} x2="17" y2={open ? '10' : '15'}
        stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
        animate={{ rotate: open ? -45 : 0 }}
        style={{ transformOrigin: '10px 10px' }}
      />
    </svg>
  )
}
