<script lang="ts">
	import { goto } from '$app/navigation';
	import { getMenu, menus } from '../../../stores/menu.store';
	import { changeMenu } from '../../../stores/plan.store.svelte';
	import { Time } from '../../../type';
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
			<select bind:value={menuId} class="py-2 px-2 rounded-lg" onchange={handleChangeMenu}>
				{#each $menus as menu}
					<option value={menu.id}>{menu.name}</option>
				{/each}
			</select>
		{:else}
			{getMenu(plan.menu).name}
		{/if}
	</div>

	<div class="">
		<div class="my-auto w-4 rounded-full py-1 hover:bg-gray-200">
			<button onclick={() => (isOpen = !isOpen)} class="w-4">
				<Dot />
			</button>
		</div>

		{#if isOpen}
			<div class="absolute right-10 -translate-y-7 border bg-red-500 p-2">
				<button
					onclick={() => {
						isEdit = !isEdit;
						isOpen = !isOpen;
					}}
					class="border px-4 py-2">Edit</button
				>
			</div>
		{/if}
	</div>
</div>
