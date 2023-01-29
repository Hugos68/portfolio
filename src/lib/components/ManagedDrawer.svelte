<script lang="ts">
	import { page } from "$app/stores";
	import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
</script>


<Drawer>
	{#if $drawerStore.id === 'hamburger'}
        <div>

        </div>
        <nav>
            <ul class="list-nav flex flex-col gap-2 items-center">
                {#each ["about-me", "skills", "projects"] as location}
                    <li class="w-full"><a on:click={drawerStore.close} class="capitalize" href="/{location}" class:bg-opacity-10={$page.route.id===`/${location}`} class:bg-primary-500={$page.route.id===`/${location}`}>{location.replace('-', ' ')}</a></li>
                {/each}
             </ul>
        </nav>
        <div>
            
        </div>
    {/if}
</Drawer>