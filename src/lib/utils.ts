
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