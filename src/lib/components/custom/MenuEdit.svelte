<script lang="ts">
	import type { MouseEventHandler } from 'svelte/elements';
	import DeleteBtn from './DeleteBtn.svelte';

	interface Props {
		title: string;
		ingredients: string[];
		handleSaveClick: MouseEventHandler<HTMLButtonElement>;
	}

	let { title = $bindable(), ingredients = $bindable(), handleSaveClick }: Props = $props();

	function handleNewIng() {
		ingredients.push('ing');
	}

	function handleCancel() {
		history.back();
	}

	function handleIngRemove(index: number) {
		ingredients = ingredients.filter((ing, idx) => index != idx);
	}
</script>

{#snippet ele(index: number, name: string)}
	<div class="flex justify-between px-4 py-2">
		<p>{name}</p>
		<span><DeleteBtn onclick={() => handleIngRemove(index)} /></span>
	</div>
	<hr />
{/snippet}

<div class="mx-auto w-4/5">
	<form>
		<div class="pb-20">
			<div>
				<label
					>Title: <br />
					<!-- svelte-ignore a11y_autofocus -->
					<input
						type="text"
						bind:value={title}
						autofocus
						class="mt-1 h-10 w-full rounded-lg border p-2"
					/>
				</label>
			</div>

			<div>
				<h1>Zutaten:</h1>

				<div class="rounded-xl border">
					{#each ingredients as ing, index}
						{@render ele(index, ing)}
					{/each}

					<button
						onclick={handleNewIng}
						class="w-full rounded-b-xl bg-red-500 hover:bg-red-600 py-2"
						type="button"
					>
						Neues Ingredient
					</button>
				</div>
			</div>
		</div>

		<div class="fixed bottom-0 left-0 w-full">
			<div class="flex justify-end space-x-4 p-1">
				<button
					onclick={handleSaveClick}
					class="rounded-lg bg-blue-500 px-4 py-2 hover:outline"
					type="submit">Save</button
				>
				<button onclick={handleCancel} class="rounded-lg px-4 py-2 hover:outline" type="reset"
					>Cancel</button
				>
			</div>
		</div>
	</form>
</div>
