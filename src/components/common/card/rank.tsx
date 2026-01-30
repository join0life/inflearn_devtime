interface RankProps {
  rank: number;
  isTopRank: boolean;
}

const Rank = ({ rank, isTopRank = false }: RankProps) => {
  return (
    <div
      className={`${isTopRank ? "bg-primary-500 text-white" : "bg-primary-500-10 text-primary-500"} font-title-b flex-col-center gap-2 rounded-lg px-2 py-1`}
    >
      {rank}위
    </div>
  );
};

export default Rank;
