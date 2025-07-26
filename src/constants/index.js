import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Book Turf",
    url: "#pricing",
  },
  {
    id: "2",
    title: "About us",
    url: "#how-to-use",
  },
  {
    id: "3",
    title: "Roadmap",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "New account",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const pricing = [
  {
    id: "0",
    title: "1 hour",
    description: "An hour of un-disturbed playtime",
    price: "999",
    features: [
      "Experiece the best turf in town",
      "Personalized recommendations in cafeteria",
      "Extension of playtime available for a discounted price",
    ],
  },
  {
    id: "1",
    title: "2 hours",
    description: "Advanced AI chatbot, priority support, analytics dashboard",
    price: "1800",
    features: [
      "Enjoy cafeteria services",
      "Play non-stop on imported quality grass",
      "Extension of playtime available for a discounted price",
    ],
  },
  {
    id: "2",
    title: "4 hours",
    description: "Competetive mode playtime",
    price: 3500,
    features: [
      "Discounted prices for cafeteria and other game services",
      "Booking 3 times a week under this offer gives bonus one hour",
      "Perks and vouchers added to account for future use",
    ],
  },
];

export const brainwaveServices = [
  "Photo generating",
  "Photo enhance",
  "Seamless Integration",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
    text: collabText,
  },
  {
    id: "1",
    title: "Smart Automation",
  },
  {
    id: "2",
    title: "Top-notch Security",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];



export const benefits = [
  {
    id: "0",
    title: "Book Instantly",
    text: "Reserve your cricket turf in seconds with our easy-to-use booking system.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
  },
  {
    id: "1",
    title: "Premium Turf Quality",
    text: "Play on well-maintained imported quality grass, professional-grade pitches for the best cricketing experience.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    light: true,
  },
  {
    id: "2",
    title: "Flexible Timings",
    text: "Choose your preferred slots—morning, afternoon, or evening—to fit your schedule.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
  },
  {
    id: "3",
    title: "Cafeteria Facilities",
    text: "Enjoy access to delightfrul cafeteria services with Hattrick Cafe services.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    light: true,
  },
  {
    id: "4",
    title: "Extension on demand",
    text: "Get access to special bookings and discounts after earning 200 credentials.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
  },
  {
    id: "5",
    title: "Safe & Secure",
    text: "Play worry-free with secure premises and first-aid support always available.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "#",
  },
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
