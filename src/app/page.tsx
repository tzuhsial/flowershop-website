import { AnimatedSection } from "@/components/AnimatedSection";
import { Badge } from "@/components/Badge";
import { BouquetCard } from "@/components/BouquetCard";
import { ButtonLink } from "@/components/ButtonLink";
import { SectionHeading } from "@/components/SectionHeading";
import { bouquets, faqs, gallery, steps } from "@/lib/data";

const navItems = ["Bouquets", "Why Cat Safe", "How It Works", "FAQ"];

export default function Home() {
  return (
    <main className="soft-noise overflow-hidden">
      <div className="relative z-10">
        <header className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
          <a href="#" className="flex items-center gap-3" aria-label="Cat Safe Flowers home">
            <span className="grid size-11 place-items-center rounded-full border border-stone-200/80 bg-white/65 shadow-sm backdrop-blur">
              <img src="/logo.svg" alt="" width={27} height={27} />
            </span>
            <span className="font-serif text-2xl font-semibold tracking-[-0.04em] text-stone-950">
              Cat Safe Flowers
            </span>
          </a>
          <nav className="hidden items-center gap-7 text-sm font-medium text-stone-700 lg:flex">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                className="transition hover:text-stone-950"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#preorder"
            className="hidden rounded-full border border-stone-300/70 bg-white/45 px-5 py-2.5 text-sm font-semibold text-stone-950 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/70 md:inline-flex"
          >
            Join Drop
          </a>
        </header>

        <section className="mx-auto grid min-h-[calc(100vh-84px)] max-w-7xl items-center gap-10 px-5 pb-20 pt-8 md:px-8 lg:grid-cols-[0.92fr_1.08fr] lg:pb-28">
          <div className="max-w-2xl">
            <Badge variant="rose">Newton, Massachusetts · Weekend Drops</Badge>
            <h1 className="mt-8 font-serif text-6xl leading-[0.9] tracking-[-0.065em] text-stone-950 md:text-8xl lg:text-[8.7rem]">
              Cat Safe Flowers
            </h1>
            <p className="mt-7 max-w-xl text-xl leading-8 text-stone-600 md:text-2xl md:leading-9">
              Premium lily-free bouquets for thoughtful pet households.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#preorder">Join the Weekend Drop</ButtonLink>
              <ButtonLink href="#why-cat-safe" variant="light">
                Read the safety note
              </ButtonLink>
            </div>
            <div className="mt-10 grid max-w-lg grid-cols-3 divide-x divide-stone-300/70 rounded-[1.5rem] border border-white/70 bg-white/42 p-4 text-center shadow-sm backdrop-blur">
              <div>
                <p className="font-serif text-3xl text-stone-950">0</p>
                <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Lilies
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-stone-950">5</p>
                <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Drop Styles
                </p>
              </div>
              <div>
                <p className="font-serif text-3xl text-stone-950">1</p>
                <p className="mt-1 text-[0.66rem] font-bold uppercase tracking-[0.2em] text-stone-500">
                  Small Batch
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-8 top-8 hidden h-52 w-52 rounded-full bg-blush-100/80 blur-3xl md:block" />
            <div className="absolute -bottom-10 right-6 h-48 w-48 rounded-full bg-sage-100/80 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/55 p-3 shadow-[0_32px_110px_rgba(87,73,62,0.18)] backdrop-blur">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-stone-100 lg:aspect-[5/6]">
                <img
                  src="/images/hero-bouquet.svg"
                  alt="Editorial lily-free bouquet in warm neutral tones"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-5 bottom-5 rounded-[1.5rem] border border-white/45 bg-white/35 p-5 text-stone-950 shadow-2xl backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-stone-700">
                    This weekend
                  </p>
                  <div className="mt-2 flex items-end justify-between gap-4">
                    <p className="font-serif text-3xl leading-none tracking-[-0.04em]">
                      Blush & Sage Drop
                    </p>
                    <p className="text-sm font-semibold">Preorder only</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <AnimatedSection
          id="bouquets"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
        >
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeading
              eyebrow="Featured bouquets"
              title="Small-batch designs with a quiet sense of occasion."
              description="Each concept is intentionally composed without lilies and released through preorder-only weekend drops."
            />
            <p className="max-w-sm text-sm leading-7 text-stone-600">
              Mock launch menu shown for positioning, pricing, and product direction.
            </p>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {bouquets.map((bouquet) => (
              <BouquetCard key={bouquet.name} bouquet={bouquet} />
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="why-cat-safe"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
        >
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-white/70 bg-white/48 p-8 shadow-[0_24px_80px_rgba(87,73,62,0.08)] backdrop-blur md:p-10">
              <SectionHeading
                eyebrow="Why cat safe"
                title="No lilies. No ambiguity. Designed for pet-conscious homes."
                description="Lilies are dangerous for cats, and many households do not realize how serious the risk can be. Cat Safe Flowers avoids lilies entirely and builds each bouquet around thoughtful, elegant alternatives."
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Lily-free sourcing standard across every bouquet concept.",
                "Designs planned for homes that love both flowers and cats.",
                "Premium stems, soft palettes, and refined editorial shapes.",
                "Transparent disclaimers and calm guidance without fear-based marketing.",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-[1.7rem] border border-white/70 bg-white/56 p-6 shadow-sm backdrop-blur"
                >
                  <p className="font-serif text-5xl leading-none text-rose-900/45">“</p>
                  <p className="mt-2 text-sm leading-7 text-stone-600">{item}</p>
                </div>
              ))}
              <div className="rounded-[1.7rem] border border-rose-200 bg-rose-50/78 p-6 shadow-sm sm:col-span-2">
                <p className="text-sm font-semibold leading-7 text-rose-950">
                  No flowers are completely safe for pets to ingest. Keep all flowers away from pets.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="how-it-works"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
        >
          <SectionHeading
            eyebrow="How it works"
            title="A slower, more intentional way to buy flowers."
            description="Preorder-only drops keep the experience focused, fresh, and boutique rather than mass-market."
            align="center"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-[2rem] border border-white/70 bg-white/52 p-7 shadow-[0_24px_80px_rgba(87,73,62,0.07)] backdrop-blur"
              >
                <p className="font-serif text-5xl text-sage-900/35">0{index + 1}</p>
                <h3 className="mt-8 font-serif text-3xl tracking-[-0.035em] text-stone-950">
                  {step.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{step.description}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <div className="grid overflow-hidden rounded-[2.5rem] border border-white/70 bg-stone-950 shadow-[0_30px_100px_rgba(41,37,36,0.18)] lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[26rem]">
              <img
                src="/images/about-studio.svg"
                alt="Newton floral studio with neutral arrangements"
                className="absolute inset-0 h-full w-full object-cover opacity-90"
              />
            </div>
            <div className="p-8 text-cream-50 md:p-12 lg:p-16">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-cream-100/65">
                About the studio
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-[1.05] tracking-[-0.04em] md:text-6xl">
                Flowers for people who read the label first.
              </h2>
              <div className="mt-8 space-y-5 text-base leading-8 text-cream-100/78">
                <p>
                  Cat Safe Flowers began with a couple in Newton who loved bringing flowers
                  home, but wanted the ritual to feel more considered while living with cats.
                </p>
                <p>
                  The studio is built around intentional sourcing, lily-free design, and a
                  gentle point of view: fewer arrangements, better stems, and bouquets that
                  feel quietly special on a weekend table.
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24">
          <SectionHeading
            eyebrow="Gallery"
            title="Editorial florals for calm, lived-in rooms."
            description="A soft neutral visual direction for Pinterest, Instagram, and launch photography."
          />
          <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-4">
            {gallery.map((item) => (
              <div
                key={item.src}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/50 shadow-sm ${item.className}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="faq"
          className="mx-auto max-w-5xl px-5 py-16 md:px-8 md:py-24"
        >
          <SectionHeading
            eyebrow="FAQ"
            title="Helpful notes before the weekend drop."
            align="center"
          />
          <div className="mt-10 divide-y divide-stone-200/80 overflow-hidden rounded-[2rem] border border-white/70 bg-white/58 shadow-[0_24px_80px_rgba(87,73,62,0.08)] backdrop-blur">
            {faqs.map((faq) => (
              <details key={faq.question} className="group p-6 open:bg-white/45 md:p-8">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-2xl tracking-[-0.025em] text-stone-950">
                  {faq.question}
                  <span className="text-3xl leading-none transition group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-stone-600 md:text-base">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="preorder"
          className="mx-auto max-w-7xl px-5 py-16 md:px-8 md:py-24"
        >
          <div className="grid gap-8 rounded-[2.5rem] border border-white/70 bg-white/58 p-5 shadow-[0_30px_100px_rgba(87,73,62,0.12)] backdrop-blur md:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
            <div className="rounded-[2rem] bg-cream-50/70 p-8 md:p-10">
              <SectionHeading
                eyebrow="Contact / Sales / Order"
                title="Start with a quiet note."
                description="Use one refined contact flow for weekend preorders, private sales inquiries, and thoughtful reach-outs. Form UI only for this static launch."
              />
              <div className="mt-8 grid gap-3">
                {[
                  ["Order", "Reserve a weekend bouquet or ask about pickup and delivery."],
                  ["Sales", "Plan a gift, small business order, or recurring flowers."],
                  ["Reach Out", "Ask a question before joining the drop list."],
                ].map(([title, description]) => (
                  <div
                    key={title}
                    className="rounded-[1.25rem] border border-white/80 bg-white/58 p-4 shadow-sm"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-rose-900/60">
                      {title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-[1.5rem] border border-sage-200 bg-sage-50/80 p-5">
                <p className="text-sm font-semibold leading-7 text-sage-900">
                  Launch note: weekend drops are preorder-only, with limited quantities
                  arranged after Wednesday reservations close.
                </p>
              </div>
            </div>
            <form className="grid gap-4" aria-label="Contact, sales, and order interest form">
              <label className="space-y-2 text-sm font-semibold text-stone-700">
                What can we help with?
                <select className="field" name="requestType" defaultValue="">
                  <option value="" disabled>
                    Select request type
                  </option>
                  <option>Order a weekend bouquet</option>
                  <option>Sales inquiry / gifting</option>
                  <option>General reach-out</option>
                  <option>Sympathy or comfort flowers</option>
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-stone-700">
                  Name
                  <input className="field" name="name" placeholder="Your name" />
                </label>
                <label className="space-y-2 text-sm font-semibold text-stone-700">
                  Email
                  <input className="field" name="email" placeholder="you@example.com" type="email" />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-stone-700">
                Bouquet interest
                <select className="field" name="bouquet" defaultValue="">
                  <option value="" disabled>
                    Choose a bouquet style
                  </option>
                  {bouquets.map((bouquet) => (
                    <option key={bouquet.name}>{bouquet.name}</option>
                  ))}
                </select>
              </label>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="space-y-2 text-sm font-semibold text-stone-700">
                  Pickup or delivery
                  <select className="field" name="fulfillment" defaultValue="">
                    <option value="" disabled>
                      Select preference
                    </option>
                    <option>Pickup in Newton</option>
                    <option>Local delivery</option>
                    <option>Not sure yet</option>
                  </select>
                </label>
                <label className="space-y-2 text-sm font-semibold text-stone-700">
                  Ideal timing
                  <input className="field" name="timing" placeholder="This weekend, date, or flexible" />
                </label>
              </div>
              <label className="space-y-2 text-sm font-semibold text-stone-700">
                Notes
                <textarea
                  className="field min-h-36 resize-none"
                  name="notes"
                  placeholder="Occasion, quantity, budget, color preferences, delivery neighborhood, or anything we should know..."
                />
              </label>
              <button
                type="button"
                className="mt-2 rounded-full bg-stone-950 px-7 py-4 text-sm font-semibold tracking-[0.08em] text-stone-50 shadow-[0_18px_45px_rgba(41,37,36,0.22)] transition duration-300 hover:-translate-y-0.5 hover:bg-stone-800"
              >
                Send Inquiry
              </button>
              <p className="text-center text-xs leading-6 text-stone-500">
                Static launch form — connect to email, CRM, Shopify, or Stripe checkout next.
              </p>
            </form>
          </div>
        </AnimatedSection>

        <footer className="mx-auto flex max-w-7xl flex-col gap-5 px-5 pb-10 pt-4 text-sm text-stone-500 md:flex-row md:items-center md:justify-between md:px-8">
          <p>© 2026 Cat Safe Flowers. Newton, Massachusetts.</p>
          <p>No flowers are completely safe for pets to ingest. Keep all flowers away from pets.</p>
        </footer>
      </div>
    </main>
  );
}
