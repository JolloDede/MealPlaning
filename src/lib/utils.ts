
export function getDayDisplay(d: Date): string {
    let today = new Date();

    if (d.toDateString() == today.toDateString()) {
        return 'Today';
    } else if (
        new Date(d.getFullYear(), d.getMonth(), d.getDate()).toDateString() ==
        new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1).toDateString()
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