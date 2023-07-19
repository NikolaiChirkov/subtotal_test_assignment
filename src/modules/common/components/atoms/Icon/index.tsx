import { SpaceXLogo, Loading } from "./Icons";

export type IconProps = React.SVGProps<SVGSVGElement>;

export type IconComponentProps = {
  SpaceXLogo: typeof SpaceXLogo;
  Loading: typeof Loading;
};

export const Icons: IconComponentProps = {
  SpaceXLogo,
  Loading,
};
