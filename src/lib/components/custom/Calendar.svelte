<script lang='ts'>
	import { GetCalendarMonth, SameDate, SameWeek } from "$lib/utils";
	import CalendarDay from "./CalendarDay.svelte";
    let today = new Date();

    let days = GetCalendarMonth(today);
</script>

<div class="grid grid-cols-7 gap-2 select-none text-right mx-auto w-fit">
    <p>Mo</p>
    <p>Di</p>
    <p>Mi</p>
    <p>Do</p>
    <p>Fr</p>
    <p>Sa</p>
    <p>So</p>

    {#each days as day}
        <CalendarDay currentMonth={day.getMonth() == today.getMonth()} selected={SameWeek(today, day)} selStart={today.getDate() - today.getDay() + 1 == day.getDate()} selEnd={today.getDate() + 7 - today.getDay() == day.getDate()}>
            <p>{day.getDate()}</p>
        </CalendarDay>
    {/each}
</div>