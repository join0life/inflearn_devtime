interface PageButtonProps {
  page: number | string;
  active?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const PageButton = ({ page, active, onClick, disabled }: PageButtonProps) => {
  const baseStyle =
    "inline-flex items-center justify-center cursor-pointer rounded-[5px] py-[2px] h-6 min-w-6";

  const activeStyle = active
    ? "bg-primary-500 text-white font-body-b"
    : "bg-gray-100 text-gray-600 font-body-m";

  if (page === "...")
    return <div className={`${baseStyle} ${activeStyle}`}>···</div>;

  return (
    <button
      className={`${baseStyle} ${activeStyle}`}
      onClick={onClick}
      disabled={disabled || active}
    >
      {page}
    </button>
  );
};

export default PageButton;
