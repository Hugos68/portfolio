<script lang="ts">
	import { AccordionGroup, AccordionItem } from "@skeletonlabs/skeleton";
	import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing"
</script>


<AccordionGroup spacing='space-y-12' padding="p-8">
        <div in:fly={{duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="summary">🖥️ <strong>Frontend</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    <div class="w-full flex justify-evenly items-center">
                        <i class="devicon-html5-plain colored skills-devicon"></i>
                        <i class="devicon-css3-plain colored skills-devicon"></i>
                        <i class="devicon-tailwindcss-plain colored skills-devicon"></i>
                        <i class="devicon-javascript-plain colored skills-devicon"></i>
                        <i class="devicon-typescript-plain colored skills-devicon"></i>
                        <i class="devicon-svelte-plain colored skills-devicon"></i>    
                    </div>
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 250, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="summary">⚙️ <strong>Backend</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    <div class="w-full flex justify-evenly items-center">
                        <i class="devicon-nodejs-plain colored skills-devicon"></i>
                        <i class="devicon-java-plain colored skills-devicon"></i>
                        <i class="devicon-csharp-plain colored skills-devicon"></i>
                        <i class="devicon-postgresql-plain colored skills-devicon"></i>
                        <i class="devicon-microsoftsqlserver-plain colored skills-devicon"></i>
                    </div>
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 500, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="summary">🔧 <strong>Tooling</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    <div class="w-full flex justify-evenly items-center">
                        <i class="devicon-rest-plain colored skills-devicon"></i>
                        <i class="devicon-git-plain colored skills-devicon"></i>
                        <i class="devicon-docker-plain colored skills-devicon"></i>
                        <i class="devicon-figma-plain colored skills-devicon"></i>
                        <i class="devicon-photoshop-plain colored skills-devicon"></i>
                    </div>
                </svelte:fragment>
            </AccordionItem>
        </div>
</AccordionGroup>

