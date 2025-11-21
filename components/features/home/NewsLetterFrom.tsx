'use client'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'
import React, { useActionState, useEffect } from 'react'
import { toast } from 'sonner';
import { subscribeAction } from './subscribe-action';

const NewsLetterFrom = () => {
    const [formState, action, isPending] = useActionState(subscribeAction, {});
    useEffect(() => {
        if (!!formState?.success) {
            toast.success("Subscribed Successfully");
        }

        if (formState?.error) {
            toast.error(formState.error || "An error occurred");
        }
    }, [formState]);

    return (
        <form action={action} className="flex max-w-2xl mx-auto">
            <Input
                type="email"
                name='email'
                placeholder="Enter your email"
                required
                className="h-12 rounded-r-none"
            />
            <Button
                type="submit"
                size="lg"
                disabled={isPending}
                className='rounded-l-none h-12'
            >
                {isPending ? 'Subscribing...' : 'Subscribe'}
            </Button>
        </form>
    )
}

export default NewsLetterFrom