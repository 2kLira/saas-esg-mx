import { motion } from 'framer-motion'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'

const TABLE_ROWS = [
  { criteria: 'Costo mensual', consultant: '$80,000–$150,000 MXN', esg: 'Desde $5,500 MXN', consultantType: 'bad', esgType: 'good' },
  { criteria: 'Tiempo de entrega del reporte', consultant: '4–8 semanas', esg: 'Horas', consultantType: 'bad', esgType: 'good' },
  { criteria: 'Disponibilidad', consultant: 'Horario de oficina', esg: '24/7', consultantType: 'warn', esgType: 'good' },
  { criteria: 'Trazabilidad legal', consultant: 'Depende del consultor', esg: 'Hash SHA-256 por reporte', consultantType: 'warn', esgType: 'good' },
  { criteria: 'Actualización normativa', consultant: 'Manual, con retraso', esg: 'Automática', consultantType: 'bad', esgType: 'good' },
  { criteria: 'Acceso a tu historial', consultant: 'Archivos del consultor', esg: 'Tuyo, siempre', consultantType: 'bad', esgType: 'good' },
  { criteria: 'Curva de aprendizaje', consultant: 'Alta dependencia', esg: 'Tu equipo lo opera', consultantType: 'bad', esgType: 'good' },
]

const CHART_DATA = [
  { name: 'Costo mensual\n(miles MXN)', consultor: 115, esgMx: 5.5 },
  { name: 'Semanas por\nreporte', consultor: 6, esgMx: 0.05 },
]

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null
  return (
    <div
      style={{
        background: '#0f1420',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '8px',
        padding: '12px 16px',
        fontFamily: 'var(--font-mono)',
        fontSize: '12px',
        color: 'var(--text)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
      }}
    >
      <p style={{ marginBottom: '8px', color: 'var(--text-muted)', fontSize: '11px' }}>{label?.replace('\n', ' ')}</p>
      {payload.map((entry) => (
        <p key={entry.dataKey} style={{ color: entry.fill, marginBottom: '2px' }}>
          {entry.name}: {entry.value === 0.05 ? '< 1 día' : entry.value === 5.5 ? '$5,500' : entry.dataKey === 'consultor' ? `$${(entry.value * 1000).toLocaleString('es-MX')}` : `${entry.value} sem.`}
        </p>
      ))}
    </div>
  )
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WarnIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M7 1.5l5.5 10H1.5L7 1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="7" y1="6" x2="7" y2="8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
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

export default function WhyNotConsultant() {
  return (
    <section
      id="comparacion"
      className="section"
      style={{ background: '#080b12' }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ marginBottom: '64px' }}
        >
          <span className="section-label">Comparación</span>
          <h2 className="section-title">
            ¿Por qué no seguir con tu consultor de siempre?
          </h2>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.4fr 1fr',
            gap: '48px',
            alignItems: 'start',
          }}
          className="comparison-layout"
        >
          {/* Table */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflowX: 'auto' }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'separate',
                borderSpacing: 0,
                fontSize: '14px',
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '14px 16px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      borderBottom: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Criterio
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '14px 16px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--text-dim)',
                      borderBottom: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Consultor Externo
                  </th>
                  <th
                    style={{
                      textAlign: 'left',
                      padding: '14px 16px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      fontWeight: 500,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: 'var(--emerald)',
                      borderBottom: '1px solid var(--border)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    ESG·MX
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map((row, i) => (
                  <tr
                    key={i}
                    style={{
                      background: i % 2 === 0 ? 'transparent' : 'rgba(255,255,255,0.015)',
                    }}
                  >
                    <td
                      style={{
                        padding: '14px 16px',
                        color: 'var(--text-muted)',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                        fontSize: '13px',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {row.criteria}
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          color: row.consultantType === 'bad' ? 'var(--danger)' : 'rgba(232, 197, 71, 0.8)',
                        }}
                      >
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: row.consultantType === 'bad'
                              ? 'rgba(255,77,77,0.1)'
                              : 'rgba(232,197,71,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          {row.consultantType === 'bad' ? <CrossIcon /> : <WarnIcon />}
                        </span>
                        {row.consultant}
                      </span>
                    </td>
                    <td
                      style={{
                        padding: '14px 16px',
                        borderBottom: '1px solid rgba(255,255,255,0.04)',
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          fontSize: '13px',
                          color: 'var(--emerald)',
                          fontWeight: 500,
                        }}
                      >
                        <span
                          style={{
                            width: '18px',
                            height: '18px',
                            borderRadius: '50%',
                            background: 'rgba(0,232,122,0.1)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0,
                          }}
                        >
                          <CheckIcon />
                        </span>
                        {row.esg}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p
              style={{
                marginTop: '24px',
                fontSize: '13px',
                fontStyle: 'italic',
                color: 'var(--text-dim)',
                lineHeight: 1.6,
              }}
            >
              No eliminamos a los consultores. Los hacemos innecesarios para el trabajo rutinario — y los liberas para lo que realmente importa.
            </p>
          </motion.div>

          {/* Chart */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          >
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-dim)',
                marginBottom: '24px',
              }}
            >
              Costo mensual (miles MXN)
            </p>

            <div style={{ height: '280px', marginBottom: '8px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={CHART_DATA.slice(0, 1)}
                  margin={{ top: 0, right: 0, left: -20, bottom: 0 }}
                  barGap={12}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    stroke="rgba(255,255,255,0.05)"
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: 'rgba(238,242,255,0.4)', fontSize: 12, fontFamily: 'var(--font-mono)' }}
                    axisLine={{ stroke: 'rgba(255,255,255,0.08)' }}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fill: 'rgba(238,242,255,0.4)', fontSize: 11, fontFamily: 'var(--font-mono)' }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(v) => `$${v}k`}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.03)' }} />
                  <Legend
                    wrapperStyle={{
                      paddingTop: '16px',
                      fontSize: '12px',
                      fontFamily: 'var(--font-mono)',
                      color: 'rgba(238,242,255,0.5)',
                    }}
                  />
                  <Bar dataKey="consultor" name="Consultor externo" fill="#FF4D4D" fillOpacity={0.8} radius={[4, 4, 0, 0]} maxBarSize={80} />
                  <Bar dataKey="esgMx" name="ESG·MX" fill="#00E87A" fillOpacity={0.85} radius={[4, 4, 0, 0]} maxBarSize={80} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Stats */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
                marginTop: '20px',
              }}
            >
              <div
                style={{
                  padding: '16px',
                  background: 'rgba(255,77,77,0.06)',
                  border: '1px solid rgba(255,77,77,0.15)',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--danger)',
                  }}
                >
                  $115k
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '4px' }}>
                  Consultor / mes
                </p>
              </div>
              <div
                style={{
                  padding: '16px',
                  background: 'rgba(0,232,122,0.06)',
                  border: '1px solid rgba(0,232,122,0.15)',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center',
                }}
              >
                <p
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '22px',
                    fontWeight: 600,
                    color: 'var(--emerald)',
                  }}
                >
                  $5.5k
                </p>
                <p style={{ fontSize: '11px', color: 'var(--text-dim)', marginTop: '4px' }}>
                  ESG·MX / mes
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .comparison-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
