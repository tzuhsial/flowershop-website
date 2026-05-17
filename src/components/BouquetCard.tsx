import type { Bouquet } from "@/lib/data";
import { Badge } from "./Badge";

type BouquetCardProps = {
  bouquet: Bouquet;
};

export function BouquetCard({ bouquet }: BouquetCardProps) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-white/70 bg-white/70 shadow-[0_24px_80px_rgba(87,73,62,0.08)] backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(87,73,62,0.15)]">
      <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
        <img
          src={bouquet.image}
          alt={`${bouquet.name} bouquet placeholder`}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <div className="absolute left-4 top-4">
          <Badge variant="sage">Lily-Free</Badge>
        </div>
        <div className="absolute bottom-4 left-4 right-4 rounded-[1.25rem] border border-white/50 bg-white/38 px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-stone-800 shadow-lg backdrop-blur">
          {bouquet.availability}
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-serif text-2xl tracking-[-0.03em] text-stone-950">
            {bouquet.name}
          </h3>
          <p className="shrink-0 text-sm font-semibold text-stone-900">
            {bouquet.price}
          </p>
        </div>
        <p className="text-sm leading-7 text-stone-600">{bouquet.description}</p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-blush-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-rose-900/60">
            {bouquet.occasion}
          </span>
          <span className="rounded-full bg-sage-50 px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-sage-900/70">
            {bouquet.palette}
          </span>
        </div>
      </div>
    </article>
  );
}
