'use client';

import Image from 'next/image';

interface TynkTechLogoProps {
  size?: number;
}
export function TynkTechLogo({ size = 24 }: TynkTechLogoProps) {
  return (
    <Image
        src="/kortix-symbol.svg"
        alt="Tynk Tech"
        width={size}
        height={size}
        className="flex-shrink-0"
        style={{ width: size, height: size, minWidth: size, minHeight: size }}
      />
  );
}
