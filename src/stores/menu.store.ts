import { type Writable, writable } from "svelte/store";
import type { Menu } from "../type";

export const menus: Writable<Menu[]> = writable([{ id: "", name: "Test Menu", ingredients: ["Banana"] }]);

export function addMenu(newMenu: Menu) {
    menus.update((items) => {
        items.push(newMenu);
        return items;
    })
}

export function getMenu(id: string): Menu {
    let menu: Menu;

    menus.subscribe((m) => {
        menu = m.filter((menu) => menu.id == id)[0];
    });
    
    return menu;
}