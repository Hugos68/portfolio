<script lang="ts">
    export let title: string;
    export let description: string;
    export let codeLink: string;
    export let demoLink: string;
    export let bgImageSrc: string;
    export let bgImageAlt: string;
</script>

<div class="card w-full h-full aspect-video card-glass-primary text-white">
    <div class="relative translate-x-4 translate-y-4 hover:translate-y-[-1rem] transition-transform duration-500 aspect-video group shadow-xl">
        <img class="card absolute group-hover:brightness-[25%] transition-all duration-500 z-[-1]" src="{bgImageSrc}" alt="{bgImageAlt}">
        <div class="opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col h-full items-center justify-evenly">
            <div class="flex flex-col">
                <p class="unstyled font-bold text-[2.5rem] text-center">{title}</p>
                <p class="unstyled max-w-[50ch] text-[0.825rem] text-center">{description}</p>
            </div>
            <div class="flex justify-evenly gap-8">
                <a class="btn btn-sm btn-ghost-secondary" href="{codeLink}">
                    <svg class="w-5 aspect-square" viewBox="0 0 512 512" fill="currentColor"><g><path class="st0" d="M256.005,0C114.611,0,0,114.611,0,255.996C0,397.39,114.611,512,256.005,512		C397.39,512,512,397.39,512,255.996C512,114.611,397.39,0,256.005,0z M187.066,203.112c0,0.366-0.157,0.689-0.436,0.916		l-72.053,53.582l72.053,53.608c0.279,0.192,0.436,0.541,0.436,0.89v33.07c0,0.41-0.201,0.776-0.532,0.968		c-0.148,0.079-0.296,0.13-0.471,0.13c-0.192,0-0.392-0.07-0.558-0.2L81.734,268.894c-0.27-0.201-0.445-0.541-0.445-0.898v-20.765		c0-0.366,0.174-0.706,0.445-0.907l103.771-77.18c0.166-0.131,0.366-0.192,0.558-0.192c0.174,0,0.323,0.044,0.471,0.13		c0.332,0.183,0.532,0.55,0.532,0.968V203.112z M238.519,360.404c-0.148,0.445-0.514,0.741-0.951,0.741h-29.006		c-0.331,0-0.628-0.175-0.82-0.472c-0.183-0.278-0.236-0.645-0.131-0.976l65.87-208.118c0.131-0.437,0.514-0.724,0.942-0.724h29.014		c0.314,0,0.628,0.166,0.811,0.454c0.183,0.288,0.236,0.654,0.131,0.994L238.519,360.404z M430.694,267.996		c0,0.357-0.156,0.698-0.436,0.898l-103.771,77.181c-0.166,0.13-0.357,0.2-0.558,0.2c-0.166,0-0.322-0.052-0.471-0.13		c-0.331-0.192-0.532-0.558-0.532-0.968v-33.062c0-0.357,0.157-0.706,0.436-0.898l72.053-53.608l-72.053-53.582		c-0.278-0.209-0.436-0.54-0.436-0.906V170.05c0-0.418,0.201-0.785,0.532-0.968c0.148-0.086,0.305-0.13,0.471-0.13		c0.201,0,0.392,0.061,0.558,0.192l103.771,77.18c0.28,0.201,0.436,0.541,0.436,0.907V267.996z"/></g></svg>
                    <span>View Code</span>
                </a>
                <a class="btn btn-sm btn-ghost-primary" href="{demoLink}">
                    <svg class="w-5 aspect-square" viewBox="0 0 24 24"  fill="currentColor"  stroke="#000000"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M13 3H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2v-3" />  <path d="M8 21h8" />  <path d="M12 17v4" />  <path d="M17 8l5-5" />  <path d="M17 3h5v5" /></svg>                    <span>Live Demo</span>
                </a>
            </div>  
        </div> 
    </div>
</div>