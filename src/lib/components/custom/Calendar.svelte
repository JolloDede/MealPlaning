<script lang="ts">
	import { SameWeek } from '$lib/utils';
	import CalendarDay from './CalendarDay.svelte';

	interface Props {
		days: Date[];
        selStartDate: Date;
        selEndDate: Date;
	}

	let { days, selStartDate, selEndDate }: Props = $props();

	let today = new Date();
</script>

<div id="cal" class="mx-auto grid w-fit select-none grid-cols-7 text-right">
	<p>Mo</p>
	<p>Di</p>
	<p>Mi</p>
	<p>Do</p>
	<p>Fr</p>
	<p>Sa</p>
	<p>So</p>

	{#each days as day}
		<CalendarDay
			currentMonth={day.getMonth() == today.getMonth()}
			selected={SameWeek(selStartDate, day)}
			selStart={selStartDate.getDate() == day.getDate()}
			selEnd={selEndDate.getDate() == day.getDate()}
		>
			<p>{day.getDate()}</p>
		</CalendarDay>
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
