import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { IoChatbubbleOutline } from "react-icons/io5";

export function CommentDialog() {
  return (
    <>
      <Dialog>
        <DialogTrigger className="">
          <IoChatbubbleOutline className="icon" />
        </DialogTrigger>
        <DialogContent className="bg-black border-none w-[712px] h-[512px]">
          <DialogHeader className="flex flex-col gap-5">
            <DialogTitle className="flex justify-center items-center">
              <p className="text-white text-center">Create comments</p>
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
}
