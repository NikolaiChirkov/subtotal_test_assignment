import React from "react";

export type SwitchOptionType = {
  title: string;
  className?: string;
  onClick: () => void;
};

export const SwitchOption: React.FC<SwitchOptionType> = ({
  title,
  className,
  onClick,
}) => {
  return (
    <li className={className} onClick={onClick}>
      {title}
    </li>
  );
};
