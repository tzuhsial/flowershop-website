import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "dark" | "light";
};

export function ButtonLink({
  href,
  children,
  variant = "dark",
}: ButtonLinkProps) {
  const classes =
    variant === "dark"
      ? "bg-stone-950 text-stone-50 shadow-[0_18px_45px_rgba(41,37,36,0.22)] hover:bg-stone-800"
      : "border border-white/50 bg-white/35 text-stone-900 backdrop-blur hover:bg-white/55";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${classes}`}
    >
      {children}
    </Link>
  );
}
