"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

    const pageRef = useGsap<HTMLDivElement>((_ctx, container) => {
        const label = container.querySelector(".contact-label");
        const title = container.querySelector(".contact-title");
        const desc = container.querySelector(".contact-desc");
        const divider = container.querySelector(".contact-divider");
        const formCard = container.querySelector(".contact-form-card");

        const isMobile = window.matchMedia("(max-width: 768px)").matches;

        gsap.set(label, { opacity: 0, y: 14 });
        gsap.set(title, { opacity: 0, y: isMobile ? 20 : 32 });
        gsap.set(desc, { opacity: 0, y: isMobile ? 14 : 22 });
        gsap.set(divider, { opacity: 0, scaleX: 0 });
        gsap.set(formCard, { opacity: 0, y: isMobile ? 24 : 40 });

        const tl = gsap.timeline({ delay: 0.1 });

        tl.to(
            label,
            { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" }
        );

        tl.to(
            title,
            { opacity: 1, y: 0, duration: 0.7, ease: "power4.out" },
            "-=0.2"
        );

        tl.to(
            desc,
            { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
            "-=0.4"
        );

        tl.to(
            divider,
            {
                opacity: 1,
                scaleX: 1,
                duration: 0.6,
                ease: "power2.out",
            },
            "-=0.25"
        );

        tl.to(
            formCard,
            {
                opacity: 1,
                y: 0,
                duration: isMobile ? 0.55 : 0.7,
                ease: "power2.out",
            },
            "-=0.3"
        );
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        await new Promise((r) => setTimeout(r, 1200));
        setStatus("sent");
    };

    return (
        <div ref={pageRef} className="contact-page">
            <Navbar />

            <main>
                <section className="contact-hero">
                    <Container size="md">
                        <div className="contact-hero-inner">
                            <span className="contact-label">تواصل معنا</span>
                            <h1 className="contact-title">
                                دعنا نصنع شيئًا استثنائيًا معًا
                            </h1>
                            <p className="contact-desc">
                                سواء كنت تبدأ مشروعًا جديدًا أو تطوّر منتجًا
                                قائمًا، نحن هنا لنحوّل رؤيتك إلى واقع رقمي
                                متقن.
                            </p>
                        </div>
                    </Container>
                </section>

                <div className="contact-divider" />

                <section className="contact-content">
                    <Container size="sm">
                            <div className="contact-form-card">
                                {status === "sent" ? (
                                    <div className="contact-success">
                                        <div className="contact-success-icon">
                                            <CheckCircle2
                                                size={40}
                                                strokeWidth={1.5}
                                            />
                                        </div>
                                        <h3 className="contact-success-title">
                                            تم الإرسال بنجاح
                                        </h3>
                                        <p className="contact-success-text">
                                            شكرًا لتواصلك معنا. سنعود إليك في
                                            أقرب وقت ممكن.
                                        </p>
                                    </div>
                                ) : (
                                    <>
                                        <h2 className="contact-form-heading">
                                            أرسل لنا رسالة
                                        </h2>
                                        <p className="contact-form-sub">
                                            املأ النموذج وسنتواصل معك في أقرب
                                            وقت.
                                        </p>
                                        <form
                                            onSubmit={handleSubmit}
                                            className="contact-form"
                                        >
                                            <div className="contact-form-row">
                                                <div className="contact-field">
                                                    <label
                                                        className="contact-field-label"
                                                        htmlFor="c-name"
                                                    >
                                                        الاسم الكامل
                                                    </label>
                                                    <input
                                                        id="c-name"
                                                        name="name"
                                                        type="text"
                                                        required
                                                        className="contact-input"
                                                        placeholder="أدخل اسمك"
                                                        value={form.name}
                                                        onChange={handleChange}
                                                    />
                                                </div>

                                                <div className="contact-field">
                                                    <label
                                                        className="contact-field-label"
                                                        htmlFor="c-email"
                                                    >
                                                        البريد الإلكتروني
                                                    </label>
                                                    <input
                                                        id="c-email"
                                                        name="email"
                                                        type="email"
                                                        required
                                                        className="contact-input"
                                                        placeholder="example@email.com"
                                                        dir="ltr"
                                                        style={{
                                                            textAlign: "left",
                                                        }}
                                                        value={form.email}
                                                        onChange={handleChange}
                                                    />
                                                </div>
                                            </div>

                                            <div className="contact-field contact-field--half">
                                                <label
                                                    className="contact-field-label"
                                                    htmlFor="c-phone"
                                                >
                                                    رقم الهاتف
                                                    <span className="contact-field-optional">
                                                        (اختياري)
                                                    </span>
                                                </label>
                                                <input
                                                    id="c-phone"
                                                    name="phone"
                                                    type="tel"
                                                    className="contact-input"
                                                    placeholder="05xxxxxxxx"
                                                    dir="ltr"
                                                    style={{
                                                        textAlign: "left",
                                                    }}
                                                    value={form.phone}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <div className="contact-field">
                                                <label
                                                    className="contact-field-label"
                                                    htmlFor="c-message"
                                                >
                                                    رسالتك
                                                </label>
                                                <textarea
                                                    id="c-message"
                                                    name="message"
                                                    required
                                                    className="contact-input contact-textarea"
                                                    placeholder="أخبرنا عن مشروعك أو فكرتك..."
                                                    rows={5}
                                                    value={form.message}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                className="contact-submit"
                                                disabled={
                                                    status === "sending"
                                                }
                                            >
                                                <span>
                                                    {status === "sending"
                                                        ? "جاري الإرسال..."
                                                        : "إرسال الرسالة"}
                                                </span>
                                                {status !== "sending" && (
                                                    <Send
                                                        size={16}
                                                        strokeWidth={2}
                                                    />
                                                )}
                                            </button>
                                        </form>
                                    </>
                                )}
                            </div>
                    </Container>
                </section>
            </main>

            <Footer />
        </div>
    );
}
