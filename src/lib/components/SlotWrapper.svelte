<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

    let mounted: boolean = false;
    onMount(() => mounted = true);
</script>


<div class="page">
    {#if mounted}
        {#if $page.route.id!=="/"}
            <h1 class="capitalize" in:fade>{$page.route.id?.substring(1).replace('-', ' ')}</h1>
            <hr class="my-8" in:fade>
        {/if}
        <slot />
    {/if}
</div>

