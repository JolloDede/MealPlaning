<script lang="ts">
	let { isOpen = $bindable() } = $props();

	let itemClass = 'w-6 h-1 bg-slate-500 rounded-sm transition-all ease-out duration-300 block';
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<button onclick={() => isOpen = !isOpen}>
	<div class="flex flex-col items-center justify-center">
		<span class="{itemClass} {isOpen ? 'translate-y-1 rotate-45' : '-translate-y-0.5'}"></span>
		<span class="{itemClass} {isOpen ? 'opacity-0' : 'opacity-100'}"></span>
		<span class="{itemClass} {isOpen ? '-translate-y-1 -rotate-45' : 'translate-y-0.5'}"></span>
	</div>
</button>
