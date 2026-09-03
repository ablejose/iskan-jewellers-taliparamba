import type { BrandConfig } from "@/types/brand";

export const BRAND: BrandConfig = {
  businessName: "Iskan Jewellers",
  tagline: "The Biggest Lightweight Jewellery Collection in Taliparamba",
  description: "Iskan Jewellers is Taliparamba's trusted destination for exquisite gold, diamond, and silver jewellery. Serving Taliparamba and the surrounding regions of Kannur with timeless craftsmanship for every celebration.",

  logo: "/icons/logo.svg",
  favicon: "/favicon.ico",

  heroVideo: "https://res.cloudinary.com/kmbdkpu1/video/upload/v1787046807/jewellery/iskan-jewellers-taliparamba/hero.mp4",

  storyVideos: [
    {
      quote: "ലാളിത്യത്തിലെ പൂർണ്ണത.",
      description: "അണിയാൻ തീരെ ഭാരമില്ലാത്ത, എന്നാൽ കണ്ണഞ്ചിപ്പിക്കുന്ന ഡിസൈനുകൾ. നിങ്ങളുടെ ഓരോ സാധാരണ ദിവസത്തെയും മനോഹരമാക്കാൻ ഇവ മതിയാകും.",
      video: "https://res.cloudinary.com/kmbdkpu1/video/upload/v1786657965/jewellery/iskan-jewellers-taliparamba/video1.mp4",
    },
    {
      quote: "കൈകളിൽ വിരിയുന്ന വിസ്മയം.",
      description: "ഓരോ ആഭരണവും ഓരോ കലാരൂപമാണ്. അതിസൂക്ഷ്മമായി, തികഞ്ഞ പൂർണ്ണതയോടെ രൂപപ്പെടുത്തിയെടുത്തവ. നിങ്ങളുടെ സ്വപ്നങ്ങൾക്ക് സ്വർണ്ണത്തിൽ ജീവൻ വയ്ക്കുമ്പോൾ.",
      video: "https://res.cloudinary.com/kmbdkpu1/video/upload/v1787046807/jewellery/iskan-jewellers-taliparamba/hero.mp4",
      segments: { startAt: 0, loopEnd: 4 },
    },
    {
      quote: "തലിപ്പറമ്പിൻ്റെ ഹൃദയത്തിൽ നിന്ന്.",
      description: "ഈ നാടിൻ്റെ പൈതൃകവും പുതുമയും ഒത്തുചേരുന്ന ആഭരണങ്ങൾ. തലമുറകളായി നിങ്ങൾ നൽകുന്ന വിശ്വാസത്തിന് സ്വർണ്ണത്തേക്കാൾ തിളക്കമുണ്ട്.",
      video: "https://res.cloudinary.com/kmbdkpu1/video/upload/v1786657967/jewellery/iskan-jewellers-taliparamba/video3.mp4",
    },
  ],

  storeImages: [
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657958/jewellery/iskan-jewellers-taliparamba/store1.webp",
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657960/jewellery/iskan-jewellers-taliparamba/store2.webp",
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657961/jewellery/iskan-jewellers-taliparamba/store3.webp",
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657962/jewellery/iskan-jewellers-taliparamba/store4.webp",
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657964/jewellery/iskan-jewellers-taliparamba/store5.webp",
    "https://res.cloudinary.com/kmbdkpu1/image/upload/v1786657964/jewellery/iskan-jewellers-taliparamba/store6.webp",
  ],

  // "Our Collections" banners. Repo-hosted webp for now — to serve from
  // Cloudinary later, upload each file to
  // jewellery/iskan-jewellers-taliparamba/ and swap in the Cloudinary URL.
  collections: [
    {
      name: "Noor",
      label: "Diamond Collection",
      image: "/collections/noor-diamond.webp",
    },
    {
      name: "Sara",
      label: "22K Gold Ornaments",
      image: "/collections/sara-gold.webp",
    },
    {
      name: "Jia",
      label: "18K Collection",
      image: "/collections/jia-gold.webp",
    },
    {
      name: "Liv",
      label: "Silver Collection",
      image: "/collections/liv-silver.webp",
    },
  ],

  address: "Opposite Bus Stand (Town Square), N.H. Thaliparamba",
  city: "Taliparamba",
  state: "Kerala",
  pincode: "670141",

  phone: "7558027916, 9400432433",
  whatsapp: "917558027916",
  email: "iskanjewellerstpba@gmail.com",

  mapsLink: "https://share.google/1uig03hNOhvTT6x39",

  openingHours: "Mon–Sat: 9:30 AM – 7:30 PM",

  instagram: "https://www.instagram.com/iskan_jewellers",
  facebook: "https://www.facebook.com/p/Iskan-Jewellers-100090123894295",

  seo: {
    title: "Iskan Jewellers | Gold, Silver & Diamond Store in Taliparamba",
    description:
      "Gold, silver and diamond jewellery store in Taliparamba, Kerala. Visit Iskan Jewellers opposite the Bus Stand (Town Square) for timeless jewellery and trusted craftsmanship.",
    keywords: [
      "Iskan Jewellers",
      "jewellery in Taliparamba",
      "gold silver and diamond store Taliparamba",
      "gold jewellery Taliparamba",
      "silver jewellery Taliparamba",
      "diamond jewellery Taliparamba",
      "jewellery store Taliparamba",
      "jewellery shop Taliparamba Kannur",
      "Taliparamba gold shop",
    ],
    canonical: "https://iskanjewellers.com",
    ogImage: "/og-image.jpg",
  },

  faq: [],

  whatsappMessage: "Hello Iskan Jewellers, I'd like to know more about your jewellery collections.",
};
