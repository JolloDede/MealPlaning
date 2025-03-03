<script lang="ts">
	import { deleteMenu } from '../../../stores/menu.store';
	import Arrow from '../icons/Arrow.svelte';
	import Bin from '../icons/Bin.svelte';
	import DeleteBtn from './DeleteBtn.svelte';
	import EditBtn from './EditBtn.svelte';

	interface Props {
		menu: Menu;
	}

	let { menu }: Props = $props();

	let isOpen = $state(false);
	let isHover = $state(false);

	function handleDeleteClick() {
		deleteMenu(menu.id);
	}

	function handleEditClick() {}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div
	onmouseenter={() => (isHover = true)}
	onmouseleave={() => (isHover = false)}
	class="rounded-lg border px-4 py-2"
>
	<div class="flex justify-between">
		<p class="select-none">{menu.name}</p>

		<div>
			<div class="inline {isHover ? '' : 'opacity-0'}">
				<EditBtn onclick={handleEditClick} />
				<DeleteBtn onclick={handleDeleteClick} />
			</div>

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
