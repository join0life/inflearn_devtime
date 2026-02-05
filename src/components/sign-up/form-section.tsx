"use client";

import InputField from "@/components/common/input/input-field/input-field";
import { useState } from "react";
import Button from "../common/button";
import Link from "next/link";
import Checkbox from "../common/card/checkbox";
import { TERMS_OF_SERVICE } from "@/lib/constants";
import ReactMarkdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import rehypeRaw from "rehype-raw";
import { useCheckEmailDuplicate } from "@/hooks/mutations/use-check-email-duplicate";

export default function FormSection() {
  const [formField, setFormField] = useState({
    email: "",
    nickname: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [emailHint, setEmailHint] = useState<{
    message: string;
    type: "success" | "error" | null;
  }>({ message: "", type: null });

  const {
    mutate: checkEmail,
    isPending: isCheckEmailPending,
    error: isCheckEmailError,
  } = useCheckEmailDuplicate();

  const handleCheckEmailDuplicateClick = () => {
    const email = formField.email;
    if (email.trim() === "") return;

    checkEmail(email, {
      onSuccess: (data) => {
        if(!data.success) {
          setEmailHint({
            message: data.message,
            type: "error",
          });
        }
        setEmailHint({
          message: data.message,
          type: "success",
        });
      },
      // onError: (error) => {
      //   setEmailHint({
      //     message: error.message,
      //     type: "error",
      //   });
      // },
    });
  };

  const handleAgreeToTermsChecked = () => {
    // const prevFormField = formField;

    setFormField((prev) => ({ ...prev, agreeToTerms: !prev.agreeToTerms }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormField((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <section className="mx-auto flex w-full max-w-105 flex-col justify-center gap-9 px-3 py-4">
      <h1 className="text-primary-500 font-heading-b w-full text-center">
        회원가입
      </h1>
      <div className="flex flex-col gap-15">
        <form className="flex w-full flex-col gap-10">
          <InputField id="email">
            <div className="flex w-full flex-col gap-2">
              <InputField.Label className="font-label-m text-gray-600">
                아이디
              </InputField.Label>
              <div className="flex w-full gap-3">
                <InputField.Input
                  type="email"
                  className="font-body-m flex-1 rounded-[5px] bg-gray-50 px-4 py-3 text-gray-600 placeholder:text-gray-300"
                  placeholder="이메일 주소 형식으로 입력해 주세요."
                  value={formField.email}
                  onChange={handleInputChange}
                />
                <InputField.Button
                  variant="secondary"
                  className="shrink-0 px-4 py-3"
                  disabled={formField.email === ""}
                >
                  중복 확인
                </InputField.Button>
              </div>
              {emailHint.type && (
                <InputField.HintText
                  className={`${emailHint.type === "success" ? "text-secondary-positive-500" : "text-secondary-negative-500"} font-caption-m`}
                >
                  {emailHint.message}
                </InputField.HintText>
              )}
            </div>
          </InputField>

          <InputField id="nickname">
            <div className="flex w-full flex-col gap-2">
              <InputField.Label className="font-label-m text-gray-600">
                닉네임
              </InputField.Label>
              <div className="flex w-full gap-3">
                <InputField.Input
                  className="font-body-m flex-1 rounded-[5px] bg-gray-50 px-4 py-3 text-gray-600 placeholder:text-gray-300"
                  placeholder="닉네임을 입력해 주세요."
                  value={formField.nickname}
                  onChange={handleInputChange}
                />
                <InputField.Button
                  variant="secondary"
                  className="shrink-0 px-4 py-3"
                  disabled={formField.nickname === ""}
                >
                  중복 확인
                </InputField.Button>
              </div>
              {/* {nicknameHint.type && (
                <InputField.HintText
                  className={`${nicknameHint.type === "success" ? "text-secondary-positive-500" : "text-secondary-negative-500"} font-caption-m`}
                >
                  {nicknameHint.message}
                </InputField.HintText>
              )} */}
            </div>
          </InputField>

          <InputField id="password">
            <div className="flex w-full flex-col gap-2">
              <InputField.Label className="font-label-m text-gray-600">
                비밀번호
              </InputField.Label>
              <div className="flex w-full gap-3">
                <InputField.Input
                  type="password"
                  className="font-body-m flex-1 rounded-[5px] bg-gray-50 px-4 py-3 text-gray-600 placeholder:text-gray-300"
                  placeholder="비밀번호를 입력해 주세요."
                  value={formField.password}
                  onChange={handleInputChange}
                />
              </div>
              {/* {errorMessage.id && (
            <InputField.HintText className="font-caption-m">{errorMessage.id}</InputField.HintText>
          )} */}
            </div>
          </InputField>

          <InputField id="confirmPassword">
            <div className="flex w-full flex-col gap-2">
              <InputField.Label className="font-label-m text-gray-600">
                비밀번호 확인
              </InputField.Label>
              <div className="flex w-full gap-3">
                <InputField.Input
                  type="password"
                  className="font-body-m flex-1 rounded-[5px] bg-gray-50 px-4 py-3 text-gray-600 placeholder:text-gray-300"
                  placeholder="비밀번호를 다시 입력해 주세요."
                  value={formField.confirmPassword}
                  onChange={handleInputChange}
                />
              </div>
              {/* {errorMessage.id && (
            <InputField.HintText className="font-caption-m">{errorMessage.id}</InputField.HintText>
          )} */}
            </div>
          </InputField>
          <div className="flex w-full flex-col gap-2">
            <div className="flex justify-between">
              <label className="font-label-m text-gray-600">이용약관</label>
              <div className="flex gap-1">
                <label
                  htmlFor="agree"
                  className={`${formField.agreeToTerms ? "text-primary-500" : "text-primary-500-30"} font-body-small-m`}
                >
                  동의함
                </label>
                <Checkbox
                  id="agree"
                  checked={formField.agreeToTerms}
                  onChange={handleAgreeToTermsChecked}
                  size="sm"
                />
              </div>
            </div>
            <div>
              <div
                id="termsOfService"
                className="scrollbar-none font-caption-r line-clamp-49 h-27.5 resize-none overflow-y-auto rounded-[5px] bg-gray-50 px-4 py-3 text-ellipsis text-gray-600 focus:outline-none"
              >
                <ReactMarkdown
                  remarkPlugins={[remarkBreaks]}
                  rehypePlugins={[rehypeRaw]}
                >
                  {TERMS_OF_SERVICE}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-col-center gap-6">
        <Button className="flex-row-center w-full" variant="primary">
          회원가입
        </Button>
        <div className="text-primary-500 flex gap-3">
          <p className="font-body-r">회원이신가요?</p>
          <Link href={"/sign-in"} className="font-body-b">
            로그인 바로가기
          </Link>
        </div>
      </div>
    </section>
  );
}
