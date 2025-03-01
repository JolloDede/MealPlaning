interface Menu {
    id: string;
    name: string;
    ingredients: string[];
}

interface Plan {
    id: string;
    date: Date;
    time: Time;
    menu: string; // Menu Id
}