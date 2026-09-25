# Landing Page — AVIALAS S.A.

Landing page corporativa de **Avícola y Alimento Animal S.A. (AVIALAS S.A.)**, entidad mixta cubana adscrita al Ministerio de la Agricultura (MINAG) e integrada al Grupo Empresarial GEALAV, dedicada a la actividad avícola y de alimentos balanceados.

Construida con **Next.js 16 (App Router) + Tailwind CSS v4 + Framer Motion**.

> Este proyecto reemplaza una versión anterior en HTML/CSS/JS estático. Si necesitas esa versión más simple (sin build step), consulta el historial de commits de este repositorio.

---

## Estructura de archivos

```
/src/app/
  layout.js              Layout raíz: fuentes (Poppins/Mulish), metadata SEO/OG
  page.js                Ensambla todas las secciones de la landing
  globals.css            Tokens de marca (colores/tipografías) para Tailwind v4
/src/components/
  Header.jsx             Header sticky + menú móvil animado
  Hero.jsx                Hero: titular animado por palabras + banner con revelado y brillo
  Marquee.jsx             Franja amarilla en desplazamiento continuo
  TiltCard.jsx            Tarjeta con inclinación 3D y brillo que sigue al cursor
  Parallax.jsx            Contenedor con parallax para imágenes
  PulseRings.jsx          Anillos pulsantes del CTA
  QuickFacts.jsx          Tarjeta flotante de datos rápidos (entidad, grupo, razón social)
  QuienesSomos.jsx        Misión y Visión, con fotografía
  Valores.jsx              Grid de los 6 Valores Compartidos
  Servicios.jsx            Grid de servicios/áreas de actuación, con fotografía
  CtaFinal.jsx             Llamado a la acción final, con fotografía de fondo
  Footer.jsx               Pie de página con contacto y enlaces
  Reveal.jsx / RevealGroup.jsx   Utilidades de animación al hacer scroll (Framer Motion)
  ScrollProgress.jsx       Barra de progreso de scroll
  BackToTop.jsx            Botón "volver arriba"
/src/lib/asset.js         Helper para rutas de /public (aplica basePath en la vista previa de Pages)
/scripts/deploy-pages.mjs Compila el export estático y lo publica en la rama gh-pages
/public/
  logo-avialas-color.png  Logotipo oficial (versión a color)
  logo-avialas-blanco.png Logotipo oficial (versión blanca, para fondos oscuros)
  favicon-*.png            Favicons generados a partir del símbolo del logotipo
  /images/                 Fotografías (ver "Banco de imágenes" abajo)
/documentos/               Documentación fuente del cliente (NO se sube a git, ver .gitignore)
README.md
```

---

## Cómo desarrollar, compilar y desplegar

### Requisitos
Node.js 18.18+ (recomendado 20+) y npm.

### Desarrollo local
```bash
npm install
npm run dev
```
Abre `http://localhost:3000`.

### Compilar para producción
```bash
npm run build
npm start
```

### Desplegar en Vercel (recomendado)
Vercel es la plataforma oficial de Next.js: optimiza imágenes automáticamente, y despliega en cada push.

