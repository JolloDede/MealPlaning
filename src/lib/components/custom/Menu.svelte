<script lang="ts">
	import Arrow from '../icons/Arrow.svelte';
	
	interface Props {
		menu: Menu;
	}

	let { menu }: Props = $props();

	let isOpen = $state(false);
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div class="rounded-lg border px-4 py-2">
	<div class="flex justify-between">
		<p class="select-none">{menu.name}</p>

		<div>
			<button
				onclick={() => (isOpen = !isOpen)}
				class="h-6 w-6 transition-all duration-300 {isOpen ? 'rotate-180' : ''}"
			>
				<Arrow />
			</button>
		</div>
	</div>

	<div class="pl-2 {isOpen ? '' : 'hidden'}">
		<ul>
			{#each menu.ingredients as ing}
				<li>{ing}</li>
			{/each}
		</ul>
	</div>
</div>
