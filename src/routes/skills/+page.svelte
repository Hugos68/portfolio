<script>

	import { AccordionGroup, AccordionItem } from "@skeletonlabs/skeleton";
	import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing"

</script>


<AccordionGroup spacing='space-y-12' padding="p-8">
        <div in:fly={{delay: 250, duration: 1000, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="lead">🖥️ <strong>Frontend</strong></svelte:fragment>
                <svelte:fragment slot="summary">Web development and interacting with the end user.</svelte:fragment>
                <svelte:fragment slot="content">
                    HTML, CSS, JavaScript, TypeScript, Svelte, Tailwind
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 500, duration: 1000, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="lead">⚙️ <strong>Backend</strong></svelte:fragment>
                <svelte:fragment slot="summary">Business logic and Databases.</svelte:fragment>
                <svelte:fragment slot="content">
                    Java, C#, PostgresSQL, MySQL, Node, AL, Business Central
                </svelte:fragment>
            </AccordionItem>
        </div>
        <div in:fly={{delay: 750, duration: 1000, y: 250, easing: cubicOut}}>
            <AccordionItem>
                <svelte:fragment slot="lead">🔧 <strong>Tooling</strong></svelte:fragment>
                <svelte:fragment slot="summary">Tools/Concepts I am comfortable and familiar with.</svelte:fragment>
                <svelte:fragment slot="content">
                    RestAPI, Git, Docker, Figma, Photoshop
                </svelte:fragment>
            </AccordionItem>
        </div>
</AccordionGroup>

