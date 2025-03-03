<script lang="ts">
	import Plus from '$lib/components/icons/Plus.svelte';
	import Menu from '$lib/components/custom/Menu.svelte';
	import { menus } from '../../../../stores/menu.store';

	let search = '';
</script>

<div class="flex flex-col pt-2">
	<!-- <input class="rounded-lg border" type="text" bind:value={search} /> -->

	<div class="flex flex-col px-2">
		{#each $menus as menu}
			<Menu {menu} />
		{/each}
	</div>
</div>

<div class="absolute bottom-6 right-6">
	<div class="sticky h-12 w-12 rounded-xl bg-pink-500">
		<a href="/home/dashboard/menu/new"><Plus /></a>
	</div>
</div>
