<script lang="ts">
	import Calendar from "$lib/components/custom/Calendar.svelte";
	import { GetCalendarMonth } from "$lib/utils";
	import { GetAllIngredients } from "../../../stores/plan.store.svelte";

	let today = new Date();

    let days = GetCalendarMonth(today);
	let selStartDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay() + 1);
	let selEndDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7 - today.getDay());

	let ingList = GetAllIngredients(selStartDate, selEndDate);
</script>

<div class="px-8">
	<Calendar days={days} selStartDate={selStartDate} selEndDate={selEndDate} />

	<div>
		{#each ingList as ing}
			<p>{ing}</p>
		{/each}
	</div>
</div>
