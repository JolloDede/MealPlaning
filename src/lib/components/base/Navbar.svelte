<script lang="ts">
	import NavItem from './NavItem.svelte';

	// let { isOpen = $bindable() } = $props();
</script>

<!-- <div class="h-full"> -->
<div class="ml-4 mr-2 mt-4">
	<ul class="space-y-2 text-2xl">
		<NavItem text="Home" path="/home" />
		<hr />
		<NavItem path="/home/dashboard/plan" text="Wochenpläne" />
		<hr />
		<NavItem path="/home/dashboard/menu" text="Menus" />
		<hr />
		<NavItem text="Calendar" path="/home/calendar" />
	</ul>
</div>
<!-- </div> -->
