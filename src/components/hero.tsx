"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BadgeCheck, ChevronDown, Clock, MapPin, Share, Star } from "lucide-react";
import { RESTAURANT } from "@/data/menu";
import { IconButton } from "@/components/ui/icon-button";
import { Logo } from "@/components/logo";
import { plural } from "@/lib/utils";

const spring = { type: "spring", stiffness: 220, damping: 26 } as const;

export function Hero() {
  const { scrollY } = useScroll();
  const parallax = useTransform(scrollY, [0, 460], [0, 140]);
  const [copied, setCopied] = useState(false);

  const share = async () => {
    const data = {
      title: "Maarek — Ресторан",
      url: "https://maarek.vercel.app",
    };
    try {
      if (navigator.share) await navigator.share(data);
      else {
        await navigator.clipboard.writeText(data.url);
        setCopied(true);
        setTimeout(() => setCopied(false), 1400);
      }
    } catch {
      /* закрыли шэринг */
    }
  };

  return (
    <header className="relative">
      {/* ── фото с параллаксом ── */}
      <div className="relative h-[440px] lg:h-[490px] overflow-hidden">
        <motion.div style={{ y: parallax }} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.14, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={RESTAURANT.heroImage}
              alt="Зал ресторана Maarek"
              fill
              priority
              sizes="430px"
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        {/* кремовый градиент: фото мягко перетекает в страницу, текст поверх — чёрный */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-base via-base/70 to-transparent" />

        {/* верхние кнопки */}
        <motion.div
          initial={{ y: -16, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...spring, delay: 0.15 }}
          className="absolute inset-x-0 top-0 pt-safe px-5 lg:px-10 flex items-center justify-between"
        >
          <button
            className="flex items-center gap-1.5 rounded-full bg-black/35 border border-white/20 backdrop-blur-xl px-3.5 h-11 text-[13px] font-semibold text-white cursor-pointer"
            aria-label="Изменить адрес доставки"
          >
            <MapPin size={14} className="text-white/70" />
            Доставка · <span>Дом</span>
            <ChevronDown size={14} className="text-white/70" />
          </button>
          <IconButton
            label={copied ? "Ссылка скопирована" : "Поделиться"}
            onClick={share}
          >
            {copied ? <BadgeCheck size={18} /> : <Share size={17} />}
          </IconButton>
        </motion.div>

        {/* имя ресторана */}
        {/* на ноуте поднимаем текст, чтобы карточка условий его не перекрывала */}
        <div className="absolute inset-x-0 bottom-0 px-5 pb-5 lg:px-10 lg:pb-24 text-fg">
          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.25 }}
          >
            <Logo className="text-[24px] lg:text-[30px] text-fg" />
            <p className="mt-2.5 text-[15px] font-medium text-mute">
              {RESTAURANT.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ...spring, delay: 0.34 }}
            className="mt-3.5 flex flex-wrap items-center gap-x-2 gap-y-1 text-[13.5px] font-medium text-mute"
          >
            <span className="flex items-center gap-1 font-bold text-fg">
              <Star size={14} className="fill-star text-star" />
              {RESTAURANT.rating}
            </span>
            <span>
              ({RESTAURANT.reviews.toLocaleString("ru-RU")}{" "}
              {plural(RESTAURANT.reviews, ["оценка", "оценки", "оценок"])})
            </span>
            <span className="text-dim">·</span>
            <span className="flex items-center gap-1">
              <Clock size={13} />
              {RESTAURANT.deliveryTime}
            </span>
            <span className="text-dim">·</span>
            <span>{RESTAURANT.distance}</span>
          </motion.div>
        </div>
      </div>

      {/* ── адрес: ведёт на карточку в 2ГИС ── */}
      <motion.a
        href="https://2gis.kg/bishkek/firm/70000001104039407"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ y: 32, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileTap={{ scale: 0.98 }}
        transition={{ ...spring, delay: 0.42 }}
        className="relative z-10 mx-5 -mt-1 flex items-center gap-3.5 rounded-3xl border border-line bg-card/85 backdrop-blur-2xl p-4 shadow-lift cursor-pointer lg:mx-auto lg:-mt-14 lg:max-w-[760px]"
        aria-label="Открыть адрес в 2ГИС"
      >
        <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-accent text-onfg">
          <MapPin size={19} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block truncate text-[14.5px] font-bold">
            {RESTAURANT.address}
          </span>
          <span className="mt-0.5 flex items-center gap-1.5 text-[12px] font-medium text-dim">
            <span className="relative flex size-1.5">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-leaf/50" />
              <span className="relative inline-flex size-1.5 rounded-full bg-leaf" />
            </span>
            Открыто · {RESTAURANT.hours} · Смотреть в 2ГИС
          </span>
        </span>
        <ArrowUpRight size={18} className="shrink-0 text-dim" />
      </motion.a>
    </header>
  );
}
