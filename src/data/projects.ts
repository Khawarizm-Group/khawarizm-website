export interface Project {
    id: string;
    title: string;
    description: string;
    category: string;
    tags: string[];
    image?: string;
    href?: string;
}

export const projects: Project[] = [
    {
        id: "midad",
        title: "مداد",
        description:
            "منصة داخلية لإدارة المحتوى والموافقات والنشر، صُممت لتسريع العمل وتحسين وضوح سير المهام بين الفرق.",
        category: "منصة تشغيل",
        tags: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
        id: "siraj",
        title: "سراج",
        description:
            "لوحة تحكم تنفيذية تجمع مؤشرات الأداء والعمليات اليومية في واجهة واحدة تساعد الإدارات على اتخاذ القرار بسرعة.",
        category: "لوحة تحكم",
        tags: ["React", "Node.js", "Charts"],
    },
    {
        id: "wasl",
        title: "وصل",
        description:
            "نظام متكامل لإدارة الطلبات والخدمات الميدانية، يربط بين فرق التشغيل والعملاء ضمن تجربة واضحة ومنظمة.",
        category: "نظام أعمال",
        tags: ["Next.js", "NestJS", "Maps"],
    },
    {
        id: "namaa",
        title: "نماء",
        description:
            "منصة رقمية لإدارة الاشتراكات والخطط والخدمات المتكررة، مع تجربة استخدام مرنة تدعم النمو والتوسع.",
        category: "منتج رقمي",
        tags: ["React", "Stripe", "Supabase"],
    },
    {
        id: "mashhad",
        title: "مشهد",
        description:
            "تجربة رقمية لعرض المشاريع والملفات التعريفية بطريقة حديثة تعكس الهوية وتسهّل الوصول إلى المعلومات الأساسية.",
        category: "موقع وتجربة",
        tags: ["Figma", "Next.js", "CMS"],
    },
    {
        id: "dalil",
        title: "دليل",
        description:
            "بوابة خدمية تنظّم الوصول إلى البيانات والإجراءات والنماذج داخل بيئة واحدة، بما يرفع الكفاءة ويقلل التشتت.",
        category: "بوابة رقمية",
        tags: ["TypeScript", "APIs", "Auth"],
    },
];