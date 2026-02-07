interface TagProps {
  children: React.ReactNode;
}

const Tag = ({ children }: TagProps) => {
  return (
    <div className="font-body-m inline-flex items-center justify-center gap-2 rounded-[5px] bg-gray-100 px-2 py-1 text-gray-500">
      {children}
    </div>
  );
};

export default Tag;
