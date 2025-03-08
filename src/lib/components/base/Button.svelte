<script lang='ts'>
	import type { MouseEventHandler } from "svelte/elements";


    interface Props {
        children: Function;
        onclick?: MouseEventHandler<HTMLButtonElement>;
        class?: string;
    }

    let { children, onclick, class: clazz = "" }: Props = $props();
</script>

<button onclick={onclick} class="border rounded-lg px-4 py-2 {clazz}">{@render children()}</button>