import { SvgIconProps } from "@mui/material/SvgIcon";

export interface NavItemProps {
  text: string;
  icon: React.ReactElement<SvgIconProps>;
  onClick: () => void;
}
