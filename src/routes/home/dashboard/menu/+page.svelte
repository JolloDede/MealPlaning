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
	let mode = $state(State.Normal);

	function handleDeleteClick() {
		mode = State.Delete;
		isOpen = false;
	}

	function handleEditModeClick() {
		mode = State.Edit;
		isOpen = false;
	}

	function handleEditClick() {
		goto("menu/edit");
	}
</script>

<div class="flex flex-col pt-2">
	<div class="flex justify-between px-4">
		<div></div>
		<div>
			<button onclick={() => (isOpen = !isOpen)} class="w-4"><Dot /></button>

			{#if isOpen}
				<div class="absolute right-4 rounded-lg bg-gray-400">
					<div class="flex flex-col px-4 py-2">
						<button onclick={handleEditModeClick} class="rounded-lg px-2 hover:bg-gray-200">Edit</button
						>
						<hr class="my-1" />
						<button onclick={handleDeleteClick} class="rounded-lg px-2 hover:bg-gray-200"
							>Delete</button
						>
					</div>
				</div>
			{/if}
		</div>
	</div>
	<hr class="mx-4 my-2" />

	<div class="flex flex-col px-2">
		{#each $menus as menu}
			{#if mode == State.Normal}
				<Menu {menu} />
			{/if}
			{#if mode == State.Delete}
				<div class="flex justify-between border rounded-lg py-2 px-4">
					<p>{menu.name}</p>
					<DeleteBtn onclick={() => deleteMenu(menu.id)} />
				</div>
			{/if}
			{#if mode == State.Edit}
			<div class="flex justify-between border rounded-lg py-2 px-4">
				<p>{menu.name}</p>
				<EditBtn onclick={handleEditClick} />
			</div>
			{/if}
		{/each}
	</div>
</div>

<div class="absolute bottom-6 right-6">
	<div class="sticky h-12 w-12 rounded-xl bg-pink-500">
		<a href="/home/dashboard/menu/new"><Plus /></a>
	</div>
</div>
