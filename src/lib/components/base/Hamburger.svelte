<script lang="ts">
	let { isOpen = $bindable() } = $props();
</script>

{#snippet item(anim: string)}
	<span class="block h-1 w-6 rounded-sm bg-slate-500 transition-all duration-300 ease-out {anim}"
	></span>
{/snippet}

<button onclick={() => (isOpen = !isOpen)} class="h-1/6">
	<div class="flex flex-col items-center justify-center">
		{@render item(isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5')}
		{@render item(isOpen ? 'opacity-0' : 'opacity-100')}
		{@render item(isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5')}
	</div>
</button>
