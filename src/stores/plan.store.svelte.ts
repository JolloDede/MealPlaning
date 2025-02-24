import { writable, type Writable } from "svelte/store";
import type { Plan } from "../type";
import { LOCAL_KEY } from "../consts";
import { browser } from "$app/environment";

const PLAN_KEY = LOCAL_KEY + "plans";

let initialPlans: Plan[] = [];

if (browser) {
    let menustr = localStorage.getItem(PLAN_KEY);
    if (menustr) {
        initialPlans = JSON.parse(menustr);
    }
}

export const plan: Writable<Plan[]> = writable(initialPlans);

if (browser) {
    plan.subscribe((p) => {
        localStorage.setItem(PLAN_KEY, JSON.stringify(p));
    });
}

export function addPlanEntry(newPlan: Plan) {
    plan.update((items) => {
        items.push(newPlan);
        return items;
    })
}

export function getPlanForDate(d: Date): Plan[] {
    let plans: Plan[] = [];

    plan.subscribe((p) => {
        plans = p.filter((plan) => plan.date.toDateString() == d.toDateString());
    });

    return plans;
}