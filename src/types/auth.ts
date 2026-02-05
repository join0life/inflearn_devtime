export type CheckDuplicateRes = {
  success: boolean;
  available: boolean;
  message: string;
}

export type SignupPayload = {
  email: string;
  nickname: string;
  password: string;
  confirmPassword: string;
};

export type SignupRes = {
  success: boolean;
  available: boolean;
  message: string;
};
