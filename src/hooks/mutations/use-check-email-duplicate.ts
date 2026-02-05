import { checkEmailDuplicate } from "@/app/actions/auth";
import { useMutation } from "@tanstack/react-query";

export function useCheckEmailDuplicate(callbacks?: {
  // onError: (error: Error) => void;
  onSuccess: () => void;
}) {
  return useMutation({
    mutationFn: (email: string) => checkEmailDuplicate(email),
    // onError: (error) => {
    //   if (callbacks?.onError) callbacks.onError(error);
    // },
    onSuccess: () => {
      if (callbacks?.onSuccess) callbacks.onSuccess();
    },
  });
}
