<script lang="ts">
	import ContactMeForm from "$lib/components/ContactMeForm.svelte";
	import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import { fly } from "svelte/transition";

    const roles: string[] = [
        "Developer",
        "Tech Enthusiast",
        "IT Student"
    ]
    const randomRole: string = roles[Math.floor(Math.random()*roles.length)];
    
    const openContactModal = (): void => {
        const modalComponent: ModalComponent = {
            ref:  ContactMeForm,
        };
            const modalSettings: ModalSettings = {
            type: 'component',
            component: modalComponent,
            title: 'Contact Me',
            body: 'Please fill in the form.',
        };
        modalStore.trigger(modalSettings);
    }
</script>


<p class="mt-[5vh] text-center" in:fly={{duration: 1000, y: -100}}>Hi my name is</p>
<h1 class="text-center text-[clamp(2.75rem,15vw,10rem)] leading-tight" in:fly={{delay: 500, duration: 1000, x: 100}}>Hugo Korte</h1>
<p class="text-center"  in:fly={{delay: 1000, duration: 1000, y: 100}}>I am a</p>
<h1 class="text-center text-[clamp(2.75rem,15vw,10rem)] leading-tight" in:fly={{delay: 1500, duration: 1000, x: -100}}>{randomRole}.</h1>
<div class="w-min mx-auto flex gap-12 mt-[7.5vh]" in:fly={{delay: 2000, duration: 1000, y: 100}}>
    <button class="btn btn-lg btn-filled" on:click={() => openContactModal()}>Hire Me</button>
    <button class="btn btn-lg btn-filled">Resume</button>
</div>



