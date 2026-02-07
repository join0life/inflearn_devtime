interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  label?: string;
}

export default function Textarea({ id, label, ...rest }: TextareaProps) {
  return (
    <div className="flex flex-col">
      {label && (
        <label htmlFor={id} className="font-body-small-m text-gray-600">
          {label}
        </label>
      )}

      <textarea
        id={id}
        className="font-body-m scrollbar-none resize-none px-4 py-3 text-gray-800 placeholder:text-gray-300 focus:outline-none"
        {...rest}
      />
    </div>
  );
}
