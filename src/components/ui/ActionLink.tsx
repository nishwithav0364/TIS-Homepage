import type { AnchorHTMLAttributes, ReactNode } from "react";

type ActionLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  tone?: "coral" | "forest" | "light";
};

export default function ActionLink({
  children,
  tone = "coral",
  className = "",
  ...props
}: ActionLinkProps) {
  return (
    <a className={`action-link action-link--${tone} ${className}`} {...props}>
      {children}
      <span aria-hidden="true">&rarr;</span>
    </a>
  );
}
