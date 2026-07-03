import { cn } from "@/lib/utils";

/**
 * Фирменная монограмма MAAREK: два золотых шеврона и ромб.
 * Векторная копия знака, цвет знака — фирменное золото.
 */
export function Mark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 92"
      role="img"
      aria-label="Знак Maarek"
      className={cn("block", className)}
      fill="currentColor"
    >
      <path d="M2 60 L36 26 L52 42 L44 50 L36 42 L10 68 Z" />
      <path d="M118 60 L84 26 L68 42 L76 50 L84 42 L110 68 Z" />
      <path d="M60 44 L82 66 L60 88 L38 66 Z" />
    </svg>
  );
}

/** знак + начертание MAAREK в строку */
export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={cn("inline-flex items-center gap-[0.55em] leading-none", className)}
      role="img"
      aria-label="Maarek"
    >
      <Mark className="h-[1.3em] w-auto text-accent" />
      <span className="font-black tracking-[0.28em] text-[1em]">MAAREK</span>
    </span>
  );
}
