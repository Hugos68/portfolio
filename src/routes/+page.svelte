<script lang="ts">
	import ContactMeForm from "$lib/components/ContactMeFormModal.svelte";
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

        };
        modalStore.trigger(modalSettings);
    }
    const personalitySentences: string[] = [
        "solving problems",
        "drinking coffee",
        "writing code",
        "learning new things",
        "developing software",
        "playing games"
    ];

    let sentenceIndex: number = 0;
    setInterval(() => {
        if (sentenceIndex >= personalitySentences.length-1) sentenceIndex = 0;
        else sentenceIndex+=1;
    }, 6000)

    function typewriter(node: HTMLElement, { delay = 0, speed = 1 }) {
        const valid = (
            node.childNodes.length === 1 &&
            node.childNodes[0].nodeType === Node.TEXT_NODE
        );

        if (!valid) throw new Error(`This transition only works on elements with a single text node child`);
        
        const text: string = node.textContent || "";
        const duration = text.length / (speed * 0.01);

        return {
            delay,
            duration,
            tick: (t: number) => {
                const i = Math.trunc(text.length * t);
                node.textContent = text.slice(0, i);
            }
        };
    }
</script>

<div class="h-full flex flex-col items-center justify-evenly">
    <div>
        <p class="text-center" in:fly={{duration: 1000, y: -100, easing: cubicOut}}>Hi my name is</p>
        <h1 class="unstyled text-center text-[clamp(2.75rem,14vw,10rem)]" in:fly={{delay: 500, duration: 1000, x: 100, easing: cubicOut}}>Hugo Korte</h1>
        <p class="text-center" in:fly={{delay: 1000, duration: 1000, y: 100, easing: cubicOut}}>I am a</p>
        <h1 class="unstyled text-center selection:whitespace-nowrap text-[clamp(2rem,8vw,10rem)]" in:fly={{delay: 1500, duration: 1000, x: -100, easing: cubicOut}}>Software Developer.</h1>
    </div>
    <p class="whitespace-nowrap" in:fly={{delay: 2000, duration: 1000, easing: cubicOut}}>
        I love
        {#key sentenceIndex}
            <strong in:typewriter|local={{delay: 750, speed: 0.75}} out:typewriter|local={{speed: 2.5}}>{personalitySentences[sentenceIndex] + "."}</strong>
        {/key}
    </p>
    <div class="w-min flex gap-[7.5vw]" in:fly={{delay: 2000, duration: 1000, y: 100, easing: cubicOut}}>
        <button class="btn btn-lg variant-filled" on:click={() => openContactModal()}>Lets Talk!</button>
        <a class="btn btn-lg variant-filled" href="Hugo_Korte_Resume_2023-25-1.pdf" download="Hugo_Korte_Resume_2023-25-1">Resume</a>
    </div>
</div>



