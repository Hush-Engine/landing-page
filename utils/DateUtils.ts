export class DateUtils {
    private static dateFormatOptions : Intl.DateTimeFormatOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
        timeZone: "UTC"
    };

    private static ENGLISH_LOCALE = "en-US";

    static toFriendlyString(date: string | Date) : string {
        if (date instanceof Date) {
            return date.toLocaleDateString(this.ENGLISH_LOCALE, this.dateFormatOptions);
        }
        const initializedDate = new Date(date as string)
        return initializedDate.toLocaleDateString(this.ENGLISH_LOCALE, this.dateFormatOptions);
    }
}