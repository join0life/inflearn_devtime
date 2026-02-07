import ToolTip from "./tooltip";
import PlayIcon from "./play-icon";
import PauseIcon from "./pause-icon";
import FinishIcon from "./finish-icon";
import TodoIcon from "./todo-icon";
import ResetIcon from "./reset-icon";

export type TimerState = "ready" | "inProgress" | "pause";

interface TimerActionProps {
  state: TimerState;
}

const TimerAction = ({ state = "ready" }: TimerActionProps) => {
  const isReady = state === "ready";
  const isInProgress = state === "inProgress";
  const isPaused = state === "pause";

  return (
    <div className="flex h-25 w-186.5 items-center justify-between">
      <div className="flex-row-center gap-20">
        <button className="group relative">
          <PlayIcon disabled={isInProgress} />
          <ToolTip>타이머 시작</ToolTip>
        </button>

        <button className="group relative">
          <PauseIcon disabled={isReady || isPaused} />
          <ToolTip>타이머 일시정지</ToolTip>
        </button>

        <button className="group relative">
          <FinishIcon disabled={isReady} />
          <ToolTip>타이머 종료</ToolTip>
        </button>
      </div>

      <div className="flex-row-center gap-6">
        <button className="group relative h-16 w-16 rounded-4xl bg-white">
          <TodoIcon disabled={isReady} />
          <ToolTip>할 일 목록</ToolTip>
        </button>

        <button className="group relative h-16 w-16 rounded-4xl bg-white">
          <ResetIcon disabled={isReady} />
          <ToolTip>타이머 초기화</ToolTip>
        </button>
      </div>
    </div>
  );
};

export default TimerAction;
