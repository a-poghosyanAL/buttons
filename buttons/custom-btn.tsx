"use client";

import { IButton } from "@/types";
import Link, { LinkProps } from "next/link";
import { AnchorHTMLAttributes } from "react";

type TLink = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps>;
export interface IProps extends IButton {
  href?: string;
};

interface IBtnLink {
  children: React.ReactNode;
}
export default function CustomBtn({ children, href, ...props }: IProps) {
  const Component = href ? ({ children, ...restProps }: IBtnLink) => <Link href={href} {...restProps} {...(props as TLink)}   >{children}</Link> :
    ({ children, ...restProps }: IBtnLink) => <button {...restProps} {...props}>{children}</button>
  return <Component>{children}</Component>;
}
