# Landing Page — AVIALAS S.A.

Landing page corporativa de **Avícola y Alimento Animal S.A. (AVIALAS S.A.)**, entidad mixta cubana adscrita al Ministerio de la Agricultura (MINAG) e integrada al Grupo Empresarial GEALAV, dedicada a la actividad avícola y de alimentos balanceados.

Sitio estático (HTML + CSS + JS vanilla), sin frameworks ni build step, pensado para ser mantenido fácilmente por terceros.

---

## Estructura de archivos

```
/index.html                  Página única con todas las secciones
/assets/
  /css/styles.css            Estilos (variables de marca + componentes + responsive)
  /js/main.js                Menú móvil, botón "volver arriba", año del footer
  /img/                      Logotipos, favicons e iconografía
  /fonts/                    Reservada para tipografías locales (ver "Tipografía" abajo)
/documentos/                 Documentación fuente entregada por el cliente (NO se publica en el sitio)
README.md
```

---

## Cómo clonar, editar y desplegar

### Ver el sitio en local
No requiere instalación. Basta con abrir `index.html` en el navegador, o servirlo con cualquier servidor estático:

```bash
npx serve .
# o
python -m http.server 8080
```

### Desplegar en GitHub Pages
1. Sube el repositorio a GitHub.
2. Settings → Pages → Branch: `main` / carpeta `/ (root)`.
3. El sitio queda publicado en `https://<usuario>.github.io/<repositorio>/`.

### Desplegar en Netlify / Vercel
Al ser un sitio 100% estático, basta con conectar el repositorio y dejar:
- Build command: *(vacío)*
- Publish directory: `/` (raíz del proyecto)

---

## Guía de estilo (Manual de Identidad Visual, USOS 2024)

### Colores institucionales

| Nombre | Uso | HEX | RGB | CMYK | Pantone |
|---|---|---|---|---|---|
| Amarillo Mostaza | Color principal del logotipo y CTAs | `#F8B700` | 248,183,0 | 4/29/100/0 | 3514 C |
| Rojo | Genérico del logotipo, acentos | `#E63905` | 230,57,5 | 4/95/100/1 | 1665 C |
| Dorado | Complementario, uso puntual/soportes especiales | `#CC9933` | 204,153,51 | 7/35/88/18 | — |
| Negro 90% | Texto, fondos oscuros | `#1A1A1A` | 26,26,26 | 100/100/100/90 | — |
| Negro 10% | Fondos suaves, bordes | `#E6E6E6` | 230,230,230 | 100/100/100/10 | — |
| Blanco | Fondo base | `#FFFFFF` | 255,255,255 | 0/0/0/0 | — |
| Rojo Quemado | Complementario, acentos puntuales | `#BF4200` | 191,66,0 | 16/90/100/11 | 1525 C |

Todos los valores viven como **CSS custom properties** en `assets/css/styles.css` (bloque `:root`), listas para ajustar en un único lugar.

> ⚠️ **Nota de auditoría:** el PDF original del manual (página 12) presenta una inconsistencia entre las columnas RGB y HEX de "Amarillo Mostaza" y "Dorado" (los valores RGB aparecen cruzados entre ambas filas). Se verificó el color real de las muestras impresas mediante muestreo de píxel y se usó esa lectura como definitiva (confirmado con el cliente). Si USOS entrega una versión corregida del manual, volver a validar estos dos valores.

### Tipografía

El manual especifica:
- **Century Gothic** — identidad, papelería, titulares.
- **Goudy Old Style** — cuerpos de texto impresos (complemento serif).
- **Arial** — soportes de oficina (Microsoft Office).
- **Tahoma** — *"soportes audiovisuales y **web**"* (especificado textualmente en el manual, p.15).

Estas cuatro familias son **comerciales** y no se recibieron archivos `.ttf/.otf` licenciados para redistribuir como webfont. Por decisión del cliente, en este sitio se sustituyen por alternativas **open-source** visualmente afines, cargadas vía Google Fonts:

- `--font-heading`: **Poppins** (titulares, nav, botones) — sustituye a Century Gothic.
- `--font-body`: **Mulish** (cuerpo de texto) — sustituye a Tahoma.

**Para cumplir el manual al 100%:** si en el futuro se obtienen las licencias/archivos de Century Gothic y Tahoma, colocarlos en `/assets/fonts/` (formato `.woff2`) y declarar `@font-face` al inicio de `styles.css`, ajustando `--font-heading` / `--font-body`. El resto del sitio no requiere cambios porque todo el texto usa esas dos variables.

### Logotipo

