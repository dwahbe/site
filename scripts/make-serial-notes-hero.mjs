// One-off: renders public/portfolio/serial-notes-hero4.png (2400×1500).
// Bump the output filename when regenerating after a deploy — the optimizer,
// CDN, and browsers all cache by URL, so same-name replacement serves stale.
// Recreates the serialnotes.app hero look — a faint grid on white with a
// soft clearing — with the app icon (icon/AppIcon.svg glyph) centered.
// Cells are 128px (vs the site's 64px) so the grid reads at card size
// like the site's does at viewport size.
import sharp from 'sharp'

const W = 1600
const H = 1000

// Icon tile centered at (800, 500). rx ≈ 22.37% (Apple's icon mask
// ratio) since nothing downstream rounds it for us, unlike macOS.
// 384 = 3 grid cells (128px), so the tile sits on the grid's rhythm:
// the grid is anchored below so the tile's edges land exactly on lines.
const TILE = 384
const CELL = 128
const TX = (W - TILE) / 2
const TY = (H - TILE) / 2
const RX = Math.round(TILE * 0.2237)

// Glyph transform: AppIcon.svg maps the favicon's 32-unit space into 1024
// via translate(100) scale(25.75); same mapping scaled to the tile size.
const GS = (TILE * (824 / 1024)) / 32
const GT = TX + TILE * (100 / 1024)

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <pattern id="grid" x="${TX - CELL / 2}" y="${TY - CELL / 2}" width="${CELL}" height="${CELL}" patternUnits="userSpaceOnUse">
      <path d="M ${CELL / 2} 0 V ${CELL} M 0 ${CELL / 2} H ${CELL}" stroke="#e4e4e4" stroke-width="2.5" fill="none" />
    </pattern>
    <radialGradient id="edge-fade" cx="50%" cy="50%" r="72%">
      <stop offset="55%" stop-color="#fff" />
      <stop offset="100%" stop-color="#000" />
    </radialGradient>
    <mask id="grid-mask">
      <rect width="${W}" height="${H}" fill="url(#edge-fade)" />
    </mask>
    <radialGradient id="clearing" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="#fff" stop-opacity="0.9" />
      <stop offset="100%" stop-color="#fff" stop-opacity="0" />
    </radialGradient>
    <linearGradient id="tile" gradientUnits="userSpaceOnUse" x1="${W / 2}" y1="${TY}" x2="${W / 2}" y2="${TY + TILE}">
      <stop offset="0" stop-color="#1c1c1e" />
      <stop offset="1" stop-color="#0a0a0a" />
    </linearGradient>
    <radialGradient id="shadow" cx="50%" cy="50%" r="50%">
      <stop offset="55%" stop-color="#0a0a0a" stop-opacity="0.22" />
      <stop offset="100%" stop-color="#0a0a0a" stop-opacity="0" />
    </radialGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="#ffffff" />
  <rect width="${W}" height="${H}" fill="url(#grid)" mask="url(#grid-mask)" />
  <ellipse cx="${W / 2}" cy="${H / 2}" rx="${TILE * 1.7}" ry="${TILE * 1.35}" fill="url(#clearing)" />

  <ellipse cx="${W / 2}" cy="${H / 2 + 16}" rx="${TILE * 0.72}" ry="${TILE * 0.66}" fill="url(#shadow)" />
  <rect x="${TX}" y="${TY}" width="${TILE}" height="${TILE}" rx="${RX}" ry="${RX}" fill="url(#tile)" />
  <g transform="translate(${GT.toFixed(3)},${(TY + TILE * (100 / 1024)).toFixed(3)}) scale(${GS.toFixed(4)})">
    <circle cx="16" cy="16" r="12" fill="none" stroke="#fff" stroke-width="2.0" />
    <g stroke="#fff" stroke-width="1.6" stroke-linecap="round">
      <line x1="9.5" y1="13.75" x2="9.5" y2="18.25" />
      <line x1="12.1" y1="12" x2="12.1" y2="20" />
      <line x1="14.7" y1="10.75" x2="14.7" y2="21.25" />
      <line x1="17.3" y1="13.5" x2="17.3" y2="18.5" />
      <line x1="19.9" y1="12" x2="19.9" y2="20" />
      <line x1="22.5" y1="14.5" x2="22.5" y2="17.5" />
    </g>
  </g>
</svg>`

await sharp(Buffer.from(svg), { density: 150 })
  .resize(2400, 1500)
  .png()
  .toFile('public/portfolio/serial-notes-hero4.png')

console.log('wrote public/portfolio/serial-notes-hero4.png')
