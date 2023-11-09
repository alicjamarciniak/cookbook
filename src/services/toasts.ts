import { toast } from "sonner";

export const showWorkInProgressToast = () =>
  toast.message("Ups, work in progress!", {
    description: "Sorry, this feature isn't ready yet 🛠️",
  });
