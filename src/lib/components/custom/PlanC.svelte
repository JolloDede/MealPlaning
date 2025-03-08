<script lang="ts">
	import { goto } from '$app/navigation';
	import { getMenu, menus } from '../../../stores/menu.store';
	import { changeMenu, deletePlan } from '../../../stores/plan.store.svelte';
	import { Time } from '../../../type';
	import Button from '../base/Button.svelte';
	import Dot from '../icons/Dot.svelte';

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
	}

	function handleDeleteClick() {
		isEdit = false;
		deletePlan(plan.id);
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
			{getMenu(plan.menu).name}
		{/if}
	</div>

	<div class="">
		<div class="my-auto w-4 rounded-full hover:bg-gray-200">
			<button onclick={() => (isOpen = !isOpen)} class="w-4 py-1">
				<Dot />
			</button>
		</div>

		{#if isOpen}
			<!-- svelte-ignore a11y_no_static_element_interactions -->
			<!-- svelte-ignore a11y_mouse_events_have_key_events -->
			<div
				onmouseleave={() => {
					isOpen = false;
					isEdit = false;
				}}
				class="absolute w-28 -translate-x-28 -translate-y-7 border bg-gray-300 p-2"
			>
				<div class="flex flex-col space-y-1">
					<Button
						onclick={() => {
							isEdit = !isEdit;
							isOpen = !isOpen;
						}}>Edit</Button
					>
					<Button onclick={handleDeleteClick}>Remove</Button>
				</div>
			</div>
		{/if}
	</div>
</div>
