<script lang="ts">
	import ProjectCard from "$lib/components/ProjectCard.svelte";
	import { fade, fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    const projects = [   
        {
            title: "Subjective",
            description: "Subjective is a webshop to buy clothes and such, not only have I built this project but am also a stakeholder in the company",
            codeLink: "https://github.com/Hugos68/Subjective-2",
            demoLink: "https://subjective.vercel.app/home",
            images: ["subjective.png"],
            alt: "subjective-landing-page",
            techs: ["skeleton", "tailwind", "sveltekit", "node"],
        },
        {
            title: "Blugo",
            description: "Blugo is an online blog used to blog your daily activites, I've built it to practise user management and authentication.",
            codeLink: "https://github.com/Hugos68/blugo",
            demoLink: "https://blugo.vercel.app/home",
            images: ["blugo.png"],
            alt: "blugo-landing-page",
            techs: ["skeleton", "tailwind", "sveltekit", "node"],
        },
        {
            title: "Portfolio",
            description: "My portfolio is a personal project to keep track of my skills and projects and to show what I am capable of.",
            codeLink: "https://github.com/Hugos68/portfolio",
            demoLink: "https://hugokorte.vercel.app/",
            images: ["portfolio-home.png", "portfolio-skills.png", "portfolio-projects.png"],
            alt: "portfolio-landing-page",
            techs: ["skeleton", "tailwind", "sveltekit"],
        }
    ];
</script>

<div class="ml-[12.5vw] w-fit">
    <h1>Projects</h1>
    <div class="ml-[1vw] my-[2.5vh] h-0.5 md:h-1 variant-filled-secondary"></div>
</div>


<div class="flex flex-wrap gap-12 px-6 my-[10vh]">
    {#each projects as project, i}
        <div class="flex-[33rem]" in:fly={{delay: 75 * i, y: 50, duration: 750, easing: cubicOut}}>
            <ProjectCard 
                title={project.title}
                description={project.description}
                codeLink={project.codeLink}
                demoLink={project.demoLink}
                images={project.images}
                alt={project.alt}
                techs={project.techs}
            />
        </div>
    {/each}
</div>