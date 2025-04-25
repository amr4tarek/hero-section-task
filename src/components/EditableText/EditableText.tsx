import React, { JSX, useState, useEffect } from 'react';

interface EditableTextProps {
  initialText: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  disableHoverEffect?: boolean; 
}

const EditableText = ({ 
  initialText, 
  className = "", 
  as: Component = "div", 
  disableHoverEffect = false 
}: EditableTextProps) => {
  const [text, setText] = useState(initialText);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setText(initialText);
  }, [initialText]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsEditing(false);
    if (e.target.value.trim()) {
      setText(e.target.value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setIsEditing(false);
    }
  };

  if (isEditing) {
    return (
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`bg-transparent border-b border-purple-500 outline-none px-2 ${className}`}
        autoFocus
      />
    );
  }

  const hoverClasses = disableHoverEffect ? "" : "hover:opacity-80";

  return (
    <Component onClick={handleClick} className={`cursor-pointer ${hoverClasses} ${className}`}>
      {text}
    </Component>
  );
};

export default EditableText;