interface TimerProps {
  time: string;
  unit: string;
}

const Timer = ({ time, unit }: TimerProps) => {
  return (
    <div className="border-primary-500 flex flex-col items-center rounded-xl border bg-linear-to-br from-[rgba(76,121,255,0)] to-[rgba(76,121,255,0.2)]">
      <div className="text-primary-500 font-timer">{time}</div>
      <p className="text-primary-500 font-body-small-s w-full py-9 text-center">
        {unit}
      </p>
    </div>
  );
};

export default Timer;
