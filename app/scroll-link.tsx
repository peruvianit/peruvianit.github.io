"use client";

import { MouseEvent, ReactNode } from "react";

type ScrollLinkProps = {
  href: string;
  className?: string;
  children: ReactNode;
};

export default function ScrollLink({ href, className, children }: ScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ block: "start", behavior: "auto" });
    window.history.replaceState(null, "", href);
  }

  return <a className={className} href={href} onClick={handleClick}>{children}</a>;
}
