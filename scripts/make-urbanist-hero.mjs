// Generates the Urbanist op-ed hero card: the official lockup (roundel +
// white wordmark) centered on the publication's brand green, matching the
// Guardian/Rolling Stone logo cards. Rendered at 1600×1000 to exactly fill
// the card grid's 16:10 frame with no object-cover cropping.
//
// Self-contained: fetches the official logo assets from theurbanist.org's
// CDN. The header lockup PNG is only 400px wide, so the roundel is swapped
// for the 1250px square icon and the wordmark text is cropped from the
// lockup, keeping the original geometry (84px roundel, 14px gap, wordmark
// optically 3px high) scaled up.
import sharp from 'sharp'

const LOCKUP_URL =
  'https://storage.ghost.io/c/19/31/1931222a-d1c5-42ac-8932-2ee3ac1f8927/content/images/2026/01/TU-Logo_Large_400px-2--2-.png'
const ICON_URL =
  'https://storage.ghost.io/c/19/31/1931222a-d1c5-42ac-8932-2ee3ac1f8927/content/images/2026/01/urb-logo.png'

const W = 1600
const H = 1000
const GREEN = { r: 0, g: 150, b: 77 } // #00964D, sampled from the roundel

// Source-lockup geometry (measured from the 400×95 header PNG)
const SRC = {
  roundel: { d: 84, cy: 47.5 },
  gap: 14,
  wordmark: { x: 98, y: 26, w: 302, h: 38, cy: 44.5 },
}

const S = (W * 0.58) / 400 // lockup spans ~58% of the card width

const fetchPng = async (url) => {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`${res.status} fetching ${url}`)
  return Buffer.from(await res.arrayBuffer())
}

const [lockupPng, iconPng] = await Promise.all([
  fetchPng(LOCKUP_URL),
  fetchPng(ICON_URL),
])

const roundelSize = Math.round(SRC.roundel.d * S)
// Flatten before resizing: the icon's anti-aliased circle edge otherwise
// leaves a visible alpha-fringe halo when composited, even on matching green.
const roundel = await sharp(iconPng)
  .flatten({ background: GREEN })
  .resize({ width: roundelSize, height: roundelSize })
  .toBuffer()

// The roundel's green vanishes into the background, so the visible mark is
// just the white U. Find its bounds to center the card on what's seen.
const uGlyph = await sharp(iconPng)
  .extractChannel('red') // white U = high, green circle = 0
  .threshold(128)
  .toBuffer({ resolveWithObject: true })
const uw = uGlyph.info.width
let uMinX = uw
let uMaxX = -1
for (let i = 0; i < uGlyph.data.length; i++) {
  if (uGlyph.data[i] > 0) {
    const x = i % uw
    if (x < uMinX) uMinX = x
    if (x > uMaxX) uMaxX = x
  }
}
const uLeftPad = (uMinX / uw) * roundelSize

const wordmark = await sharp(lockupPng)
  .extract({
    left: SRC.wordmark.x,
    top: SRC.wordmark.y,
    width: SRC.wordmark.w,
    height: SRC.wordmark.h,
  })
  .resize({ width: Math.round(SRC.wordmark.w * S) })
  .toBuffer({ resolveWithObject: true })

const lockupWidth =
  roundelSize + Math.round(SRC.gap * S) + wordmark.info.width
// Center the visible span (U's left edge → wordmark's right edge), not the
// invisible roundel box.
const visibleWidth = lockupWidth - uLeftPad
const x0 = Math.round((W - visibleWidth) / 2 - uLeftPad)
const cy = H / 2

await sharp({
  create: { width: W, height: H, channels: 4, background: { ...GREEN, alpha: 1 } },
})
  .composite([
    { input: roundel, left: x0, top: Math.round(cy - roundelSize / 2) },
    {
      input: wordmark.data,
      left: x0 + roundelSize + Math.round(SRC.gap * S),
      // wordmark rides 3px (source scale) above the roundel's center,
      // matching the official lockup's optical alignment
      top: Math.round(cy - (SRC.roundel.cy - SRC.wordmark.cy) * S - wordmark.info.height / 2),
    },
  ])
  .png()
  .toFile('public/portfolio/urbanist.png')

console.log('Wrote public/portfolio/urbanist.png')
