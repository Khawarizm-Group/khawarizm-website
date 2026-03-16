type ContactButtonProps = {
    href?: string;
    className?: string;
    size?: "sm" | "md";
};

export default function ContactButton({
    href = "#contact",
    className = "",
    size = "md",
}: ContactButtonProps) {
    const isSmall = size === "sm";

    return (
        <a
            href={href}
            className={`group relative inline-flex shrink-0 items-center justify-center overflow-hidden whitespace-nowrap font-bold transition-all duration-300 ease-out hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/10 ${className}`}
            style={{
                height: isSmall ? "34px" : "42px",
                paddingInline: isSmall ? "18px" : "22px",
                borderRadius: isSmall ? "12px 12px 4px 12px" : "14px 14px 4px 14px",
                background: "#FCF9F0",
                color: "#111111",
                boxShadow: isSmall
                    ? "3px 3px 0px rgba(24,24,27,0.12)"
                    : "4px 4px 0px rgba(24,24,27,0.12)",
                fontSize: isSmall ? "0.76rem" : "0.88rem",
                letterSpacing: "0.01em",
                lineHeight: 1,
            }}
        >
            <span
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                    background: "rgba(0, 0, 0, 0.04)",
                }}
            />

            <span className="relative z-10 block shrink-0 whitespace-nowrap transition-opacity duration-300 group-hover:opacity-90">
                تواصل معنا
            </span>
        </a>
    );
}