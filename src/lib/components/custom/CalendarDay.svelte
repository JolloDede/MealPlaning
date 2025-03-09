<script lang="ts">
	interface Props {
		children: Function;
		currentMonth: boolean;
		selected: boolean;
		selStart?: boolean;
		selEnd?: boolean;
	}

	let { children, currentMonth, selected, selStart, selEnd }: Props = $props();
</script>

<div
	class="{currentMonth ? '' : 'text-gray-500'}
    {selected ? 'bg-blue-400' : ''}
    {selStart ? 'rounded-s-full' : ''}
    {selEnd ? "rounded-e-full" : ""}"
>
	{@render children()}
</div>
