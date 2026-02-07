import mockData from "@/lib/mock.json";
import RankingItem from "./ranking-item";

const RankingList = () => {
  return (
    <div className="flex-col-center gap-3">
      {/** @TODO mock 데이터 삭제 후 데이터 페칭 */}
      {mockData.map((mock) =>
        mock.data.rankings.map((rank) => (
          <RankingItem key={rank.userId} {...rank} />
        )),
      )}
    </div>
  );
};

export default RankingList;
