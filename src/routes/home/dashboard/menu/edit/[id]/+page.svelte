<script lang="ts">
	import Menu from '$lib/components/custom/Menu.svelte';
	import MenuEdit from '$lib/components/custom/MenuEdit.svelte';
	import { getMenu, updateMenu } from '../../../../../../stores/menu.store';
	import type { PageProps } from './$types';

	let { data }: PageProps = $props();

	let menu = getMenu(data.id);

	let title = $state(menu.name);
	let ingredients = $state(menu.ingredients);

	function handleSaveClick() {
		updateMenu({ id: menu.id, name: title, ingredients: ingredients });
		history.back();
	}
</script>

<MenuEdit bind:title bind:ingredients {handleSaveClick} />
