"use client";
import { updateUsersName } from "@/actions/users/update-users-name";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface NameModelProps {
  open: boolean;
}

export function NameModel({ open }: NameModelProps) {
  const [isOpen, setIsOpen] = useState(open);
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleUpdateName = async () => {
    setLoading(true);
    try {
      await updateUsersName(name);
      setLoading(false);
      setIsOpen(false);
      toast.success("Name updated - thank you");
    } catch (error) {
      setLoading(false);
      toast.error("Could not update your name, sorry");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Your Name</DialogTitle>
          <DialogDescription>
            Please add you full name below. we use this as part of the
            verification process.
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-2">
          <Label htmlFor="name" className="text-left pl-1">
            Name
          </Label>
          <Input
            id="name"
            type="text"
            disabled={loading}
            placeholder="Cooper Aspinall"
            onChange={(e) => setName(e.target.value)}
            className="col-span-3"
          />
        </div>

        <DialogFooter>
          <Button disabled={loading} type="button" onClick={handleUpdateName}>
            Submit
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
