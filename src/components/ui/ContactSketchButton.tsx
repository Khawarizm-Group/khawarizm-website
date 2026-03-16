"use client";

import { useEffect, useRef } from "react";
import rough from "roughjs";
import { ArrowLeft } from "lucide-react";

type ContactSketchButtonProps = {
    href?: string;
    label?: string;
    size?: "sm" | "md";
    className?: string;
};

export default function ContactSketchButton({
    href = "#contact",
    label = "تواصل معنا",
    size = "md",
    className = "",
}: ContactSketchButtonProps) {
    const svgRef = useRef<SVGSVGElement | null>(null);

    const isSmall = size === "sm";
    const width = isSmall ? 130 : 156;
    const height = isSmall ? 40 : 46;

    useEffect(() => {
        const svg = svgRef.current;
        if (!svg) return;

        while (svg.firstChild) {
            svg.removeChild(svg.firstChild);
        }

        const rc = rough.svg(svg);

        const outer = rc.rectangle(2, 2, width - 4, height - 4, {
            stroke: "rgba(252, 249, 240, 0.4)",
            strokeWidth: 1,
            roughness: 0.15,
            bowing: 0.2,
            fill: "transparent",
            disableMultiStroke: true,
            disableMultiStrokeFill: true,
        });

        const inner = rc.rectangle(6, 6, width - 12, height - 12, {
            stroke: "rgba(252, 249, 240, 0.15)",
            strokeWidth: 1,
            roughness: 0.3,
            bowing: 0.5,
            fill: "transparent",
            disableMultiStroke: true,
            disableMultiStrokeFill: true,
        });

        svg.appendChild(outer);
        svg.appendChild(inner);
    }, [width, height]);

    return (
        <a
            href={href}
            className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] ${className}`}
            style={{
                width,
                height,
                textDecoration: "none",
            }}
        >
            <span
                className="absolute inset-0 -z-10 translate-y-[100%] bg-gradient-to-b from-[rgba(252,249,240,0.0)] to-[rgba(252,249,240,0.06)] transition-transform duration-500 ease-out group-hover:translate-y-0" 
            />

            <span
                className="relative z-10 whitespace-nowrap tracking-wide transition-colors duration-300 group-hover:text-[#FCF9F0]"
                style={{
                    color: "var(--kh-text)",
                    fontSize: isSmall ? "0.75rem" : "0.85rem",
                    fontWeight: 500,
                }}
            >
                {label}
            </span>

            <span 
                className="relative z-10 flex items-center justify-center text-[var(--kh-text)] transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:text-[#FCF9F0]"
            >
                <ArrowLeft strokeWidth={1.5} size={isSmall ? 15 : 17} />
            </span>

            <svg
                ref={svgRef}
                width={width}
                height={height}
                className="absolute inset-0 overflow-visible opacity-80 transition-opacity duration-300 group-hover:opacity-100"
            />
        </a>
    );
}