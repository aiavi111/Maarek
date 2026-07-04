"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import type { Dish } from "@/types";
import { DishBadges } from "@/components/ui/dish-badges";
import { money } from "@/lib/utils";

interface DishCardProps {
  dish: Dish;
  onOpen: (dish: Dish) => void;
}

/** компактная карточка-витрина: тап открывает блюдо, заказ — через WhatsApp */
export function DishCard({ dish, onOpen }: DishCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.article
      ref={ref}
      initial={false}
      animate={
        inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }
      }
      transition={{ type: "spring", stiffness: 240, damping: 28 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => onOpen(dish)}
      className="group flex h-full cursor-pointer flex-col rounded-3xl border border-line bg-card p-2 pb-3 shadow-lift"
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onOpen(dish)}
      aria-label={`${dish.name}, ${money(dish.price)}`}
    >
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-card2">
        <Image
          src={dish.images[0]}
          alt={dish.name}
          fill
          loading="lazy"
          sizes="(max-width: 430px) 50vw, 320px"
          className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06] group-active:scale-[1.04]"
        />
        <DishBadges badges={dish.badges.slice(0, 1)} className="absolute left-2 top-2" />
        <span className="absolute bottom-2 left-2 rounded-full bg-black/45 border border-white/15 backdrop-blur-md px-2 py-0.5 text-[10px] font-semibold text-white/95 tabular-nums">
          {dish.kcal} ккал
        </span>
      </div>

      <div className="flex min-h-0 flex-1 flex-col px-1.5 pt-2.5">
        <h3 className="line-clamp-2 text-[14px] font-bold leading-snug tracking-tight">
          {dish.name}
        </h3>
        <p className="mt-1 flex items-center gap-1 text-[11.5px] font-semibold text-mute">
          <Star size={11} className="fill-star text-star" />
          {dish.rating}
          <span className="font-medium text-dim">({dish.reviews})</span>
          <span className="text-dim">· {dish.weight} г</span>
        </p>
        <p className="mt-auto pt-2.5 text-[16px] font-extrabold tabular-nums tracking-tight text-accent">
          {money(dish.price)}
        </p>
      </div>
    </motion.article>
  );
}
