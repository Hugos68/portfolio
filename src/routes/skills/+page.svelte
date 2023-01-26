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
                    HTML, CSS, JavaScript, TypeScript, Svelte, Tailwind
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 250, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="summary">⚙️ <strong>Backend</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    Java, C#, PostgresSQL, MySQL, Node, AL, Business Central
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 500, duration: 750, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="summary">🔧 <strong>Tooling</strong></svelte:fragment>
                <svelte:fragment slot="content">
                    RestAPI, Git, Docker, Figma, Photoshop
                </svelte:fragment>
            </AccordionItem>
        </div>
</AccordionGroup>

