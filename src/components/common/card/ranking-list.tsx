import mockData from "@/lib/mock.json";
import RankingItem from "./ranking-item";

const RankingList = () => {
  return (
    <div className="flex-col-center gap-3">
      {mockData.map((mock) =>
        mock.data.rankings.map((rank) => (
          <RankingItem key={rank.userId} {...rank} />
        )),
      )}
    </div>
  );
};

export default RankingList;
