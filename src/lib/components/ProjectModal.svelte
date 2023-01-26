<script lang="ts">
	import { modalStore } from "@skeletonlabs/skeleton";

    const openLinkInNewTab = (href: string): void => {
        window.open(href);
    }
    $: {
        console.log($modalStore[0]);
        
    }
</script>

{#if $modalStore[0]}
    <div class="card overflow-hidden">
        <!-- Header -->
        <header>
            <img src="{$modalStore[0].meta?.bgImageSrc}" class="bg-black/50 w-full aspect-video" alt="{$modalStore[0].meta?.bgImageAlt}" />
        </header>
        <!-- Body -->
        <div class="p-4 space-y-4">
            <h3><strong>{$modalStore[0].meta?.title}</strong></h3>
            <article>
                <p>{$modalStore[0].meta?.description}</p>
            </article>
        </div>
        <hr />
        <!-- Footer -->
        <footer class="p-4 flex justify-start items-center space-x-4">
            <div class="flex-auto flex justify-between items-center">
                <a class="btn btn-sm lg:btn-lg variant-ghost-secondary p-3" href="{$modalStore[0].meta?.codeLink}" on:click|preventDefault={() => openLinkInNewTab($modalStore[0].meta?.codeLink)} >
                    <svg class="w-5 aspect-square" viewBox="0 0 512 512" fill="currentColor"><g><path class="st0" d="M256.005,0C114.611,0,0,114.611,0,255.996C0,397.39,114.611,512,256.005,512		C397.39,512,512,397.39,512,255.996C512,114.611,397.39,0,256.005,0z M187.066,203.112c0,0.366-0.157,0.689-0.436,0.916		l-72.053,53.582l72.053,53.608c0.279,0.192,0.436,0.541,0.436,0.89v33.07c0,0.41-0.201,0.776-0.532,0.968		c-0.148,0.079-0.296,0.13-0.471,0.13c-0.192,0-0.392-0.07-0.558-0.2L81.734,268.894c-0.27-0.201-0.445-0.541-0.445-0.898v-20.765		c0-0.366,0.174-0.706,0.445-0.907l103.771-77.18c0.166-0.131,0.366-0.192,0.558-0.192c0.174,0,0.323,0.044,0.471,0.13		c0.332,0.183,0.532,0.55,0.532,0.968V203.112z M238.519,360.404c-0.148,0.445-0.514,0.741-0.951,0.741h-29.006		c-0.331,0-0.628-0.175-0.82-0.472c-0.183-0.278-0.236-0.645-0.131-0.976l65.87-208.118c0.131-0.437,0.514-0.724,0.942-0.724h29.014		c0.314,0,0.628,0.166,0.811,0.454c0.183,0.288,0.236,0.654,0.131,0.994L238.519,360.404z M430.694,267.996		c0,0.357-0.156,0.698-0.436,0.898l-103.771,77.181c-0.166,0.13-0.357,0.2-0.558,0.2c-0.166,0-0.322-0.052-0.471-0.13		c-0.331-0.192-0.532-0.558-0.532-0.968v-33.062c0-0.357,0.157-0.706,0.436-0.898l72.053-53.608l-72.053-53.582		c-0.278-0.209-0.436-0.54-0.436-0.906V170.05c0-0.418,0.201-0.785,0.532-0.968c0.148-0.086,0.305-0.13,0.471-0.13		c0.201,0,0.392,0.061,0.558,0.192l103.771,77.18c0.28,0.201,0.436,0.541,0.436,0.907V267.996z"/></g></svg>
                    <span>View Code</span>
                </a>
                <a class="btn btn-sm lg:btn-lg variant-ghost-primary p-3" href="{$modalStore[0].meta?.demoLink}" on:click|preventDefault={() => openLinkInNewTab($modalStore[0].meta?.demoLink)}>
                    <svg class="w-5 aspect-square" viewBox="0 0 24 24"  fill="currentColor"  stroke="#000000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3" />  <path d="M8 21h8" />  <path d="M12 17v4" />  <path d="M17 8l5-5" />  <path d="M17 3h5v5" /></svg>                    <span>Live Demo</span>
                </a>
            </div>
        </footer>
    </div>
{/if}

