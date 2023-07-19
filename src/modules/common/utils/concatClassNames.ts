import { ClassNameType } from "@modules/common/types";

export const concatClassNames = (classNames: ClassNameType[]): string =>
  classNames.reduce(
    (line, currentClass) =>
      `${line} ${currentClass ? currentClass : ""}`.trim(),
    ""
  ) as string;
