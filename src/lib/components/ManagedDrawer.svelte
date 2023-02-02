<script lang="ts">
	import { page } from "$app/stores";
	import { Drawer, drawerStore, modalStore, type ModalComponent, type ModalSettings } from "@skeletonlabs/skeleton";
	import ContactMeFormModal from "./ContactMeFormModal.svelte";

    const openContactModal = (): void => {
        const modalComponent: ModalComponent = {
            ref: ContactMeFormModal,
        };
            const modalSettings: ModalSettings = {
            type: 'component',
            component: modalComponent,

        };
        modalStore.trigger(modalSettings);
    }
</script>


<Drawer>
	{#if $drawerStore.id === 'hamburger'}
        <div class="p-4">
            <button class="btn variant-filled-primary" on:click={() => openContactModal()}>Let's Talk!</button>
        </div>
        <nav class="p-4">
            <ul class="list-nav flex flex-col gap-2 items-center">
                {#each ["about-me", "skills", "projects"] as location}
                    <li class="w-full"><a on:click={drawerStore.close} class="capitalize" href="/{location}" class:bg-opacity-10={$page.route.id===`/${location}`} class:bg-primary-500={$page.route.id===`/${location}`}>{location.replace('-', ' ')}</a></li>
                {/each}
             </ul>
        </nav>
        <div class="p-4">
            
        </div>
    {/if}
</Drawer>