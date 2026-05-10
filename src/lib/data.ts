export type Bouquet = {
  name: string;
  description: string;
  price: string;
  image: string;
  palette: string;
  occasion: string;
  availability: string;
};

export const bouquets: Bouquet[] = [
  {
    name: "Newton Weekend",
    description:
      "Garden roses, lisianthus, ranunculus, and airy seasonal stems arranged with a soft neighborhood-luxury feel.",
    price: "$95–$145",
    image: "/images/boutique-newton-weekend.svg",
    palette: "Blush, oat, cream",
    occasion: "Host gift",
    availability: "Weekend drop",
  },
  {
    name: "Mews & Meadow",
    description:
      "A loosened meadow-style bouquet with blush stock, snapdragon shapes, textural grasses, and cat-conscious seasonal stems.",
    price: "$85–$130",
    image: "/images/boutique-mews-meadow.svg",
    palette: "Meadow blush, sage",
    occasion: "Everyday luxury",
    availability: "Limited stems",
  },
  {
    name: "Tea House Bouquet",
    description:
      "Quiet, contemplative textures with café-au-lait tones, delicate grasses, and sculptural stems for calm interiors.",
    price: "$90–$140",
    image: "/images/boutique-tea-house.svg",
    palette: "Tea, ivory, mauve",
    occasion: "Quiet gesture",
    availability: "Preorder only",
  },
  {
    name: "Sunday Table",
    description:
      "A low, architectural table arrangement for dinner at home, built with lily-free seasonal flowers and refined foliage.",
    price: "$120–$180",
    image: "/images/boutique-sunday-table.svg",
    palette: "Linen, rose, olive",
    occasion: "Entertaining",
    availability: "By request",
  },
  {
    name: "The Cat Safe Signature",
    description:
      "The studio’s signature lily-free bouquet with premium seasonal focal flowers and an elegant, low-fragrance profile.",
    price: "$100–$160",
    image: "/images/boutique-signature.svg",
    palette: "Cream, sage, blush",
    occasion: "Signature order",
    availability: "Weekly favorite",
  },
  {
    name: "Sympathy & Comfort",
    description:
      "Soft, graceful florals for tender moments, composed without lilies and finished with a handwritten note.",
    price: "$110–$185",
    image: "/images/boutique-sympathy-comfort.svg",
    palette: "Ivory, linen, fog",
    occasion: "Comfort gift",
    availability: "48-hour notice",
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
