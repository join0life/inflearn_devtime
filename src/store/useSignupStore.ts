import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface SignupState {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;

  isEmailAvailable: boolean | null;
  isNicknameAvailable: boolean | null;
  isPasswordMatched: boolean | null;

  isTermsToAgreed: boolean;

  actions: {
    setEmail: (email: string) => void;
    setNickname: (nickname: string) => void;
    setPassword: (password: string) => void;
    setConfirmPassword: (confirmPassword: string) => void;

    setIsEmailAvailable: (available: boolean) => void;
    setIsNicknameAvailable: (available: boolean) => void;
    checkPasswordMatch: () => void;

    setIsTermsToAgreed: (agreed: boolean) => void;
  };
}

export const useSignupStore = create<SignupState>()(
  devtools(
    (set, get) => ({
      email: "",
      nickname: "",
      password: "",
      confirmPassword: "",

      isEmailAvailable: null,
      isNicknameAvailable: null,
      isPasswordMatched: null,
      isTermsToAgreed: false,

      actions: {
        setEmail: (email: string) =>
          set({ email, isEmailAvailable: null }, false, "signup/setEmail"),
        setNickname: (nickname: string) =>
          set(
            { nickname, isNicknameAvailable: null },
            false,
            "signup/setNickname",
          ),
        setPassword: (password: string) => {
          set({ password }, false, "signup/setPassword");
          get().actions.checkPasswordMatch();
        },
        setConfirmPassword: (confirmPassword: string) => {
          set({ confirmPassword }, false, "signup/setConfirmPassword");
          get().actions.checkPasswordMatch();
        },
        setIsEmailAvailable: (available: boolean) =>
          set(
            { isEmailAvailable: available },
            false,
            "signup/setIsEmailAvailable",
          ),
        setIsNicknameAvailable: (available: boolean) =>
          set(
            { isNicknameAvailable: available },
            false,
            "signup/setIsNicknameAvailable",
          ),
        checkPasswordMatch: () => {
          const { password, confirmPassword } = get();
          set(
            {
              isPasswordMatched:
                password.length > 0 &&
                confirmPassword.length > 0 &&
                password === confirmPassword,
            },
            false,
            "signup/checkPasswordMatch",
          );
        },
        setIsTermsToAgreed: (agreed: boolean) =>
          set({ isTermsToAgreed: agreed }, false, "signup/setTermsToAgreed"),
      },
    }),
    {
      name: "Signup Store",
      enabled: process.env.NODE_ENV === "development",
    },
  ),
);
