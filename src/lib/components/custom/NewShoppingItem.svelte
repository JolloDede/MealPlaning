<script lang="ts">
	import Button from '../base/Button.svelte';

	interface Props {
		showModal: boolean;
        addToList: (name: string) => void;
	}

	let { showModal = $bindable(), addToList }: Props = $props();

    let name = $state('');

	let dialog: HTMLDialogElement;

	$effect(() => {
		if (showModal == true) {
			dialog.showModal();
		}
	});

    function closeDialog() {
        showModal = false;
		dialog.close();
    }

	function handleDialogClick() {
		closeDialog();
	}

    function handleSaveClick() {
        if (name) { 
            addToList(name);
            name = '';
        }
        closeDialog();
    }
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
<dialog bind:this={dialog} onclick={handleDialogClick} class="rounded-lg">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="rounded-lg border px-4 py-2" onclick={(e) => e.stopPropagation()}>
		<h1 class="text-2xl font-bold">New Item</h1>
		<hr />

		<form>
			<div class="flex flex-col space-y-2">
				<div class="flex flex-col">
					<label for="name">Name:</label>
					<input bind:value={name} type="text" id="name" class="rounded-lg py-2 px-2" />
				</div>
				<div class="flex justify-end">
					<Button onclick={handleSaveClick} class="bg-blue-400">Save</Button>
					<Button onclick={closeDialog}>Cancel</Button>
				</div>
			</div>
		</form>
		<div></div>
	</div>
</dialog>
