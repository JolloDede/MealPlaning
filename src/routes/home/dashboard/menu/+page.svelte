<script lang="ts">
	import Plus from "$lib/components/icons/Plus.svelte";
	import { menus } from "../../../../store.svelte";

	let search = '';
</script>

<div class="flex flex-col">
	<input class="rounded-lg border" type="text" bind:value={search} />

	<div class="flex">
		{#each $menus as menu}
			<p>{menu.name}</p>
		{/each}
	</div>
</div>

<div class="absolute bottom-6 right-6">
	<div class="sticky bg-pink-500 w-12 h-12 rounded-xl">
		<a href="/home/dashboard/menu/new"><Plus /></a>
	</div>
</div>
