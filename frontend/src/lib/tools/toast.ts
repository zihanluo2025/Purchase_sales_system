import { toast } from "@/hooks/use-toast";

export function toastSuccess(msg: string) {
  toast({
    title: "Submission Successful",
    description: msg,
    variant: "success",
  });
}

export function toastError(msg: string) {
  toast({
    title: "Connection Failed",
    description: msg,
    variant: "error",
  });
}

export function toastWarning(msg: string) {
  toast({
    title: "Warning",
    description: msg,
    variant: "warning",
  });
}

export function toastInfo(msg: string) {
  toast({
    title: "System Update",
    description: msg,
    variant: "info",
  });
}