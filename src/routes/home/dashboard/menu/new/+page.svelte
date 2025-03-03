<script lang="ts">
	import { addMenu } from '../../../../../stores/menu.store';
	import { v4 as uuidv4 } from 'uuid';

	let title = $state('');
	let ingredients: string[] = $state([]);

	function handleNewIng() {
		ingredients.push('ing');
	}

	function handleSaveClick() {
		addMenu({ id: uuidv4(), name: title, ingredients: ingredients });

		handleExit();
	}

	function handleExit() {
		history.back();
	}
</script>

{#snippet ele(name: string)}
	<div class="px-4 py-2">
		{name}
	</div>
	<hr />
{/snippet}

<div>
	<div class="mx-auto w-4/5">
		<form>
			<div class="pb-20">
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
			</div>

			<div class="fixed bottom-0 left-0 w-full bg-red-500">
				<div class="flex justify-end space-x-4 p-1">
					<button onclick={handleSaveClick} class="rounded-lg bg-blue-500 px-4 py-2 hover:outline"
						>Save</button
					>
					<button onclick={handleExit} class="rounded-lg px-4 py-2 hover:outline">Cancel</button>
				</div>
			</div>
		</form>
	</div>
</div>
