import { IButton } from "@/types";
import CustomBtn from "./custom-btn";

import {
  BG_VARIANTS,
  BORDER_VARIANTS,
  COLOR_VARIANTS,
  HOVER_BG_VARIANTS,
  HOVER_COLOR_VARIANTS,
} from "@/constants";

export interface IProps extends IButton {
  bgColor: keyof typeof BG_VARIANTS;
  color: keyof typeof COLOR_VARIANTS | "";
  href?: string
}

export default function PrimaryBtn({
  children,
  bgColor,
  color,
  className,
  ...props
}: IProps) {

  return (
    <CustomBtn
      className={`${BG_VARIANTS[bgColor]} ${color && COLOR_VARIANTS[color]} ${color && HOVER_BG_VARIANTS[color]} ${HOVER_COLOR_VARIANTS[bgColor]} ${color && BORDER_VARIANTS[color]} ${color ? "border-2" : "border-0"} text-sm sm:text-base md:text-lg lg:text-xl transition-colors font-medium ${className}`}
      {...props}
    >
      {children}
    </CustomBtn>
  );
}
