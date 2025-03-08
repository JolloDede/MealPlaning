
export function getDayDisplay(d: Date): string {
    let today = new Date();

    if (SameDate(d, today)) {
        return 'Today';
    } else if (
        SameDate(new Date(d.getFullYear(), d.getMonth(), d.getDate()), new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1))
    ) {
        return 'Tomorrow';
    } else {
        switch (d.getDay()) {
            case 1:
                return 'Monday';
                break;
            case 2:
                return 'Thuesday';
                break;
            case 3:
                return 'Wendnesday';
                break;
            case 4:
                return 'Thursday';
                break;
            case 5:
                return 'Friday';
                break;
            case 6:
                return 'Saturday';
                break;
            case 0:
                return 'Sunday';
                break;

            default:
                return 'Error';
        }
    }
}

export function getMonday(d: Date): Date {
    let day = d.getDay();
    let diff = d.getDate() - day + (day == 0 ? -6 : 1);
    return new Date(d.setDate(diff))
}

export function JsonDateToDate(key: string, value: string): Date | string {
    if (key == "date") {
        return new Date(value);
    }
    return value;
}

export function SameDate(d1: Date, d2: Date) {
    if (d1.toDateString() == d2.toDateString()) {
        return true;
    } else {
        return false;
    }
}

export function GetCalendarMonth(day: Date) {
    let startOfMonth = new Date(day.getFullYear(), day.getMonth(), 1);
    let endOfMonth = new Date(day.getFullYear(), day.getMonth() + 1, 0);
    let weekStartofMonth = new Date(
        startOfMonth.setDate(1 + (startOfMonth.getDay() == 0 ? -6 : -startOfMonth.getDay() + 1))
    );
    let weekEndofMonth = new Date(endOfMonth.setDate(endOfMonth.getDate() + 8 - endOfMonth.getDay()));

    let days: Date[] = [];

    while (weekStartofMonth.getTime() < weekEndofMonth.getTime()) {
        days.push(new Date(weekStartofMonth.getTime()));
        weekStartofMonth.setDate(weekStartofMonth.getDate() + 1);
    }

    return days;
}

export function SameWeek(d1: Date, d2: Date): boolean {
    if (d1.getFullYear() == d2.getFullYear() && d1.getMonth() == d2.getMonth()) {
        let add = d1.getDay() == 0 ? 0 : 7 - d1.getDay();
        let sub = d1.getDay() == 0 ? 6 : d1.getDay() - 1;
        if (d1.getDate() + add >= d2.getDate() && d1.getDate() - sub <= d2.getDate()) {
            return true;
        }
    }
    return false;
}