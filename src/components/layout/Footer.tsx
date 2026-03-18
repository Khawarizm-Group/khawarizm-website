import Link from "next/link";
import Container from "@/components/ui/Container";
import { Mail } from "lucide-react";

function GitHubIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65S8.93 17.38 9 18v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
    );
}

function LinkedInIcon() {
    return (
        <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
        </svg>
    );
}

export default function Footer() {
    return (
        <footer className="footer">
            <Container>
                <div className="footer-main">
                    <div className="footer-brand">
                        <Link href="/" className="footer-logo" aria-label="خوارزم">
                            <img
                                src="/logo.svg"
                                alt="Khwarizm"
                                draggable={false}
                            />
                        </Link>
                        <p className="footer-tagline">
                            خوارزم، شريكك التقني نحو حلول رقمية متكاملة ونمو
                            مستدام. نقدّم خدمات ومنتجات رقمية تُبنى برؤية
                            واضحة وتنفيذ متقن.
                        </p>
                    </div>

                    <div className="footer-col">
                        <span className="footer-heading">روابط سريعة</span>
                        <Link href="/" className="footer-link-item">
                            الرئيسية
                        </Link>
                        <Link href="/#services" className="footer-link-item">
                            خدماتنا
                        </Link>
                        <Link href="/#featured-work" className="footer-link-item">
                            أعمالنا
                        </Link>
                        <Link href="/contact" className="footer-link-item">
                            تواصل معنا
                        </Link>
                    </div>

                    <div className="footer-col">
                        <span className="footer-heading">تواصل</span>
                        <a
                            href="mailto:info@khawarizm.com"
                            className="footer-link-item"
                        >
                            <Mail size={16} strokeWidth={1.5} />
                            <span>info@khawarizm.com</span>
                        </a>
                        <a
                            href="https://github.com/Khawarizm-Group"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link-item"
                        >
                            <GitHubIcon />
                            <span>GitHub</span>
                        </a>
                        <a
                            href="https://www.linkedin.com/company/khawarizm-group/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-link-item"
                        >
                            <LinkedInIcon />
                            <span>LinkedIn</span>
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <span>جميع الحقوق محفوظة © خوارزم</span>
                </div>
            </Container>
        </footer>
    );
}
