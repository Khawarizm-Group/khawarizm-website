export const siteConfig = {
    name: "خوارزم",
    nameEn: "Khwarizm",
    tagline: "نصنع المستقبل الرقمي",
    description:
        "وكالة تقنية سعودية متميزة متخصصة في بناء المنتجات الرقمية الراقية — من التصميم إلى الإطلاق.",

    contact: {
        email: "hello@khawarizm.com",
        location: "الرياض، المملكة العربية السعودية",
    },

    cta: {
        primary: "تواصل معنا",
        secondary: "تعرّف علينا",
        contact: "تواصل معنا",
        viewWork: "شاهد أعمالنا",
    },

    social: {
        x: "https://x.com/khwarizm",
        linkedin: "https://linkedin.com/company/khwarizm",
        github: "https://github.com/khwarizm",
    },

    url: "https://khwarizm.dev",
    copyright: "جميع الحقوق محفوظة",
} as const;

export type SiteConfig = typeof siteConfig;