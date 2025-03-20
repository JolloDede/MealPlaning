<script lang="ts">
	import DeleteBtn from './DeleteBtn.svelte';

	interface Props {
		index: number;
		name: string;
		handleIngRemove: (index: number) => void;
	}

	let { index, name = $bindable(), handleIngRemove }: Props = $props();

	let isEdit = $state(false);

	function handleEditClick() {
		isEdit = true;
	}
</script>

<div class="flex justify-between px-4 py-2">
	{#if isEdit}
		<!-- svelte-ignore a11y_autofocus -->
		<input autofocus bind:value={name} onfocusout={() => (isEdit = false)} class="border" type="text" />
	{:else}
		<button onclick={handleEditClick}>
			<p>{name}</p>
		</button>
	{/if}
	<span><DeleteBtn onclick={() => handleIngRemove(index)} /></span>
</div>
<hr />
