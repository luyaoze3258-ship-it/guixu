"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function MobileStickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const update = () => {
      const passedHero = window.scrollY > 600;
      const contact = document.getElementById("contact");
      const contactInView =
        !!contact &&
        contact.getBoundingClientRect().top < window.innerHeight - 120;
      setShow(passedHero && !contactInView);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`pointer-events-none fixed inset-x-0 bottom-0 z-40 transition-transform duration-300 md:hidden ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      aria-hidden={!show}
    >
      <div className="pointer-events-auto border-t border-ink-100 bg-white/95 px-4 pb-[max(env(safe-area-inset-bottom),12px)] pt-3 shadow-[0_-6px_24px_rgba(15,23,42,0.06)] backdrop-blur">
        <Link
          href="/#contact"
          className="btn-primary w-full justify-center"
        >
          预约 30 分钟 AI 场景诊断 <ArrowRight className="size-4" />
        </Link>
      </div>
    </div>
  );
}
