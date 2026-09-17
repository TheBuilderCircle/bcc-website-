import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "outline-dark" | "outline-light";
type Size = "lg" | "form";

const variantClasses: Record<Variant, string> = {
  primary: "bg-accent text-white hover:bg-accent-hover",
  "outline-dark":
    "text-white shadow-[inset_0_0_0_2px_#ffffff] hover:bg-white/10",
  "outline-light":
    "text-ink-strong shadow-[inset_0_0_0_2px_#666666] hover:shadow-[inset_0_0_0_2px_#2a2a2a]",
};

const sizeClasses: Record<Size, string> = {
  lg: "h-[58px] gap-[10px] px-6 text-md-tight font-space-grotesk font-medium",
  form: "h-[54px] px-6 text-btn-form font-space-grotesk font-medium",
};

const baseClasses =
  "inline-flex items-center justify-center rounded-control whitespace-nowrap transition-colors";

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
};

type LinkButtonProps = CommonProps & {
  href: string;
};

type NativeButtonProps = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

export default function Button({
  variant = "primary",
  size = "lg",
  className = "",
  children,
  ...props
}: LinkButtonProps | NativeButtonProps) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} className={classes}>
      {children}
    </button>
  );
}
