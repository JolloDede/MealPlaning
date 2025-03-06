<script module>
	const State = {
		Edit: 0,
		Delete: 1,
		Normal: 2
	};
</script>

<script lang="ts">
	import Plus from '$lib/components/icons/Plus.svelte';
	import Menu from '$lib/components/custom/Menu.svelte';
	import { deleteMenu, menus } from '../../../../stores/menu.store';
	import Dot from '$lib/components/icons/Dot.svelte';
	import DeleteBtn from '$lib/components/custom/DeleteBtn.svelte';
	import EditBtn from '$lib/components/custom/EditBtn.svelte';
	import { goto } from '$app/navigation';

	let isOpen = $state(false);
</script>

<div class="flex flex-col pt-2">
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
