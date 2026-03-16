type ClassValue = string | number | boolean | undefined | null;

export function cn(...classes: ClassValue[]) {
    return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string | Date): string {
    return new Intl.DateTimeFormat("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    }).format(new Date(date));
}
