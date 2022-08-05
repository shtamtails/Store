import React from "react";

interface InputProps {
  label?: string;
  required?: boolean;
  disabled?: boolean;
  maxWidth?: boolean;
  width?: string;
  height?: string;
  setInput?: (value: string) => void;
  innerRef?: React.RefObject<HTMLInputElement>;
  className?: string;
  placeholder?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  required,
  disabled,
  maxWidth,
  width,
  height,
  setInput,
  innerRef,
  className,
  placeholder,
}) => {
  let inputClassName = "";
  disabled && (inputClassName += " input-disabled ");
  maxWidth && (inputClassName += " input-maxwidth ");

  let inputContainerClassName = "input-container";
  maxWidth && (inputContainerClassName += " input-maxwidth ");
  className && (inputContainerClassName += className);

  return (
    <>
      <div className={inputContainerClassName}>
        <div className="input-label">
          {label}
          {required && <div className="input-required">*</div>}
        </div>
        <input
          ref={innerRef}
          className={inputClassName}
          disabled={disabled}
          placeholder={placeholder}
          style={{ width: width, height: height }}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setInput && setInput(e.target.value);
          }}
        />
      </div>
    </>
  );
};
