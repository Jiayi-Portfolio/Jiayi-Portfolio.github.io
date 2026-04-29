import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Lemon-yellow sweep on hover, text turns deep blue.
// Use on light/transparent backgrounds.
export const sweepLink = cn(
  "relative inline-block overflow-hidden px-2 py-0.5 z-0",
  "transition-colors duration-300 hover:text-primary",
  "before:absolute before:inset-0 before:-z-10 before:bg-accent",
  "before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out",
  "hover:before:scale-x-100"
)

// Inverse: deep-blue sweep on hover, text turns white.
// Use on the lemon-yellow footer where bg-accent would be invisible.
export const sweepLinkInverse = cn(
  "relative inline-block overflow-hidden px-2 py-0.5 z-0",
  "transition-colors duration-300 hover:text-white",
  "before:absolute before:inset-0 before:-z-10 before:bg-primary",
  "before:origin-left before:scale-x-0 before:transition-transform before:duration-300 before:ease-out",
  "hover:before:scale-x-100"
)
