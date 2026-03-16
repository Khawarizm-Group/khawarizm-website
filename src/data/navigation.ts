export interface NavItem {
    label: string;
    href: string;
}

export const navItems: NavItem[] = [
    { label: "الرئيسية", href: "#hero" },
    { label: "من نحن", href: "#about" },
    { label: "خدماتنا", href: "#services" },
    { label: "أعمالنا", href: "#featured-work" },
    { label: "تواصل معنا", href: "/contact" },
];
