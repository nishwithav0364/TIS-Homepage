"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import ActionLink from "@/components/ui/ActionLink";

const navigation = [
  { label: "Our school", href: "#about" },
  { label: "Learning", href: "#learning" },
  { label: "Campus life", href: "#campus-life" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader({ logoSrc }: { logoSrc: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <>
      <div className="utility-bar" id="top">
        <span>Welcome to Tulas International School</span>
        <a href="tel:+919837983791">Admissions helpline&nbsp; +91 98379 83791</a>
      </div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Tulas International School, home" onClick={closeMenu}>
          <Image className="school-logo" src={logoSrc} alt="Tulas International School" width={64} height={64} loading="eager" />
        </a>
        <button
          className="menu-toggle"
          ref={menuButtonRef}
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav
          className={`site-nav${menuOpen ? " is-open" : ""}`}
          id="primary-navigation"
          aria-label="Main navigation"
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              closeMenu();
              menuButtonRef.current?.focus();
            }
          }}
        >
          {navigation.map((item) => (
            <a href={item.href} key={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <ActionLink href="https://admission.tis.edu.in/" target="_blank" rel="noreferrer">
            Apply now
          </ActionLink>
        </nav>
      </header>
    </>
  );
}
