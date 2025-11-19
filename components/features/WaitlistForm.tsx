"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { addToWaitlist } from "@/services/waitlistServices";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { toast } from "sonner";

export function JoinWaitlist() {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate: joinWaitlist, isPending } = useMutation({
    mutationFn: addToWaitlist,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;

    joinWaitlist(
      { name, email },
      {
        onSuccess: () => {
          setIsOpen(false);
          (e.target as HTMLFormElement).reset();
          toast.success(
            "Welcome aboard! We'll keep you posted on our app launch."
          );
        },
        onError: () => {
          toast.error("Failed to join the waitlist. Please try again.");
        },
      }
    );
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen} >
      <DialogTrigger asChild>
        <Button size="sm">Join Waitlist</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join Our Waitlist</DialogTitle>
          <DialogDescription>
            We&apos;re cooking up something exciting! Reserve your spot and be
            the first to know when we launch.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-3">
          <div className="">
            <label htmlFor="name">Name</label>
            <Input
              required
              id="name"
              name="name"
              minLength={3}
              maxLength={50}
              pattern="[A-Za-z\s]+"
              title="Please enter a valid name (letters and spaces only, minimum 3 characters)"
              placeholder="John Doe"
            />
          </div>
          <div className="">
            <label htmlFor="email">Email</label>
            <Input
              required
              id="email"
              type="email"
              name="email"
              maxLength={100}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Please enter a valid email address"
              placeholder="john@example.com"
            />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button disabled={isPending} variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button disabled={isPending} type="submit">
              {isPending ? "Joining..." : "Join Waitlist"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
