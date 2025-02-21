<script lang="ts">
	import NavItem from './NavItem.svelte';

	// let { isOpen = $bindable() } = $props();
</script>

<!-- <div class="h-full"> -->
<div class="ml-4 mr-2 mt-4">
	<ul class="space-y-2 text-2xl">
		<NavItem text="Home" path="/home" />

		<NavItem text="Dashboard" path="/home/dashboard">
			<ul class="ml-4 text-xl">
				<NavItem path="/home/dashboard/menu" text="Menueübersicht" />
				<NavItem path="/home/dashboard/marco" text="Macro diagramme" />
			</ul>
		</NavItem>

		<NavItem text="Calendar" path="/home/calendar" />
	</ul>
</div>
<!-- </div> -->
