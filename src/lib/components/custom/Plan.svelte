<script lang="ts">
	import { getMenu } from "../../../stores/menu.store";
	import { Time } from "../../../type";
	import Dot from "../icons/Dot.svelte";


    interface Props {
        plan: Plan;
    }

    let { plan }: Props = $props();
</script>

{#snippet time(time: Time)}
	{#if time == Time.Morning}
		<p>Morgen</p>
	{/if}
	{#if time == Time.Midday}
		<p>Mittag</p>
	{/if}
	{#if time == Time.Evening}
		<p>Abend</p>
	{/if}
{/snippet}

<div class="flex justify-between py-2">
    <div>
        <p>{plan.date.toLocaleDateString()}</p>
        {@render time(plan.time)}
    </div>

    <div>
        {getMenu(plan.menu).name}
    </div>

    <div class="w-4 my-auto py-1 hover:bg-gray-200 rounded-full">
        <Dot />
    </div>
</div>