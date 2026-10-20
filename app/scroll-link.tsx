"use client";

import { AnchorHTMLAttributes, MouseEvent } from "react";

type ScrollLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
  href: string;
};

export default function ScrollLink({ href, children, ...props }: ScrollLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    if (!href.startsWith("#")) return;

    if (href === "#top") {
      event.preventDefault();
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      window.history.replaceState(null, "", href);
      return;
    }

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({ block: "start", behavior: "auto" });
    window.history.replaceState(null, "", href);
  }

  return <a {...props} href={href} onClick={handleClick}>{children}</a>;
}
