import { writable, type Writable } from "svelte/store";
import { LOCAL_KEY } from "../consts";
import { browser } from "$app/environment";
import { JsonDateToDate } from "$lib/utils";

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
        items.push(newPlan);
        return items;
    })
}

export function getPlanForDate(d: Date): Plan[] {
    let ps: Plan[] = [];

    plans.subscribe((p) => {
        ps = p.filter((plan) => plan.date.toDateString() == d.toDateString());
    });

    return ps;
}

export function getCurrentPlans(): Plan[] {
    let ps: Plan[] = [];

    plans.subscribe((pArr) => {
        ps = pArr.filter((p) => p.date.toDateString() == new Date().toDateString() || p.date.getTime() >= Date.now())
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
