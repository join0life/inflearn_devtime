import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronsLeftIcon,
  ChevronsRightIcon,
} from "lucide-react";
import PageButton from "./page-button";
import PaginationIconButton from "./pagination-icon-button";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onChangePage,
}: PaginationProps) => {
  const getPages = () => {
    const pages: (number | "...")[] = [];

    // 1. totalPages <= 10
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // 2. totalPages > 10
    // 2-1. currentPage가 앞쪽에 있을 때 (1~6 페이지)
    // 예: [1] 2 3 4 5 6 7 8 ... 100
    if (currentPage <= 5) {
      for (let i = 1; i <= 8; i++) {
        pages.push(i);
      }
      pages.push("...");
      pages.push(totalPages);
      return pages;
    }

    // 2-2. currentPage가 뒤쪽에 있을 때 (마지막에서 5개 이내)
    // 예: 1 ... 93 94 95 96 97 98 99 [100]
    if (currentPage >= totalPages - 4) {
      pages.push(1);
      pages.push("...");
      for (let i = totalPages - 7; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // 2-3. currentPage가 중간에 있을 때
    // 예: 1 ... 48 49 [50] 51 52 53 ... 100
    pages.push(1);
    pages.push("...");
    for (let i = currentPage - 2; i <= currentPage + 2; i++) {
      pages.push(i);
    }
    pages.push("...");
    pages.push(totalPages);

    return pages;
  };

  const goToFirstPage = () => onChangePage(1);
  const goToPrevPage = () => onChangePage(Math.max(1, currentPage - 1));

  const goToNextPage = () =>
    onChangePage(Math.min(totalPages, currentPage + 1));

  const goToLastPage = () => onChangePage(totalPages);

  return (
    <div className="inline-flex items-center gap-3">
      <PaginationIconButton
        disabled={currentPage === 1}
        icon={ChevronsLeftIcon}
        onClick={goToFirstPage}
      />
      <PaginationIconButton
        disabled={currentPage === 1}
        icon={ChevronLeftIcon}
        onClick={goToPrevPage}
      />

      {getPages().map((page, idx) => (
        <PageButton
          key={idx}
          page={page}
          active={page === currentPage}
          disabled={page === "..."}
          onClick={() => {
            if (page === "...") return;
            onChangePage(page);
          }}
        />
      ))}

      <PaginationIconButton
        disabled={currentPage === totalPages}
        icon={ChevronRightIcon}
        onClick={goToNextPage}
      />
      <PaginationIconButton
        disabled={currentPage === totalPages}
        icon={ChevronsRightIcon}
        onClick={goToLastPage}
      />
    </div>
  );
};

export default Pagination;
