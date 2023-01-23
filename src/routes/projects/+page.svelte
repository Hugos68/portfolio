<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { fly } from "svelte/transition";
    const projects = [   
        {
            title: "Subjective",
            description: "Subjective is a webshop to buy clothes and such, not only have I built this project but am also a stakeholder in the company",
            codeLink : "https://github.com/Hugos68/Subjective-2",
            demoLink : "https://subjective.vercel.app/home",
            bgImageSrc : "subjective.png",
            bgImageAlt : "subjective-landing-page"
        },
        {
            title: "Blugo",
            description: "Blugo is an online blog used to blog your daily activites, I've built it to practise user mangament and authentication.",
            codeLink : "https://github.com/Hugos68/blugo",
            demoLink : "https://blugo.vercel.app/home",
            bgImageSrc : "blugo.png",
            bgImageAlt : "blugo-landing-page"
        },
        {
            title: "Portfolio",
            description: "My portfolio is a personal project to keep track of my skills and projects and to show what I am capable of.",
            codeLink : "https://github.com/Hugos68/portfolio",
            demoLink : "https://portfolio-hugos68.vercel.app/",
            bgImageSrc : "portfolio.png",
            bgImageAlt : "portfolio-landing-page"
        },
    ];
</script>
<div class="flex flex-wrap justify-between mt-10 gap-12">
    {#each projects as project, i}
        <div class="flex-1" in:fly={{delay: 50 * i, y: 50}}>
            <ProjectCard 
                title={project.title}
                description={project.description}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                bgImageSrc={project.bgImageSrc}
                bgImageAlt={project.bgImageAlt}
            />
        </div>
    {/each}
</div>