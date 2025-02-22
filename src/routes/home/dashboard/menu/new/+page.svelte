<script lang="ts">
	import { addMenu } from '../../../../../store.svelte';
	import { v4 as uuidv4 } from 'uuid';

	let title = $state('');
	let ingredients = $state(['Ele', 'Element']);

	function handleNewIng() {
		ingredients.push('ing');
	}

	function handleSaveClick() {
		// TODO: Save
		addMenu({ id: uuidv4(), name: title, ingredients: ingredients });
		// TODO: go back to the menu overview
		handleExit();
	}

	function handleExit() {
		history.back();
	}
</script>

{#snippet ele(name: string)}
	<div>
		{name}
	</div>
	<hr />
{/snippet}

<div>
	<div class="mx-auto w-4/5">
		<form>
			<label
				>Title: <br />
				<input type="text" bind:value={title} class="mt-1 h-10 w-full rounded-lg border p-2" />
			</label>

			<div>
				<h1>Zutaten:</h1>

				<div class="rounded-xl border">
					{#each ingredients as ing}
						{@render ele(ing)}
					{/each}

					<button onclick={handleNewIng} class="w-full rounded-b-xl bg-red-500 hover:bg-red-600">
						Neues Ingredient
					</button>
				</div>
			</div>

			<div class="absolute bottom-0 left-0 w-full">
				<div class="sticky">
					<div class="flex justify-end space-x-4 p-1">
						<button class="rounded-lg bg-blue-500 px-4 py-2 hover:outline" onclick={handleSaveClick}
							>Save</button
						>
						<button onclick={handleExit} class="rounded-lg px-4 py-2 hover:outline">Cancel</button>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>
