<script lang="ts">
	import ContactMeForm from "$lib/components/ContactMeForm.svelte";
	import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import { fly } from "svelte/transition";
    import { cubicOut } from "svelte/easing";
    
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


<p class="mt-[5vh] text-center" in:fly={{duration: 1000, y: -100, easing: cubicOut}}>Hi my name is</p>
<h1 class="unstyled text-center text-[clamp(2.75rem,12.5vw,10rem)] leading-normal" in:fly={{delay: 500, duration: 1000, x: 100, easing: cubicOut}}>Hugo Korte</h1>
<p class="text-center"  in:fly={{delay: 1000, duration: 1000, y: 100, easing: cubicOut}}>I am a</p>
<h1 class="unstyled text-center text-[clamp(2rem,7.5vw,10rem)] leading-normal" in:fly={{delay: 1500, duration: 1000, x: -100, easing: cubicOut}}>Full-Stack Developer.</h1>
<div class="w-min mx-auto flex gap-12 mt-[7.5vh]" in:fly={{delay: 2000, duration: 1000, y: 100, easing: cubicOut}}>
    <button class="btn btn-lg variant-filled" on:click={() => openContactModal()}>Lets Talk!</button>
    <a href="Hugo_Korte_Resume_2023-25-1.pdf" download="Hugo_Korte_Resume_2023-25-1" class="btn btn-lg variant-filled">Resume</a>
</div>



