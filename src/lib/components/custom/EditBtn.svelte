<script lang="ts">
	import Edit from '../icons/Edit.svelte';

    let { onclick } = $props();
	let isHover = $state();
</script>

<!-- svelte-ignore a11y_mouse_events_have_key_events -->
<button onclick={onclick} onmouseenter={() => (isHover = true)} onmouseleave={() => (isHover = false)} class="w-4">
	<Edit color={isHover ? '#0000ff' : '#71717A'} />
</button>
