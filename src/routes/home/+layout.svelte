<script>
	import { afterNavigate } from '$app/navigation';
	import Hamburger from '$lib/components/base/Hamburger.svelte';
	import Navbar from '$lib/components/base/Navbar.svelte';

	let isOpen = $state(false);

	let { children } = $props();

	afterNavigate(() => {
		isOpen = false;
	});
</script>

<div class="max-h-screen">
	<header class="ham">
		<div class="flex flex-row px-3 py-3">
			<!-- svelte-ignore a11y_missing_content -->
			<h1 class="flex-grow"></h1>
			<Hamburger class="justify-self-end" bind:isOpen />
		</div>
		<hr class="mx-auto w-4/5" />
	</header>

	<main>
		{@render children()}
	</main>

	<!-- This has to be here else the arrows of the children display over it ! -->
	<div
		class="pos absolute left-0 h-5/6 w-full bg-slate-300 transition-all duration-300 {isOpen
			? ''
			: '-translate-x-full'}"
	>
		<Navbar />
	</div>
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
