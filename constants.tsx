
import { CaseStudy, Experience, Tool } from './types';

export const EXPERIENCES: Experience[] = [
  {
    role: "Media Manager",
    company: "Global Creative & Media Agency",
    location: "London, UK",
    period: "Aug 2025 – Present",
    highlights: [
      "Overseeing multi-million dollar media investments for a global eyewear and technology brand.",
      "Leading data-driven investment strategies and omnichannel optimizations across EMEA.",
      "Distilling complex performance data into actionable narratives for senior stakeholders.",
      "Managing end-to-end campaign execution across social, search, and OOH."
    ]
  },
  {
    role: "Senior Media Analyst",
    company: "Global Creative & Media Agency",
    location: "Singapore",
    period: "July 2024 – Aug 2025",
    highlights: [
      "Activated and optimized high-budget campaigns across major social and search platforms.",
      "Advised on platform selection and creative strategy based on granular performance signals.",
      "Built cross-functional bridges between creative and media teams to enhance ROAS."
    ]
  },
  {
    role: "Marketing Lead Consultant",
    company: "US-based Industry Conference",
    location: "Remote / USA",
    period: "Aug 2023 – July 2024",
    highlights: [
      "Scaled the largest industry conference in the U.S. through targeted performance media.",
      "Achieved a record 9.3x ROAS ($945 spend → $8.78K conversion value).",
      "Managed creative production workflows for ad assets and advanced analytics implementation."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "wearable-tech-launch",
    title: "Scaling Attention for a New Category at Global Scale",
    category: "Paid Media & Performance",
    client: "Global Eyewear & Technology Brand",
    description: "Drove awareness and consideration across key global markets through a full-funnel, multi-platform media strategy.",
    context: "The product represents a new consumer technology category at the intersection of fashion, wearables, and AI.",
    challenge: "Introduce and scale awareness across multiple regions (US, UK, DE, FR, IT, ES, AU) in a highly cluttered media environment while positioning the brand as both culturally relevant and technologically credible.",
    strategy: "Social-first media strategy based on four principles: Full-Funnel Sequencing, Platform-Native Creative, Creative & Audience Experimentation, and Performance-Led Optimization.",
    execution: [
      "Core reach and frequency driver via major social platforms (Reels, Stories, Advantage+).",
      "Short-form, creator-style storytelling on video-first platforms to make the product feel native.",
      "High-impact vertical video for immersive, full-screen awareness.",
      "Contextual relevance and intent-adjacent environments on niche social platforms."
    ],
    impact: [
      "Statistically significant lifts in Ad Recall, Awareness, and Consideration.",
      "Awareness lifts up to +20pp (UK) and +21pp (US) in key studies.",
      "Efficient Cost per Lifted User across multiple markets.",
      "Shorter formats (6s–15s) outperformed longer cuts in completion and efficiency."
    ],
    myRole: "Paid Media Manager – Led channel planning, budget allocation, oversighting in-flight optimization, and synthesizing performance/brand lift reporting.",
    imageUrl: "https://images.unsplash.com/photo-1625591339762-4312030c78a1?auto=format&fit=crop&q=80&w=800", // Premium eyewear shot
    tags: ["Paid Social", "Global Scale", "Brand Lift"]
  },
  {
    id: "fmcg-ecommerce-system",
    title: "Scalable Creative System for High-Velocity Growth",
    category: "E-Commerce Strategy",
    client: "Multnational FMCG Company",
    description: "Standardized and automated multi-brand creative production to cut time-to-market by 40% and improve conversion by 30%.",
    context: "The company operates across 6 markets in APAC managing multiple brands and SKUs in fast-moving e-commerce environments.",
    challenge: "Creative production and localization were too slow and fragmented to keep pace with platform-driven retail moments. Delays meant lost momentum during key sales periods.",
    strategy: "Developed a modular creative system. A standardized, performance-led template architecture enabling rapid localization and continuous optimization.",
    execution: [
      "Identified creative speed as a performance bottleneck.",
      "Designed a scalable, data-driven creative template system with attention drivers and conversion layers.",
      "Led alignment between media, creative, and local market teams.",
      "Embedded performance learnings into repeatable production frameworks."
    ],
    impact: [
      "40% reduction in creative production turnaround.",
      "~60% increase in CTR over 6 months.",
      "Unified visual system across social and e-commerce.",
      "Faster participation in high-velocity retail moments (Mega sales, paydays)."
    ],
    myRole: "Strategy + Execution – Designed the template system and led cross-functional team alignment.",
    imageUrl: "/assets/projects/fmcg-ecommerce.png",
    tags: ["E-commerce", "Automation", "APAC"]
  },
  {
    id: "oral-care-content",
    title: "Boosting Brand Relevance for a Legacy FMCG Brand",
    category: "Content Strategy",
    client: "Legacy Oral Care Brand",
    description: "Established a strong social presence to connect with younger audiences (18–34) through platform-native, trend-aware content.",
    context: "The client is a global FMCG brand with strong household penetration, but video-first social platforms presented a challenge: a fast-moving, creator-led environment.",
    challenge: "Balance brand guidelines with platform creativity to show up in a way that felt native and engaging without losing brand identity.",
    strategy: "Platform-first content strategy focused on original and evergreen content buckets.",
    execution: [
      "Led content strategy and framework development.",
      "Defined content pillars and operating workflows (Trends -> Concept -> Storyboard -> Production -> Upload).",
      "Guided performance-led iteration using engagement and audience feedback.",
      "Ensured brand consistency while adapting to vertical, sound-on formats."
    ],
    impact: [
      "Strong performance with 18–34 demographic through relatable storytelling.",
      "Algorithms rewarded engagement-driven content (comments, interactions).",
      "Direct interaction through live sessions strengthened brand connection.",
      "Improved production efficiency through defined content buckets."
    ],
    myRole: "Strategy & Paid Media – Led content framework development and performance-led iteration.",
    imageUrl: "/assets/projects/oral-care.png",
    tags: ["Content Strategy", "FMCG", "Social Strategy"]
  },
  {
    id: "industry-conference-sem",
    title: "Demand Capture Through High-Intent Search",
    category: "Paid Media & Performance",
    client: "US-based Industry Conference",
    description: "Captured bottom-of-funnel demand and drove ticket sales for a major US industry event through high-intent search.",
    context: "The event is a US-based conference with a fixed date, meaning ticket sales must convert within a limited window.",
    challenge: "Drive ticket sales by efficiently capturing high-intent search demand while avoiding spend on low-quality traffic in a competitive market.",
    strategy: "High-intent and lookalike audience targeting coupled with offer-led conversion messaging and continuous keyword optimization.",
    execution: [
      "Implemented advanced analytics and tag management for accurate tracking.",
      "Continuous optimization of keyword mix, match types, ad relevance, and CTR.",
      "Budget pacing adjusted toward highest-return segments in real-time.",
      "Leveraged core brand keywords for industry-leading CTR."
    ],
    impact: [
      "9.3x ROAS ($945 spend → $8.78K conversion value).",
      "4.17% CTR across search campaigns.",
      "$0.62 average CPC, delivering highly efficient traffic.",
      "Significant revenue impact within a restricted sales window."
    ],
    myRole: "Paid Media Manager – End-to-end execution from tracking setup to budget optimization.",
    imageUrl: "/assets/projects/conference-sem.png",
    tags: ["SEM", "Performance", "ROAS"]
  },
  {
    id: "fintech-gtm",
    title: "Building Trust & Adoption in a Skeptical SME Market",
    category: "Branding & PR",
    client: "Fintech Platform for Small Businesses",
    description: "Launched with education-led PR and founder-led credibility strategy, doubling acquisition targets in a low-trust environment.",
    context: "The platform provides digital payments for MSME retailers in Southeast Asia, a segment with low digital adoption and high sensitivity to trust.",
    challenge: "Zero brand awareness at launch and low trust in new financial technology. Prerequisite: build credibility before performance marketing could scale.",
    strategy: "Education-led PR as a growth engine. Treated PR not as publicity, but as a go-to-market system designed to build trust at scale.",
    execution: [
      "Founder-led thought leadership to humanize the brand.",
      "Feature placements in top-tier national media (TV, business, tech news).",
      "Simplified, human-centered storytelling around digital payments and growth.",
      "Leveraged partnerships with institutional bodies for credibility."
    ],
    impact: [
      "Acquired 86,000 users in 2.5 weeks (2.1x the target).",
      "Significant earned media value generated across launch cycles.",
      "Established the brand as a legitimate partner for MSME growth.",
      "Recognized as a Top 15 Social Enterprise in the region."
    ],
    myRole: "Go-To-Market & Growth Lead – Designed the launch/PR strategy and orchestrated media outreach.",
    imageUrl: "/assets/projects/fintech-gtm.png",
    tags: ["PR", "FinTech", "GTM"]
  },
  {
    id: "public-health-initiative",
    title: "Technology and Communication for Public Health",
    category: "Branding & PR",
    client: "Public Health Technology Initiative",
    description: "Helped launch a contact tracing app through national media and education-focused communication during a public health crisis.",
    context: "The initiative focused on a mobile application developed to identify individuals needing testing and help hospitals prioritize resources.",
    challenge: "Build trust quickly in a highly sensitive, high-stakes environment during a period of high uncertainty and public anxiety.",
    strategy: "Education-led PR and responsible messaging. Focused on public benefit and simple, accessible language to explain the tech.",
    execution: [
      "Secured coverage in major online news and media publications.",
      "Positioned the app as a support tool for medical institutions, avoiding alarmist framing.",
      "Leveraged digital distribution to reach audiences during lockdowns.",
      "Coordinated messaging for responsible action while avoiding fear-based tactics."
    ],
    impact: [
      "Successfully launched the app to a broad national audience.",
      "Clarified app usage and public benefit through simple communication.",
      "Maintained responsible framing during a sensitive public health moment.",
      "Supported app visibility through trusted information channels."
    ],
    myRole: "PR & Growth – Led media and communication strategy for the app launch.",
    imageUrl: "/assets/projects/public-health.png",
    tags: ["Public Health", "Non-Profit", "Communication"]
  }
];

export const TOOLS: Tool[] = [
  { name: "Meta Ads Manager", category: "Ads" },
  { name: "TikTok Ads Manager", category: "Ads" },
  { name: "Google Ads", category: "Ads" },
  { name: "Snapchat Ads", category: "Ads" },
  { name: "Reddit Ads", category: "Ads" },
  { name: "Pinterest Ads", category: "Ads" },
  { name: "Google Analytics 4", category: "Analytics" },
  { name: "GTM", category: "Analytics" },
  { name: "Looker Studio", category: "Analytics" },
  { name: "Kantar BLS", category: "Analytics" },
  { name: "Salesforce", category: "CRM" },
  { name: "Hubspot", category: "CRM" },
  { name: "Mailchimp", category: "CRM" },
  { name: "Klaviyo", category: "CRM" },
  { name: "ActiveCampaign", category: "CRM" },
  { name: "Canva", category: "Creative" },
  { name: "Shopify", category: "Creative" },
  { name: "Monday.com", category: "Management" },
  { name: "Asana", category: "Management" },
  { name: "ClickUp", category: "Management" },
  { name: "Trello", category: "Management" }
];

export const NAV_LINKS = [
  { name: "My Work", href: "/work" },
  { name: "Tools", href: "/#tools" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" }
];
