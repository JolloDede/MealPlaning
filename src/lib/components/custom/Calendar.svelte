<script lang="ts">
	import { GetEndOfWeek, GetStartOfWeek, SameWeek } from '$lib/utils';
	import CalendarDay from './CalendarDay.svelte';

	interface Props {
		days: Date[];
		selStartDate: Date;
		selEndDate: Date;
	}

	let { days, selStartDate = $bindable(), selEndDate = $bindable() }: Props = $props();

	let refDate: Date = $state(new Date());

	function handleClick(day: Date) {
		console.log(day);
		refDate = day;
		selStartDate = GetStartOfWeek(day);
		selEndDate = GetEndOfWeek(day);
	}
</script>

<div id="cal" class="mx-auto grid w-fit select-none grid-cols-7 text-center">
	<p>Mo</p>
	<p>Di</p>
	<p>Mi</p>
	<p>Do</p>
	<p>Fr</p>
	<p>Sa</p>
	<p>So</p>

	{#each days as day}
		<CalendarDay
			{day}
			onclick={handleClick}
			currentMonth={day.getMonth() == refDate.getMonth()}
			selected={SameWeek(selStartDate, day)}
			selStart={selStartDate.getMonth() == day.getMonth() && selStartDate.getDate() == day.getDate()}
			selEnd={selEndDate.getMonth() == day.getMonth() && selEndDate.getDate() == day.getDate()}
		/>
	{/each}
</div>

<style>
	#cal > * {
		padding: 4px;
	}

	#cal p {
		text-align: center;
	}
</style>
