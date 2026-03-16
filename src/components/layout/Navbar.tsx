"use client";

import { useEffect, useMemo, useState } from "react";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import {
    Home,
    Users,
    Layers,
    BriefcaseBusiness,
    Mail,
    Menu,
    X,
    ArrowRight,
} from "lucide-react";

function NavIcon({ href }: { href: string }) {
    const iconProps = {
        size: 16,
        strokeWidth: 1.75,
    };

    switch (href) {
        case "#hero":
            return <Home {...iconProps} />;
        case "#about":
            return <Users {...iconProps} />;
        case "#services":
            return <Layers {...iconProps} />;
        case "#featured-work":
            return <BriefcaseBusiness {...iconProps} />;
        case "#contact":
        case "#cta":
            return <Mail {...iconProps} />;
        default:
            return <Home {...iconProps} />;
    }
}

export default function Navbar() {
    const pathname = usePathname();
    const isHome = pathname === "/";
    const homeHeroHref = "/#hero";

    const [isOpen, setIsOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        if (!isHome) return;

        const onScroll = () => {
            const y = window.scrollY;
            setIsVisible(y < 80);
            if (y >= 80) setIsOpen(false);
        };

        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, [isHome]);

    const filteredNavItems = useMemo(
        () =>
            navItems.filter(
                (item) =>
                    item.label.trim() !== "تواصل معنا" &&
                    item.href !== "#contact" &&
                    item.href !== "#cta" &&
                    item.href !== "/contact"
            ),
        []
    );

    const navbarBg: React.CSSProperties = {
        background: "rgba(17, 16, 14, 0.45)",
        border: "1px solid rgba(252, 249, 240, 0.05)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        boxShadow:
            "0 8px 24px rgba(0,0,0,0.1), inset 0 1px 0 rgba(252, 249, 240, 0.02)",
    };

    const shellStyle: React.CSSProperties = {
        background: "rgba(17, 17, 17, 0.62)",
        border: "1px solid rgba(252, 249, 240, 0.06)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        boxShadow:
            "0 14px 30px rgba(0,0,0,0.18), inset 0 1px 0 rgba(252, 249, 240, 0.02)",
    };

    if (!isHome) {
        return (
            <header className="relative z-50 pt-6 pb-2">
                <Container>
                    <div
                        className="flex items-center justify-between rounded-full px-2.5 py-1.5"
                        style={navbarBg}
                    >
                        <a
                            href={homeHeroHref}
                            aria-label="خوارزم"
                            className="shrink-0 inline-flex items-center justify-center"
                        >
                            <img
                                src="/logo.svg"
                                alt="Khwarizm logo"
                                draggable={false}
                                className="block h-auto w-[70px] select-none lg:w-[80px]"
                                style={{
                                    userSelect: "none",
                                    WebkitUserSelect: "none",
                                }}
                            />
                        </a>

                        <a
                            href={homeHeroHref}
                            className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.84rem] font-medium transition-all duration-300 md:px-5"
                            style={{ color: "var(--kh-text-secondary)" }}
                        >
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--kh-text)]">
                                <ArrowRight size={16} strokeWidth={1.75} />
                            </span>
                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--kh-text)]">
                                الرئيسية
                            </span>
                            <span
                                className="absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                    background: "rgba(252, 249, 240, 0.03)",
                                }}
                            />
                        </a>
                    </div>
                </Container>
            </header>
        );
    }

    return (
        <header
            className="absolute inset-x-0 top-6 z-50 transition-all duration-300"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(-18px)",
                pointerEvents: isVisible ? "auto" : "none",
            }}
        >
            <Container>
                <div className="hidden md:block">
                    <div
                        className="flex items-center rounded-full px-2.5 py-1.5"
                        style={navbarBg}
                    >
                        <a
                            href="#hero"
                            aria-label="خوارزم"
                            className="order-1 shrink-0 inline-flex items-center justify-center"
                        >
                            <img
                                src="/logo.svg"
                                alt="Khwarizm logo"
                                draggable={false}
                                className="block h-auto w-[70px] select-none lg:w-[80px]"
                                style={{
                                    userSelect: "none",
                                    WebkitUserSelect: "none",
                                }}
                            />
                        </a>

                        <nav aria-label="التنقل الرئيسي" className="order-2 mx-4 flex-1">
                            <ul className="flex items-center justify-center gap-1">
                                {filteredNavItems.map((item) => (
                                    <li key={item.href}>
                                        <a
                                            href={item.href}
                                            className="group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.86rem] font-medium transition-all duration-300 lg:px-5"
                                            style={{ color: "var(--kh-text-secondary)" }}
                                        >
                                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--kh-text)]">
                                                <NavIcon href={item.href} />
                                            </span>

                                            <span className="relative z-10 transition-colors duration-300 group-hover:text-[var(--kh-text)]">
                                                {item.label}
                                            </span>

                                            <span
                                                className="absolute inset-[3px] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                                style={{
                                                    background: "rgba(252, 249, 240, 0.03)",
                                                }}
                                            />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="order-3 shrink-0 ml-2">
                            <Button href="/contact" variant="navbar" size="nav-md">
                                تواصل معنا
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="md:hidden">
                    <div
                        dir="ltr"
                        className="flex items-center justify-between rounded-[18px] px-2 py-1.5"
                        style={navbarBg}
                    >
                        <button
                            type="button"
                            onClick={() => setIsOpen((prev) => !prev)}
                            className="group relative flex h-10 w-10 items-center justify-center rounded-[14px] transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                            style={{
                                background: isOpen
                                    ? "rgba(252, 249, 240, 0.08)"
                                    : "rgba(252, 249, 240, 0.035)",
                                border: "1px solid rgba(252, 249, 240, 0.08)",
                                color: isOpen
                                    ? "var(--kh-text)"
                                    : "var(--kh-text-secondary)",
                                boxShadow: isOpen
                                    ? "0 10px 22px rgba(0,0,0,0.2), inset 0 1px 0 rgba(252,249,240,0.05)"
                                    : "0 6px 16px rgba(0,0,0,0.14), inset 0 1px 0 rgba(252,249,240,0.02)",
                            }}
                            aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
                            aria-expanded={isOpen}
                        >
                            <span className="transition-transform duration-300 group-active:scale-95">
                                {isOpen ? (
                                    <X size={18} strokeWidth={2} />
                                ) : (
                                    <Menu size={18} strokeWidth={1.9} />
                                )}
                            </span>
                        </button>

                        <a
                            href="#hero"
                            aria-label="خوارزم"
                            className="inline-flex items-center justify-center"
                        >
                            <img
                                src="/logo.svg"
                                alt="Khwarizm logo"
                                draggable={false}
                                className="block h-auto w-[56px] select-none"
                                style={{
                                    userSelect: "none",
                                    WebkitUserSelect: "none",
                                }}
                            />
                        </a>
                    </div>

                    <div
                        className="overflow-hidden transition-all duration-300"
                        style={{
                            maxHeight: isOpen ? "26rem" : "0",
                            opacity: isOpen ? 1 : 0,
                            transform: isOpen ? "translateY(10px)" : "translateY(0)",
                            transitionTimingFunction: "var(--kh-ease)",
                            pointerEvents: isOpen ? "auto" : "none",
                        }}
                    >
                        <div className="mt-3 rounded-[20px] px-2 py-3" style={shellStyle}>
                            <ul className="flex flex-col">
                                {filteredNavItems.map((item, index) => (
                                    <li
                                        key={item.href}
                                        style={{
                                            opacity: isOpen ? 1 : 0,
                                            transform: isOpen ? "translateY(0)" : "translateY(-6px)",
                                            transition: `opacity 220ms ease ${index * 35}ms, transform 220ms ease ${index * 35}ms`,
                                        }}
                                    >
                                        <a
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 rounded-xl px-4 py-3 transition-colors duration-200"
                                            style={{ color: "var(--kh-text-secondary)" }}
                                        >
                                            <span style={{ color: "var(--kh-text-tertiary)" }}>
                                                <NavIcon href={item.href} />
                                            </span>

                                            <span
                                                className="text-[0.93rem] font-medium"
                                                style={{ color: "var(--kh-text)" }}
                                            >
                                                {item.label}
                                            </span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
}