<script lang="ts">
	import { getMenu, menus } from '../../../stores/menu.store';
	import { changeMenu, deleteMenu } from '../../../stores/plan.store.svelte';
	import { Time } from '../../../type';
	import Button from '../base/Button.svelte';
	import Dot from '../icons/Dot.svelte';
	import DotMenu from './DotMenu.svelte';

	interface Props {
		plan: Plan;
	}

	let { plan }: Props = $props();

	let menuId = $state(plan.menu);
	let isOpen = $state(false);
	let isEdit = $state(false);

	function handleChangeMenu() {
		isEdit = false;
		changeMenu(plan.id, menuId);
		menuId = '';
	}

	function handleDeleteClick() {
		isEdit = false;
		deleteMenu(plan.id);
	}
</script>

{#snippet time(time: Time)}
	{#if time == Time.Morning}
		<p>Morgen</p>
	{/if}
	{#if time == Time.Midday}
		<p>Mittag</p>
	{/if}
	{#if time == Time.Evening}
		<p>Abend</p>
	{/if}
{/snippet}

{#snippet menu(id: string)}
	{#if id}
		<p>{getMenu(plan.menu).name}</p>
	{:else}
		<p class="text-orange-300">Kein Menu ausgewählt</p>
	{/if}
{/snippet}

<div class="flex justify-between py-2">
	<div>
		<p>{plan.date.toLocaleDateString()}</p>
		{@render time(plan.time)}
	</div>

	<div>
		{#if isEdit}
			<select bind:value={menuId} class="rounded-lg px-2 py-2" onchange={handleChangeMenu}>
				{#each $menus as menu}
					<option value={menu.id}>{menu.name}</option>
				{/each}
			</select>
		{:else}
			{@render menu(plan.menu)}
		{/if}
	</div>

	<div class="">
		<div class="my-auto w-4 rounded-full hover:bg-gray-200">
			<button onclick={() => (isOpen = !isOpen)} class="w-4 py-1">
				<Dot />
			</button>
		</div>

		<DotMenu bind:isOpen>
			<Button
				onclick={() => {
					isEdit = !isEdit;
					isOpen = !isOpen;
				}}>Edit</Button
			>
			<Button onclick={handleDeleteClick}>Remove Menu</Button>
		</DotMenu>
	</div>
</div>
