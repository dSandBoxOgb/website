'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

import { contactAction } from './contact-action'
import { useActionState, useEffect } from 'react'
import { toast } from 'sonner'

const ContactForm = () => {
    const [formState, formAction, isPending] = useActionState(contactAction, {});
    useEffect(() => {
        if (!!formState?.success) {
            toast.success("Message Sent Successfully");
        }

        if (formState?.error) {
            toast.error(formState.error || "An error occurred");
        }
    }, [formState]);

    return (
        <form action={formAction} className="space-y-5">
            <div className="md:flex gap-5 space-y-3">
                <div className="w-full">
                    <label htmlFor="name">Your Name</label>
                    <Input
                        id="name"
                        required
                        className="shadow-none border-0 border-b border-b-gray-300 rounded-none px-0 focus-visible:border-b-primary focus-visible:ring-0 focus-visible:outline-none"
                    />
                </div>
                <div className="w-full">
                    <label htmlFor="email">Email Address</label>
                    <Input required id="email" type="email" className="shadow-none border-0 border-b border-b-gray-300 rounded-none px-0 focus-visible:border-b-primary focus-visible:ring-0 focus-visible:outline-none" />
                </div>
                <div className="w-full">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <Input required id="phone" className="shadow-none border-0 border-b border-b-gray-300 rounded-none px-0 focus-visible:border-b-primary focus-visible:ring-0 focus-visible:outline-none" />
                </div>
            </div>

            <div className="w-full">
                <label htmlFor="message">Message</label>
                <Textarea required id="message" className="shadow-none border-0 border-b border-b-gray-300 rounded-none px-0 focus-visible:border-b-primary focus-visible:ring-0 focus-visible:outline-none" />
            </div>

            <Button disabled={isPending}>{isPending ? "Sending Message..." : "Leave a Message"}</Button>
        </form>
    )
}

export default ContactForm