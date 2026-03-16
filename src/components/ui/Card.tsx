import { type HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
    hoverable?: boolean;
}

export default function Card({
    hoverable = true,
    className = "",
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={`
        rounded-[var(--kh-radius-xl)]
        border border-[var(--kh-border)]
        bg-[var(--kh-surface)]
        transition-all
        ${hoverable
                    ? "hover:border-[var(--kh-border-strong)] hover:bg-[var(--kh-surface-hover)] hover:shadow-[var(--kh-shadow-glow)]"
                    : ""
                }
        ${className}
      `}
            style={{
                padding: "var(--kh-space-xl)",
                transitionDuration: "var(--kh-duration)",
                transitionTimingFunction: "var(--kh-ease)",
            }}
            {...props}
        >
            {children}
        </div>
    );
}
