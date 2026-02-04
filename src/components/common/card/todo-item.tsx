import Image from "next/image";
import symbol from "@/assets/symbol.svg";
import Checkbox from "./checkbox";
import SaveButton from "./save-button";
import IconButton from "./icon-button";
import editIcon from "@/assets/edit-white.svg";
import deleteIcon from "@/assets/trashcan.svg";
import { useEffect, useRef } from "react";

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
}: TodoItemProps) => {
  const isViewMode = !isEditMode;
  const isItemEditing = isEditing;

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (isItemEditing) {
      inputRef.current?.focus();
    }
  }, [isItemEditing]);

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
            <IconButton
              label="수정"
              onClick={onEdit}
              size={17}
              icon={editIcon}
            />
            <IconButton
              label="삭제"
              onClick={onDelete}
              size={24}
              icon={deleteIcon}
            />
          </div>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
