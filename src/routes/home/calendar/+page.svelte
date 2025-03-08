<script lang="ts">
	import Calendar from "$lib/components/custom/Calendar.svelte";

	let today = new Date();
	let startOfMonth = new Date(today.getFullYear(), today.getMonth(), 1);
	let endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
	let weekStartofMonth = new Date(
		startOfMonth.setDate(1 + (startOfMonth.getDay() == 0 ? -6 : -startOfMonth.getDay() + 1))
	);
	let weekEndofMonth = new Date(endOfMonth.setDate(endOfMonth.getDate() + 8 - endOfMonth.getDay()));

	let days: Date[] = [];

	while (weekStartofMonth.getTime() < weekEndofMonth.getTime()) {
		days.push(new Date(weekStartofMonth.getTime()));
		weekStartofMonth.setDate(weekStartofMonth.getDate() + 1);
	}
</script>

<div class="px-8">
	<Calendar />
</div>
