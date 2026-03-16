"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import KhwarizmLogo from "@/components/ui/KhwarizmLogo";

type SplashProps = {
    onFinish?: () => void;
};

const LOGO_PARTS_RTL = [
    "#logo-main-right",
    "#logo-bar",
    "#logo-part-4",
    "#logo-part-3",
    "#logo-part-2",
    "#logo-part-1",
    "#logo-main-left",
];

const STARS = ["#star-big", "#star-small-2", "#star-small-1"];

export default function Splash({ onFinish }: SplashProps) {
    const [isRemoved, setIsRemoved] = useState(false);

    const rootRef = useRef<HTMLDivElement>(null);
    const logoWrapRef = useRef<HTMLDivElement>(null);
    const logoInnerRef = useRef<HTMLDivElement>(null);
    const glowRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const ctx = gsap.context(() => {
            gsap.set(rootRef.current, {
                opacity: 1,
            });

            gsap.set(logoWrapRef.current, {
                opacity: 1,
            });

            gsap.set(logoInnerRef.current, {
                y: 10,
                scale: 0.985,
                filter: "blur(10px)",
                transformOrigin: "center center",
            });

            gsap.set(LOGO_PARTS_RTL, {
                opacity: 0,
                x: 28,
                filter: "blur(8px)",
                transformOrigin: "center center",
            });

            gsap.set(STARS, {
                opacity: 0,
                y: 6,
                scale: 0.94,
                filter: "blur(4px)",
                transformOrigin: "center center",
            });

            gsap.set(glowRef.current, {
                opacity: 0,
                scale: 0.92,
            });

            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                onComplete: () => {
                    document.body.style.overflow = prevOverflow;
                    setIsRemoved(true);
                    onFinish?.();
                },
            });

            tl
                .to(logoInnerRef.current, {
                    y: 0,
                    scale: 1,
                    filter: "blur(0px)",
                    duration: 1.0,
                    ease: "power2.out",
                })

                .to(
                    LOGO_PARTS_RTL,
                    {
                        opacity: 1,
                        x: 0,
                        filter: "blur(0px)",
                        duration: 0.72,
                        stagger: 0.085,
                        ease: "power3.out",
                    },
                    "-=0.72"
                )

                .to(
                    glowRef.current,
                    {
                        opacity: 0.9,
                        scale: 1,
                        duration: 0.8,
                        ease: "power2.out",
                    },
                    "-=0.85"
                )

                .to(
                    STARS,
                    {
                        opacity: 1,
                        y: 0,
                        scale: 1,
                        filter: "blur(0px)",
                        duration: 0.4,
                        stagger: 0.09,
                        ease: "power2.out",
                    },
                    "-=0.4"
                )

                .to({}, { duration: 0.58 })

                .to(logoInnerRef.current, {
                    y: -10,
                    scale: 1.012,
                    filter: "blur(7px)",
                    duration: 0.58,
                    ease: "power2.inOut",
                })
                .to(
                    [...LOGO_PARTS_RTL, ...STARS],
                    {
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.inOut",
                    },
                    "-=0.44"
                )
                .to(
                    glowRef.current,
                    {
                        opacity: 0,
                        scale: 1.03,
                        duration: 0.42,
                        ease: "power2.inOut",
                    },
                    "<"
                )
                .to(
                    rootRef.current,
                    {
                        opacity: 0,
                        duration: 0.32,
                        ease: "power2.inOut",
                    },
                    "-=0.16"
                );
        }, rootRef);

        return () => {
            ctx.revert();
            document.body.style.overflow = prevOverflow;
        };
    }, [onFinish]);

    if (isRemoved) return null;

    return (
        <div
            ref={rootRef}
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black"
            aria-hidden="true"
        >
            <div ref={logoWrapRef} className="relative inline-block">
                <div
                    ref={glowRef}
                    className="pointer-events-none absolute inset-[-10%_-6%] blur-[52px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(252, 249, 240, 0.06) 0%, rgba(252, 249, 240, 0.018) 40%, rgba(0,0,0,0) 74%)",
                    }}
                />

                <div ref={logoInnerRef} className="relative">
                    <KhwarizmLogo
                        className="relative z-10 block h-auto w-[60vw] max-w-[360px] md:w-[34vw] md:max-w-[400px] lg:w-[28vw] pointer-events-none select-none"
                        style={{
                            userSelect: "none",
                            WebkitUserSelect: "none",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}