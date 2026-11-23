/**
 * Homepage content. Product copy is taken from each product's own live site.
 * Update `shipped` when something new goes out.
 */

export type ProductKey = 'vw' | 'bo' | 'hs' | 'vc';

export type ProductLink = { label: string; href: string };

export type Product = {
  key: ProductKey;
  name: string;
  kicker: string;
  line: string;
  description: string;
  facts: { label: string; value: string; code?: boolean }[];
  links: ProductLink[];
  shot: { src: string; alt: string; width: number; height: number; host: string };
};

export const products: Product[] = [
  {
    key: 'vw',
    name: 'VitalWall',
    kicker: 'Live activity walls',
    line: 'Live activity that looks like part of your site.',
    description:
      'Show what your visitors, APIs, AI agents and app are doing as it happens. Style the wall to match your brand and embed it anywhere.',
    facts: [
      { label: 'Sources', value: 'Visitors, any JSON API, AI agents over MCP, your own app' },
      { label: 'Looks', value: 'List, grid, ticker, globe, bubbles, treemap' },
      { label: 'Install', value: '<vital-wall wall="your-wall">', code: true },
    ],
    links: [
      { label: 'Visit vitalwall.com', href: 'https://vitalwall.com/' },
      { label: 'Live demos', href: 'https://vitalwall.com/demos' },
    ],
    shot: {
      src: '/images/home/vitalwall.jpg',
      alt: 'VitalWall homepage example: a live list of recent orders embedded on a store product page',
      width: 673,
      height: 562,
      host: 'vitalwall.com',
    },
  },
  {
    key: 'bo',
    name: 'BlackOps Center',
    kicker: 'Brains for your AI agents',
    line: 'Build brains your agents can actually run on.',
    description:
      'Turn what you know into living brains, one per subject. Your agent reads them, adds to them, answers from them and publishes to a site on your own domain.',
    facts: [
      { label: 'Works with', value: 'Claude, ChatGPT, Grok, Cursor and any agent that speaks MCP' },
      { label: 'Keeps current', value: 'Watches find new material and wait in Triage for your call' },
      { label: 'Plans', value: 'From $29 a month, 14-day trial' },
    ],
    links: [{ label: 'Visit blackopscenter.com', href: 'https://blackopscenter.com/' }],
    shot: {
      src: '/images/home/blackops.jpg',
      alt: 'BlackOps Center Triage queue: four finds waiting, each with a source, relevance score and Keep or Skip',
      width: 650,
      height: 562,
      host: 'blackopscenter.com',
    },
  },
  {
    key: 'hs',
    name: 'Hey Spotter',
    kicker: 'iPhone workout log',
    line: 'The workout log you talk to.',
    description:
      'Say your sets between machines. Spotter logs them, remembers everything and tells you when to add weight.',
    facts: [
      { label: 'Log it', value: 'Say it, snap a photo of the machine, or tap it in' },
      { label: 'Your data', value: 'Stored on your iPhone, backed up to your iCloud, export anytime' },
      { label: 'Price', value: 'Free to download, Pro $5.99 a month' },
    ],
    links: [
      { label: 'Visit heyspotter.app', href: 'https://heyspotter.app/' },
      { label: 'App Store', href: 'https://apps.apple.com/us/app/hey-spotter-ai-workout-log/id6787231348' },
    ],
    shot: {
      src: '/images/home/spotter.jpg',
      alt: 'Three Hey Spotter iPhone screens: a spoken set being logged, a machine identified from a photo, and the History tab',
      width: 1000,
      height: 480,
      host: 'heyspotter.app',
    },
  },
  {
    key: 'vc',
    name: 'VoiceCommit',
    kicker: 'Voice-first idea notebook',
    line: "Capture ideas while they're still alive.",
    description:
      'A private, voice-first notebook for your thoughts. Capture an idea in seconds, revisit it later, and promote it to a GitHub issue when it turns into work.',
    facts: [
      { label: 'Capture', value: 'Speak it and it becomes clean text in your notebook' },
      { label: 'Promote', value: 'Export to GitHub Issues, with more destinations planned' },
      { label: 'Where', value: 'Web and a native iOS app' },
    ],
    links: [{ label: 'Visit voicecommit.com', href: 'https://voicecommit.com/' }],
    shot: {
      src: '/images/home/voicecommit.jpg',
      alt: "VoiceCommit homepage: Capture ideas while they're still alive, with a Start capturing button",
      width: 895,
      height: 710,
      host: 'voicecommit.com',
    },
  },
];

export type Shipped = { product: ProductKey; name: string; date: string; title: string; body: string };

export const shipped: Shipped[] = [
  {
    product: 'vw',
    name: 'VitalWall',
    date: 'Nov 22',
    title: 'New homepage and live demo gallery',
    body: 'Each demo wall gets a step-by-step how-to on the VitalWall blog.',
  },
  {
    product: 'vw',
    name: 'VitalWall',
    date: 'Nov 22',
    title: 'Earthquakes, live from USGS',
    body: 'A wall that pulls every M4.5+ quake straight from a public feed.',
  },
  {
    product: 'bo',
    name: 'BlackOps',
    date: 'Nov 21',
    title: 'Brains travel as plain Markdown',
    body: 'Download a whole brain, or keep it in sync with an Obsidian vault.',
  },
  {
    product: 'hs',
    name: 'Hey Spotter',
    date: 'Nov 16',
    title: 'Getting back into the gym',
    body: 'A new page for people returning after time off.',
  },
];

/** Examples of the kind of activity each product handles. Illustrative, not live data. */
export const activityExamples: { product: ProductKey; abbr: string; what: string; where: string }[] = [
  { product: 'vw', abbr: 'VW', what: 'New wall embedded', where: 'VitalWall · ticker on a SaaS header' },
  { product: 'hs', abbr: 'HS', what: '3 × 10 at 150 on chest press', where: 'Hey Spotter · logged by voice' },
  { product: 'bo', abbr: 'BO', what: 'Post published from a brain', where: 'BlackOps · drafted by an agent' },
  { product: 'vc', abbr: 'VC', what: 'Idea promoted to a GitHub issue', where: 'VoiceCommit · captured on a walk' },
  { product: 'vw', abbr: 'VW', what: 'Visitor from Lisbon on the globe', where: 'VitalWall · blog reader wall' },
  { product: 'bo', abbr: 'BO', what: '4 finds waiting in Triage', where: 'BlackOps · competitor watch' },
  { product: 'hs', abbr: 'HS', what: 'Seated leg curl found from a photo', where: 'Hey Spotter · snap it' },
  { product: 'vw', abbr: 'VW', what: 'Deal won on the office TV', where: 'VitalWall · display link' },
  { product: 'vc', abbr: 'VC', what: 'New voice note in the notebook', where: 'VoiceCommit · iOS app' },
  { product: 'bo', abbr: 'BO', what: 'Brain updated with 3 decisions', where: 'BlackOps · product brain' },
];
