<script lang="ts">
	import ContactMeForm from "$lib/components/ContactMeFormModal.svelte";
	import { modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import { fade, fly } from "svelte/transition";
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
        "thinking outside the box"
    ];

    let sentenceIndex: number = 0;
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
    let blinkingCursor: HTMLElement;
</script>

<div class="h-full flex flex-col items-center justify-evenly">
    <div class="relative">  
        <div class="absolute w-full h-full border border-current top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] skew-x-[-5deg] skew-y-[-5deg] scale-[135%]" in:fade={{delay: 250, duration: 1000, easing: cubicOut}}></div>
        <p class="unstyled text-[clamp(2.75rem,10vw,5rem)]" in:fly={{duration: 1000, x: 100, easing: cubicOut}}>Hugo Korte</p>
        <p class="unstyled text-[clamp(1rem,5vw,3rem)]" in:fly={{delay: 100, duration: 1000, x: 100, easing: cubicOut}}>
            I am a Software Developer.
        </p>
    </div>
    <p class="px-0 flex" in:fly={{delay: 750, duration: 1000, easing: cubicOut}}>
        I love&nbsp;
        {#key sentenceIndex}
            <strong
                in:typewriter={{delay: 850}}
                out:typewriter|local={{speed: 2.5}}
                on:outrostart="{() => blinkingCursor.classList.remove('blink')}"

                on:introend="{() => {
                    blinkingCursor.classList.add('blink');
                    setTimeout(() => sentenceIndex = (sentenceIndex + 1) % personalitySentences.length, 2500);
                }}"
            >{personalitySentences[sentenceIndex] + "."}</strong>
        {/key}
        <span class="block" bind:this={blinkingCursor}>|</span>
    </p>
    <div class="w-min flex gap-[7.5vw]" in:fly={{delay: 300, duration: 1000, y: 100, easing: cubicOut}}>
        <button class="btn lg:btn-lg variant-filled-primary" on:click={() => openContactModal()}>Let's Talk!</button>
        <a class="btn lg:btn-lg variant-filled-secondary" href="Hugo_Korte_Resume_2023-25-1.pdf" download="Hugo_Korte_Resume_2023-25-1">Résumé</a>
    </div>
</div>




