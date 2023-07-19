import React from "react";
import styles from "./Switch.module.scss";
import { concatClassNames } from "@modules/common/utils";
import { SwitchOption } from "./SwitchOption";

type SwitchOptionType = {
  title: string;
  value: string;
  default: boolean;
};

export type SwitchType = {
  options: SwitchOptionType[];
  className?: string;
  onOptionChange: (value: string) => void;
};

export const Switch: React.FC<SwitchType> = ({ options, className, onOptionChange }) => {
  const [currentOption, setCurrentOption] = React.useState<string>(
    options.find((option) => option.default).title
  );

  return (
    <ul className={concatClassNames([styles.root, className])}>
      {options.map(({ title, value }) => (
        <SwitchOption
          key={title}
          title={title}
          className={concatClassNames([
            styles.root__option,
            currentOption === title && styles.current,
          ])}
          onClick={() => {
            onOptionChange(value);
            setCurrentOption(title);
          }}
        />
      ))}
    </ul>
  );
};
