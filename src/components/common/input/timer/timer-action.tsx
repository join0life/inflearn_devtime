import Image from "next/image";
import start from "@/assets/start.svg";
import startDisabled from "@/assets/start-disabled.svg";
import pause from "@/assets/pause.svg";
import pauseDisabled from "@/assets/pause-disabled.svg";
import finish from "@/assets/finish.svg";
import finishDisabled from "@/assets/finish-disabled.svg";
import todo from "@/assets/todo.svg";
import todoDisabled from "@/assets/todo-disabled.svg";
import reset from "@/assets/reset.svg";
import resetDisabled from "@/assets/reset-disabled.svg";
import ToolTip from "./tooltip";

const TimerAction = () => {
  return (
    <div className="flex h-25 w-186.5 items-center justify-between">
      <div className="flex-row-center gap-20">
        <button className="group relative">
          <Image src={start} width={80} height={100} alt="재생 아이콘" />
          <ToolTip label="타이머 시작" />
        </button>

        <button className="group relative">
          <Image
            src={pauseDisabled}
            width={100}
            height={100}
            alt="일시정지 아이콘(disabled)"
          />
          <ToolTip label="타이머 일시정지" />
        </button>

        <button className="group relative">
          <Image
            src={finishDisabled}
            width={100}
            height={100}
            alt="정지 아이콘(disabled)"
          />
          <ToolTip label="타이머 종료" />
        </button>
      </div>

      <div className="flex-row-center gap-6">
        <button className="group relative h-16 w-16 rounded-4xl bg-white">
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={todoDisabled}
            width={36}
            height={24}
            alt="할 일 목록 아이콘(disabled)"
          />
          <ToolTip label="할 일 목록" />
        </button>

        <button className="group relative h-16 w-16 rounded-4xl bg-white">
          <Image
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src={resetDisabled}
            width={36}
            height={36}
            alt="리셋 아이콘(disbaled)"
          />
          <ToolTip label="타이머 초기화" />
        </button>
      </div>
    </div>
  );
};

export default TimerAction;
