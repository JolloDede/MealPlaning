<script lang="ts">
	import type { Snippet } from 'svelte';
	import Arrow from './icons/Arrow.svelte';

	interface Props {
		path: string;
		text: string;
		children?: Snippet;
	}

	let { text, path, children }: Props = $props();

	let isOpen = $state(false);

    $effect(() => console.log(isOpen))
</script>

<li>
	<div class="flex flex-row">
		<a href={path} class=" font-bold hover:text-white">{text}</a>

		<button class="flex flex-grow justify-end" onclick={() => isOpen = !isOpen}>
			{#if children}
				<div class="hover:cursor-pointer w-8 transition-transform duration-300 {isOpen ? "rotate-180" : ""}">
					<Arrow />
				</div>
			{/if}
        </button>
	</div>

	{#if children && isOpen}
		<div class="">
			{@render children?.()}
		</div>
	{/if}
</li>
