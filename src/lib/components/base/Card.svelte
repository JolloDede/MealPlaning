<script lang="ts">

    interface Props {
        class: string;
        children: Function;
    }

    let { class: clazz, children } = $props();
</script>

<div class="{clazz} border rounded-lg py-2 px-4">
    {@render children()}
</div>