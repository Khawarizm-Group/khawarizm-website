"use client";

import { useRef } from "react";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";
import { projects } from "@/data/projects";

export default function FeaturedWork() {
    const trackRef = useRef<HTMLDivElement>(null);

    const sectionRef = useGsap<HTMLElement>((_ctx, container) => {
        const track = trackRef.current;
        if (!track) return;

        const shell = container.querySelector<HTMLElement>(".fw-shell");
        const header = container.querySelector<HTMLElement>(".fw-header");
        const cards = track.querySelectorAll<HTMLElement>(".fw-card");
        if (!shell || !header || !cards.length) return;

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        gsap.set(shell, { opacity: 0, y: isMobile ? 24 : 38 });
        gsap.set(header, { opacity: 0, y: 14 });
        gsap.set(cards, { opacity: 0, y: 16 });
        gsap.set(track, { x: 0 });

        const introTl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 78%",
                once: true,
            },
        });

        introTl.to(shell, {
            opacity: 1,
            y: 0,
            duration: isMobile ? 0.7 : 0.85,
            ease: "power2.out",
        });

        introTl.to(
            header,
            {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out",
            },
            "-=0.2"
        );

        introTl.to(
            cards,
            {
                opacity: 1,
                y: 0,
                duration: 0.42,
                ease: "power2.out",
                stagger: 0.05,
            },
            "-=0.12"
        );

        const getScrollDistance = () => {
            const firstRect = cards[0].getBoundingClientRect();
            const lastRect = cards[cards.length - 1].getBoundingClientRect();
            const cardSpan = firstRect.right - lastRect.left;

            const cs = getComputedStyle(shell);
            const pl = parseFloat(cs.paddingLeft) || 0;
            const pr = parseFloat(cs.paddingRight) || 0;
            const visibleWidth = shell.clientWidth - pl - pr;

            return Math.max(cardSpan - visibleWidth, 0);
        };

        if (getScrollDistance() <= 0) return;

        gsap.to(track, {
            x: () => getScrollDistance(),
            ease: "none",
            scrollTrigger: {
                trigger: shell,
                start: "center center",
                end: () => `+=${getScrollDistance()}`,
                pin: true,
                scrub: 1,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    });

    return (
        <section id="featured-work" className="fw-section" ref={sectionRef}>
            <div className="fw-shell">
                <div className="fw-header">
                    <span className="fw-label">أعمالنا</span>
                    <h2 className="fw-title">نصنع أثرًا يمتد</h2>
                    <p className="fw-desc">
                        مختارات من مشاريعنا التي تعكس رؤيتنا في بناء تجارب رقمية
                        واضحة، متقنة، وقابلة للنمو.
                    </p>
                </div>

                <div className="fw-track" ref={trackRef}>
                    {projects.map((project, index) => (
                        <article key={project.id} className="fw-card">
                            <div className="fw-card-preview">
                                <div className="fw-card-preview-deco">
                                    <span className="fw-card-num">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                </div>
                                <span className="fw-card-cat">
                                    {project.category}
                                </span>
                            </div>

                            <div className="fw-card-body">
                                <h3 className="fw-card-title">{project.title}</h3>
                                <p className="fw-card-text">
                                    {project.description}
                                </p>

                                <div className="fw-card-tags">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="fw-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}