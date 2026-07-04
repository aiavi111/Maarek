"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Plus, Star } from "lucide-react";
import { useInView } from "react-intersection-observer";
import type { Dish } from "@/types";
import { useCart } from "@/store/cart";
import { DishBadges } from "@/components/ui/dish-badges";
import { haptic, money } from "@/lib/utils";

interface DishCardProps {
  dish: Dish;
  onOpen: (dish: Dish) => void;
}

/** компактная карточка: две в ряд на телефоне, детали — в шторке блюда */
export function DishCard({ dish, onOpen }: DishCardProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const add = useCart((s) => s.add);
  const [justAdded, setJustAdded] = useState(false);

  const quickAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    haptic(12);
    const size = dish.sizes?.[0];
    add({
      key: `${dish.id}|${size?.id ?? "std"}`,
      dishId: dish.id,
      name: dish.name,
      image: dish.images[0],
      unitPrice: dish.price + (size?.priceDelta ?? 0),
      sizeLabel: size?.label,
      addOns: [],
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

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
      {/* фото */}
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

      {/* текст */}
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

        <div className="mt-auto flex items-center justify-between pt-2.5">
          <p className="text-[16px] font-extrabold tabular-nums tracking-tight">
            {money(dish.price)}
          </p>
          <motion.button
            whileTap={{ scale: 0.82 }}
            transition={{ type: "spring", stiffness: 520, damping: 24 }}
            onClick={quickAdd}
            aria-label={`Добавить «${dish.name}» в корзину`}
            className="grid size-10 place-items-center rounded-full bg-accent text-onfg shadow-lift cursor-pointer"
          >
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.span
                key={justAdded ? "check" : "plus"}
                initial={{ scale: 0.3, opacity: 0, rotate: -90 }}
                animate={{ scale: 1, opacity: 1, rotate: 0 }}
                exit={{ scale: 0.3, opacity: 0, rotate: 90 }}
                transition={{ type: "spring", stiffness: 500, damping: 26 }}
                className="flex"
              >
                {justAdded ? (
                  <Check size={17} strokeWidth={3} />
                ) : (
                  <Plus size={17} strokeWidth={2.8} />
                )}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
