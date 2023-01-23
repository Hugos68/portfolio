<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { fly } from "svelte/transition";
    const projects = [   
        {
            title: "Subjective",
            codeLink : "https://github.com/Hugos68/Subjective-2",
            demoLink : "https://subjective.vercel.app/home",
            bgImageSrc : "subjective.png",
            bgImageAlt : "subjective-landing-page"
        },
        {
            title: "Blugo",
            codeLink : "https://github.com/Hugos68/blugo",
            demoLink : "https://blugo.vercel.app/home",
            bgImageSrc : "blugo.png",
            bgImageAlt : "blugo-landing-page"
        },
        {
            title: "Portfolio",
            codeLink : "https://github.com/Hugos68/portfolio",
            demoLink : "https://portfolio.vercel.app/",
            bgImageSrc : "portfolio.png",
            bgImageAlt : "portfolio-landing-page"
        },
    ];
</script>
<div class="grid mt-10 grid-cols-3 grid-flow-row gap-10">
    {#each projects as project, i}
        <div in:fly={{delay: 50 * i, y: 50}}>
            <ProjectCard 
                title={project.title}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                bgImageSrc={project.bgImageSrc}
                bgImageAlt={project.bgImageAlt}
            />
        </div>
    {/each}
</div>