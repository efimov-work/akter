const BANDS = [
  'M75.00 0.00 H75 V4.20 H41.55 L45.83 3.15 L51.02 2.10 L57.93 1.05 L75.00 0.00 Z',
  'M35.19 6.10 H75 V10.30 H24.76 L27.03 9.25 L29.50 8.20 L32.21 7.15 L35.19 6.10 Z',
  'M21.07 12.20 H75 V16.40 H14.44 L15.93 15.35 L17.53 14.30 L19.24 13.25 L21.07 12.20 Z',
  'M12.00 18.30 H75 V22.50 H7.56 L8.55 21.45 L9.62 20.40 L10.77 19.35 L12.00 18.30 Z',
  'M5.94 24.40 H75 V28.60 H3.11 L3.73 27.55 L4.40 26.50 L5.14 25.45 L5.94 24.40 Z',
  'M2.15 30.50 H75 V34.70 H0.66 L0.95 33.65 L1.29 32.60 L1.69 31.55 L2.15 30.50 Z',
  'M0.27 36.60 H75 V40.00 H0.00 L0.02 39.15 L0.07 38.30 L0.15 37.45 L0.27 36.60 Z'
];

export default function LogoMark({ width, height }: { width?: number; height?: number }) {
  return (
    <svg className="lmk" width={width} height={height} viewBox="0 0 75 40" aria-hidden="true">
      {BANDS.map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  );
}
