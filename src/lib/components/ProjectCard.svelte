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

<div class="card aspect-video h-full w-full variant-glass-primary text-white">
    <button class="card relative translate-x-4 translate-y-4 hover:translate-y-[-1rem] transition-transform duration-200 flex items-center justify-center overflow-hidden group" on:click={openProjectModal}>
        <img class="shadow-xl" src="{images[0]}" alt="{alt}">
            <div class="p-4 flex justify-start items-center w-full h-[25%] absolute top-0 ease-[cubic-bezier(0.83,0,0.17,1)] bg-primary-500 bg-opacity-[80%] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                <h2 class="font-bold text-lg">{title}</h2>
            </div>
            <div class="w-full h-[25%] absolute top-[25%] delay-100 ease-[cubic-bezier(0.83,0,0.17,1)] bg-primary-500 bg-opacity-[70%] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <div class="w-full h-[25%] absolute top-[50%] delay-200 ease-[cubic-bezier(0.83,0,0.17,1)] bg-primary-500 bg-opacity-[60%] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500"></div>
            <div class="p-4 flex justify-center items-center w-full h-[25%] absolute top-[75%] delay-300 ease-[cubic-bezier(0.83,0,0.17,1)] bg-primary-500 bg-opacity-[50%] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500">
                Click to view more
            </div>
    </button>
</div> 