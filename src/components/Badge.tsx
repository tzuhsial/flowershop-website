type BadgeProps = {
  children: React.ReactNode;
  variant?: "light" | "sage" | "rose";
};

const variants = {
  light: "border-white/50 bg-white/45 text-stone-700",
  sage: "border-sage-200 bg-sage-100/80 text-sage-900",
  rose: "border-rose-200 bg-rose-50 text-rose-900",
};

export function Badge({ children, variant = "light" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.22em] backdrop-blur ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
