import { type Writable, writable } from "svelte/store";
import type { Menu } from "../type";
import { browser } from "$app/environment";
import { json } from "@sveltejs/kit";
import { LOCAL_KEY } from "../consts";

const MENU_KEY = LOCAL_KEY + "menus";

let initialMenus: Menu[] = [];

if (browser) {
    let menustr = localStorage.getItem(MENU_KEY);
    if (menustr) {
        initialMenus = JSON.parse(menustr);
    }
}

export const menus: Writable<Menu[]> = writable(initialMenus);

if (browser) {
    menus.subscribe((m) => {
        localStorage.setItem(MENU_KEY, JSON.stringify(m));
    });
}

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