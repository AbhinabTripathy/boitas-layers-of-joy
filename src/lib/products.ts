import arisa from "@/assets/Arisa.png.asset.json";
import chuda from "@/assets/Chuda_Mixture.png.asset.json";
import badi from "@/assets/Fried_Badi.png.asset.json";
import khajaMasala from "@/assets/Khaja_Masala.png.asset.json";
import nimki from "@/assets/Nimki.png.asset.json";
import moa from "@/assets/Moa_Bites.png.asset.json";

export type WeightOption = { label: string; price: number };

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  category: "Sweets" | "Savouries";
  image: string;
  shortDescription: string;
  description: string;
  ingredients: string;
  shelfLife: string;
  storage: string;
  story: string;
  weights: WeightOption[];
};

export const products: Product[] = [
  {
    slug: "arisa",
    name: "Arisa",
    tagline: "Just the way you remember",
    category: "Sweets",
    image: arisa.url,
    shortDescription: "Traditional rice-flour and jaggery pitha, deep-fried to golden perfection.",
    description:
      "Arisa Pitha is one of Odisha's most cherished temple offerings — soft on the inside, crisp on the outside, sweetened with pure jaggery and finished with a sprinkle of sesame.",
    ingredients: "Rice flour, jaggery, sesame seeds, refined oil.",
    shelfLife: "15 days from date of packaging.",
    storage: "Store in a cool, dry place. Refrigerate after opening for best freshness.",
    story:
      "Arisa is inseparable from Odia festivals — Raja, Manabasa Gurubar and the offerings of Jagannath temple all begin with this humble jaggery pitha, made by grandmothers with unhurried hands.",
    weights: [
      { label: "250g", price: 220 },
      { label: "500g", price: 400 },
    ],
  },
  {
    slug: "moa-bites",
    name: "Moa Bites",
    tagline: "Little parcels of joy",
    category: "Sweets",
    image: moa.url,
    shortDescription: "Puffed rice and jaggery bound into bite-sized bursts of nostalgia.",
    description:
      "Inspired by the beloved Joynagar tradition and reimagined for modern snacking, our Moa Bites are light, crunchy and glazed in slow-cooked jaggery.",
    ingredients: "Puffed rice, jaggery, ghee, cardamom.",
    shelfLife: "30 days from date of packaging.",
    storage: "Keep in an airtight container away from moisture.",
    story:
      "In eastern India, moa is the sweet that arrives with winter — jars of it passed down between neighbours. We shrunk them into bites so joy travels easier.",
    weights: [
      { label: "200g", price: 240 },
      { label: "400g", price: 440 },
    ],
  },
  {
    slug: "khaja-masala",
    name: "Khaja Masala Crunch",
    tagline: "Layered. Fiery. Unforgettable.",
    category: "Savouries",
    image: khajaMasala.url,
    shortDescription: "Flaky layered khaja dusted with our house masala.",
    description:
      "A savoury reinvention of Puri's iconic khaja — folded thirty-two times, fried till golden, then finished with a bold masala blend of chilli, cumin and rock salt.",
    ingredients: "Refined flour, refined oil, red chilli, cumin, black salt, spices.",
    shelfLife: "45 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "The khaja belongs to the sacred kitchens of Puri. We keep the craft — thirty-two layers, no shortcuts — and give it a modern, snackable twist.",
    weights: [
      { label: "150g", price: 180 },
      { label: "300g", price: 340 },
    ],
  },
  {
    slug: "nimki",
    name: "Nimki",
    tagline: "Crisp. Salty. Unapologetically addictive.",
    category: "Savouries",
    image: nimki.url,
    shortDescription: "Diamond-shaped savoury crackers, spiced with cumin and finished with rock salt.",
    description:
      "Our Nimki is the quintessential Odia tea-time companion — crisp, diamond-shaped crackers kneaded with cumin and carom seeds, then fried to a delicate golden finish and dusted with rock salt. Simple, honest and impossible to stop at one.",
    ingredients: "Refined flour, cumin seeds, carom seeds (ajwain), rock salt, refined oil.",
    shelfLife: "45 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "In every Odia household, the evening tea is incomplete without a bowl of nimki. Mothers would roll and cut diamond shapes by hand while the oil warmed on the stove — a ritual we preserve in every batch.",
    weights: [
      { label: "150g", price: 160 },
      { label: "300g", price: 300 },
    ],
  },
  {
    slug: "chuda-mixture",
    name: "Chuda Mixture",
    tagline: "The everyday indulgence",
    category: "Savouries",
    image: chuda.url,
    shortDescription: "Flattened rice tossed with peanuts, curry leaves and warm spices.",
    description:
      "Our Chuda Mixture layers roasted chuda with peanuts, cashews, coconut, curry leaves and a hint of turmeric — the perfect balance of light, savoury and aromatic.",
    ingredients: "Flattened rice, peanuts, cashews, coconut, curry leaves, spices, refined oil.",
    shelfLife: "45 days from date of packaging.",
    storage: "Keep sealed in a dry, airy container.",
    story:
      "In Odia homes, chuda is breakfast, tea-time and midnight snack. Ours captures that quiet daily ritual in every handful.",
    weights: [
      { label: "200g", price: 160 },
      { label: "400g", price: 300 },
    ],
  },
  {
    slug: "fried-badi",
    name: "Fried Badi",
    tagline: "Crunchy heirloom nuggets",
    category: "Savouries",
    image: badi.url,
    shortDescription: "Sun-dried lentil nuggets fried into crisp, savoury crunch.",
    description:
      "Hand-shaped, sun-dried under the Odia sun for days and then fried till they blush golden. A traditional accompaniment reborn as a modern snack.",
    ingredients: "Black gram (urad dal), spices, refined oil, salt.",
    shelfLife: "60 days from date of packaging.",
    storage: "Store in an airtight container in a cool, dry place.",
    story:
      "Every Odia terrace tells the same summer story — women shaping badi on cotton cloths, drying it under an unforgiving sun. We honour that ritual, one crunchy bite at a time.",
    weights: [
      { label: "200g", price: 190 },
      { label: "400g", price: 360 },
    ],
  },
];

export const getProduct = (slug: string) => products.find((p) => p.slug === slug);

export const WHATSAPP_NUMBER = "919778708100";

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
