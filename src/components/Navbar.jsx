import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { PHONE, WHATSAPP_LINK } from "@/lib/siteData";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-border">
      <div className="mx-auto max-w-[90rem] px-5 flex items-center justify-between h-[72px]">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-white font-heading font-extrabold">PI</span>
          <span className="font-heading font-extrabold text-lg leading-none text-primary">
            Pakistan<span className="text-secondary">Inverters</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-accent text-sm transition-colors hover:text-secondary ${isActive ? "text-secondary" : "text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href={`tel:${PHONE}`} className="flex items-center gap-2 text-sm font-accent text-primary">
            <Phone className="h-4 w-4 text-secondary" /> {PHONE}
          </a>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-secondary px-4 py-2 text-sm font-accent font-semibold text-white transition-transform hover:-translate-y-0.5 active:scale-95"
          >
            Get Free Quote
          </a>
        </div>

        <button className="lg:hidden text-primary" onClick={() => setOpen((v) => !v)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-white px-5 py-4 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-accent py-1 ${isActive ? "text-secondary" : "text-primary"}`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-2 rounded-lg bg-secondary px-4 py-3 text-center font-accent font-semibold text-white">
            Get Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
