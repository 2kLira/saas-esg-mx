# ESG·MX — Landing Page

Landing page de ventas para SAAS Legal Tech ESG.
Sistema de gestión de huella de carbono para la industria de Nuevo León.

## Correr localmente

```bash
npm install
npm run dev
```

Abre [http://localhost:5173/saas-esg-mx/](http://localhost:5173/saas-esg-mx/)

## Deploy

Push a la rama `main` — GitHub Actions despliega automáticamente a GitHub Pages.

El sitio queda disponible en:
`https://<tu-usuario>.github.io/saas-esg-mx/`

## Cambiar URL base

Edita `base` en `vite.config.js`:

```js
export default defineConfig({
  base: '/saas-esg-mx/', // ← cambia esto
})
```

## Stack

- React 18 + Vite 5
- Framer Motion (animaciones scroll-triggered)
- Recharts (gráfica comparativa de costos)
- Google Fonts: Playfair Display · DM Sans · JetBrains Mono

## Estructura

```
src/
  components/
    Navbar.jsx          Navbar sticky con menú móvil
    Hero.jsx            Hero con grid background y glow emerald
    Problem.jsx         3 pain cards con iconos de alerta
    Solution.jsx        Comparativa antes/después
    HowItWorks.jsx      3 pasos
    ForWhom.jsx         3 segmentos de cliente
    WhyNotConsultant.jsx Tabla comparativa + gráfica Recharts
    Pricing.jsx         Tabs licencia/suscripción + FAQ accordion
    FinalCTA.jsx        Formulario de demo
    Footer.jsx          Footer con badges de cumplimiento
```
