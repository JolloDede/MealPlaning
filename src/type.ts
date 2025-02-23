// This is here cause in Svelte it doesnt import correctly when only used in the Html part
export enum Time {
    Morning = 0,
    Midday = 1,
    Evening = 2
}

export interface Menu {
    id: string;
    name: string;
    ingredients: string[];
}

export interface Plan {
    id: string;
    date: Date;
    time: Time;
    menu: string; // Menu Id
}