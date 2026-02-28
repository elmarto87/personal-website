// Projects & Missions — grouped by company.
// Shape per project: { id, title, description, thumbnail, tags, campaigns, experiments }

export const projectSections = [
  {
    id: 'uber',
    company: 'Uber',
    period: 'Jan 2025 – Present',
    projects: [],
  },
  {
    id: 'holafly',
    company: 'Holafly',
    period: 'Jan 2024 – Jan 2025',
    projects: [],
  },
  {
    id: 'hubspot',
    company: 'HubSpot',
    period: 'Jan 2022 – Jan 2024',
    projects: [
      {
        id: 'hubspot-organic',
        title: 'Organic Growth — hubspot.es/products',
        description: 'Built and optimized Spanish-language product landing pages to drive organic signup acquisition across Latin America and Spain. Combined content SEO, on-page improvements, and product-led page strategy. Result: 50%+ Y/Y growth in organic monthly traffic and doubled organic signups in under 12 months.',
        tags: ['Content SEO', 'Product Pages', 'Organic Growth', 'Latam & Spain'],
        thumbnail: '/assets/images/hubspot-organic.png',
      },
      {
        id: 'hubspot-cro',
        title: 'Signup CRO — A/B Testing on Product Pages',
        description: 'Ran structured A/B experiments on HubSpot\'s Spanish product landing pages to improve signup CVR. Applied cognitive bias frameworks to identify the highest-leverage levers. All four experiments resulted in winning variants.',
        tags: ['CRO', 'A/B Testing', 'Signup Flow', 'Conversion'],
        experiments: [
          {
            id: 'exp-confirmation',
            bias: 'Confirmation',
            lever: 'CTA Copy',
            description: 'Changed the hero CTA from "Empezar Gratis" to "Crea tu sitio web gratis" — matching the user\'s search intent to the desired action more precisely.',
            thumbnail: '/assets/images/hubspot-cro-1.png',
          },
          {
            id: 'exp-framing',
            bias: 'Framing & Simplification',
            lever: 'Navigation',
            description: 'Reduced hero height on product pages to lower friction and push the signup CTA above the fold — less scroll, more conversions.',
            thumbnail: '/assets/images/hubspot-cro-2.png',
          },
          {
            id: 'exp-anchoring',
            bias: 'Anchoring',
            lever: 'Creative',
            description: 'Added explainer SVGs to show users exactly what they could achieve with the product before hitting the CTA, anchoring perceived value.',
            thumbnail: '/assets/images/hubspot-cro-3.png',
          },
          {
            id: 'exp-zerocost',
            bias: 'Zero Cost',
            lever: 'Messaging',
            description: 'Added "100% gratuito. No se requiere tarjeta de crédito" copy to neutralise the credit card anxiety that was acting as a conversion barrier.',
            thumbnail: '/assets/images/hubspot-cro-4.png',
          },
        ],
      },
    ],
  },
  {
    id: 'skale',
    company: 'Skale',
    period: 'Jan 2021 – Jan 2022',
    projects: [
      {
        id: 'skale-client-results',
        title: 'SaaS Client Results — Holded & Maze',
        description: 'Delivered measurable organic growth across a portfolio of high-growth SaaS clients. At Holded, scaled organic signups by 4.5x in under 12 months through content and programmatic SEO. At Maze, grew monthly organic signups by 283%+ in under 6 months by improving content strategy and site architecture.',
        tags: ['Content SEO', 'Programmatic SEO', 'Site Architecture', 'SaaS'],
        images: ['/assets/images/skale-holded.webp', '/assets/images/skale-maze.webp'],
      },
    ],
  },
  {
    id: 'superdatascience',
    company: 'SuperDataScience',
    period: 'Jun 2016 – Nov 2018',
    projects: [
      {
        id: 'sds-kickstarter',
        title: 'Four Kickstarter Launches — AU$591K+',
        description: 'I owned full-funnel GTM for four Kickstarter campaigns across AI, Deep Learning, Blockchain, and Computer Vision courses — email strategy, paid ads, campaign page copy, and community promotion. All four were successfully funded. Combined, they raised AU$591K+ from 9,000+ backers. The lesson I took from those launches: distribution is as much of the product as the product itself.',
        tags: ['Email Strategy', 'Paid Ads', 'Campaign Copy', 'GTM', 'Community'],
        campaigns: [
          {
            id: 'ks-ai',
            title: 'Artificial Intelligence A-Z™',
            subtitle: 'Learn How To Build An AI',
            url: 'https://www.kickstarter.com/projects/kirilleremenko/artificial-intelligence-a-ztm-learn-how-to-build-a',
            thumbnail: '/assets/images/ks-ai.avif',
          },
          {
            id: 'ks-dl',
            title: 'Deep Learning A-Z™',
            subtitle: 'Online Course',
            url: 'https://www.kickstarter.com/projects/kirilleremenko/deep-learning-a-ztm-online-course',
            thumbnail: '/assets/images/ks-dl.avif',
          },
          {
            id: 'ks-bc',
            title: 'Blockchain A-Z™',
            subtitle: 'Learn How To Build Your Own Blockchain',
            url: 'https://www.kickstarter.com/projects/kirilleremenko/blockchain-a-ztm-learn-how-to-build-your-own-block/creator',
            thumbnail: '/assets/images/ks-bc.avif',
          },
          {
            id: 'ks-cv',
            title: 'Computer Vision A-Z™',
            subtitle: 'Learn OpenCV and Cutting-Edge Techniques',
            url: 'https://www.kickstarter.com/projects/kirilleremenko/computer-vision-a-ztm-learn-opencv-and-cutting-edg',
            thumbnail: '/assets/images/ks-cv.avif',
          },
        ],
      },
    ],
  },
]
