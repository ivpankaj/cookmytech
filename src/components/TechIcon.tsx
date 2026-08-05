import React from "react";

interface TechIconProps {
  name: string;
  className?: string;
  size?: number;
}

export default function TechIcon({ name, className = "", size = 28 }: TechIconProps) {
  const iconMap: Record<string, React.ReactNode> = {
    "next.js": (
      <svg width={size} height={size} viewBox="0 0 180 180" fill="none" className={className}>
        <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
          <circle cx="90" cy="90" r="90" fill="black" />
        </mask>
        <g mask="url(#mask0)">
          <circle cx="90" cy="90" r="90" fill="black" />
          <path d="M149.508 157.52L69.143 54H54V125.97H66.8136V69.2155L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="white" />
          <path d="M115.25 54H128V126H115.25V54Z" fill="white" />
        </g>
      </svg>
    ),
    typescript: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#3178C6" />
        <path d="M110.6 100.9c0 6.6-4.5 10.6-12.7 10.6-5.8 0-10.7-1.8-13.8-3.9l3.2-9.6c2.8 1.8 6.4 3.3 10.2 3.3 3.5 0 5.2-1.3 5.2-3.1 0-2.3-2.6-3.7-7.4-5.6-7.3-2.9-12-6.5-12-14.3 0-8.2 6.4-14 16.7-14 5.2 0 9.7 1.4 12.7 3l-3 9.4c-2.3-1.3-5.8-2.6-9.4-2.6-3.5 0-5 1.3-5 2.8 0 2 2.3 3.3 6.9 5.1 8.2 3.3 12.3 7 12.3 14.5zM63.7 65.4h-17v45.8h-12V65.4H17.8V55.2h45.9v10.2z" fill="#FFF" />
      </svg>
    ),
    react: (
      <svg width={size} height={size} viewBox="-11.5 -10.23174 23 20.46348" className={className}>
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB" />
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2" />
          <ellipse rx="11" ry="4.2" transform="rotate(60)" />
          <ellipse rx="11" ry="4.2" transform="rotate(120)" />
        </g>
      </svg>
    ),
    "node.js": (
      <svg width={size} height={size} viewBox="0 0 256 273" className={className}>
        <path fill="#5FA04E" d="M128 0L9 68.7v135.4L128 273l119-68.9V68.7L128 0z" />
        <path fill="#FFF" d="M128 32l84.4 48.7v97.4L128 226.8l-84.4-48.7V80.7L128 32z" />
        <path fill="#5FA04E" d="M128 64l51.9 30v60L128 184l-51.9-30V94L128 64z" />
      </svg>
    ),
    python: (
      <svg width={size} height={size} viewBox="0 0 110 110" className={className}>
        <path fill="#3776AB" d="M53.8 2c-23.7 0-22.3 10.3-22.3 10.3l.1 10.7h22.8v3.2H22.9S7.5 24.3 7.5 48.4s13.4 24.2 13.4 24.2h8.1v-11.5s-.4-13.7 13.5-13.7h23.2v-2.3H36.4v-2.7h31s13.7.1 13.7-13.4V21.5S82.4 2 53.8 2zm-12 7.3a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7z" />
        <path fill="#FFD43B" d="M55.8 107.5c23.7 0 22.3-10.3 22.3-10.3l-.1-10.7H55.2v-3.2h31.5s15.4 1.9 15.4-22.2-13.4-24.2-13.4-24.2h-8.1v11.5s.4 13.7-13.5 13.7H43.9v2.3h29.3v2.7h-31s-13.7-.1-13.7 13.4v17.9s-1.3 19.5 27.3 19.5zm12-7.3a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7z" />
      </svg>
    ),
    postgresql: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#336791" d="M63.7 3.8C30.6 3.8 3.8 30.6 3.8 63.7c0 33.1 26.8 59.9 59.9 59.9s59.9-26.8 59.9-59.9C123.6 30.6 96.8 3.8 63.7 3.8zm28.3 48.9c.7 2-2 4.1-3.6 4.3-11.4 1.4-17.5-6.9-22-13-3.6-4.9-6.4-10-8.9-15.3 10.3 1.3 26.2 9.8 34.5 24zM53.1 19c3.2 6.5 6.6 13 11 19.2 4.7 6.6 10.8 14.5 22.2 13 1.8-.2 5-2.2 4.3-4.4C82.3 22.3 66.4 13.8 56.1 12.5c-.8.8-2 3.6-3 6.5zM38.8 89.2V50.5c.3-8.8 5-15.1 12-19.1 1.9 4.3 4.2 8.4 6.7 12.4 2.8 4.5 5.8 8.8 8.8 13.1-6.1.7-12.2.9-18.3 1.2-1.9.1-3.9 1.4-3.9 3.5v27.6h-5.3z" />
      </svg>
    ),
    mongodb: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#47A248" d="M64 4C61 4 58.7 18 58.7 36.3c0 33.2 5.3 64.3 5.3 87.7 0-23.4 5.3-54.5 5.3-87.7C69.3 18 67 4 64 4z" />
        <path fill="#47A248" d="M64 4c-3.1 0-18.4 25.1-18.4 63.3 0 28.5 11 48 18.4 56.7V4z" />
        <path fill="#499D4A" d="M64 4v120c7.4-8.7 18.4-28.2 18.4-56.7C82.4 29.1 67.1 4 64 4z" />
      </svg>
    ),
    redis: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#DC382D" d="M12.8 28.2l51.2-22.6 51.2 22.6v22.6L64 73.4 12.8 50.8V28.2z" />
        <path fill="#A41E22" d="M12.8 50.8L64 73.4v48.8L12.8 99.6V50.8z" />
        <path fill="#B8272C" d="M64 73.4l51.2-22.6v48.8L64 122.2V73.4z" />
      </svg>
    ),
    aws: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#FF9900" d="M42.2 78.4c-8.9 6.5-21.8 10-33 10-15.6 0-29.6-5.8-40.2-15.6-.8-.7-.1-1.7.9-1.1 14.5 8.4 32.5 13.5 51.1 13.5 10.9 0 22.7-2.1 33.6-6.5 1.7-.6 3.1 1.3 1.6 2.4z" transform="translate(45, 10)" />
        <path fill="#FF9900" d="M102 75.5c-1.4-1.8-8.9-8.4-13.9-6.3-1 .4-.6 1.6.4 1.9 6.6 1.8 14.6 4.6 15.6 7 .6 1.4-1.8 8.9-3.9 14.6-.3 1 .8 1.6 1.4.8 3.5-4.4 9.1-13 8.3-15.9-.6-2-5.7-1.4-7.9-2.1z" />
        <text x="64" y="65" textAnchor="middle" fill="#232F3E" fontWeight="900" fontSize="38" fontFamily="sans-serif">AWS</text>
      </svg>
    ),
    gcp: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#4285F4" d="M64 24c22.1 0 40 17.9 40 40s-17.9 40-40 40S24 86.1 24 64 41.9 24 64 24zm0-16C33.1 8 8 33.1 8 64s25.1 56 56 56 56-25.1 56-56S94.9 8 64 8z" />
        <path fill="#EA4335" d="M64 24v20c11 0 20 9 20 20h20c0-22.1-17.9-40-40-40z" />
        <path fill="#FBBC05" d="M24 64c0 11 4.5 21 11.7 28.3l14.1-14.1C46.8 74.9 44 69.8 44 64H24z" />
        <path fill="#34A853" d="M64 104c-11 0-21-4.5-28.3-11.7l-14.1 14.1C31 115.5 46.5 124 64 124v-20z" />
        <path fill="#4285F4" d="M90 64H64v16h26c-1.5 7.5-7.5 13.5-16 15v17c18-3 30-18 30-32 0-5.5-1.5-11-4-16z" />
      </svg>
    ),
    docker: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#2496ED" d="M122.2 52.8c-3.4-2.5-10.4-3.1-15.6-.6-1.5-5.9-6.3-10.7-12.7-13.1l-2.4-.9-.8 2.5c-2.3 7-1.1 14.4 2.8 20.3-2.9.9-7.7 1.3-11.9 1.3H9v13.5c0 17 13.8 30.8 30.8 30.8h56.4c17 0 30.8-13.8 30.8-30.8v-7c0-6-1.7-11.5-4.8-16zM46.5 28.5h13.5v13.5H46.5V28.5zm-16 0h13.5v13.5H30.5V28.5zm32 0h13.5v13.5H62.5V28.5zm-32 16h13.5v13.5H30.5V44.5zm16 0h13.5v13.5H46.5V44.5zm16 0h13.5v13.5H62.5V44.5zm16 0h13.5v13.5H78.5V44.5z" />
      </svg>
    ),
    kubernetes: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#326CE5" d="M64 6.7L12.5 36.4v59.5L64 125.6l51.5-29.7V36.4L64 6.7zm0 14.7l38.8 22.4v44.8L64 111 25.2 88.6V43.8L64 21.4z" />
        <path fill="#326CE5" d="M64 41.5l19.5 11.2v22.5L64 86.5 44.5 75.2V52.7L64 41.5z" />
      </svg>
    ),
    openai: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#10A37F" d="M117.8 54.4c-1.8-13.5-11.4-24.5-24.6-28-4.5-8.4-12.4-14.7-21.9-17.2-13.8-3.7-28.5.5-38 10.9-8.4.3-16.2 4.6-21.3 11.6-7.5 10.4-8.8 24.1-3.6 35.8-4.5 8.4-4.8 18.5-1 27.2 5.5 12.7 17.5 20.8 31.3 20.9 4.4 8.4 12.3 14.7 21.8 17.2 13.8 3.7 28.5-.5 38-10.9 8.4-.3 16.2-4.6 21.3-11.6 7.5-10.4 8.8-24.1 3.6-35.8 4.6-8.4 4.9-18.6 1.1-27.3zM64 82.7c-10.3 0-18.7-8.4-18.7-18.7S53.7 45.3 64 45.3 82.7 53.7 82.7 64 74.3 82.7 64 82.7z" />
      </svg>
    ),
    langchain: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#1C3C3C" />
        <path d="M34 40h24v12H34zM70 40h24v12H70zM34 60h60v12H34zM34 80h40v12H34z" fill="#38B6FF" />
        <circle cx="84" cy="86" r="8" fill="#FFC700" />
      </svg>
    ),
    pinecone: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="20" fill="#000000" />
        <path d="M64 16L34 50h60L64 16zM64 42L26 84h76L64 42zM64 72L18 112h92L64 72z" fill="#00F5D4" />
      </svg>
    ),
    prisma: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#2D3748" d="M64 8L16 112h96L64 8zm0 28l32 64H32l32-64z" />
        <path fill="#5A67D8" d="M64 36l32 64H64V36z" />
      </svg>
    ),
    // Socials
    gmail: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="#EA4335" d="M12 28v72h24V60l28 20 28-20v40h24V28L64 68 12 28z" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <rect width="128" height="128" rx="16" fill="#0A66C2" />
        <path d="M28 48h18v52H28V48zm9-26a11 11 0 1 1 0 22 11 11 0 0 1 0-22zm29 26h17v7.5h.3c2.4-4.5 8.2-9.3 16.9-9.3 18.1 0 21.4 11.9 21.4 27.4V100H103V74.4c0-6.1-.1-14-8.5-14-8.5 0-9.8 6.7-9.8 13.6V100H66V48z" fill="#FFF" />
      </svg>
    ),
    github: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="currentColor" fillRule="evenodd" clipRule="evenodd" d="M64 8C33.1 8 8 33.1 8 64c0 24.7 16 45.7 38.2 53.1 2.8.5 3.8-1.2 3.8-2.7 0-1.3-.1-5.7-.1-10.4-13.9 2.5-17.7-3.4-18.8-6.5-1.1-2.8-5.8-11.3-9.9-13.6-3.4-1.8-8.2-6.3-.1-6.4 7.6-.1 13 7 14.8 9.9 8.7 14.7 22.6 10.5 28.1 8 0.9-6.3 3.4-10.5 6.2-12.9-12.4-1.4-25.4-6.2-25.4-27.6 0-6.1 2.2-11.1 5.8-15-0.6-1.4-2.5-7.1.6-14.8 0 0 4.7-1.5 15.4 5.7 4.5-1.3 9.3-1.9 14.1-1.9s9.6.6 14.1 1.9c10.7-7.2 15.4-5.7 15.4-5.7 3.1 7.7 1.2 13.4.6 14.8 3.6 3.9 5.8 8.9 5.8 15 0 21.5-13.1 26.2-25.5 27.6 3.5 3 6.6 8.9 6.6 17.9 0 12.9-.1 23.3-.1 26.5 0 2.5 1 5.3 3.8 4.7C104 109.7 120 88.7 120 64 120 33.1 94.9 8 64 8z" />
      </svg>
    ),
    x: (
      <svg width={size} height={size} viewBox="0 0 128 128" className={className}>
        <path fill="currentColor" d="M75.9 55.4L117.8 8h-9.9L71.5 49.3 42.4 8H9l44.1 64.2L9 120h9.9l38.5-44.7 30.9 44.7h33.4L75.9 55.4zM62.4 69.4l-4.5-6.4L22.5 15.5h15.2l28.7 41.1 4.5 6.4 34.6 49.5H90.3L62.4 69.4z" />
      </svg>
    ),
  };

  const key = name.toLowerCase().trim();
  const icon = iconMap[key];

  if (!icon) {
    return (
      <div
        className={`flex items-center justify-center font-bold text-xs bg-gray-200 text-black border border-black ${className}`}
        style={{ width: size, height: size }}
      >
        {name.slice(0, 2).toUpperCase()}
      </div>
    );
  }

  return <>{icon}</>;
}
