<script>
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

    let isOpen = $state(false);
</script>

<div class="flex flex-col">
	<div class="flex items-center m-2">
		<Hamburger bind:isOpen />
	</div>
</div>

<Navbar bind:isOpen />