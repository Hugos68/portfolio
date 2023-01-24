<script lang="ts">
	import { modalStore, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";

    export let email: string;
    export let message: string;
    
    const submitContactMeForm = () => {
        modalStore.close();
        const toastSettings: ToastSettings = {
            message: 'Success! Looking forward to work with you!',
            preset: 'success',
            autohide: true,
            timeout: 5000,
        };
        toastStore.trigger(toastSettings);
    }
    const closeContactMeForm = () => {
        modalStore.close();
    }
</script>

<form on:submit|preventDefault={submitContactMeForm} class="flex flex-col gap-4">
    <label for="email">
        <span>Email:</span>
        <input id="email" type="email" placeholder="Email that I can contact you through..." required bind:value={email}>
    </label>
    <label for="message">
        <span>Short Message:</span>
        <textarea id="message" contenteditable required placeholder="Tell me who you are and what you are looking for..." bind:textContent={message}></textarea>
    </label>
    <p class="text-sm text-center opacity-75">Note: A response could take me upto 24-48 hours</p>
    <div class="flex justify-evenly mt-4">
        <button class="btn btn-ghost" on:click={closeContactMeForm}>Cancel</button>
        <button class="btn btn-filled-primary" type="submit">Submit</button>
    </div>
</form>

