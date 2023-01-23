<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";
	import { fade, fly } from "svelte/transition";

    let mounted: boolean = false;
    onMount(() => mounted = true);
</script>


<div class="page">
    {#if mounted}
        {#if $page.route.id!=="/"}
            <h1 class="text-center capitalize" in:fade>{$page.route.id?.substring(1)}</h1>
            <div class="w-full h-0.5 my-8 bg-surface-100-800-token" in:fade></div>
        {/if}
        <slot />
    {/if}
</div>

