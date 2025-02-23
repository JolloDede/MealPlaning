<script lang="ts">
	import DateItem from "$lib/components/custom/DateItem.svelte";
import { onMount } from "svelte";

    
    let days: Date[] = $state([]);

    onMount(() => {
        let d = new Date();
        for (let i = d.getDay(); i < 7; i++) {
            days.push(new Date(d));
            d.setDate(d.getDate() + 1);
        }
    })
</script>

<div class="space-y-1 px-2">
    {#each days as day}
        <DateItem date={day} />
    {/each}
</div>