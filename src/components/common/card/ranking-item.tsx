import Image from "next/image";
import defaultAvatar from "@/assets/default-avatar.svg";
import Tag from "./tag";
import Rank from "./rank";

interface RankingItemProps {
  rank: number;
  nickname: string;
  totalStudyTime: number;
  averageStudyTime: number;
  profile: {
    career: string;
    purpose: string;
    profileImage: string;
    techStacks: { id: number; name: string }[];
  };
}

const RankingItem = ({
  rank = 0,
  nickname,
  totalStudyTime = 0,
  averageStudyTime = 0,
  profile: {
    career = "경력 없음",
    purpose = "취업 준비",
    profileImage = defaultAvatar,
    techStacks = [],
  },
}: RankingItemProps) => {
  return (
    <div className="flex w-full items-start gap-9 self-stretch rounded-xl bg-white px-6 py-3">
      <div className="flex flex-col items-start gap-4">
        <Rank rank={rank} isTopRank={rank <= 3} />
        <Image src={defaultAvatar} alt="아바타 이미지" width={80} height={80} />
      </div>

      <div className="flex flex-col items-start gap-4">
        <div className="flex flex-col">
          <h1 className="text-primary-500 font-title-b">{nickname}</h1>
          <p className="text-primary-500 font-body-m">"{purpose}"</p>
        </div>
        <div className="flex gap-6">
          <div className="flex gap-2">
            <p className="font-body-r text-gray-500">누적</p>
            <span className="font-body-s text-gray-700">
              {totalStudyTime}시간
            </span>
          </div>
          <div className="flex gap-2">
            <p className="font-body-r text-gray-500">일 평균</p>
            <span className="font-body-s text-gray-700">
              {averageStudyTime}시간
            </span>
          </div>
          <div className="flex gap-2">
            <p className="font-body-r text-gray-500">경력</p>
            <span className="font-body-s text-gray-700">
              {career !== "경력 없음" ? `${career}년` : career}
            </span>
          </div>
        </div>
        <div className="flex gap-2">
          {techStacks.map((techStack) => (
            <Tag key={techStack.id}>{techStack.name}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankingItem;