1. Entra a [vercel.com](https://vercel.com) con tu cuenta (o crea una gratis).
2. "Add New… → Project" → importa este repositorio de GitHub.
3. Vercel detecta Next.js automáticamente — no hace falta configurar nada (build command `next build`, output automático).
4. Cada `git push` a `main` genera un despliegue nuevo en producción; cada Pull Request genera un preview.

> Si en algún momento se despliega con `vercel deploy` desde la CLI sin haber iniciado sesión (`vercel login`), la CLI ofrece un enlace de "claim" para asociar ese despliegue temporal a una cuenta después. Para producción estable, se recomienda conectar el repositorio de GitHub directamente desde el dashboard de Vercel.

### Vista previa en GitHub Pages
**En vivo:** https://sule98.github.io/avialas-landing/

Es un export estático (`output: 'export'`) publicado en la rama `gh-pages`, pensado como vista previa para revisión. Se activa solo con `DEPLOY_TARGET=pages` (ver `next.config.mjs`), por lo que no afecta la build normal ni Vercel. Diferencias respecto a la build normal: imágenes sin optimización (`images.unoptimized`) y prefijo `/avialas-landing`, que se aplica a las rutas de `/public` con el helper `src/lib/asset.js` (usa `asset("/ruta")` para cualquier imagen o archivo nuevo de `/public`).

Para actualizar la vista previa después de cambiar código (con permisos de push al repo):
```bash
npm run deploy:pages
```
Compila el export en `out/` y lo publica (force-push) en la rama `gh-pages`. No edites `gh-pages` a mano. Este flujo no usa GitHub Actions.

---

## Colaborar en el proyecto

El repositorio es público: https://github.com/Sule98/avialas-landing

1. **Con permisos de escritura** (el propietario te invita en Settings → Collaborators): `git clone`, crea una rama (`git checkout -b mi-cambio`), haz commits y abre un Pull Request hacia `main`.
2. **Sin permisos:** haz un Fork, trabaja en tu copia y abre un Pull Request desde ahí.
3. Antes de abrir el PR: `npm run lint` y `npm run build` deben pasar sin errores.
4. Tras fusionar a `main`, ejecutar `npm run deploy:pages` refresca la vista previa (y Vercel, si está conectado, despliega solo).

> `AGENTS.md` y `CLAUDE.md` los genera Next.js para asistentes de IA; se mantienen en el repo. La carpeta `documentos/` (manual de USOS y documentos legales) no se sube a git: pide esos archivos al propietario si los necesitas.

---

## Guía de estilo (Manual de Identidad Visual, USOS 2024)

### Colores institucionales
Declarados como tokens de Tailwind v4 en `src/app/globals.css` (bloque `@theme inline`), disponibles como utilidades (`bg-avialas-yellow`, `text-avialas-red`, etc.):

| Nombre | Uso | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|---|
| Amarillo Mostaza | Color principal del logotipo y CTAs | `#F8B700` | 248,183,0 | 4/29/100/0 | 3514 C |
| Rojo | Genérico del logotipo, acentos | `#E63905` | 230,57,5 | 4/95/100/1 | 1665 C |
| Dorado | Complementario, uso puntual | `#CC9933` | 204,153,51 | 7/35/88/18 | — |
| Negro 90% | Texto, fondos oscuros | `#1A1A1A` | 26,26,26 | 100/100/100/90 | — |
| Negro 10% | Fondos suaves, bordes | `#E6E6E6` | 230,230,230 | 100/100/100/10 | — |
| Rojo Quemado | Complementario, acentos puntuales | `#BF4200` | 191,66,0 | 16/90/100/11 | 1525 C |

> ⚠️ **Nota de auditoría:** el PDF original del manual (p.12) presenta una inconsistencia entre las columnas RGB y HEX de "Amarillo Mostaza" y "Dorado" (los valores RGB aparecen cruzados entre ambas filas). Se verificó el color real de las muestras impresas mediante muestreo de píxel y se usó esa lectura como definitiva (confirmado con el cliente).

### Tipografía
El manual especifica Century Gothic (identidad/titulares), Goudy Old Style (impresos), Arial (oficina) y **Tahoma explícitamente para "soportes audiovisuales y web"**. Son fuentes comerciales sin archivos licenciados disponibles para este proyecto. Por decisión del cliente, se sustituyen por alternativas **open-source** cargadas vía `next/font/google` (auto-hospedadas por Next.js, sin llamadas externas en runtime):

- `font-heading` → **Poppins** (títulos, nav, botones) — sustituye a Century Gothic.
- `font-body` → **Mulish** (cuerpo de texto) — sustituye a Tahoma.

Configuradas en `src/app/layout.js` y expuestas como variables CSS (`--font-poppins`, `--font-mulish`) consumidas por los tokens `--font-heading` / `--font-body` en `globals.css`.

### Logotipo
- `public/logo-avialas-color.png` (versión oficial, a color) y `public/logo-avialas-blanco.png` (versión blanca/negativo, para fondos oscuros).
- **Origen:** extraídos en alta resolución directamente del arte vectorial del Manual de Identidad (páginas 9 y 13), ya que no se recibió un archivo de logo independiente. Sustituir por el archivo fuente oficial (idealmente SVG) en cuanto esté disponible, manteniendo el mismo nombre de archivo.

### Espaciados, bordes y sombras
No definidos por el manual para un sitio web; criterio propio coherente con el tono institucional (radios suaves, sombras sutiles, generoso espacio en blanco).

---

## Banco de imágenes

No se recibieron fotografías oficiales de AVIALAS. Por decisión del cliente, se usaron fotografías de stock **libres de derechos** (licencia Pexels: uso comercial y no comercial permitido, sin atribución obligatoria) como placeholder visual de alta calidad:

| Archivo | Uso | Fuente |
|---|---|---|
| `public/images/hero-banner.jpeg` | Banner del Hero (**imagen propia de AVIALAS**, con logo y textos incluidos; no es de stock) | Suministrada por el cliente |
| `public/images/quienes-somos-poultry.jpg` | Sección Quiénes Somos | pexels.com/photo/26625882 |
| `public/images/servicios-silos.jpg` | Sección Servicios | pexels.com/photo/38312031 |
| `public/images/cta-handshake.jpg` | CTA final | pexels.com/photo/33175650 |

**Sustituir las de stock por fotografía real de AVIALAS S.A.** (instalaciones, granjas, equipo, firmas de acuerdos) en cuanto esté disponible — basta con reemplazar el archivo manteniendo el mismo nombre, ya que `next/image` recalculará automáticamente el recorte/optimización.

---

## Contenido y fuentes de datos

- **Misión, Visión y Valores Compartidos:** extraídos textualmente de `documentos/Misión, visión y valores compartidos AVIALAS SA.docx`.
- **Servicios / Áreas de actuación:** basados en `documentos/Activ secundarias.docx` y `CERTIFICO Modificación Estatutos Acta No.3.docx` (actividades secundarias aprobadas por la Junta General de Accionistas, Acuerdo No. 08/2026).
- **Razón social:** el certificado legal usa "Avícola **y** Alimento Animal S.A."; el logotipo usa el ampersand "Avícola **&** Alimento Animal S.A." como recurso gráfico. El sitio usa "y" en los textos legales (footer, meta tags) y respeta el "&" tal como aparece en la imagen del logotipo.

> ℹ️ La "Carpeta de Servicios" que aparece como maqueta de ejemplo en el manual (p.28-30) lista servicios de comunicación/diseño web de **USOS**, la agencia que diseñó el manual — no son actividades reales de AVIALAS S.A., por lo que no se usaron como contenido de la sección "Servicios".

---

## ⚠️ Notas pendientes para el próximo desarrollador

1. **Correo de contacto TEMPORAL.** `contacto@avialas.cu` (en `Footer.jsx` y `CtaFinal.jsx`, marcado con `TODO`) es un placeholder; **reemplazar por el correo oficial**. El teléfono (`+53 6343 8497`) y la dirección (Edificio Focsa, e/ M y N, Calle 17, La Habana, Cuba) ya son los confirmados por el cliente.
2. **Redes sociales:** no se recibieron enlaces oficiales; el footer muestra "Muy pronto en redes sociales". Añadir los íconos/enlaces reales cuando existan.
3. **Fotografías:** ver "Banco de imágenes" arriba — son placeholders de stock, sustituir por fotografía real de AVIALAS.
4. **Logotipo:** sustituir los PNG extraídos del PDF por el archivo fuente oficial en cuanto el cliente lo entregue.
5. **Fuentes oficiales:** si se obtienen los archivos licenciados de Century Gothic y Tahoma, se pueden auto-hospedar con `next/font/local` en lugar de `next/font/google`, sin cambiar el resto del código (solo `layout.js`).
6. **Formulario de contacto:** el CTA de contacto es un enlace `mailto:`. Si se requiere un formulario con backend, se puede añadir un Route Handler de Next.js (`src/app/api/contacto/route.js`) o un servicio externo (Formspree, Resend).

---

## Accesibilidad y SEO

- Estructura semántica (`header`, `nav`, `main`, `section`, `footer`), jerarquía de encabezados `h1`→`h3`.
- Enlace "Saltar al contenido principal" para usuarios de teclado/lector de pantalla.
- Menú móvil con `aria-expanded`, `aria-controls` y `aria-label` dinámico.
- Metadata de SEO y Open Graph centralizada en `src/app/layout.js` (`export const metadata`).
- Animaciones respetan `prefers-reduced-motion` (ver `globals.css`).
