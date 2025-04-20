export type DevStory = {
  projects: Project[];
  experiences: Experience[];
};

export type Project = {
  year: number;
  month: number;
  what: string;
  about: string;
  tags: string[];
  link: string | null;
};

export type Experience = {
  yearStart: number;
  monthStart: number;
  yearEnd: number | null;
  monthEnd: number | null;
  where: string;
  what: string;
  tags: string[];
};

export const devStory: DevStory = {
  projects: [
    {
      year: 2024,
      month: 6,
      what: "Exhibish",
      about: "Blog for exhibitions and shows.",
      tags: ["html", "css", "js", "astro", "cloudflare-pages", "sanity-cms", "web"],
      link: null,
    },
    {
      year: 2022,
      month: 4,
      what: "Dev Story",
      about: "You are here 📍",
      tags: ["html", "css", "js", "react", "tailwind", "web"],
      link: null,
    },
    {
      year: 2022,
      month: 3,
      what: "Randomap",
      about:
        "Explore the world from a bird's eye view, see what's nearby and share what you find.",
      tags: ["dart", "flutter", "android"],
      link: "https://play.google.com/store/apps/details?id=com.wychwaystudios.randomap",
    },
    {
      year: 2021,
      month: 10,
      what: "BKPW Electrics",
      about: "Electrician portfolio.",
      tags: ["html", "css", "web"],
      link: null,
    },
    {
      year: 2020,
      month: 11,
      what: "Myth Maker",
      about: "Generate adventure prompts for fantasy RPG settings.",
      tags: ["js", "svelte", "vercel", "web"],
      link: "https://myth-maker.vercel.app/",
    },
    {
      year: 2020,
      month: 9,
      what: "Cosmic Cargo",
      about: "Space trading card game.",
      tags: ["game", "tabletop"],
      link: null,
    },
    {
      year: 2020,
      month: 3,
      what: "CPD Tracker",
      about:
        "Wordpress plugin to support tracking of CPD and related documents.",
      tags: ["php", "sql", "aws", "s3", "wordpress"],
      link: null,
    },
    {
      year: 2020,
      month: 2,
      what: "Roll My Dice",
      about:
        "Create dice for games, from simple numbers to custom symbols and text.",
      tags: ["dart", "flutter", "sql", "android", "ios"],
      link: "https://play.google.com/store/apps/details?id=com.wychwaystudios.rollmydice",
    },
    {
      year: 2020,
      month: 1,
      what: "WWS Website",
      about: "Site for Wych Way Studios.",
      tags: ["html", "css", "web"],
      link: "https://wychway.studio",
    },
    {
      year: 2019,
      month: 12,
      what: "Digital Clock",
      about: "Entry for the Flutter Clock challenge - won a clock.",
      tags: ["dart", "flutter", "android"],
      link: "https://github.com/NotThatBowser/flutter_clock",
    },
    {
      year: 2019,
      month: 5,
      what: "Starlight Champions",
      about: "Spaceship racing card game.",
      tags: ["game", "tabletop"],
      link: null,
    },
    {
      year: 2018,
      month: 9,
      what: "CashTab",
      about: "Track joint spending and see how to settle up.",
      tags: ["dart", "flutter", "sql", "android"],
      link: "https://play.google.com/store/apps/details?id=com.wychwaystudios.cashtab",
    },
    {
      year: 2018,
      month: 7,
      what: "Seminar Manager",
      about: "Wordpress plugin to let trainers manage seminars.",
      tags: ["php", "sql", "wordpress"],
      link: null,
    },
    {
      year: 2018,
      month: 4,
      what: "Financial Report Editor",
      about:
        "Internal site for QS Financial to create investment recommendation reports.",
      tags: ["c#", ".net-core", "sql", "html", "css", "js", "web"],
      link: null,
    },
    {
      year: 2018,
      month: 3,
      what: "QS Financial Website",
      about: "Site for QS Financial.",
      tags: ["html", "css", "js"],
      link: null,
    },
    {
      year: 2018,
      month: 2,
      what: "Gravity Fighters",
      about: "Gravity-slinging space duel.",
      tags: ["game", "c#", "unity", "android", "desktop"],
      link: "https://play.google.com/store/apps/details?id=com.wychwaystudios.gravityfighters",
    },
    {
      year: 2017,
      month: 3,
      what: "Ya Herd?",
      about: "Endless sheep-juggler.",
      tags: ["game", "c#", "unity", "android"],
      link: "https://play.google.com/store/apps/details?id=com.wws.yh",
    },
    {
      year: 2016,
      month: 6,
      what: "Rollcat",
      about: "Roll the cat 🐱",
      tags: ["game", "c#", "unity", "desktop"],
      link: null,
    },
    {
      year: 2015,
      month: 6,
      what: "Agar.io Bot",
      about: "Bot to play the hit web game Agar.io autonomously.",
      tags: ["python", "web"],
      link: null,
    },
    {
      year: 2014,
      month: 9,
      what: "Financial Report Generator",
      about:
        "Internal software for QS Financial to create investment recommendation reports.",
      tags: ["c#", ".net-core", "winforms", "sql", "desktop"],
      link: null,
    },
    {
      year: 2014,
      month: 7,
      what: "QS Financial Website",
      about: "Site for QS Financial.",
      tags: ["html", "css", "web"],
      link: null,
    },
    {
      year: 2014,
      month: 5,
      what: "Herd a Llama",
      about: "Lead a flock of llamas as far as you can.",
      tags: ["game", "c#", "unity", "android"],
      link: null,
    },
    {
      year: 2013,
      month: 12,
      what: "Pokéflute Hero",
      about: "Guitar hero in Ketchum's universe.",
      tags: ["game", "c#", "unity", "desktop"],
      link: null,
    },
    {
      year: 2012,
      month: 7,
      what: "Kingdom of Hilmty",
      about: "Text adventure RPG, fittingly where my story began.",
      tags: ["game", "c++", "desktop"],
      link: null,
    },
  ],
  experiences: [
    {
      yearStart: 2023,
      monthStart: 7,
      yearEnd: null,
      monthEnd: null,
      where: "Dynamic Planner",
      what: "Senior Software Developer",
      tags: ["c#", ".net-core", "sql", "html", "css", "js", "azure", "web", "ai"],
    },
    {
      yearStart: 2022,
      monthStart: 8,
      yearEnd: null,
      monthEnd: null,
      where: "AZ-204 exam",
      what: "Microsoft Certified: Azure Developer Associate",
      tags: ["azure"],
    },
    {
      yearStart: 2022,
      monthStart: 6,
      yearEnd: null,
      monthEnd: null,
      where: "AZ-900 exam",
      what: "Microsoft Certified: Azure Fundamentals",
      tags: ["azure"],
    },
    {
      yearStart: 2021,
      monthStart: 2,
      yearEnd: 2023,
      monthEnd: 6,
      where: "Dynamic Planner",
      what: "Software Developer",
      tags: ["c#", ".net-core", "sql", "html", "css", "js", "azure", "web"],
    },
    {
      yearStart: 2017,
      monthStart: 4,
      yearEnd: null,
      monthEnd: null,
      where: "Wych Way Studios (self-publishing)",
      what: "Software Developer, Designer",
      tags: [
        "dart",
        "flutter",
        "c#",
        "unity",
        "html",
        "css",
        "js",
        "react",
        "tailwind",
        "sql",
        "azure",
        "aws",
        "google-cloud",
        "firebase",
        "supabase",
        "web",
        "android",
        "ios",
      ],
    },
    {
      yearStart: 2011,
      monthStart: 6,
      yearEnd: 2019,
      monthEnd: 9,
      where: "QS Financial",
      what: "Paraplanner, Software Developer",
      tags: ["c#", ".net-core", "sql", "html", "css", "js", "web", "desktop"],
    },
    {
      yearStart: 2008,
      monthStart: 10,
      yearEnd: 2011,
      monthEnd: 6,
      where: "University of York",
      what: "BSc (Hons) Economics & Finance",
      tags: [],
    },
    {
      yearStart: 2010,
      monthStart: 2,
      yearEnd: 2011,
      monthEnd: 4,
      where: "Pizza Hut",
      what: "Pizza Delivery Boy 🍕",
      tags: [],
    },
    {
      yearStart: 2008,
      monthStart: 6,
      yearEnd: 2009,
      monthEnd: 10,
      where: "West Midlands Safari Park",
      what: "Theme Park Ride Operator 🎢",
      tags: [],
    },
  ],
};
