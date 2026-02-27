const products = [

  {
    id: "1",
    name: "AlphaTech Solutions Ltd",
    category: "Large Cap · Technology",
    price: 1845.3,
    description:
      "Cloud and SaaS platform provider with steady recurring revenue from enterprise clients.",
    tags: ["technology", "cloud", "large-cap"],
  },
  {
    id: "2",
    name: "Nova Systems Corporation",
    category: "Large Cap · Technology",
    price: 2299.8,
    description:
      "Diversified software and services company focused on productivity and developer tools.",
    tags: ["software", "productivity", "dividend"],
  },
  {
    id: "3",
    name: "Orion Internet Holdings",
    category: "Large Cap · Communication Services",
    price: 1562.4,
    description:
      "Digital advertising and media platform with strong presence across search and video.",
    tags: ["internet", "ads", "platform"],
  },
  {
    id: "4",
    name: "Vertex Retail Online",
    category: "Large Cap · Consumer Discretionary",
    price: 987.6,
    description:
      "E‑commerce marketplace with growing fintech and logistics businesses attached.",
    tags: ["ecommerce", "consumer", "growth"],
  },
  {
    id: "5",
    name: "Quantum Devices Inc",
    category: "Large Cap · Technology Hardware",
    price: 3120.1,
    description:
      "Premium smartphone and personal computing brand with integrated hardware‑software ecosystem.",
    tags: ["hardware", "ecosystem", "premium"],
  },
  {
    id: "6",
    name: "Skyline Semiconductors",
    category: "Large Cap · Semiconductors",
    price: 4210.9,
    description:
      "Designs high‑performance chips for AI workloads, gaming, and data centers.",
    tags: ["semiconductors", "ai", "data-center"],
  },
  {
    id: "7",
    name: "Titan Industrial Automation",
    category: "Large Cap · Industrials",
    price: 1435.4,
    description:
      "Global leader in factory automation, robotics, and industrial software.",
    tags: ["automation", "robotics", "industry-4.0"],
  },
  {
    id: "8",
    name: "Evergreen Consumer Staples",
    category: "Large Cap · Consumer Staples",
    price: 842.75,
    description:
      "Packaged foods and home essentials company with pan‑regional distribution.",
    tags: ["defensive", "consumer-staples", "dividend"],
  },
  {
    id: "9",
    name: "Guardian Bank & Trust",
    category: "Large Cap · Financials",
    price: 612.1,
    description:
      "Universal bank with strong retail franchise and growing digital lending platform.",
    tags: ["banking", "financials", "income"],
  },
  {
    id: "10",
    name: "Horizon Life & Health",
    category: "Large Cap · Healthcare",
    price: 1388.3,
    description:
      "Diversified life and health insurer with stable premium growth and solvency metrics.",
    tags: ["insurance", "healthcare", "defensive"],
  },


  {
    id: "11",
    name: "Aurora Fintech Services",
    category: "Mid Cap · Financials",
    price: 524.2,
    description:
      "Digital payments and lending platform targeting small businesses and freelancers.",
    tags: ["fintech", "payments", "mid-cap"],
  },
  {
    id: "12",
    name: "Bluewave Logistics",
    category: "Mid Cap · Industrials",
    price: 392.6,
    description:
      "Asset‑light logistics company with strength in last‑mile and warehousing.",
    tags: ["logistics", "supply-chain", "asset-light"],
  },
  {
    id: "13",
    name: "Crestview Renewable Power",
    category: "Mid Cap · Utilities",
    price: 715.9,
    description:
      "Owns and operates solar and wind assets under long‑term power‑purchase agreements.",
    tags: ["renewables", "utilities", "esg"],
  },
  {
    id: "14",
    name: "DeepBay Real Estate REIT",
    category: "Mid Cap · Real Estate",
    price: 348.1,
    description:
      "REIT focused on Grade‑A office and warehouse assets in top metro cities.",
    tags: ["reit", "yield", "real-estate"],
  },
  {
    id: "15",
    name: "Element Materials & Chemicals",
    category: "Mid Cap · Materials",
    price: 268.4,
    description:
      "Specialty chemicals producer with exposure to agrochem and performance materials.",
    tags: ["chemicals", "export", "mid-cap"],
  },
  {
    id: "16",
    name: "Frontier Auto Components",
    category: "Mid Cap · Consumer Discretionary",
    price: 452.3,
    description:
      "Manufactures components for EVs and premium passenger vehicles.",
    tags: ["auto-ancillary", "ev", "manufacturing"],
  },
  {
    id: "17",
    name: "Glacier Beverages",
    category: "Mid Cap · Consumer Staples",
    price: 189.5,
    description:
      "Packaged water and beverages company with strong regional brands.",
    tags: ["beverages", "consumer", "brand"],
  },
  {
    id: "18",
    name: "Helio Digital Media",
    category: "Mid Cap · Communication Services",
    price: 274.9,
    description:
      "Operates streaming platforms and digital content studios in multiple languages.",
    tags: ["streaming", "media", "subscription"],
  },
  {
    id: "19",
    name: "Inspire Education Services",
    category: "Mid Cap · Consumer Services",
    price: 321.7,
    description:
      "Ed‑tech and test‑prep provider with hybrid offline‑online learning model.",
    tags: ["edtech", "services", "mid-cap"],
  },
  {
    id: "20",
    name: "Jetline Airlines",
    category: "Mid Cap · Industrials",
    price: 568.0,
    description:
      "Low‑cost carrier with a young fleet and focus on regional connectivity.",
    tags: ["aviation", "travel", "cyclical"],
  },


  {
    id: "21",
    name: "Krypton Micro Finance",
    category: "Small Cap · Financials",
    price: 128.4,
    description:
      "Microfinance institution lending to rural households and nano‑businesses.",
    tags: ["microfinance", "inclusion", "rural"],
  },
  {
    id: "22",
    name: "Lattice Data Labs",
    category: "Small Cap · Technology",
    price: 642.9,
    description:
      "Provides analytics and AI tooling for mid‑market enterprises.",
    tags: ["analytics", "saas", "ai"],
  },
  {
    id: "23",
    name: "Metro Hospitals Network",
    category: "Small Cap · Healthcare",
    price: 517.2,
    description:
      "Chain of multi‑speciality hospitals and day‑care centers in Tier‑2 cities.",
    tags: ["healthcare", "hospitals", "domestic"],
  },
  {
    id: "24",
    name: "Northstar Textiles",
    category: "Small Cap · Consumer Discretionary",
    price: 96.5,
    description:
      "Exports home linens and apparel to North America and Europe.",
    tags: ["textiles", "export", "small-cap"],
  },
  {
    id: "25",
    name: "Oceanic Shipping Lines",
    category: "Small Cap · Industrials",
    price: 211.9,
    description:
      "Owns and charters cargo vessels on major trade routes.",
    tags: ["shipping", "cyclical", "global"],
  },
  {
    id: "26",
    name: "Pinnacle Hotels & Resorts",
    category: "Small Cap · Consumer Discretionary",
    price: 344.8,
    description:
      "Hospitality group operating business hotels and leisure resorts.",
    tags: ["hospitality", "travel", "leisure"],
  },
  {
    id: "27",
    name: "Quartz Mining & Minerals",
    category: "Small Cap · Materials",
    price: 158.7,
    description:
      "Produces industrial minerals used in construction and glass.",
    tags: ["materials", "commodities", "cyclical"],
  },
  {
    id: "28",
    name: "Riverfront Water Utilities",
    category: "Small Cap · Utilities",
    price: 212.6,
    description:
      "Operates drinking water and wastewater treatment projects under PPPs.",
    tags: ["utilities", "infrastructure", "ppp"],
  },
  {
    id: "29",
    name: "Summit Agro Seeds",
    category: "Small Cap · Consumer Staples",
    price: 134.2,
    description:
      "Develops hybrid seeds and crop‑care products for key cereals and vegetables.",
    tags: ["agri", "seeds", "rural"],
  },
  {
    id: "30",
    name: "Trident Cyber Security",
    category: "Small Cap · Technology",
    price: 488.5,
    description:
      "Cyber‑security services and managed detection for mid‑sized enterprises.",
    tags: ["cybersecurity", "services", "it"],
  },


  {
    id: "31",
    name: "Alpha 50 Index ETF",
    category: "ETF · Broad Market",
    price: 182.3,
    description:
      "Passive ETF tracking a diversified 50‑stock large‑cap benchmark index.",
    tags: ["etf", "index-fund", "core"],
  },
  {
    id: "32",
    name: "NextGen Tech ETF",
    category: "ETF · Thematic",
    price: 256.9,
    description:
      "Thematic ETF focused on cloud, AI, and semiconductor companies.",
    tags: ["etf", "technology", "thematic"],
  },
  {
    id: "33",
    name: "Green Energy ETF",
    category: "ETF · Thematic",
    price: 143.7,
    description:
      "Basket of renewable power, storage, and grid‑upgrade companies.",
    tags: ["esg", "renewables", "etf"],
  },
  {
    id: "34",
    name: "Financial Leaders ETF",
    category: "ETF · Sectoral",
    price: 198.4,
    description:
      "Tracks leading banks, NBFCs, and insurance companies.",
    tags: ["financials", "etf", "sectoral"],
  },
  {
    id: "35",
    name: "Healthcare Opportunities ETF",
    category: "ETF · Sectoral",
    price: 167.9,
    description:
      "Exposure to pharma, hospitals, and diagnostic companies.",
    tags: ["healthcare", "defensive", "etf"],
  },
  {
    id: "36",
    name: "Global 100 ADR Basket",
    category: "ETF · International",
    price: 312.6,
    description:
      "International ETF providing exposure to 100 globally listed companies via depository receipts.",
    tags: ["international", "diversification", "etf"],
  },
  {
    id: "37",
    name: "Short Duration Bond ETF",
    category: "ETF · Debt",
    price: 102.4,
    description:
      "Investment‑grade short‑maturity bonds aimed at parking surplus cash.",
    tags: ["debt", "low-volatility", "income"],
  },
  {
    id: "38",
    name: "Corporate Bond Plus ETF",
    category: "ETF · Debt",
    price: 109.8,
    description:
      "Basket of high‑quality corporate bonds with moderate duration.",
    tags: ["fixed-income", "investment-grade", "yield"],
  },
  {
    id: "39",
    name: "Equal Weight 30 Index ETF",
    category: "ETF · Factor",
    price: 194.7,
    description:
      "Equal‑weight strategy across 30 large‑cap names to reduce single‑stock concentration.",
    tags: ["factor", "diversified", "etf"],
  },
  {
    id: "40",
    name: "Quality Factor ETF",
    category: "ETF · Factor",
    price: 221.5,
    description:
      "Rules‑based portfolio focusing on companies with strong balance sheets and profitability.",
    tags: ["factor", "quality", "rules-based"],
  },

  {
    id: "41",
    name: "Stable Power Grid Ltd",
    category: "Large Cap · Utilities",
    price: 612.3,
    description:
      "Transmission and distribution utility with regulated returns and consistent dividends.",
    tags: ["utilities", "income", "defensive"],
  },
  {
    id: "42",
    name: "Harbor Port Trust",
    category: "Mid Cap · Industrials",
    price: 418.9,
    description:
      "Port operator with long‑term cargo contracts and visible cash flows.",
    tags: ["infrastructure", "logistics", "yield"],
  },
  {
    id: "43",
    name: "Prime Telecom Towers",
    category: "Mid Cap · Communication Services",
    price: 355.7,
    description:
      "Owns telecom tower assets leased to multiple operators.",
    tags: ["infra", "leased-assets", "dividend"],
  },
  {
    id: "44",
    name: "Metro Gas Distribution",
    category: "Mid Cap · Utilities",
    price: 287.1,
    description:
      "City gas distributor supplying CNG and PNG to households and industries.",
    tags: ["city-gas", "utilities", "stable"],
  },
  {
    id: "45",
    name: "Anchor Consumer Products",
    category: "Large Cap · Consumer Staples",
    price: 765.8,
    description:
      "Staples portfolio across home care, personal care, and packaged foods.",
    tags: ["consumer-staples", "brand", "income"],
  },
  {
    id: "46",
    name: "Civic Infra InvIT",
    category: "InvIT · Infrastructure",
    price: 102.9,
    description:
      "Infrastructure investment trust owning toll roads and annuity projects.",
    tags: ["invit", "infrastructure", "yield"],
  },
  {
    id: "47",
    name: "BlueShield Pharma",
    category: "Large Cap · Healthcare",
    price: 1321.4,
    description:
      "Pharmaceutical company with strong generics and specialty portfolio.",
    tags: ["pharma", "export", "defensive"],
  },
  {
    id: "48",
    name: "Heritage Foods & Dairy",
    category: "Mid Cap · Consumer Staples",
    price: 256.3,
    description:
      "Regional dairy and packaged foods brand with expanding distribution.",
    tags: ["dairy", "consumer", "income"],
  },
  {
    id: "49",
    name: "Secure Storage REIT",
    category: "REIT · Real Estate",
    price: 311.2,
    description:
      "REIT specializing in warehousing and cold‑storage assets.",
    tags: ["reit", "warehousing", "yield"],
  },
  {
    id: "50",
    name: "Riverfront Utilities Trust",
    category: "Trust · Utilities",
    price: 145.6,
    description:
      "Trust structure holding stakes in regulated water and power utilities.",
    tags: ["utilities", "trust", "income"],
  },

  {
    id: "51",
    name: "NeoMobility EV",
    category: "Small Cap · Consumer Discretionary",
    price: 212.4,
    description:
      "Early‑stage EV maker focused on two‑wheelers and last‑mile delivery fleets.",
    tags: ["ev", "growth", "speculative"],
  },
  {
    id: "52",
    name: "BioNova Genomics",
    category: "Small Cap · Healthcare",
    price: 684.1,
    description:
      "Biotech firm working on gene‑editing therapies and precision diagnostics.",
    tags: ["biotech", "r&d", "high-risk"],
  },

  {
    id: "100",
    name: "Digital India Opportunities",
    category: "Fund · Thematic",
    price: 199.9,
    description:
      "Multi‑cap portfolio capturing digitization, formalization, and financial‑inclusion themes.",
    tags: ["india", "digital", "multi-cap"],
  },
];

module.exports = products;
