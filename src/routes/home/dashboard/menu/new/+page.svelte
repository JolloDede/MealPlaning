<script lang="ts">
	import MenuEdit from '$lib/components/custom/MenuEdit.svelte';
	import { addMenu } from '../../../../../stores/menu.store';
	import { v4 as uuidv4 } from 'uuid';

	let title = $state('');
	let ingredients: string[] = $state([]);

	function handleSaveClick() {
		addMenu({ id: uuidv4(), name: title, ingredients: ingredients });

		history.back();
	}
</script>

<div>
	<MenuEdit bind:title bind:ingredients {handleSaveClick} />
</div>
