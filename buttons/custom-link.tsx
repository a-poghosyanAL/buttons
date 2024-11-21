import { COLOR_VARIANTS } from "@/constants";
import { Color } from "@/types";
import Link, { LinkProps } from "next/link";
import type { ReactNode } from "react";

interface IProps extends LinkProps {
  children: ReactNode;
  color: Color;
  styles: string;
  target?: "_blank",
  job?: boolean,
  id?: string
}

export default function CustomLink({
  href,
  children,
  color,
  styles,
  job,
  ...props
}: IProps) {
  return (
    <div className={`${COLOR_VARIANTS[color]} group w-max`}>
      <Link
        className={`${COLOR_VARIANTS[color]} ${styles} group text-decoration-none ${color === "purple" ? "group-hover:text-purple" : "group-hover:text-blue"}`}
        href={href}
        {...props}
      >
        {children}
        <span
          className={`w-0 ${color === "purple" ? "bg-purple" : "bg-blue"} h-[3px] transition-all block group-hover:w-full`}
        ></span>
      </Link>
    </div>
  );
}
