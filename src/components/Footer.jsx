import React from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { PHONE, EMAIL, WAREHOUSE, WHATSAPP_LINK } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-navy-dark text-white/80">
      <div className="mx-auto max-w-[90rem] px-5 py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-secondary text-white font-heading font-extrabold">PI</span>
            <span className="font-heading font-extrabold text-lg text-white">Pakistan Inverters</span>
          </div>
          <p className="text-sm leading-relaxed">Powering Pakistan. One Home at a Time. Authorized Voltrix dealer & solar energy solutions provider.</p>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/products" className="hover:text-secondary">Products</Link></li>
            <li><Link to="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link to="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link to="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> <a href={`tel:${PHONE}`}>{PHONE}</a></li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-secondary" /> <a href={`mailto:${EMAIL}`}>{EMAIL}</a></li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-secondary mt-0.5" /> Warehouse: {WAREHOUSE}</li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-white mb-4">Follow Us</h4>
          <div className="flex gap-3">
            {[Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 hover:bg-secondary transition-colors" aria-label="social">
                <Icon className="h-5 w-5 text-white" />
              </a>
            ))}
          </div>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-lg bg-success px-4 py-2 text-sm font-accent font-semibold text-white">
            WhatsApp: {PHONE}
          </a>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs">
        © {new Date().getFullYear()} Pakistan Inverters — PakistanInverters.com. All rights reserved.
      </div>
    </footer>
  );
}
