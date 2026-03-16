import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import { useGsap } from "@/hooks/useGsap";
import { gsap } from "@/lib/gsap";

export default function Hero() {
  const containerRef = useGsap<HTMLElement>((ctx, container) => {
    const highlight = container.querySelector(".hero-highlight");
    const headlineLines = container.querySelectorAll(".hero-headline-line");
    const subheadline = container.querySelector(".hero-subheadline");
    const ctaButtons = container.querySelectorAll(".hero-cta-group > *");

    const isMobile = window.matchMedia("(max-width: 900px)").matches;

    gsap.set(headlineLines, { opacity: 0, y: isMobile ? 40 : 70 });
    gsap.set(subheadline, { opacity: 0, y: isMobile ? 24 : 40 });
    gsap.set(ctaButtons, { opacity: 0, y: isMobile ? 16 : 28, scale: 0.88 });

    const entrance = gsap.timeline({ delay: 0.3 });

    entrance.to(headlineLines, {
      opacity: 1,
      y: 0,
      duration: isMobile ? 0.85 : 1.15,
      ease: "power4.out",
      stagger: 0.22,
    });

    entrance.to(
      subheadline,
      {
        opacity: 1,
        y: 0,
        duration: isMobile ? 0.7 : 0.9,
        ease: "power3.out",
      },
      "-=0.45"
    );

    entrance.to(
      ctaButtons,
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: isMobile ? 0.6 : 0.8,
        ease: "back.out(1.5)",
        stagger: 0.12,
      },
      "-=0.3"
    );

    if (highlight) {
      gsap.fromTo(
        highlight,
        { "--highlight-progress": "0%" },
        {
          "--highlight-progress": "100%",
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: "+=60%",
            scrub: 0.5,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
          },
        }
      );
    }
  });

  return (
    <section id="hero" className="hero" ref={containerRef}>
      <Container>
        <div className="hero-shell">
          <div className="hero-title-cluster">
            <h1 className="hero-headline">
              <span className="hero-headline-line">
                <span className="hero-highlight" data-text="نحوّل أفكارك">
                  نحوّل أفكارك
                </span>{" "}
                إلى حلول
              </span>
              <span className="hero-headline-line">رقمية فعّالة</span>
            </h1>
          </div>

          <p className="hero-subheadline">
            نصمم ونطوّر منتجات رقمية تساعد أعمالك على النمو، من فهم الاحتياج
            وتحديد الحل، إلى تنفيذ يجمع بين وضوح التصميم وجودة البناء.
          </p>

          <div className="hero-cta-wrap">
            <div className="hero-cta-group">
              <Button
                className="w-full sm:w-auto"
                variant="hero-light"
                size="nav-md"
                href="#featured-work"
              >
                استكشف أعمالنا
              </Button>

              <Button
                className="w-full sm:w-auto"
                variant="hero-dark"
                size="nav-md"
                href="/contact"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
