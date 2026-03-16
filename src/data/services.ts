export interface Service {
    id: string;
    title: string;
    description: string;
    label?: string;
}

export const services: Service[] = [
    {
        id: "ui-ux",
        title: "تصميم تجربة وواجهة المستخدم",
        description:
            "نصمم واجهات وتجارب رقمية واضحة، جميلة، وسهلة الاستخدام تخدم المستخدم وتدعم أهداف العمل.",
        label: "UX / UI",
    },
    {
        id: "web-dev",
        title: "تطوير المواقع",
        description:
            "نبني مواقع سريعة، متجاوبة، ومهيأة لمحركات البحث لتقدم حضورًا رقميًا احترافيًا.",
        label: "Web",
    },
    {
        id: "app-dev",
        title: "تطوير التطبيقات",
        description:
            "نطوّر تطبيقات موبايل أصلية وهجينة بتجربة سلسة وأداء موثوق على مختلف المنصات.",
        label: "Mobile",
    },
    {
        id: "custom-systems",
        title: "الأنظمة المخصصة",
        description:
            "نطوّر أنظمة ولوحات تحكم مصممة حسب احتياج العمل لتسهيل الإدارة ورفع الكفاءة.",
        label: "Enterprise",
    },
    {
        id: "product-strategy",
        title: "استراتيجية المنتجات الرقمية",
        description:
            "نحوّل الفكرة إلى مسار واضح يبدأ من فهم السوق وينتهي بخطة عملية لبناء المنتج.",
        label: "Strategy",
    },
    {
        id: "digital-branding",
        title: "تجربة العلامة الرقمية",
        description:
            "نبني حضورًا رقميًا متكاملًا يعكس هوية العلامة من الشعار إلى النظام البصري الكامل.",
        label: "Branding",
    },
];