<script lang="ts">
	interface Props {
		children: Function;
		isOpen: boolean;
		onClose?: Function;
	}

	let { children, isOpen = $bindable(), onClose }: Props = $props();

	function handleMouseLeave() {
		isOpen = false;
		if (onClose) {
			onClose();
		}
	}
</script>

{#if isOpen}
	<!-- svelte-ignore a11y_no_static_element_interactions -->
	<div
		onmouseleave={handleMouseLeave}
		class="absolute w-28 -translate-x-[100px] -translate-y-7 border rounded-lg bg-gray-300 p-2"
	>
		<div class="flex flex-col space-y-1">
			{@render children()}
		</div>
	</div>
{/if}
