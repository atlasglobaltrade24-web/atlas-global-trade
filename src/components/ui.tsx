import { useEffect, useRef, useState } from "react";
import { cn } from "@/utils/cn";
import { Link } from "@/lib/router";

/* ============================================================
   DESIGN SYSTEM PRIMITIVES
   ============================================================ */

/* ---------------- Container ---------------- */
export function Container({
  children,
  className,
  width = "default",
}: {
  children: React.ReactNode;
  className?: string;
  width?: "default" | "wide" | "narrow";
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-8",
        width === "default" && "max-w-[1240px]",
        width === "wide" && "max-w-[1480px]",
        width === "narrow" && "max-w-[820px]",
        className,
      )}
    >
      {children}
    </div>
  );
}

/* ---------------- Section ---------------- */
export function Section({
  children,
  className,
  id,
  tone = "ivory",
  size = "default",
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "ivory" | "white" | "dark" | "forest" | "transparent";
  size?: "default" | "sm" | "lg";
  as?: React.ElementType;
}) {
  return (
    <Tag
      id={id}
      className={cn(
        "relative",
        size === "sm" && "py-14 sm:py-16",
        size === "default" && "py-20 sm:py-24 lg:py-28",
        size === "lg" && "py-24 sm:py-32 lg:py-40",
        tone === "ivory" && "bg-ivory-100 text-ink-800",
        tone === "white" && "bg-ivory-50 text-ink-800",
        tone === "dark" && "bg-ink-900 text-ivory-200",
        tone === "forest" && "bg-forest-900 text-ivory-200",
        className,
      )}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Reveal on scroll ---------------- */
export function Reveal({
  children,
  className,
  delay = 0,
  as: Tag = "div",
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------------- Eyebrow ---------------- */
export function Eyebrow({
  children,
  tone = "forest",
  className,
}: {
  children: React.ReactNode;
  tone?: "forest" | "clay" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2.5",
        tone === "forest" && "text-navy-600",
        tone === "clay" && "text-clay-600",
        tone === "light" && "text-turmeric-400",
        className,
      )}
    >
      <span
        aria-hidden
        className={cn(
          "h-px w-6",
          tone === "forest" && "bg-navy-400/60",
          tone === "clay" && "bg-clay-500/60",
          tone === "light" && "bg-turmeric-400/60",
        )}
      />
      {children}
    </span>
  );
}

/* ---------------- Section heading ---------------- */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  tone = "dark",
  level = 2,
  className,
  action,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  tone?: "dark" | "light";
  level?: 1 | 2 | 3;
  className?: string;
  action?: React.ReactNode;
}) {
  const H = (`h${level}` as unknown) as React.ElementType;
  return (
    <div
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        action && "lg:flex-row lg:items-end lg:justify-between lg:gap-12",
        className,
      )}
    >
      <div className={cn("flex flex-col gap-4", align === "center" && "items-center", action && "lg:max-w-2xl")}>
        {eyebrow && <Eyebrow tone={tone === "light" ? "light" : "forest"}>{eyebrow}</Eyebrow>}
        <H
          className={cn(
            "text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-[3.1rem]",
            tone === "light" && "text-ivory-100",
          )}
        >
          {title}
        </H>
        {lead && (
          <p
            className={cn(
              "max-w-2xl text-[1.0625rem] leading-relaxed",
              tone === "light" ? "text-ivory-300/80" : "text-ink-500",
              align === "center" && "mx-auto",
            )}
          >
            {lead}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

/* ---------------- Button ---------------- */
type ButtonVariant = "primary" | "secondary" | "ghost" | "light" | "outlineLight" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const buttonBase =
  "group/btn relative inline-flex items-center justify-center gap-2 rounded-md font-medium tracking-[0.01em] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-forest-800 text-ivory-100 shadow-[0_1px_2px_rgba(18,42,52,0.14)] hover:bg-forest-700 hover:shadow-[0_10px_28px_-14px_rgba(20,62,56,0.9)] hover:-translate-y-px",
  secondary:
    "border border-ink-900/15 bg-transparent text-ink-800 hover:border-ink-900/40 hover:bg-ink-900/[0.03]",
  ghost: "text-ink-700 hover:text-navy-700",
  light:
    "bg-ivory-100 text-ink-900 hover:bg-white hover:-translate-y-px hover:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.6)]",
  outlineLight:
    "border border-ivory-200/30 text-ivory-100 hover:border-ivory-200/70 hover:bg-ivory-100/10",
  outline:
    "border border-ink-900/15 bg-transparent text-ink-800 hover:border-ink-900/40 hover:bg-ink-900/[0.03]",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-[0.8125rem]",
  md: "px-6 py-3 text-[0.875rem]",
  lg: "px-7 py-3.5 text-[0.9375rem]",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  to,
  href,
  className,
  arrow = false,
  ...rest
}: {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  to?: string;
  href?: string;
  className?: string;
  arrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(buttonBase, variants[variant], sizes[size], className);
  const inner = (
    <>
      {children}
      {arrow && (
        <svg
          aria-hidden
          viewBox="0 0 16 16"
          className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-1"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 8h11M9 4l4 4-4 4" />
        </svg>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes}>
        {inner}
      </Link>
    );
  }
  if (href) {
    return (
      <a href={href} className={classes} {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {inner}
      </a>
    );
  }
  return (
    <button className={classes} {...rest}>
      {inner}
    </button>
  );
}

/* ---------------- Image with graceful fallback ---------------- */
export function Img({
  src,
  fallback,
  alt,
  className,
  wrapperClassName,
  ratio,
  fit = "cover",
  priority = false,
  tone = "ivory",
}: {
  src: string;
  fallback?: string;
  alt: string;
  className?: string;
  wrapperClassName?: string;
  ratio?: string;
  fit?: "cover" | "contain";
  priority?: boolean;
  tone?: "ivory" | "dark";
}) {
  const [current, setCurrent] = useState(src);
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCurrent(src);
    setLoaded(false);
    setFailed(false);
  }, [src]);

  const wrapperClasses = cn(
    tone === "dark"
      ? "bg-gradient-to-br from-ink-800 via-forest-900 to-bark-700"
      : "bg-gradient-to-br from-ivory-300 via-ivory-200 to-ivory-400",
    wrapperClassName,
  );

  const imgCommon = {
    src: current,
    alt,
    loading: priority ? "eager" : "lazy",
    decoding: "async" as const,
    fetchPriority: priority ? ("high" as const) : ("auto" as const),
    onLoad: () => setLoaded(true),
    onError: () => {
      if (fallback && current !== fallback) {
        setCurrent(fallback);
      } else {
        setFailed(true);
      }
    },
  };

  return (
    <div
      className={cn("overflow-hidden", wrapperClasses, fit === "contain" && "flex items-center justify-center")}
      style={ratio ? { aspectRatio: ratio } : undefined}
    >
      {!failed && (
        <img
          {...imgCommon}
          className={cn(
            fit === "contain"
              ? "relative max-h-full max-w-full object-contain transition-[opacity,transform] duration-[600ms]"
              : "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)]",
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-[1.04]",
            className,
          )}
        />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="eyebrow text-ink-400">[IMAGE]</span>
        </div>
      )}
    </div>
  );
}

