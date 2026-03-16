import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    size?: "sm" | "md" | "lg" | "nav-sm" | "nav-md";
    variant?: "primary" | "secondary" | "ghost" | "navbar" | "hero-light" | "hero-dark" | "cta-outline";
    href?: string;
};

const sizeClasses = {
    sm: "h-10 px-5 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-7 text-[0.95rem]",
    "nav-sm": "h-[34px] px-[18px] text-[0.76rem] !rounded-[12px_12px_4px_12px] shadow-[3px_3px_0px_rgba(24,24,27,0.12)]",
    "nav-md": "h-[42px] px-[22px] text-[0.88rem] !rounded-[14px_14px_4px_14px] shadow-[4px_4px_0px_rgba(24,24,27,0.12)]",
};

const variantClasses = {
    primary:
        "border border-transparent bg-[var(--kh-accent)] text-black shadow-[0_10px_30px_rgba(232,228,223,0.08)] hover:bg-[var(--kh-accent-hover)]",
    secondary:
        "border border-[#FCF9F0]/8 bg-[#FCF9F0]/[0.04] text-[var(--kh-text)] hover:bg-[#FCF9F0]/[0.06]",
    ghost:
        "border border-transparent bg-transparent text-[var(--kh-text-secondary)] hover:bg-[#FCF9F0]/[0.04] hover:text-[var(--kh-text)]",
    navbar:
        "relative overflow-hidden group bg-[#FCF9F0] text-[#111111] transition-all duration-300 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:scale-100 font-bold",
    "hero-light":
        "relative overflow-hidden group bg-[#f3efe6] text-[#111111] transition-all duration-300 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:scale-100 font-bold",
    "hero-dark":
        "relative overflow-hidden group bg-black text-[#f3efe6] border-[1.5px] border-solid border-[#f3efe6]/40 transition-all duration-300 ease-out hover:border-[#f3efe6]/70 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:scale-100 font-bold",
    "cta-outline":
        "relative overflow-hidden group bg-transparent text-[#050505] border-[1.5px] border-solid border-[#050505]/25 transition-all duration-300 ease-out hover:border-[#050505]/50 hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 active:scale-100 font-bold",
};

export default function Button({
    className,
    children,
    size = "md",
    variant = "primary",
    href,
    ...props
}: ButtonProps) {
    const isNavbarOrHero = variant === "navbar" || variant === "hero-light" || variant === "hero-dark" || variant === "cta-outline";

    const sharedClassName = cn(
        "inline-flex items-center justify-center rounded-full whitespace-nowrap select-none tracking-[0.01em]",
        !isNavbarOrHero && "font-medium transition-all duration-300 ease-[var(--kh-ease)]",
        "disabled:pointer-events-none disabled:opacity-50",
        !isNavbarOrHero && "active:scale-[0.99]",
        "focus-visible:outline-none focus-visible:ring-2",
        isNavbarOrHero ? "focus-visible:ring-black/10" : "focus-visible:ring-[var(--kh-accent-muted)] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
        sizeClasses[size],
        variantClasses[variant],
        className
    );

    const content = (
        <>
            {isNavbarOrHero && (
                <span className="absolute inset-0 -z-10 bg-[rgba(0,0,0,0.04)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            )}
            <span className={cn(
                !isNavbarOrHero && "translate-y-[0.5px]",
                isNavbarOrHero && "relative z-10 block shrink-0 whitespace-nowrap leading-none transition-opacity duration-300 group-hover:opacity-90"
            )}>
                {children}
            </span>
        </>
    );

    if (href) {
        return (
            <a href={href} className={sharedClassName}>
                {content}
            </a>
        );
    }

    return (
        <button className={sharedClassName} {...props}>
            {content}
        </button>
    );
}