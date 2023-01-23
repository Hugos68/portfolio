<script lang="ts">
	import { page } from "$app/stores";
	import { onMount } from "svelte";

    let mounted: boolean = false;
    onMount(() => mounted = true);
</script>


<div class="page">
    {#if mounted}
        {#if $page.route.id!=="/"}
            <h1 class="text-center capitalize">{$page.route.id?.substring(1)}</h1>
            <div class="w-full h-0.5 my-8 bg-surface-100-800-token"></div>
        {/if}
        <slot />
    {/if}
</div>

