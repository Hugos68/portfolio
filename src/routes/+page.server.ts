import { fail, type Actions } from "@sveltejs/kit";

import sgMail from '@sendgrid/mail';
import { sineOut } from "svelte/easing";
sgMail.setApiKey("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");
export const actions: Actions = {
    submitContactMeForm: async ({request}) => {
        const data = Object.fromEntries(await request.formData());

        if (!data.firstName || !data.lastName || !data.email || !data.message) return fail(400);
 
        const msg = {
            to: 'hugokorteapple@gmail.com', // Change to your recipient
            from: 'hugokorteapple@gmail.com', // Change to your verified sender
            subject: `Contact Form - ${data.firstName + " "+ data.lastName} - ${data.email}`,
            text: data.message as string,
        }
        
        sgMail.send(msg).then(() => {
            return {
                success: true
            }
        }).catch((error: Error) => {
            return fail(400);
        });
    }
};