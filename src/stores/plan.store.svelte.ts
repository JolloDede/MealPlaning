import { writable, type Writable } from "svelte/store";
import type { Plan } from "../type";

export const plan: Writable<Plan[]> = writable([]);

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