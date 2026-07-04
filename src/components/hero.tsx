"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Clock, Instagram, MapPin, Phone, Star } from "lucide-react";
import { INSTAGRAM, PHONE, RESTAURANT, TWO_GIS, WHATSAPP } from "@/data/menu";
import { Button } from "@/components/ui/button";
import { Logo, Mark } from "@/components/logo";
import { plural } from "@/lib/utils";

const spring = { type: "spring", stiffness: 220, damping: 26 } as const;

/** шапка-визитка: баннер, монограмма, контакты, связь в один тап */
export function Hero() {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 380], [0, 110]);

  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
    "Здравствуйте! Хочу забронировать стол в Maarek.",
  )}`;

  return (
    <header className="relative">
      {/* баннер */}
      <div className="relative h-[240px] overflow-hidden lg:h-[320px]">
        <motion.div style={{ y: parallax }} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={RESTAURANT.heroImage}
              alt="Зал ресторана Maarek"
              fill
              priority
              sizes="(max-width: 430px) 100vw, 1440px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-base to-transparent" />
      </div>

      {/* аватар-монограмма */}
      <div className="relative z-10 -mt-12 flex flex-col items-center px-5 text-center">
        <motion.div
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ ...spring, delay: 0.15 }}
          className="grid size-24 place-items-center rounded-full border border-accent/40 bg-card shadow-lift ring-4 ring-base"
        >
          <Mark className="h-9 w-auto text-accent" />
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.25 }}
          className="mt-4"
        >
          <Logo className="justify-center text-[22px] lg:text-[26px] text-fg" />
          <p className="mt-2 text-[14px] font-medium text-mute">
            {RESTAURANT.tagline}
          </p>
          <p className="mt-2 flex items-center justify-center gap-1.5 text-[13.5px] font-medium text-mute">
            <Star size={14} className="fill-star text-star" />
            <span className="font-bold text-fg">{RESTAURANT.rating}</span>
            <span>
              · {RESTAURANT.reviews.toLocaleString("ru-RU")}{" "}
              {plural(RESTAURANT.reviews, ["оценка", "оценки", "оценок"])} в 2ГИС
            </span>
          </p>
        </motion.div>

        {/* инфо-строки */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.35 }}
          className="mt-6 w-full max-w-[560px] overflow-hidden rounded-3xl border border-line bg-card text-left shadow-lift"
        >
          <a
            href={TWO_GIS}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3.5 px-4 py-3.5 active:bg-veil transition-colors"
          >
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
              <MapPin size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="block truncate text-[14px] font-semibold">
                {RESTAURANT.address}
              </span>
              <span className="text-[12px] font-medium text-dim">
                Панорама города · Смотреть в 2ГИС
              </span>
            </span>
            <ArrowUpRight size={16} className="shrink-0 text-dim" />
          </a>
          <div className="border-t border-line" />
          <div className="flex items-center gap-3.5 px-4 py-3.5">
            <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
              <Clock size={18} />
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-1.5 text-[14px] font-semibold">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf/50" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-leaf" />
                </span>
                Открыто · {RESTAURANT.hours}
              </span>
              <span className="text-[12px] font-medium text-dim">
                Ежедневно · завтраки с 11:00
              </span>
            </span>
          </div>
        </motion.div>

        {/* кнопки связи */}
        <motion.div
          initial={{ y: 24, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.45 }}
          className="mt-4 w-full max-w-[560px]"
        >
          <Button size="lg" className="w-full" onClick={() => window.open(wa, "_blank")}>
            Забронировать стол в WhatsApp
          </Button>
          <div className="mt-2.5 grid grid-cols-2 gap-2.5">
            <Button variant="glass" onClick={() => (window.location.href = `tel:${PHONE}`)}>
              <Phone size={17} />
              Позвонить
            </Button>
            <Button variant="glass" onClick={() => window.open(INSTAGRAM, "_blank")}>
              <Instagram size={17} />
              Instagram
            </Button>
          </div>
        </motion.div>
      </div>
    </header>
  );
}
