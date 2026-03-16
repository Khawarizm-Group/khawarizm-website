"use client";

import { useRef, useCallback } from "react";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

export default function About() {
    const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);
    const setCounterRef = useCallback(
        (index: number) => (el: HTMLSpanElement | null) => {
            counterRefs.current[index] = el;
        },
        []
    );

    const sectionRef = useGsap<HTMLElement>((_ctx, container) => {
        const panel = container.querySelector<HTMLElement>(".about-panel");
        const introCard = container.querySelector<HTMLElement>(".about-intro-card");
        const statCards = container.querySelectorAll<HTMLElement>(".about-stat-card");
        const principlesCard = container.querySelector<HTMLElement>(".about-principles-card");

        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        gsap.set(panel, { opacity: 0, y: isMobile ? 24 : 36 });
        gsap.set([introCard, principlesCard], { opacity: 0, y: isMobile ? 16 : 24 });
        gsap.set(statCards, { opacity: 0, y: isMobile ? 14 : 20 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 78%",
                once: true,
            },
        });

        tl.to(panel, {
            opacity: 1, y: 0,
            duration: isMobile ? 0.65 : 0.8,
            ease: "power2.out",
        });

        if (isMobile) {
            tl.to(introCard, {
                opacity: 1, y: 0,
                duration: 0.55,
                ease: "power2.out",
            }, "-=0.25");

            tl.to(statCards, {
                opacity: 1, y: 0,
                duration: 0.5,
                ease: "power2.out",
                stagger: 0.08,
            }, "-=0.15");

            tl.to(principlesCard, {
                opacity: 1, y: 0,
                duration: 0.55,
                ease: "power2.out",
            }, "-=0.15");
        } else {
            tl.to([introCard, principlesCard], {
                opacity: 1, y: 0,
                duration: 0.7,
                ease: "power2.out",
            }, "-=0.25");

            tl.to(statCards, {
                opacity: 1, y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
            }, "-=0.2");
        }

        const statValues = [6, 20, 2];
        const statDurations = [0.8, 1.0, 0.7];

        const counterTl = gsap.timeline({
            scrollTrigger: {
                trigger: container.querySelector(".about-stats-grid"),
                start: "top 85%",
                once: true,
            },
        });

        statValues.forEach((target, i) => {
            const el = counterRefs.current[i];
            if (!el) return;

            const counter = { val: 0 };
            counterTl.to(counter, {
                val: target,
                duration: statDurations[i],
                ease: "power1.out",
                onUpdate: () => {
                    el.textContent = `+${Math.round(counter.val)}`;
                },
            }, 0);
        });
    });

    return (
        <section id="about" className="about-section" ref={sectionRef}>
            <div className="about-inner">
                <div className="about-panel">
                    <div className="about-layout">
                        <div className="about-main">
                            <div className="about-card about-intro-card">
                                <span className="text-overline about-eyebrow">من نحن</span>

                                <div className="about-title-area">
                                    <h2 className="about-title">
                                        <span className="about-title-line" style={{ whiteSpace: "nowrap" }}>فريق تقني سعودي</span>
                                        <span className="about-title-line">للحلول الرقمية</span>
                                    </h2>
                                    <img
                                        src="/Stars.svg"
                                        alt=""
                                        className="about-title-star"
                                        aria-hidden="true"
                                    />
                                </div>

                                <p className="about-description">
                                    نصمم ونطوّر حلولًا رقمية تنطلق من فهم دقيق، وتُنفّذ بإتقان،
                                    وتستمر بالدعم والتحسين لتحقيق قيمة حقيقية.
                                </p>
                            </div>

                            <div className="about-stats-grid">
                                <div className="about-card about-stat-card">
                                    <span className="about-stat-number" ref={setCounterRef(0)}>+0</span>
                                    <span className="about-stat-label">مشروعًا</span>
                                </div>

                                <div className="about-card about-stat-card">
                                    <span className="about-stat-number" ref={setCounterRef(1)}>+0</span>
                                    <span className="about-stat-label">عميلًا</span>
                                </div>

                                <div className="about-card about-stat-card">
                                    <span className="about-stat-number" ref={setCounterRef(2)}>+0</span>
                                    <span className="about-stat-label">سنوات خبرة</span>
                                </div>
                            </div>
                        </div>

                        <div className="about-card about-principles-card">
                            <div className="about-principle">
                                <span className="about-principle-num">٠١</span>
                                <h3 className="about-principle-title">نفهم بعمق</h3>
                                <p className="about-principle-text">
                                    نقرأ الاحتياج بعناية لنؤسس لحل دقيق وفعّال.
                                </p>
                            </div>

                            <div className="about-principle">
                                <span className="about-principle-num">٠٢</span>
                                <h3 className="about-principle-title">ننفّذ باحتراف</h3>
                                <p className="about-principle-text">
                                    نحوّل الرؤية إلى منتج رقمي واضح، متقن، وقابل للتطور.
                                </p>
                            </div>

                            <div className="about-principle">
                                <span className="about-principle-num">٠٣</span>
                                <h3 className="about-principle-title">نطوّر بثبات</h3>
                                <p className="about-principle-text">
                                    نواصل الدعم والتحسين لنحافظ على الجودة وندفع المنتج نحو نمو
                                    مستدام.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
