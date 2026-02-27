// Projects & Missions — grouped by company.
// Shape per project: { id, title, description, url, tags: [] }

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
        description: 'Ran structured A/B experiments on HubSpot\'s Spanish product landing pages to improve signup CVR. One example: an anchoring bias test that added explainer SVGs to help visitors understand what they could achieve with the product before signing up. Variant won.',
        tags: ['CRO', 'A/B Testing', 'Signup Flow', 'Conversion'],
        thumbnail: '/assets/images/hubspot-cro.png',
      },
      {
        id: 'hubspot-clients',
        title: 'Client Results — Holded & Maze',
        description: 'Scaled organic signups by 4.5x in under 12 months at Holded using content and programmatic SEO. Grew monthly organic signups by 283%+ in under 6 months at Maze through content strategy and site architecture improvements.',
        tags: ['Programmatic SEO', 'Content Strategy', 'Site Architecture'],
        thumbnail: null,
      },
    ],
  },
  {
    id: 'skale',
    company: 'Skale',
    period: 'Jan 2021 – Jan 2022',
    projects: [],
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
