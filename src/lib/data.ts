export type Bouquet = {
  name: string;
  description: string;
  price: string;
  image: string;
  palette: string;
};

export const bouquets: Bouquet[] = [
  {
    name: "Newton Weekend",
    description:
      "Garden roses, lisianthus, ranunculus, and airy seasonal stems arranged with a soft neighborhood-luxury feel.",
    price: "$95–$145",
    image: "/images/bouquet-newton-weekend.svg",
    palette: "Blush, oat, cream",
  },
  {
    name: "Tea House Bouquet",
    description:
      "Quiet, contemplative textures with café-au-lait tones, delicate grasses, and sculptural stems.",
    price: "$85–$135",
    image: "/images/bouquet-tea-house.svg",
    palette: "Tea, ivory, mauve",
  },
  {
    name: "Seasonal Local",
    description:
      "A limited arrangement guided by market finds, Massachusetts-grown stems, and the week’s best color story.",
    price: "$75–$125",
    image: "/images/bouquet-seasonal-local.svg",
    palette: "Market-led",
  },
  {
    name: "Cat Safe Bouquet",
    description:
      "Our signature lily-free design with pet-conscious flower selections and an elegant, low-fragrance profile.",
    price: "$90–$150",
    image: "/images/bouquet-cat-safe.svg",
    palette: "Cream, sage, blush",
  },
  {
    name: "Sympathy & Comfort",
    description:
      "Soft, graceful florals for tender moments, composed without lilies and finished with a handwritten note.",
    price: "$110–$180",
    image: "/images/bouquet-sympathy-comfort.svg",
    palette: "Ivory, linen, fog",
  },
];

export const gallery = [
  {
    src: "/images/gallery-window.svg",
    alt: "Soft neutral bouquet beside a sunlit window",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    src: "/images/gallery-table.svg",
    alt: "Editorial table arrangement with blush and cream florals",
    className: "",
  },
  {
    src: "/images/gallery-wrap.svg",
    alt: "Wrapped bouquet with warm paper and ribbon",
    className: "",
  },
  {
    src: "/images/gallery-catsafe.svg",
    alt: "Cat-conscious lily-free bouquet detail",
    className: "md:col-span-2",
  },
  {
    src: "/images/gallery-studio.svg",
    alt: "Florist studio with small batch floral stems",
    className: "",
  },
];

export const faqs = [
  {
    question: "Are these flowers cat safe?",
    answer:
      "Every bouquet is designed to be lily-free and cat-conscious. No flowers are completely safe for pets to ingest, so arrangements should always be kept away from pets.",
  },
  {
    question: "Do you deliver?",
    answer:
      "Weekend local delivery is planned for Newton and nearby neighborhoods, with pickup options available for each bouquet drop.",
  },
  {
    question: "Are bouquets customizable?",
    answer:
      "Because each drop is small-batch, customization is limited. Share your preferences in the preorder notes and we will accommodate when the week’s stems allow.",
  },
  {
    question: "Why no lilies?",
    answer:
      "Lilies are highly dangerous for cats, even in small exposures. Cat Safe Flowers avoids lilies entirely across all bouquet concepts.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "The launch focus is Newton, Massachusetts, with nearby service to Brookline, Wellesley, Watertown, Needham, and surrounding neighborhoods as availability permits.",
  },
];

export const steps = [
  {
    title: "Preorder by Wednesday",
    description:
      "Join the weekly list and reserve from the upcoming weekend bouquet drop before stems are sourced.",
  },
  {
    title: "Weekend arrangement",
    description:
      "Bouquets are composed in small batches for local pickup or thoughtful Newton-area delivery.",
  },
  {
    title: "Enjoy fresh flowers",
    description:
      "Bring home elegant lily-free florals designed for pet-conscious households and calm interiors.",
  },
];
