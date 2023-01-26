<script lang="ts">
	import { applyAction, enhance, type SubmitFunction } from "$app/forms";
	import { modalStore, toastStore, type ToastSettings } from "@skeletonlabs/skeleton";
	import { Result } from "postcss";

    let firstName: string, lastName: string, email: string, message: string;
    
    const submitContactMeForm: SubmitFunction = () => {
        return async ({result}) => {
            await applyAction(result);
            if (result.type==='success') {
                modalStore.close();
                const toastSettings: ToastSettings = {
                    message: 'Success! Looking forward to work with you!',
                    preset: 'success',
                    autohide: true,
                    timeout: 5000,
                };
                toastStore.trigger(toastSettings);
            }
            else {
                
            }
        }
        // TODO: Save info in database or whatever

    }
    const closeContactMeForm = () => {
        modalStore.close();
    }
</script>

<form action="/?/submitContactMeForm" method="post" class="flex flex-col gap-4" use:enhance={submitContactMeForm}>
    <div class="flex justify-between">
        <label class="input-label" for="first-name">
            <span>First Name:</span>
            <input id="first-name" type="text" name="firstName" placeholder="First Name" required bind:value={firstName}>
        </label>
        <label class="input-label" for="last-name">
            <span>Last Name:</span>
            <input id="last-name" type="text" name="lastName" placeholder="Last Name" required bind:value={lastName}>
        </label>
    </div>
    <label class="input-label" for="email">
        <span>Email:</span>
        <input id="email" type="email" name="email" placeholder="Email that I can contact you back through" required bind:value={email}>
    </label>
    <label class="input-label" for="message">
        <span>Short Message:</span>
        <textarea class="!rounded-[var(--theme-rounded-base)] min-h-[7.5rem] resize-none" id="message" name="message" contenteditable required placeholder="Tell me who you are and what you are looking for..." bind:textContent={message}></textarea>
    </label>
    <p class="text-sm text-center opacity-75">Note: A response could take me upto 24-48 hours</p>
    <div class="flex justify-evenly mt-4">
        <button class="btn variant-ghost" on:click={closeContactMeForm} type="button">Cancel</button>
        <button class="btn variant-filled-primary" type="submit">Submit</button>
    </div>
</form>

