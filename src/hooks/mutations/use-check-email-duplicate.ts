import { checkEmailDuplicate } from "@/api/sign-up";
import { useMutation } from "@tanstack/react-query";

export function useCheckEmailDuplicate() {
  return useMutation({
    mutationFn: (email: string) => checkEmailDuplicate(email),
  });
}
