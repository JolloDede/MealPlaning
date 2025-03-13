<script lang="ts">
	import Calendar from '$lib/components/custom/Calendar.svelte';
	import { GetCalendarMonth, GetEndOfWeek, GetStartOfWeek } from '$lib/utils';
	import { GetAllIngredients } from '../../../stores/plan.store.svelte';

	let today = new Date();

	let days = GetCalendarMonth(today);
	let selStartDate = $state(GetStartOfWeek(today));
	let selEndDate = $state(GetEndOfWeek(today));


	let ingList = $derived(GetAllIngredients(selStartDate, selEndDate));
</script>

<div class="px-8">
	<Calendar {days} bind:selStartDate bind:selEndDate />

	<div class="mx-auto w-4/5">
		<h1 class="text-xl font-bold">Postiliste</h1>
		{#each ingList as ing}
			<div>
				<input type="checkbox" id={ing} />
				<label for={ing}>
					{ing}
				</label>
			</div>
		{/each}
	</div>
</div>
