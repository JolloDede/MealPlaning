<script lang="ts">
	let title = $state('');
	let ingredients = $state(['Ele', 'Element']);

	function handleNewIng() {
		ingredients.push('ing');
	}

    function handleSaveClick() {
        // TODO: Save
        // TODO: go back to the menu overview
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

            <div>
                <button onclick={handleSaveClick}>Save</button>
                <button>Cancel</button>
            </div>
		</form>
	</div>
</div>
