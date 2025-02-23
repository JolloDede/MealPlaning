<script lang="ts">
	import { getMonday } from '$lib/utils';
	import { v4 as uuid } from 'uuid';
	import { addPlanEntry, plan } from '../../../../stores/plan.store.svelte';
	import { menus } from '../../../../stores/menu.store';
	import type { Time } from '../../../../type';

	function handleClick() {
		let d = getMonday(new Date());
		for (let i = 0; i < 7; i++) {			
			for (let j = 0; j < 3; j++) {
				let menuId = Math.floor(Math.random() * $menus.length);
				console.log(d)
				addPlanEntry({
					id: uuid(),
					date: new Date(d),
					time: j as Time,
					menu: $menus[menuId].id
				});
			}
			d.setDate(d.getDate() + 1)
		}
	}
</script>

<div>
	<button onclick={handleClick} class="rounded-lg border bg-blue-600 px-4 py-2 hover:bg-blue-500"
		>Generate Random for a Week</button
	>
</div>
