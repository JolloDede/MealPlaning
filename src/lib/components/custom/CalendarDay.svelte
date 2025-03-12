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
    {selected ? 'bg-fuchsia-400' : ''}
    {selStart ? 'rounded-s-full' : ''}
    {selEnd ? 'rounded-e-full' : ''}"
>
	<div class="bg-opacity-20 h-10 w-10 rounded-full hover:bg-fuchsia-200 {selStart || selEnd ? 'bg-fuchsia-900 border border-black' : ''}">
		{@render children()}
	</div>
</div>
