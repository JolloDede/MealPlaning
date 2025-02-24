<script lang="ts">
	import { getDayDisplay } from '$lib/utils';
	import { getMenu } from '../../../stores/menu.store';
	import { getPlanForDate } from '../../../stores/plan.store.svelte';
	import { Time } from '../../../type';
	import Card from '../base/Card.svelte';
	import Arrow from '../icons/Arrow.svelte';

	interface Props {
		date: Date;
	}

	let { date }: Props = $props();

	let isOpen = $state(false);

	let day = getDayDisplay(date);
	let plans = getPlanForDate(date);
</script>

<Card class="flex flex-col">
	<div class="flex flex-row justify-between">
		<h1>{day}</h1>

		<button
			onclick={() => (isOpen = !isOpen)}
			class="w-8 duration-300 {isOpen ? 'rotate-180' : ''}"
		>
			<Arrow />
		</button>
	</div>
	<div class="pl-2 {isOpen ? '' : 'hidden'}">
		<hr class="pb-1">
		{#each plans as plan}
			<ul>
				{#if plan.time == Time.Morning}
					<li>Zmorge:</li>
				{:else if plan.time == Time.Midday}
					<li>Zmittag:</li>
				{:else if plan.time == Time.Evening}
					<li>Znacht:</li>
				{/if}
                <ul class="pl-2">
                    <li>{getMenu(plan.menu).name}</li>
                </ul>
			</ul>
		{/each}
	</div>
</Card>
