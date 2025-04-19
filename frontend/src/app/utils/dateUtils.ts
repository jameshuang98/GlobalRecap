export function formatDate(date: Date) {
    return date.toISOString().split("T")[0];
}

export function parseDate(dateString: string) {
    const [year, month, day] = dateString.split("-").map(Number);
    return new Date(year, month - 1, day);
}

export function isValidDate(date: Date): date is Date {
    return date instanceof Date && !isNaN(date.getTime());
}