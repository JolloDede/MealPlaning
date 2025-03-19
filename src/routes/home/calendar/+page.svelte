<script lang="ts">
	import Calendar from '$lib/components/custom/Calendar.svelte';
	import DeleteBtn from '$lib/components/custom/DeleteBtn.svelte';
	import { GetCalendarMonth, GetEndOfWeek, GetStartOfWeek } from '$lib/utils';
	import { untrack } from 'svelte';
	import { GetAllIngredients } from '../../../stores/plan.store.svelte';
	import Button from '$lib/components/base/Button.svelte';
	import NewShoppingItem from '$lib/components/custom/NewShoppingItem.svelte';

	let today = new Date();

	let days = GetCalendarMonth(today);
	let selStartDate = $state(GetStartOfWeek(today));
	let selEndDate = $state(GetEndOfWeek(today));

	let shoppingList: ShoppingItem[] = $state([]);

	function handleClick(index: number) {
		shoppingList = shoppingList.filter((_, idx) => idx != index);
	}

	$effect(() => {
		let cleanedIng = untrack(() => shoppingList.filter((item) => item.isFromMenu == false));
		shoppingList = [...cleanedIng, ...GetAllIngredients(selStartDate, selEndDate)];
	});

	let showNewShoppingModal = $state(false);

	function handleNewButtonClick() {
		showNewShoppingModal = true;
	}
</script>

<div class="px-8">
	<Calendar {days} bind:selStartDate bind:selEndDate />

	<div class="mx-auto w-4/5">
		<div class="flex justify-between">
			<h1 class="text-2xl font-bold">Postiliste</h1>
			<Button class="bg-blue-500" onclick={handleNewButtonClick}>New</Button>
			<NewShoppingItem
				bind:showModal={showNewShoppingModal}
				addToList={(name) => shoppingList.push({ name: name, isFromMenu: false })}
			/>
		</div>

		{#each shoppingList as item, index}
			<div class="flex justify-between py-2">
				<div>
					<input type="checkbox" id={item.name} />
					<label for={item.name}>
						{item.name}
					</label>
				</div>
				<div>
					<DeleteBtn onclick={() => handleClick(index)} />
				</div>
			</div>
			<hr />
		{/each}
	</div>
</div>
