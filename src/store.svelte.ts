import { writable, type Writable } from "svelte/store";

interface Menu {
    id: string;
    name: string;
    ingredients: string[];
}

export const menus: Writable<Menu[]> = writable([]);

export function addMenu(newMenu: Menu) {
    menus.update((items) => {
        items.push(newMenu);
        return items;
    })
}