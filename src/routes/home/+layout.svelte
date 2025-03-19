<script>
	import { afterNavigate } from '$app/navigation';
	import Hamburger from '$lib/components/base/Hamburger.svelte';
	import Navbar from '$lib/components/base/Navbar.svelte';

	let isOpen = $state(false);

	let { children } = $props();

	afterNavigate(() => {
		// isOpen = false;
	});
</script>

<div class="flex max-h-screen flex-col">
	<header class=" ham flex items-center">
		<div class="flex w-full flex-row px-3 align-middle">
			<!-- svelte-ignore a11y_missing_content -->
			<h1 class="flex-grow"></h1>
			<Hamburger class="justify-self-end align-middle" bind:isOpen />
		</div>
	</header>

	<!-- This has to be here else the arrows of the children display over it ! -->
	<div
		class="pos absolute left-0 z-50 w-full bg-slate-300 transition-all duration-300 {isOpen
			? ''
			: '-translate-x-full'}"
	>
		<Navbar />
	</div>

	<main class="overflow-y-auto mt-2">
		{@render children()}
	</main>
</div>

<style>
	.pos {
		top: calc(100vh / 12);
		height: calc(100vh / 12 * 11);
	}
	.ham {
		height: calc(100vh / 12);
	}
</style>