- Archivos en `/assets/img/logo-avialas-color.png` (versión oficial, a color, sobre fondo claro) y `/assets/img/logo-avialas-blanco.png` (versión en blanco/negativo, para fondos oscuros — footer).
- **Origen:** estos PNG fueron extraídos en alta resolución directamente del arte vectorial del Manual de Identidad (páginas 9 y 13), ya que no se recibió un archivo de logo independiente (AI/EPS/SVG/PNG) al momento de construir el sitio. Son fieles al diseño oficial, pero **se recomienda sustituirlos por el archivo fuente oficial** (idealmente SVG o PNG a mayor resolución) en cuanto esté disponible, manteniendo el mismo nombre de archivo para no romper referencias.
- Espacio de marca: el manual define un área de seguridad igual a `2x` (siendo `x` la altura de la letra "a") alrededor del identificador. Al día de hoy no está implementada como regla CSS explícita; se respeta visualmente con el padding del header/footer.
- Reducción mínima: 96px de ancho en digital (96dpi) / 15mm en impresión. El `<img>` del header nunca debe bajar de ese ancho equivalente.
- Contravenciones (no hacer): no cambiar tipografía del genérico, no invertir la gama cromática fuera de las variantes G1–G4 pautadas, no deformar, no aplicar sombras/degradados/contornos, no ubicar sobre fondos de claridad similar al logotipo.

### Espaciados, bordes y sombras

El manual no define estos valores para un sitio web, por lo que se estableció un criterio propio coherente con el tono institucional:
- Radios de borde suaves (`--radius-sm: 8px`, `--radius-md: 16px`, `--radius-full` para píldoras/botones).
- Sombras sutiles (`--shadow-sm/md/lg`) para dar profundidad sin perder sobriedad.
- Escala de espaciado modular (`--space-xs` a `--space-2xl`) usada en todo el sitio para mantener ritmo vertical consistente.

---

## Contenido y fuentes de datos

- **Misión, Visión y Valores Compartidos:** extraídos textualmente de `documentos/Misión, visión y valores compartidos AVIALAS SA.docx`.
- **Servicios / Áreas de actuación:** basados en `documentos/Activ secundarias.docx` y el `CERTIFICO Modificación Estatutos Acta No.3.docx` (actividades secundarias aprobadas por la Junta General de Accionistas, Acuerdo No. 08/2026).
- **Razón social:** el certificado legal usa "Avícola **y** Alimento Animal S.A."; el logotipo usa el ampersand "Avícola **&** Alimento Animal S.A." como recurso gráfico. El sitio usa "y" en los textos legales (footer, meta tags) y respeta el "&" tal como aparece en el archivo de imagen del logotipo.

> ℹ️ La "Carpeta de Servicios" que aparece como maqueta de ejemplo en el manual (p.28-30) lista servicios de comunicación/diseño web (diagnóstico de comunicación institucional, diseño de sitios web, etc.). **Esos son servicios de USOS**, la agencia que diseñó el manual, reutilizados como plantilla de ejemplo — **no** son actividades reales de AVIALAS S.A., por lo que **no** se usaron como contenido de la sección "Servicios".

---

## ⚠️ Notas pendientes para el próximo desarrollador

1. **Datos de contacto TEMPORALES.** El correo (`contacto@avialas.cu`), teléfono (`+53 7 000 0000`) y dirección ("Playa, La Habana, Cuba — dirección provisional") en el CTA final y en el footer son **placeholders** a petición del cliente, marcados con comentarios `<!-- TODO -->` en `index.html`. **Reemplazar antes de publicar el sitio en producción.**
2. **Redes sociales:** no se recibieron enlaces oficiales; el footer muestra el texto "Muy pronto en redes sociales" en lugar de iconos que apunten a `#`. Añadir los íconos/enlaces reales cuando existan.
3. **Logotipo:** sustituir los PNG extraídos del PDF por el archivo fuente oficial (ver sección "Logotipo" arriba) en cuanto el cliente lo entregue.
4. **Fuentes oficiales:** si se obtienen los archivos licenciados de Century Gothic y Tahoma, integrarlos vía `@font-face` (ver sección "Tipografía").
5. **Imágenes reales:** las ilustraciones del hero y los iconos de "Valores" y "Servicios" son SVG genéricos dibujados a mano (línea, geométricos, en los colores de marca) porque no se recibieron fotografías oficiales de instalaciones, granjas o productos. Sustituir por fotografía real cuando esté disponible, manteniendo los mismos contenedores (`.hero__decoration`, `.value-card__icon`, `.service-card__icon`) para no romper el layout.
6. **Formulario de contacto:** actualmente el CTA de contacto es un enlace `mailto:`. Si se requiere un formulario con backend, evaluar un servicio de formularios estático (Netlify Forms, Formspree) para no romper la naturaleza "sin build" del proyecto.

---

## Accesibilidad y SEO

- Estructura semántica (`header`, `nav`, `main`, `section`, `footer`), jerarquía de encabezados `h1`→`h3`.
- Enlace "Saltar al contenido principal" para usuarios de teclado/lector de pantalla.
- Contraste de color validado para AA en combinaciones texto/fondo usadas (amarillo institucional solo se usa como fondo de botón con texto oscuro, nunca como texto sobre blanco, por contraste insuficiente).
- Menú móvil con `aria-expanded`, `aria-controls` y `aria-label` dinámico.
- Meta tags de descripción, palabras clave y Open Graph incluidos en `<head>`.
