import { cn } from "@/lib/utils";

export function Skeleton({ className }: { className?: string }) {
  return <div className={cn("shimmer rounded-2xl", className)} />;
}

/** повторяет геометрию компактной карточки — без скачков макета */
export function DishCardSkeleton() {
  return (
    <div className="rounded-3xl bg-card border border-line p-2 pb-3">
      <Skeleton className="aspect-square w-full rounded-2xl" />
      <div className="mt-2.5 space-y-2 px-1.5">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-3.5 w-2/3" />
        <div className="flex items-center justify-between pt-1">
          <Skeleton className="h-5 w-14" />
          <Skeleton className="h-10 w-10 rounded-full" />
        </div>
      </div>
    </div>
  );
}
