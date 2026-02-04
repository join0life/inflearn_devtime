"use client";

import Pagination from "@/components/common/pagination/pagination";
import { useState } from "react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalPages={100}
        onChangePage={setCurrentPage}
      />
    </div>
  );
}
