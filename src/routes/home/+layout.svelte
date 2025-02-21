<script>
	import { afterNavigate } from '$app/navigation';
	import Hamburger from '$lib/components/Hamburger.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let isOpen = $state(false);

	let { children } = $props();

	afterNavigate(() => {
		isOpen = false;
	});
</script>

<div class="h-screen">
	<div class="ham">
		<div class="px-2">
			<Hamburger bind:isOpen />
		</div>
	</div>

	<div
		class="pos absolute left-0 h-5/6 w-4/5 bg-slate-300 transition-all duration-300 {isOpen
			? ''
			: '-translate-x-full'}"
	>
		<Navbar />
	</div>
	
	{@render children()}
</div>



<style>
	.pos {
		top: calc(100% / 12);
		height: calc(100% / 12 * 11);
	}
	.ham {
		height: calc(100% / 12);
	}
</style>
