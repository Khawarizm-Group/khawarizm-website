"use client";

import Container from "@/components/ui/Container";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

const services = [
    {
        id: "01",
        title: "تطوير الويب",
        description:
            "نطوّر مواقع ومنصات رقمية سريعة، متجاوبة، ومهيأة لتقديم تجربة موثوقة تدعم حضور العمل ونموه.",
    },
    {
        id: "02",
        title: "تصميم الواجهات وتجربة المستخدم",
        description:
            "نصمم واجهات وتجارب رقمية واضحة وجذابة، توازن بين سهولة الاستخدام والجودة البصرية.",
    },
    {
        id: "03",
        title: "الحلول الذكية وتطبيقات الذكاء الاصطناعي",
        description:
            "نوظّف تقنيات الذكاء الاصطناعي لبناء حلول عملية تدعم الأتمتة، تحسين الكفاءة، وتوسيع الإمكانات.",
    },
    {
        id: "04",
        title: "تكامل الأنظمة",
        description:
            "نربط الأنظمة والخدمات المختلفة ضمن بيئة تشغيل أكثر انسجامًا، بما يسهّل تدفق البيانات ويرفع كفاءة العمل.",
    },
];

export default function Services() {
    const sectionRef = useGsap<HTMLElement>((_ctx, container) => {
        const eyebrow = container.querySelector<HTMLElement>(".services-eyebrow");
        const title = container.querySelector<HTMLElement>(".services-title");
        const description = container.querySelector<HTMLElement>(".services-description");
        const cards = container.querySelectorAll<HTMLElement>(".service-card-wrap");

        const isMobile = window.matchMedia("(max-width: 900px)").matches;

        gsap.set([eyebrow, title, description], { opacity: 0, y: isMobile ? 16 : 24 });
        gsap.set(cards, { opacity: 0, y: isMobile ? 30 : 50, scale: 0.88 });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: container,
                start: "top 80%",
                once: true,
            },
        });

        tl.to(eyebrow, {
            opacity: 1, y: 0,
            duration: 0.3, ease: "power3.out",
        });

        tl.to(title, {
            opacity: 1, y: 0,
            duration: 0.35, ease: "power3.out",
        }, "-=0.12");

        tl.to(description, {
            opacity: 1, y: 0,
            duration: 0.3, ease: "power3.out",
        }, "-=0.18");

        tl.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: isMobile ? 0.4 : 0.5,
            ease: "back.out(1.7)",
            stagger: isMobile ? 0.06 : 0.08,
        }, "-=0.1");
    });

    return (
        <section id="services" className="services-section" ref={sectionRef}>
            <Container>
                <div className="services-head">
                    <span className="services-eyebrow">خدماتنا</span>

                    <h2 className="services-title">
                        نقدّم خدمات تقنية تركّز على بناء حلول رقمية.
                    </h2>

                    <p className="services-description">
                        نعمل بمنهجية تجمع بين التصميم، التطوير، والتكامل، لبناء منتجات
                        رقمية تخدم أهداف العمل بكفاءة واستدامة.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service) => (
                        <div key={service.id} className="service-card-wrap">
                            <article className="service-card">
                                <span className="service-card-number">{service.id}</span>
                                <h3 className="service-card-title">{service.title}</h3>
                                <p className="service-card-description">{service.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
