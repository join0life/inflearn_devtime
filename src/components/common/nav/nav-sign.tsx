import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.svg";
import Link from "next/link";

interface NavSignProps {
  user?: { nickname: string; profileImage?: string } | null;
}

export default function NavSign({ user }: NavSignProps) {
  return (
    <>
      {user ? (
        <div className="text-secondary-indigo-500 font-body-b flex-row-center gap-3">
          <Image src={defaultAvatar} alt="기본 아바타 이미지" sizes="40" />
          <div>{user.nickname}</div>
        </div>
      ) : (
        <div className="flex-row-center text-secondary-indigo-500 font-body-s cursor-pointer gap-9 py-2.5">
          <Link href={"/signin"}>로그인</Link>
          <Link href={"/signup"}>회원가입</Link>
        </div>
      )}
    </>
  );
}
