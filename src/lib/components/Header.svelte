<script lang="ts">
	import { AppBar, LightSwitch } from "@skeletonlabs/skeleton";
	import { onDestroy, onMount } from "svelte";

    let main: HTMLElement | null;
    let yScroll: number = 0;
    function scrollHandler(e: any): void {
        yScroll = e.target.scrollTop;
    }
    onMount(() => {
        main = document.getElementById('page');
        if (main) main.addEventListener('scroll', scrollHandler);
    });

    onDestroy(() => {
        if (main) main.removeEventListener('scroll', scrollHandler);
    });
</script>

<AppBar shadow="{yScroll===0 ? "shadow-none" : "shadow-lg"}" background="transition-colors {yScroll===0 ? "bg-surface-50-900-token" : "bg-surface-100-800-token"}"}>
	<svelte:fragment slot="lead">
        <a href="/" class="font-semibold text-xl">Hugo Korte</a>
    </svelte:fragment>

	<svelte:fragment slot="trail">
        <nav>
            <ul class="list-nav flex gap-2 items-center">
                <li><a href="/about">About Me</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="/projects">Projects</a></li>
                <div class="h-6 w-0.5 bg-surface-600-300-token mx-2"></div>
                <li class="px-4"><LightSwitch /></li>
            </ul>
        </nav>
    </svelte:fragment>  
</AppBar>