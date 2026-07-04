"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { Dish } from "@/types";
import { CATEGORIES, fetchMenu, RESTAURANT } from "@/data/menu";
import { Hero } from "@/components/hero";
import { CategoryNav, type CategoryFilter } from "@/components/category-nav";
import { DishGrid } from "@/components/dish-grid";
import { DishSheet } from "@/components/dish-sheet";
import { CartFab } from "@/components/cart/cart-fab";
import { CartSheet } from "@/components/cart/cart-sheet";

export default function HomePage() {
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [activeDish, setActiveDish] = useState<Dish | null>(null);
  const [cartOpen, setCartOpen] = useState(false);

  const { data: dishes, isLoading } = useQuery({
    queryKey: ["menu"],
    queryFn: fetchMenu,
  });

  const filtered = useMemo(() => {
    let list = dishes ?? [];
    if (category !== "all") list = list.filter((d) => d.category === category);
    return [...list].sort(
      (a, b) =>
        Number(b.badges.includes("popular")) - Number(a.badges.includes("popular")),
    );
  }, [dishes, category]);

  const heading =
    category === "all"
      ? "Меню"
      : CATEGORIES.find((c) => c.id === category)?.label ?? "Меню";

  return (
    <>
      <main className="pb-36">
        <Hero />
        <div className="mt-8">
          <CategoryNav active={category} onChange={setCategory} />
        </div>
        <DishGrid
          dishes={filtered}
          loading={isLoading}
          heading={heading}
          onOpen={setActiveDish}
          onReset={() => setCategory("all")}
        />
        <footer className="px-5 pt-12 text-center text-[12px] font-medium text-dim">
          Maarek · Ресторан на 17 этаже · Халал
          <br />
          {RESTAURANT.address} · Ежедневно {RESTAURANT.hours}
        </footer>
      </main>

      <DishSheet dish={activeDish} onClose={() => setActiveDish(null)} />
      <CartFab onOpen={() => setCartOpen(true)} hidden={cartOpen || !!activeDish} />
      <CartSheet open={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
}
