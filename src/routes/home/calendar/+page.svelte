<script lang="ts">
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
	<div class="grid grid-cols-7 gap-2 select-none text-right mx-auto w-fit">
        <p>Mo</p>
        <p>Di</p>
        <p>Mi</p>
        <p>Do</p>
        <p>Fr</p>
        <p>Sa</p>
        <p>So</p>

		{#each days as day}
			<div class="{day.getMonth() == today.getMonth() ? "": "text-gray-500"}">
				<p>{day.getDate()}</p>
			</div>
		{/each}
	</div>
</div>
