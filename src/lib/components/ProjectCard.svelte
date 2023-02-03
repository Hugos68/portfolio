<script lang="ts">
	import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import Project from "./ProjectModal.svelte";

    export let title: string;
    export let description: string;
    export let codeLink: string;
    export let demoLink: string;
    export let images: string[];
    export let alt: string;
    export let techs: string[];
    
    const openProjectModal = (): void => {
        const modalComponent: ModalComponent = {
            ref: Project,   
        };
            const modalSettings: ModalSettings = {
            type: 'component',
            component: modalComponent,
            meta: { 
                title: title,
                description: description,
                codeLink: codeLink,
                demoLink: demoLink,
                images: images,
                alt: alt,
                techs: techs
            },
        };
        modalStore.trigger(modalSettings);
    } 
</script>

<div class="card aspect-video h-full w-full variant-glass-primary text-white group">
    <button class="relative flex items-center justify-center" on:click={openProjectModal}>
        <img class="card translate-x-4 translate-y-4 shadow-xl" src="{images[0]}" alt="{alt}">
        <div class="card absolute top-4 left-4 w-full h-full bg-surface-400-500-token bg-opacity-75 scale-0 group-hover:scale-100 transition-transform duration-300"></div>
        <div class="absolute scale-0 group-hover:scale-100 transition-transform duration-300">
            <h2 >{title}</h2>
            <p>Click to view more about this project...</p>
        </div>
    </button>
</div>