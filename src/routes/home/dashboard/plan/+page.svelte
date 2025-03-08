<script lang="ts">
	import { getMonday } from '$lib/utils';
	import { v4 as uuid } from 'uuid';
	import { addPlanEntry, plans } from '../../../../stores/plan.store.svelte';
	import { menus } from '../../../../stores/menu.store';
	import PlanC from '$lib/components/custom/PlanC.svelte';
	import type { Time } from '../../../../type';
	import Dot from '$lib/components/icons/Dot.svelte';
	import DotMenu from '$lib/components/custom/DotMenu.svelte';

	let isOpen = $state(false);
	let planList: Plan[] = $state([]);

	plans.subscribe((p) => {
		planList = p;
	});

	function handleClick() {
		let d = getMonday(new Date());
		for (let i = 0; i < 7; i++) {
			for (let j = 0; j < 3; j++) {
				let menuId = Math.floor(Math.random() * $menus.length);
				addPlanEntry({
					id: uuid(),
					date: new Date(d),
					time: j as Time,
					menu: $menus[menuId].id
				});
			}
			d.setDate(d.getDate() + 1);
		}
	}
</script>

<div class="mx-auto flex w-4/5 flex-col">
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div class="mb-2 flex justify-between" onmouseleave={() => (isOpen = false)}>
		<span></span>
		<div>
			<div>
				<button onclick={() => (isOpen = !isOpen)} class="w-4">
					<Dot />
				</button>
			</div>

			<DotMenu bind:isOpen>
				<button
					onclick={handleClick}
					class="rounded-lg border bg-blue-600 px-4 py-2 hover:bg-blue-500"
				>
					Generate Random for a Week
				</button>
			</DotMenu>
		</div>
	</div>
	<hr />

	<div>
		{#each planList as plan}
			<PlanC {plan} />
			<hr />
		{/each}
	</div>
</div>
