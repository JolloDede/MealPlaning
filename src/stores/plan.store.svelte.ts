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