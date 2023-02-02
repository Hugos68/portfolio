<script lang="ts">
	import { AccordionGroup, AccordionItem, tooltip } from "@skeletonlabs/skeleton";
	import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing"

    let frontendOpened: boolean = false;
    let backendOpened: boolean = false;
    let toolingOpened: boolean = false;

</script>


<AccordionGroup spacing='space-y-12' padding="p-8" >
        <div class="card" in:fly={{duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem bind:open={frontendOpened}>
                <svelte:fragment slot="summary">🖥️ <strong>Frontend</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    {#if frontendOpened}
                        <div class="w-full flex justify-evenly items-center" in:fly={{y: -100, duration: 250, easing: cubicOut}}>
                            <i class="devicon-html5-plain colored skills-devicon" use:tooltip={{content: "HTML"}}></i>
                            <i class="devicon-css3-plain colored skills-devicon" use:tooltip={{content: "CSS"}}></i>
                            <i class="devicon-javascript-plain colored skills-devicon" use:tooltip={{content: "JavaScript"}}></i>
                            <i class="devicon-typescript-plain colored skills-devicon" use:tooltip={{content: "TypeScript"}}></i>
                            <i class="devicon-tailwindcss-plain colored skills-devicon" use:tooltip={{content: "Tailwind"}}></i>
                            <i class="devicon-svelte-plain colored skills-devicon" use:tooltip={{content: "Svelte"}}></i>    
                        </div>
                    {/if}
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div class="card" in:fly={{delay: 75, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem bind:open={backendOpened}>
                <svelte:fragment slot="summary">⚙️ <strong>Backend</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    {#if backendOpened}
                        <div class="w-full flex justify-evenly items-center" in:fly={{y: -100, duration: 250, easing: cubicOut}}>
                            <i class="devicon-nodejs-plain colored skills-devicon" use:tooltip={{content: "Node"}}></i>
                            <i class="devicon-java-plain colored skills-devicon" use:tooltip={{content: "Java"}}></i>
                            <i class="devicon-csharp-plain colored skills-devicon" use:tooltip={{content: "C#"}}></i>
                            <i class="devicon-postgresql-plain colored skills-devicon" use:tooltip={{content: "PostgreSQL"}}></i>
                            <i class="devicon-microsoftsqlserver-plain colored skills-devicon" use:tooltip={{content: "MicrosoftSQL"}}></i>
                        </div>
                    {/if}
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div class="card" in:fly={{delay: 150, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem bind:open={toolingOpened}>
                <svelte:fragment slot="summary">🔧 <strong>Tooling</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    {#if toolingOpened}
                        <div class="w-full flex justify-evenly items-center" in:fly={{y: -100, duration: 250, easing: cubicOut}}>
                            <i class="devicon-git-plain colored skills-devicon" use:tooltip={{content: "Git"}}></i>
                            <i class="devicon-docker-plain colored skills-devicon" use:tooltip={{content: "Docker"}}></i>
                            <i class="devicon-figma-plain colored skills-devicon" use:tooltip={{content: "Figma"}}></i>
                            <i class="devicon-photoshop-plain colored skills-devicon" use:tooltip={{content: "Photoshop"}}></i>
                        </div>
                    {/if}
                </svelte:fragment>
            </AccordionItem>
        </div>
</AccordionGroup>

