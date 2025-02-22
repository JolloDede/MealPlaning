import { writable, type Writable } from "svelte/store";

export const menus: Writable<Menu[]> = writable([{ id: "", name: "Test Menu", ingredients: ["Banana"] }]);

export function addMenu(newMenu: Menu) {
    menus.update((items) => {
        items.push(newMenu);
        return items;
    })
}