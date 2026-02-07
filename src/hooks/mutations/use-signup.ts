import { signup } from "@/api/sign-up";
import { SignupPayload } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";

export function useSignup() {
  return useMutation({
    mutationFn: (payload: SignupPayload) => signup(payload),
  });
}
