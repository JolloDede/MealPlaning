<script lang="ts">
	let search = '';
</script>

<div class="flex flex-col">
	<input class="rounded-lg border" type="text" bind:value={search} />
</div>

<div class="absolute bottom-0 right-0">
	<div class="sticky bg-red-500">
		<a href="/home/dashboard/menu/new">New Menu</a>
	</div>
</div>
