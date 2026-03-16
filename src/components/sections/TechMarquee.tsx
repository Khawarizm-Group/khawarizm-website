"use client";

interface Tech {
  name: string;
  logo: string;
}

const techsRow1: Tech[] = [
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Framer", logo: "/logos/framer.svg" },
  { name: "Design Systems", logo: "/logos/design-systems.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "LangChain", logo: "/logos/langchain.svg" },
  { name: "FastAPI", logo: "/logos/fastapi.svg" },
  { name: "GraphQL", logo: "/logos/graphql.svg" },
];

const techsRow2: Tech[] = [
  { name: "GraphQL", logo: "/logos/graphql.svg" },
  { name: "Framer", logo: "/logos/framer.svg" },
  { name: "FastAPI", logo: "/logos/fastapi.svg" },
  { name: "OpenAI", logo: "/logos/openai.svg" },
  { name: "React", logo: "/logos/react.svg" },
  { name: "LangChain", logo: "/logos/langchain.svg" },
  { name: "TypeScript", logo: "/logos/typescript.svg" },
  { name: "Figma", logo: "/logos/figma.svg" },
  { name: "Next.js", logo: "/logos/nextjs.svg" },
  { name: "Python", logo: "/logos/python.svg" },
  { name: "Tailwind CSS", logo: "/logos/tailwindcss.svg" },
  { name: "Design Systems", logo: "/logos/design-systems.svg" },
];

function ItemList({ items }: { items: Tech[] }) {
  return (
    <>
      {items.map((tech, i) => (
        <span key={`${tech.name}-${i}`} className="marquee-item">
          <img
            src={tech.logo}
            alt=""
            className="marquee-logo"
            draggable={false}
            loading="eager"
          />
          <span className="marquee-label">{tech.name}</span>
        </span>
      ))}
    </>
  );
}

function MarqueeRow({
  items,
  reverse,
}: {
  items: Tech[];
  reverse?: boolean;
}) {
  return (
    <div className="marquee-track" aria-hidden="true">
      <div
        className={`marquee-inner ${reverse ? "marquee-inner--reverse" : ""}`}
      >
        <div className="marquee-group">
          <ItemList items={items} />
        </div>
        <div className="marquee-group" aria-hidden="true">
          <ItemList items={items} />
        </div>
      </div>
    </div>
  );
}

export default function TechMarquee() {
  return (
    <section className="tech-marquee" aria-label="التقنيات المستخدمة" dir="ltr">
      <div className="marquee-wrap">
        <MarqueeRow items={techsRow1} />
        <MarqueeRow items={techsRow2} reverse />
      </div>
    </section>
  );
}