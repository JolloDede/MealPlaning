import { writable, type Writable } from "svelte/store";
import { LOCAL_KEY } from "../consts";
import { browser } from "$app/environment";
import { JsonDateToDate, SameDate } from "$lib/utils";
import { menus } from "./menu.store";

const PLAN_KEY = LOCAL_KEY + "plans";

let initialPlans: Plan[] = [];

if (browser) {
    let menustr = localStorage.getItem(PLAN_KEY);
    if (menustr) {
        initialPlans = JSON.parse(menustr, JsonDateToDate);
    }
}

export const plans: Writable<Plan[]> = writable(initialPlans);

if (browser) {
    plans.subscribe((p) => {
        localStorage.setItem(PLAN_KEY, JSON.stringify(p));
    });
}

export function addPlanEntry(newPlan: Plan) {
    plans.update((items) => {
        if (items.findIndex((item) => SameDate(item.date, newPlan.date) && item.time == newPlan.time) < 0) {
            items.push(newPlan);
        }
        return items;
    })
}

export function getPlanForDate(d: Date): Plan[] {
    let ps: Plan[] = [];

    plans.subscribe((p) => {
        ps = p.filter((plan) => SameDate(plan.date, d));
    });

    return ps;
}

export function getCurrentPlans(): Plan[] {
    let ps: Plan[] = [];

    plans.subscribe((pArr) => {
        ps = pArr.filter((p) => SameDate(p.date, new Date()) || p.date.getTime() >= Date.now())
    });

    return ps;
}

export function getPlan(id: string): Plan {
    let ps: Plan[] = [];

    plans.subscribe((p) => {
        ps = p.filter((plan) => plan.id == id);
    });

    if (ps.length > 0) {
        return ps[0];
    } else {
        throw new Error("The Plan list doenst have the requested Plan!");
    }
}


export function deleteMenu(id: string) {
    plans.update((items) => {
        return items.filter((item) => {
            if (item.id == id) {
                item.menu = "";
            }
            return item;
        });
    })
}

export function changeMenu(id: string, newMenuId: string) {
    plans.update((items) => {
        return items.map((plan) => {
            if (plan.id == id) {
                plan.menu = newMenuId;
            }
            return plan;
        });
    })
}

export function GetAllIngredients(startDate: Date, endDate: Date): string[] {
    let menuIds: string[] = [];

    plans.subscribe((items) => {
        menuIds = items.filter((item) => item.date.getDate() >= startDate.getDate() && item.date.getDate() <= endDate.getDate()).map((item) => item.menu);
    });

    let ing: string[] = [];

    menus.subscribe((items) => {
        menuIds.map((id) => {
            ing = [...ing, ...items.filter((item) => item.id == id).flatMap((item) => item.ingredients)];
        })
    });

    return ing;
}