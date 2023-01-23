<script lang="ts">
	import { onMount } from "svelte";

    let mounted: boolean = false;
    onMount(() => mounted = true);
</script>


<div class="page">
    {#if mounted}
        <slot />
    {/if}
</div>

