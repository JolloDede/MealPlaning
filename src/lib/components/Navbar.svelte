<script lang="ts">
	import Hamburger from './Hamburger.svelte';
	import NavItem from './NavItem.svelte';

	let { isOpen = $bindable() } = $props();
</script>

<div
	class="absolute left-0 h-full w-4/5 bg-slate-300 bg-opacity-80 transition-all duration-300 {isOpen
		? ''
		: '-translate-x-full'}"
>
	<div class="ml-4 mt-4 mr-2">
		<ul class="text-2xl space-y-2">
			<NavItem text="Home" path="/home" />

			<NavItem text="Dashboard" path="/dashboard">
				<ul class="text-xl ml-4">
					<NavItem path="/dashboard/menue" text="Menueübersicht" />
					<NavItem path="/dashboard/marco" text="Macro diagramme" />
				</ul>
			</NavItem>

			<NavItem text="Calendar" path="/calendar" />
		</ul>
	</div>
</div>
