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

export function JoinWaitlist() {
  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
          <Button size="lg">Join Waitlist</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Join Our Waitlist</DialogTitle>
            <DialogDescription>
              We&apos;re cooking up something exciting! Reserve your spot and be the
              first to know when we launch.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <label htmlFor="name">Name</label>
              <Input id="name" name="name" />
            </div>
            <div className="grid gap-3">
              <label htmlFor="email">Email</label>
              <Input id="email" name="email" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Join Waitlist</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
