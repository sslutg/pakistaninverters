import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { WHATSAPP_LINK } from "@/lib/siteData";
import { MessageCircle } from "lucide-react";

export default function Layout({ children, title, description }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>{title ? `${title} | Pakistan Inverters` : "Pakistan Inverters — Powering Pakistan"}</title>
        <meta name="description" content={description || "Pakistan's trusted Voltrix dealer. Warehouse-direct pricing, nationwide delivery of solar inverters and LiFePO4 batteries."} />
      </Helmet>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-success text-white shadow-lg shadow-success/40 transition-transform hover:scale-110 active:scale-95"
      >
        <MessageCircle className="h-7 w-7" />
        <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-60 animate-ping" />
      </a>
    </div>
  );
}
