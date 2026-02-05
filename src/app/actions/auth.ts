"use server";

import { CheckDuplicateRes, SignupPayload, SignupRes } from "@/types/auth";

/**
|--------------------------------------------------
| Sign up API Actions
|--------------------------------------------------
**/

/**
 * GET /auth/check-email
 * @returns { success: boolean, available: boolean, message: string }
 */
export async function checkEmailDuplicate(
  email: string,
): Promise<CheckDuplicateRes> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/check-email?email=${email}`,
  );

  const data = await res.json();

  if (!res.ok) {
    return {
      success: false,
      available: false,
      message: data.error.message,
    };
  }

  return data;
}

/**
 * GET /auth/check-nickname
 * @returns { success: boolean, available: boolean, message: string }
 */
export async function checkNicknameDuplicate(
  nickname: string,
): Promise<CheckDuplicateRes> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/check-nickname?nickname=${nickname}`,
  );

  const data = await res.json();

  if (!res.ok) {
    return {
      success: false,
      available: false,
      message: data.error.message,
    };
  }
  return data;
}

/**
 * POST /auth/signup
 * @param payload
 * @returns { success: boolean, message: string }
 */
export async function signup(payload: SignupPayload): Promise<SignupRes> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    return {
      success: false,
      message: data.error.message,
    };
  }
  return data;
}
