<script lang="ts">
	import Bin from '../icons/Bin.svelte';

    let { onclick } = $props();
	let isHover = $state();
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<button onclick={onclick} onmouseenter={() => (isHover = true)} onmouseleave={() => (isHover = false)} class="w-4">
	<Bin color={isHover ? '#e01b24' : '#71717A'} />
</button>