/* ---------------- Badge / pill ---------------- */
export function Badge({
  children,
  tone = "neutral",
  className,
}: {
  children: React.ReactNode;
  tone?: "neutral" | "forest" | "clay" | "light";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-[0.6875rem] font-medium tracking-[0.06em] uppercase",
        tone === "neutral" && "bg-ink-900/[0.05] text-ink-600",
        tone === "forest" && "bg-navy-100 text-navy-700",
        tone === "clay" && "bg-clay-100 text-clay-700",
        tone === "light" && "bg-ivory-100/10 text-ivory-200 ring-1 ring-ivory-200/20",
        className,
      )}
    >
      {children}
    </span>
  );
}

/* ---------------- Count-up number ---------------- */
export function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") {
      setDisplay(value);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        const duration = 1300;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setDisplay(Math.round(eased * value));
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------------- Icon set (inline, no library) ---------------- */
const paths: Record<string, React.ReactNode> = {
  leaf: <path d="M4 20c0-8 5-13 16-14 0 10-5 15-12 15H4Zm2-2c3-4 6-6 10-8" />,
  scale: <path d="M12 3v18M6 7h12M6 7l-3 7a3 3 0 0 0 6 0L6 7Zm12 0-3 7a3 3 0 0 0 6 0l-3-7ZM8 21h8" />,
  handshake: <path d="m8 12 3 3 2-2 3 3M3 10l4-4 5 2 5-2 4 4-4 8-5-2-5 2-4-8Z" />,
  globe: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 0c-3 3-3 15 0 18m0-18c3 3 3 15 0 18M3.5 9h17M3.5 15h17" />,
  box: <path d="M12 3 3.5 7.5v9L12 21l8.5-4.5v-9L12 3Zm0 0v18M3.5 7.5 12 12l8.5-4.5" />,
  sliders: <path d="M4 7h10M18 7h2M4 17h4M12 17h8M16 4v6M8 14v6" />,
  ship: <path d="M3 17c2 2 4 2 6 0s4-2 6 0 4 2 6 0M5 15l1-6h12l1 6M9 9V5h6v4M12 3v2" />,
  clock: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4.5V12l3.5 2.5" />,
  search: <path d="M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14Zm5 12 4.5 4.5" />,
  wind: <path d="M3 8h11a3 3 0 1 0-3-3M3 12h15a3 3 0 1 1-3 3M3 16h8" />,
  gear: <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm8.5 3-1.7-.6a7 7 0 0 0-.6-1.5l.8-1.6-1.8-1.8-1.6.8a7 7 0 0 0-1.5-.6L13.5 3h-3l-.6 1.7a7 7 0 0 0-1.5.6l-1.6-.8L5 6.3l.8 1.6a7 7 0 0 0-.6 1.5L3.5 10v3l1.7.6a7 7 0 0 0 .6 1.5l-.8 1.6 1.8 1.8 1.6-.8a7 7 0 0 0 1.5.6l.6 1.7h3l.6-1.7a7 7 0 0 0 1.5-.6l1.6.8 1.8-1.8-.8-1.6a7 7 0 0 0 .6-1.5l1.7-.6v-1Z" />,
  check: <path d="m4 12.5 5 5L20 6.5" />,
  file: <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Zm0 0v5h5M9 13h6M9 17h4" />,
  mail: <path d="M3 6.5h18v11H3v-11Zm0 0 9 6.5 9-6.5" />,
  phone: <path d="M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z" />,
  whatsapp: <path d="M12 3a9 9 0 0 0-7.7 13.7L3 21l4.4-1.2A9 9 0 1 0 12 3Zm-2.6 5.2c.2 0 .4 0 .6.5l.8 1.8c.1.3 0 .5-.1.7l-.5.6c-.2.2-.3.4-.1.7a8 8 0 0 0 3.4 3c.3.1.5.1.7-.1l.7-.8c.2-.2.4-.2.6-.1l1.8.9c.3.1.4.3.4.5 0 .8-.6 1.6-1.4 1.8-.7.2-1.6.3-4.2-1.1a10 10 0 0 1-4-4.3c-.9-1.8-.6-3 .1-3.7a2 2 0 0 1 1.2-.4Z" />,
  pin: <path d="M12 21s7-5.6 7-11a7 7 0 1 0-14 0c0 5.4 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />,
  factory: <path d="M3 21V9l6 4V9l6 4V6h3l1 15H3Zm5-4h2m4 0h2" />,
  shield: <path d="M12 3 5 6v6c0 4.2 2.8 7.6 7 9 4.2-1.4 7-4.8 7-9V6l-7-3Zm-3 9 2 2 4-4" />,
  spark: <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />,
  users: <path d="M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm0 0c-3 0-5 2-5 5v3h10v-3c0-3-2-5-5-5Zm8-7a3.5 3.5 0 0 1 0 7m1 2c2.4.5 4 2.4 4 5v2h-4" />,
  chef: <path d="M7 20h10v-6H7v6Zm10-6a4 4 0 0 0 1-7.9A4 4 0 0 0 12 3a4 4 0 0 0-6 3.1A4 4 0 0 0 7 14M9 17h6" />,
  store: <path d="M4 9h16v11H4V9Zm0 0 1.5-5h13L20 9M9 20v-6h6v6" />,
  flask: <path d="M10 3h4M11 3v6L5.5 18A2 2 0 0 0 7.2 21h9.6a2 2 0 0 0 1.7-3L13 9V3M8.5 14h7" />,
  quote: <path d="M9 6C6 7.5 5 10 5 13v5h6v-6H8c0-2 .5-3.5 2-4.5L9 6Zm10 0c-3 1.5-4 4-4 7v5h6v-6h-3c0-2 .5-3.5 2-4.5L19 6Z" />,
  plus: <path d="M12 5v14M5 12h14" />,
};

export function Icon({
  name,
  className,
  strokeWidth = 1.4,
}: {
  name: string;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-5 w-5", className)}
    >
      {paths[name] ?? paths.spark}
    </svg>
  );
}

/* ---------------- Editable placeholder marker ---------------- */
export function Placeholder({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-xs bg-turmeric-100 px-1.5 py-0.5 font-medium text-bark-700">
      {children}
    </span>
  );
}
