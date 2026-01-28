import Pagination from "@/components/common/pagination/pagination";

export default function Home() {
  return (
    <div>
      <Pagination currentPage={96} totalPages={100} />
    </div>
  );
}
