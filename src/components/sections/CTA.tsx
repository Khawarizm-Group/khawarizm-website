"use client";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { siteConfig } from "@/data/site";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

export default function CTA() {
    const sectionRef = useGsap<HTMLElement>((_ctx, container) => {
        const card = container.querySelector<HTMLElement>(".cta-card");
        const headline = container.querySelector<HTMLElement>(".cta-headline");
        const description = container.querySelector<HTMLElement>(".cta-description");
        const buttons = container.querySelectorAll<HTMLElement>(".cta-buttons > *");
        const stars = container.querySelectorAll<HTMLElement>(".cta-star");

        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        gsap.set(card, { opacity: 0, y: isMobile ? 30 : 50 });
        gsap.set([headline, description], { opacity: 0, y: isMobile ? 14 : 22 });
        gsap.set(buttons, { opacity: 0, y: isMobile ? 10 : 16, scale: 0.92 });
        gsap.set(stars, { opacity: 0, scale: 0 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 82%",
                end: "bottom 18%",
                toggleActions: "play reverse play reverse",
            },
        });

        tl.to(card, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.6 : 0.8,
            ease: "power2.out",
        });

        tl.to(headline, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.45 : 0.55,
            ease: "power3.out",
        }, "-=0.35");

        tl.to(description, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.4 : 0.5,
            ease: "power3.out",
        }, "-=0.3");

        tl.to(buttons, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.4 : 0.5,
            ease: "back.out(1.5)",
            stagger: 0.1,
        }, "-=0.2");

        tl.to(stars, {
            opacity: 0.85,
            scale: 1,
            duration: 0.6,
            ease: "back.out(2)",
            stagger: 0.1,
        }, "-=0.4");

        const drifts = [
            { y: -7, x: 3, rot: 8, dur: 4.0 },
            { y: -9, x: -4, rot: -6, dur: 4.8 },
            { y: -6, x: -3, rot: 7, dur: 5.2 },
            { y: -8, x: 4, rot: -9, dur: 4.4 },
        ];

        stars.forEach((star, i) => {
            const d = drifts[i] || drifts[0];
            gsap.to(star, {
                y: `+=${d.y}`,
                x: `+=${d.x}`,
                rotation: d.rot,
                duration: d.dur,
                ease: "sine.inOut",
                yoyo: true,
                repeat: -1,
                delay: i * 0.5,
            });
        });
    });

    return (
        <section id="cta" className="cta-section" ref={sectionRef}>
            <Container>
                <div className="cta-card">
                    <img src="/starone.svg" alt="" className="cta-star cta-star--tl" draggable={false} />
                    <img src="/starone.svg" alt="" className="cta-star cta-star--tr" draggable={false} />
                    <img src="/starone.svg" alt="" className="cta-star cta-star--bl" draggable={false} />
                    <img src="/starone.svg" alt="" className="cta-star cta-star--br" draggable={false} />

                    <div className="cta-inner">
                        <h2 className="cta-headline">
                            هل أنت مستعد لنقلة نوعية؟
                        </h2>

                        <p className="cta-description">
                            نحن هنا لنحوّل رؤيتك إلى واقع رقمي يتجاوز التوقعات. دعنا نناقش
                            كيف يمكن لخوارزم أن تكون الشريك التقني لنجاحك القادم.
                        </p>

                        <div className="cta-buttons">
                            <Button
                                className="w-full sm:w-auto"
                                variant="hero-dark"
                                size="nav-md"
                                href="/contact"
                            >
                                {siteConfig.cta.primary}
                            </Button>

                            <Button
                                className="w-full sm:w-auto"
                                variant="cta-outline"
                                size="nav-md"
                                href={`mailto:${siteConfig.contact.email}`}
                            >
                                {siteConfig.contact.email}
                            </Button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
