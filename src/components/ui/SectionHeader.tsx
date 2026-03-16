interface SectionHeaderProps {
    label?: string;
    title: string;
    description?: string;
    align?: "start" | "center";
    className?: string;
}

export default function SectionHeader({
    label,
    title,
    description,
    align = "start",
    className = "",
}: SectionHeaderProps) {
    const alignClass = align === "center" ? "text-center mx-auto" : "";

    return (
        <div
            className={`max-w-2xl ${alignClass} ${className}`}
            style={{ marginBlockEnd: "var(--kh-space-3xl)" }}
        >
            {label && (
                <span className="text-overline block" style={{ marginBlockEnd: "var(--kh-space-sm)" }}>
                    {label}
                </span>
            )}

            <h2 style={{ textWrap: "balance" }}>{title}</h2>

            {description && (
                <p
                    className="text-body-lg"
                    style={{ marginBlockStart: "var(--kh-space-md)", textWrap: "balance" }}
                >
                    {description}
                </p>
            )}
        </div>
    );
}
