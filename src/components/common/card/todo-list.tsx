"use client";

import TodoItem from "./todo-item";
import Image from "next/image";
import editGray from "@/assets/edit-gray.svg";
import { useEffect, useState } from "react";
import Button from "../button";

interface Task {
  id: string;
  content: string;
  isCompleted: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]); // 실제 화면에 쓰이는 할 일
  const [isEditMode, setIsEditMode] = useState(false); // 전역 편집 모드인지
  const [editingId, setEditingId] = useState<string | null>(null); // 현재 편집 중인 아이템 Id
  const [hasChanges, setHasChanges] = useState(false); // 수정된 내용이 있는지
  const [loadingId, setLoadingId] = useState<string | null>(null); // 체크 진행 중인 아이템 Id


  /* =====================
    List 컴포넌트(모달 안 전역)
  ====================== */
  const resetEditState = () => {
    setIsEditMode(false);
    setEditingId(null);
    setHasChanges(false);
  };

  const handleGlobalEditButtonClick = () => {
    setIsEditMode(true);
  };

  const handleCancelButtonClick = () => {
    /** @TODO Modal 창 닫기 */
    resetEditState();
  };

  const handleSaveButtonClick = () => {
    /** @TODO API 호출 */
    resetEditState();
  };

  /* =====================
    Item 컴포넌트
  ====================== */
  const handleChangeContent = (id: string, value: string) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, content: value } : task)),
    );
    setHasChanges(true);
  };

  const handleToggleCompletedClick = (id: string) => {
    const prevTasks = tasks;

    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task,
      ),
    );

    setLoadingId(id);

    try {
      /** @TODO API 요청 */
    } catch (e) {
      setTasks(prevTasks);
    } finally {
      setLoadingId(null);
    }
  };

  const handleSaveItemClick = () => {
    setEditingId(null);
  };

  const handleEditItemClick = (id: string) => {
    setEditingId(id);
  };

  const handleDeleteItemClick = (id: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setHasChanges(true);
  };

  /**
   * @TODO
   * TodoItem의 EditButton / DeleteButton API 호출
   * - 서버 액션
   */

  return (
    <div className="flex w-full flex-col justify-center gap-6">
      <div className="flex w-full items-center justify-between">
        <div className="font-title-b text-gray-700">할 일 목록</div>

        {!isEditMode && (
          <button
            onClick={handleGlobalEditButtonClick}
            className="flex-row-center cursor-pointer gap-2"
          >
            <Image
              src={editGray}
              alt="수정 버튼(연필)"
              height={16}
              width={16}
            />
            <div className="font-label-m text-gray-600">할 일 수정</div>
          </button>
        )}
      </div>

      <div className="flex-col-center w-full gap-4">
        {/** 넘겨야할 값 -> content, isCompleted, isEditMode */}
        {tasks.map((task) => (
          <TodoItem
            key={task.id}
            {...task}
            mode={{
              isEditMode,
              isEditing: editingId === task.id,
            }}
            checkbox={{
              onToggleCompleted: () => handleToggleCompletedClick(task.id),
              isLoading: loadingId === task.id,
            }}
            actions={{
              onEdit: () => handleEditItemClick(task.id),
              onChangeContent: (value) => handleChangeContent(task.id, value),
              onDelete: () => handleDeleteItemClick(task.id),
              onSave: () => handleSaveItemClick(),
            }}
          />
        ))}
      </div>

      <div className="flex items-center justify-end gap-4">
        <Button variant="tertiary" onClick={handleCancelButtonClick}>
          취소
        </Button>
        {/** TodoItem의 input에 수정 사항이 생기면 '저장하기' 버튼이 활성화 */}
        <Button
          variant="primary"
          disabled={!hasChanges}
          onClick={handleSaveButtonClick}
        >
          {hasChanges ? "변경 사항 저장하기" : "저장하기"}
        </Button>
      </div>
    </div>
  );
};

export default TodoList;
