import Image from "next/image";
import logo from "@/assets/logo-horizontal.svg";
import defaultAvatar from "@/assets/default-avatar.svg";

interface NavigationBarProps {
  isActive?: boolean;
  user?: { nickname: string; profileImage?: string } | null;
}

export default function NavigationBar({ isActive, user }: NavigationBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div
        className={`flex-row-center text-secondary-indigo-500 cursor-pointer gap-9 py-2.5 ${isActive ? "font-body-b underline" : "font-body-s"}`}
      >
        <Image
          src={logo}
          alt="devtime 로고 - horizontal"
          width={148}
          height={40}
        />
        <div>대시보드</div>
        <div>랭킹</div>
      </div>

      {user ? (
        <div className="text-secondary-indigo-500 font-body-b flex-row-center gap-3">
          <Image src={defaultAvatar} alt="기본 아바타 이미지" sizes="40" />
          <div>{user.nickname}</div>
        </div>
      ) : (
        <div className="flex-row-center text-secondary-indigo-500 font-body-s cursor-pointer gap-9 py-2.5">
          <div>로그인</div>
          <div>회원가입</div>
        </div>
      )}
    </div>
  );
}
