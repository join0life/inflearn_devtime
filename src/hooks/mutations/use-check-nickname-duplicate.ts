import { checkNicknameDuplicate } from "@/api/sign-up";
import { useMutation } from "@tanstack/react-query";

export function useCheckNicknameDuplicate() {
  return useMutation({
    mutationFn: (nickname: string) => checkNicknameDuplicate(nickname),
  });
}
