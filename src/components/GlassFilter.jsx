// SVG filter that bends the backdrop behind .liquid controls, like light through a lens.
// Only Chromium can apply an SVG filter to a backdrop, so useRefraction() turns it on there;
// other browsers keep the plain frosted blur.
export default function GlassFilter() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <filter id="liquid-refraction" x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
        <feTurbulence type="fractalNoise" baseFrequency="0.008 0.012" numOctaves="2" seed="7" result="noise" />
        <feGaussianBlur in="noise" stdDeviation="2" result="softNoise" />
        <feDisplacementMap in="SourceGraphic" in2="softNoise" scale="38" xChannelSelector="R" yChannelSelector="G" />
      </filter>
    </svg>
  )
}
