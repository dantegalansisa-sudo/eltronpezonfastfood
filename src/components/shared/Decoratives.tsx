// Decorativos SVG editoriales — ilustraciones hand-drawn caribeñas.
// Cada uno usa la paleta del proyecto (tomato, palm, mango, gold).
// Se exportan como componentes para usarse en Hero y otras secciones.

interface DecoProps {
  size?: number;
  className?: string;
}

export const TomateDeco = ({ size = 80, className = '' }: DecoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="tomate-grad" cx="0.35" cy="0.32" r="0.85">
        <stop offset="0%" stopColor="#E8585C" />
        <stop offset="55%" stopColor="#C8242A" />
        <stop offset="100%" stopColor="#9B1D22" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="58" rx="36" ry="34" fill="url(#tomate-grad)" />
    <path
      d="M50 24 C44 18 36 18 32 22 C36 26 38 28 42 28 C40 32 38 34 36 34 C42 36 46 32 48 28 C50 32 54 36 60 34 C58 32 56 30 54 28 C58 28 62 26 64 22 C60 18 56 18 50 24 Z"
      fill="#5C7A4D"
    />
    <path d="M50 24 L50 30" stroke="#3D5C30" strokeWidth="2" strokeLinecap="round" />
    <ellipse
      cx="38"
      cy="48"
      rx="6"
      ry="9"
      fill="#fff"
      opacity="0.28"
      transform="rotate(-18 38 48)"
    />
  </svg>
);

export const AjiDeco = ({ size = 70, className = '' }: DecoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="aji-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#E8585C" />
        <stop offset="60%" stopColor="#C8242A" />
        <stop offset="100%" stopColor="#7A1418" />
      </linearGradient>
    </defs>
    <path
      d="M28 24 C32 18 42 16 50 22 C68 36 80 60 78 78 C76 86 68 88 60 84 C40 74 24 50 22 36 C22 30 24 26 28 24 Z"
      fill="url(#aji-grad)"
    />
    <path
      d="M28 24 C26 16 30 12 36 12 C40 12 42 14 42 18 C42 14 38 10 32 12 C26 14 24 18 28 24 Z"
      fill="#5C7A4D"
    />
    <path
      d="M40 36 C46 42 54 52 60 62"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.35"
    />
  </svg>
);

export const HojaAlbahaca = ({ size = 90, className = '' }: DecoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="hoja-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#8AA877" />
        <stop offset="55%" stopColor="#5C7A4D" />
        <stop offset="100%" stopColor="#3D5C30" />
      </linearGradient>
    </defs>
    <path
      d="M14 78 C18 50 36 24 70 16 C74 22 78 32 80 42 C70 70 44 86 18 86 C16 84 14 82 14 78 Z"
      fill="url(#hoja-grad)"
    />
    <path
      d="M16 80 C28 64 44 48 68 30"
      stroke="#3D5C30"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path d="M30 58 L42 50 M36 70 L50 60 M44 78 L58 68" stroke="#3D5C30" strokeWidth="1" opacity="0.55" />
    <path
      d="M70 16 C74 14 80 12 86 14 C82 18 78 20 74 22"
      fill="#5C7A4D"
    />
  </svg>
);

export const LimonDeco = ({ size = 75, className = '' }: DecoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <radialGradient id="limon-grad" cx="0.4" cy="0.35" r="0.8">
        <stop offset="0%" stopColor="#FFE588" />
        <stop offset="55%" stopColor="#F4B96A" />
        <stop offset="100%" stopColor="#B8923A" />
      </radialGradient>
    </defs>
    <ellipse cx="50" cy="54" rx="34" ry="38" fill="url(#limon-grad)" transform="rotate(-22 50 54)" />
    <path d="M22 30 C18 26 16 22 18 18 C24 18 28 20 30 24" fill="#5C7A4D" />
    <ellipse
      cx="42"
      cy="42"
      rx="5"
      ry="10"
      fill="#fff"
      opacity="0.32"
      transform="rotate(-22 42 42)"
    />
    <ellipse cx="78" cy="76" rx="3" ry="5" fill="#B8923A" opacity="0.5" transform="rotate(-22 78 76)" />
  </svg>
);

export const PlatanoDeco = ({ size = 90, className = '' }: DecoProps) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="platano-grad" x1="0.2" y1="0.2" x2="0.8" y2="0.8">
        <stop offset="0%" stopColor="#F4B96A" />
        <stop offset="50%" stopColor="#E89B3D" />
        <stop offset="100%" stopColor="#B8923A" />
      </linearGradient>
    </defs>
    <path
      d="M16 22 C22 14 32 14 42 22 C58 36 76 56 84 76 C86 82 82 86 76 84 C50 76 26 56 16 36 C12 30 12 26 16 22 Z"
      fill="url(#platano-grad)"
    />
    <path
      d="M22 28 C32 26 46 32 60 46"
      stroke="#fff"
      strokeWidth="2"
      strokeLinecap="round"
      opacity="0.45"
    />
    <path d="M14 22 L20 16 M82 84 L88 86" stroke="#3D2817" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
  </svg>
);
