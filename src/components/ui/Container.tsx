import { type HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg" | "full";
}

const sizeMap: Record<NonNullable<ContainerProps["size"]>, string> = {
    sm: "max-w-3xl",
    md: "max-w-5xl",
    lg: "max-w-6xl",
    full: "max-w-none",
};

export default function Container({
    size = "lg",
    className = "",
    children,
    ...props
}: ContainerProps) {
    return (
        <div
            className={`mx-auto w-full ${sizeMap[size]} ${className}`}
            style={{
                paddingInlineStart: "var(--kh-space-xl)",
                paddingInlineEnd: "var(--kh-space-xl)",
            }}
            {...props}
        >
            {children}
        </div>
    );
}
