import { IButton } from "@/types";
import CustomBtn from "./custom-btn";

export interface IProps extends IButton {
  bgColor: "green" | "purple";
}

export default function ColorBtn({
  children,
  bgColor,
  className,
  ...props
}: IProps) {
  const bgVariants = {
    green: "bg-green",
    purple:"bg-purple"
  };

  return (
    <CustomBtn
      className={`${bgVariants[bgColor]} ${className} font-semibold`}
      {...props}
    >
      {children}
    </CustomBtn>
  );
}
