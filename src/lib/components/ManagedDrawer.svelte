<script lang="ts">
	import { page } from "$app/stores";
	import { Drawer, drawerStore } from "@skeletonlabs/skeleton";
</script>


<Drawer>
	{#if $drawerStore.id === 'hamburger'}
        <nav>
            <ul class="list-nav flex gap-2 items-center">
                <li><a href="/about" class:bg-opacity-10={$page.route.id==="/about"} class:bg-primary-500={$page.route.id==="/about"}>About Me</a></li>
                <li><a href="/skills" class:bg-opacity-10={$page.route.id==="/skills"} class:bg-primary-500={$page.route.id==="/skills"}>Skills</a></li>
                <li><a href="/projects" class:bg-opacity-10={$page.route.id==="/projects"} class:bg-primary-500={$page.route.id==="/projects"}>Projects</a></li>
            </ul>
        </nav>
    {/if}
</Drawer>