"use client";

import { useState, useEffect } from 'react';
import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/layout/Navbar";
import MobileNavbar from "@/components/layout/MobileNavbar";
import Footer from "@/components/layout/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import FloatingWhatsApp from '@/components/ui/FloatingWhatsappButton';
import WorkshopPopup from "@/components/ui/WorkshopPopup";
// import ScrollHandler from "./handler/ScrollHandler";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // whether animation should happen only once
    });
  }, []);

  // Close mobile nav on window resize if width >= 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isMobileNavOpen) {
        setIsMobileNavOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileNavOpen]);

  return (
    <html lang="en">
      <body>
        <div
          className={`mobileOverlay ${isMobileNavOpen ? 'open' : ''}`}
          onClick={toggleMobileNav}
        />
        <main className={`main-content ${isMobileNavOpen ? 'pushed' : ''}`}>
          <Navbar onMobileNavOpen={toggleMobileNav} isMobileNavOpen={isMobileNavOpen}
            className={`${isMobileNavOpen ? 'pushed' : ''}`} />
          <MobileNavbar isOpen={isMobileNavOpen} onClose={() => setIsMobileNavOpen(false)} />
          {/* <ScrollHandler />  */}
          {children}
          <Footer />
          <FloatingWhatsApp />
          <WorkshopPopup />
        </main>
      </body>
    </html>
  );
}
