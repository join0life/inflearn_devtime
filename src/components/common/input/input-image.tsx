"use client";

import Image from "next/image";
import Plus from "@/assets/plus.svg";
import { useRef, useState } from "react";

interface InputImageProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label?: string;
  fileConstraints?: string;
}

type Image = {
  file: File;
  previewUrl: string;
};

export default function InputImage({
  id,
  label,
  fileConstraints,
  ...props
}: InputImageProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<Image>();

  const handleSelectImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0];
      setImage({ file, previewUrl: URL.createObjectURL(file) });
    }
    e.target.value = "";
  };

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-body-small-m text-gray-600">
        {label}
      </label>
      <div className="flex items-baseline gap-3">
        <input
          ref={fileInputRef}
          onChange={handleSelectImage}
          type="file"
          accept="image/*"
          id={id}
          className="hidden"
        />

        {image ? (
          <div className="relative h-30 w-30">
            <Image
              src={image.previewUrl}
              alt="선택한 이미지 미리보기"
              fill
              className="rounded-lg object-cover"
            />
          </div>
        ) : (
          <div
            onClick={() => fileInputRef.current?.click()}
            className="border-primary-500 relative flex h-30 w-30 cursor-pointer items-center justify-center rounded-lg border border-dashed"
          >
            <Image
              src={Plus}
              alt="사진 추가 아이콘"
              width={24}
              height={24}
              className="absolute"
            />
          </div>
        )}
        <span className="font-body-small-m text-gray-500">
          {fileConstraints}
        </span>
      </div>
    </div>
  );
}
