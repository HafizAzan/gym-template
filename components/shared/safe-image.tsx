"use client";

import Image, { type ImageProps } from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const FALLBACK = "/images/gym/floor.jpg";

type SafeImageProps = Omit<ImageProps, "onError" | "src"> & {
  src: string;
  fallbackSrc?: string;
};

export function SafeImage({
  src,
  alt,
  className,
  fallbackSrc = FALLBACK,
  ...props
}: SafeImageProps) {
  const [current, setCurrent] = useState(src || fallbackSrc);

  return (
    <Image
      {...props}
      src={current}
      alt={alt}
      className={cn(className)}
      onError={() => {
        if (current !== fallbackSrc) setCurrent(fallbackSrc);
      }}
    />
  );
}
