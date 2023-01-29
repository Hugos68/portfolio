<script lang="ts">
	import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import Project from "./ProjectModal.svelte";

    export let title: string;
    export let description: string;
    export let codeLink: string;
    export let demoLink: string;
    export let bgImageSrc: string;
    export let bgImageAlt: string;
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
                bgImageSrc: bgImageSrc,
                bgImageAlt: bgImageAlt,
                techs: techs
            },
        };
        modalStore.trigger(modalSettings);
    } 
</script>

<div class="card w-full h-full aspect-video variant-glass-primary text-white">
    <button class="p-0 m-0" on:click={openProjectModal}>
        <img class="card z-[-1] translate-x-4 translate-y-4 shadow-xl hover:translate-y-0 duration-200 ease-in-out" src="{bgImageSrc}" alt="{bgImageAlt}">
    </button>
</div>