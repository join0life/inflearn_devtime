import Image from "next/image";
import symbol from "@/assets/symbol.svg";
import Checkbox from "./checkbox";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";
import SaveButton from "./save-button";

interface TodoItemProps {
  id: string;
  content: string;
  isCompleted: boolean;

  mode: {
    isEditMode: boolean;
    isEditing: boolean;
  };

  checkbox: {
    onToggleCompleted: () => void;
    isLoading: boolean;
  };

  actions: {
    onChangeContent: (value: string) => void;
    onSave: () => void;
    onEdit: () => void;
    onDelete: () => void;
  };

  refs: {
    inputRef: React.RefObject<HTMLInputElement | null>;
  };
}

const TodoItemContainer = ({
  isCompleted,
  children,
}: {
  isCompleted: boolean;
  children: React.ReactNode;
}) => {
  const baseStyle =
    "font-body-s flex-row-center h-18 w-142 gap-4 rounded-lg p-6 shadow-[0_8px_8px_0_rgba(0,0,0,0.05)]";
  const iscompletedStyle = isCompleted ? "bg-gray-400" : "bg-primary-500";

  return (
    <div className={`${baseStyle} ${iscompletedStyle} w-full`}>
      <Image src={symbol} alt="" width={42} height={20} aria-hidden />
      {children}
    </div>
  );
};

const TodoItem = ({
  id,
  content,
  isCompleted,
  mode: { isEditing, isEditMode },
  checkbox: { onToggleCompleted, isLoading },
  actions: { onEdit, onChangeContent, onDelete, onSave },
  refs: { inputRef },
}: TodoItemProps) => {
  const isViewMode = !isEditMode;
  const isItemEditing = isEditing;

  /** @TODO error 시 UI 처리 */
  //   return (
  //     <TodoItemContainer isCompleted={isCompleted}>
  //       <div className="flex-1 text-gray-400">{content}</div>
  //     </TodoItemContainer>
  //   );

  if (isViewMode) {
    return (
      <TodoItemContainer isCompleted={isCompleted}>
        <div className="flex-1 text-white">{content}</div>
        <Checkbox
          checked={isCompleted}
          onChange={onToggleCompleted}
          disabled={isLoading}
        />
      </TodoItemContainer>
    );
  }

  return (
    <TodoItemContainer isCompleted={isCompleted}>
      {isItemEditing ? (
        <>
          <input
            ref={inputRef}
            value={content}
            onChange={(e) => onChangeContent(e.target.value)}
            className="flex-1 text-white focus:outline-none"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.nativeEvent.isComposing) {
                e.preventDefault();
                onSave();
              }
            }}
          />
          {/** 수정한 input 상태 저장 버튼 */}
          <SaveButton label="저장" onClick={onSave} />
        </>
      ) : (
        <>
          <div className="flex-1 text-white">{content}</div>
          <div className="flex-row-center gap-4.5">
            <EditButton label="수정" onClick={onEdit} />
            <DeleteButton label="삭제" onClick={onDelete} />
          </div>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
