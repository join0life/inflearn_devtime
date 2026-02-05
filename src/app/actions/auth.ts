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
export async function checkEmailDuplicate(): Promise<CheckDuplicateRes> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/check-email`,
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error.message);
  }

  const data = await res.json();
  return data;
}

/**
 * GET /auth/check-nickname
 * @returns { success: boolean, available: boolean, message: string }
 */
export async function checkNicknameDuplicate(): Promise<CheckDuplicateRes> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/check-nickname`,
  );

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error.message);
  }

  const data = await res.json();
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

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error.message);
  }

  const data = await res.json();
  return data;
}
