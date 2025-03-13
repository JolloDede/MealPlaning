<script lang="ts">
	import type { DragEventHandler } from 'svelte/elements';

	interface Props {
		day: Date;
		currentMonth: boolean;
		selected: boolean;
		selStart?: boolean;
		selEnd?: boolean;
		onclick: (day: Date) => void;
	}

	let { day, currentMonth, selected, selStart, selEnd, onclick }: Props = $props();
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<!-- svelte-ignore a11y_click_events_have_key_events -->
<div
	onclick={() => onclick(day)}
	class="{currentMonth ? '' : 'text-gray-500'}
    {selected ? 'bg-fuchsia-400' : ''}
    {selStart ? 'rounded-s-full' : ''}
    {selEnd ? 'rounded-e-full' : ''}"
>
	<div
		class="h-10 w-10 rounded-full bg-opacity-20 hover:bg-fuchsia-200 {selStart || selEnd
			? 'border border-black bg-fuchsia-900'
			: ''}"
	>
		<p>{day.getDate()}</p>
	</div>
</div>
