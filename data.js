/* ============================================================
   DUMMY DATA — layout preview only.
   Every account, person and number in this file is fictional.
   Replace with a real data export when ready.
   ============================================================ */
window.DASHBOARD_DATA = {

  user: { firstName: "Avi", displayName: "Avi B." },

  /* product: "RUM" (Real-Time Blocking) or "Verification"
     tier:    Strategic / Gold / Silver
     mrr:     monthly $ — ARR is derived as mrr * 12
     health:  healthy / needs-attention / at-risk (score 0-100)
     churnRisk: low / watch / high (renewal readiness)
     cpm / pricePerScan: unit pricing in $; packageSize: monthly volume; products: subscribed products */
  accounts: [
    { name: "AdNexa",               portal: "adnexa.verif", contact: "Sarah Mitchell", location: "New York, USA",      product: "Verification", type: "Platform",  tier: "Strategic", region: "USA",  mrr: 22000, csm: "Tom Rosen",  healthScore: 78, health: "healthy",         renewal: "2026-09-25", autoRenew: false, requirePO: true,  churnRisk: "low", cpm: 0.09, pricePerScan: 0.0006, packageSize: "180M scans/mo", products: "Verification, MediaGuard", plan: "Lock PO by mid-Sep; QBR on 8 Sep to present APAC expansion pricing", lastYear: "Renewed flat; negotiated discrepancy-reporting SLA after two escalations", riskReason: "Strong engagement, healthy QBR cadence, no open escalations" },
    { name: "BidCore Technologies", portal: "bidcore.verif", contact: "Lukas Weber", location: "Berlin, Germany",     product: "Verification", type: "Platform",  tier: "Strategic", region: "EU",   mrr: 16500, csm: "Dana Katz",  healthScore: 88, health: "healthy",         renewal: "2027-04-01", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.08, pricePerScan: 0.0005, packageSize: "140M scans/mo", products: "Verification", plan: "Standard auto-renew track; propose multi-year at Q1 QBR", lastYear: "Renewed with 8% uplift; added second seat for EU ad-ops team", riskReason: "Health score 88, stable usage, champion actively engaged" },
    { name: "Daily Chronicle Group", portal: "chronicle.rum", contact: "James Porter", location: "Chicago, USA",    product: "RUM",          type: "Publisher", tier: "Strategic", region: "USA",  mrr: 14500, csm: "Dana Katz",  healthScore: 82, health: "healthy",         renewal: "2027-02-15", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.12, pricePerScan: 0.0007, packageSize: "120M imps/mo", products: "RUM", plan: "Bundle AppHarbr SDK upsell into renewal conversation in Dec", lastYear: "Renewed early at flat rate; expanded RUM to two more sites", riskReason: "Healthy usage growth, early adopter of new features" },
    { name: "AdVantage Exchange",   portal: "advantage.rum", contact: "Emily Chen", location: "Austin, USA",     product: "RUM",          type: "Platform",  tier: "Gold",      region: "USA",  mrr: 8000,  csm: "Tom Rosen",  healthScore: 75, health: "healthy",         renewal: "2026-12-01", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.10, pricePerScan: 0.0006, packageSize: "80M imps/mo", products: "RUM", plan: "Confirm auto-renew with champion in Oct; review usage vs tier", lastYear: "Renewed on auto; usage grew 20% with no plan change", riskReason: "Consistent usage, auto-renew reconfirmed last quarter" },
    { name: "Nordpress Media",      portal: "nordpress.rum", contact: "Mats Lindqvist", location: "Stockholm, Sweden",     product: "RUM",          type: "Publisher", tier: "Gold",      region: "EU",   mrr: 7900,  csm: "Noa Levi",   healthScore: 84, health: "healthy",         renewal: "2027-01-10", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.11, pricePerScan: 0.0006, packageSize: "75M imps/mo", products: "RUM", plan: "Pair renewal with SpecHub cross-sell demo in Nov", lastYear: "Renewed with small uplift after strong block-rate results", riskReason: "Strong block-rate results, positive sentiment from champion" },
    { name: "MobiReach",            portal: "mobireach.verif", contact: "Priya Nair", location: "Singapore",   product: "Verification", type: "Platform",  tier: "Gold",      region: "APAC", mrr: 6500,  csm: "Maya Stern", healthScore: 58, health: "needs-attention", renewal: "2026-08-28", autoRenew: true,  requirePO: false, churnRisk: "watch", cpm: 0.07, pricePerScan: 0.0004, packageSize: "90M scans/mo", products: "Verification", plan: "Exec call with champion this week; fix alert-noise complaints before renewal", lastYear: "Renewed late after 6-week negotiation; 10% discount for annual prepay", riskReason: "Open alert-noise complaints, health score dipped to 58" },
    { name: "StreamCast TV",        portal: "streamcast.rum", contact: "Kenji Watanabe", location: "Tokyo, Japan",    product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 6400,  csm: "Maya Stern", healthScore: 45, health: "at-risk",         renewal: "2026-10-20", autoRenew: false, requirePO: false, churnRisk: "high", cpm: 0.13, pricePerScan: 0.0008, packageSize: "60M imps/mo", products: "RUM", plan: "Save plan active: weekly check-ins, SLA credits offered, exec sponsor engaged", lastYear: "Renewed reluctantly after integration issues; usage has declined since", riskReason: "Health 45, usage down 30% since integration issues, manual renewal" },
    { name: "PixelBridge",          portal: "pixelbridge.verif", contact: "David Alvarez", location: "San Francisco, USA", product: "Verification", type: "Platform",  tier: "Gold",      region: "USA",  mrr: 6000,  csm: "Tom Rosen",  healthScore: 80, health: "healthy",         renewal: "2026-11-01", autoRenew: true,  requirePO: true,  churnRisk: "low", cpm: 0.08, pricePerScan: 0.0005, packageSize: "70M scans/mo", products: "Verification, AppHarbr SDK", plan: "Request PO early Oct; verify new procurement contact", lastYear: "Renewed on time; late PO nearly caused a service gap", riskReason: "Healthy adoption; PO timing is the only known friction" },
    { name: "Velocity Ads",         portal: "velocity.rum", contact: "Omer Shalev", location: "Tel Aviv, Israel",      product: "RUM",          type: "Platform",  tier: "Gold",      region: "Other",mrr: 5500,  csm: "Noa Levi",   healthScore: 64, health: "needs-attention", renewal: "2027-03-12", autoRenew: true,  requirePO: false, churnRisk: "watch", cpm: 0.10, pricePerScan: 0.0006, packageSize: "55M imps/mo", products: "RUM", plan: "Rebuild engagement via video-verification pilot before spring", lastYear: "Renewed flat; sponsor changed mid-year, relationship needs rebuilding", riskReason: "Sponsor left mid-year, engagement dropped since March" },
    { name: "Sunrise Media House",  portal: "sunrise.rum", contact: "Grace Tan", location: "Sydney, Australia",       product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 4750,  csm: "Maya Stern", healthScore: 81, health: "healthy",         renewal: "2027-05-20", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.09, pricePerScan: 0.0005, packageSize: "50M imps/mo", products: "RUM", plan: "On track; tie impression-tier upgrade to renewal for better unit price", lastYear: "Renewed with tier upgrade after overage discussions", riskReason: "Healthy account, overage discussions resolved amicably" },
    { name: "Spark Media Group",    portal: "sparkmedia.verif", contact: "Liam O'Brien", location: "Dublin, Ireland",  product: "Verification", type: "Platform",  tier: "Gold",      region: "Other",mrr: 4500,  csm: "Dana Katz",  healthScore: 72, health: "healthy",         renewal: "2027-06-30", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.08, pricePerScan: 0.0005, packageSize: "45M scans/mo", products: "Verification", plan: "Finish onboarding cleanly; monthly adoption reviews until usage sticks", lastYear: "New logo — first renewal cycle coming up", riskReason: "New logo mid-onboarding, tracking to plan" },
    { name: "Quantum Ads Network",  portal: "quantumads.verif", contact: "Ji-woo Park", location: "Seoul, South Korea",  product: "Verification", type: "Platform",  tier: "Silver",    region: "APAC", mrr: 5000,  csm: "Noa Levi",   healthScore: 66, health: "needs-attention", renewal: "2027-07-15", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.06, pricePerScan: 0.0004, packageSize: "50M scans/mo", products: "Verification", plan: "Unblock tag deployment; establish success metrics before first renewal", lastYear: "New logo — first renewal cycle coming up", riskReason: "Onboarding blocker open, but renewal is 11 months out" },
    { name: "PlayGrid Media",       portal: "playgrid.rum", contact: "Sofia Rossi", location: "Milan, Italy",      product: "RUM",          type: "Platform",  tier: "Silver",    region: "EU",   mrr: 2400,  csm: "Dana Katz",  healthScore: 77, health: "healthy",         renewal: "2027-02-28", autoRenew: true,  requirePO: false, churnRisk: "low", cpm: 0.09, pricePerScan: 0.0005, packageSize: "24M imps/mo", products: "RUM", plan: "Standard track; quarterly usage reviews", lastYear: "Renewed on auto with no issues", riskReason: "Stable low-touch account, no open issues" },
    { name: "TrafficLane",          portal: "trafficlane.verif", contact: "Tomas Novak", location: "Prague, Czechia", product: "Verification", type: "Platform",  tier: "Silver",    region: "EU",   mrr: 1900,  csm: "Dana Katz",  healthScore: 38, health: "at-risk",         renewal: "2026-09-04", autoRenew: false, requirePO: false, churnRisk: "high", cpm: 0.05, pricePerScan: 0.0003, packageSize: "20M scans/mo", products: "Verification", plan: "Proposal sent; decision call 20 Aug; 15% save offer approved", lastYear: "Renewed after downgrade from Gold; support tickets doubled since", riskReason: "Support tickets doubled, downgraded last year, health 38" },
    { name: "MetroNews Digital",    portal: "metronews.rum", contact: "Claire Dubois", location: "Paris, France",     product: "RUM",          type: "Publisher", tier: "Silver",    region: "EU",   mrr: 1800,  csm: "Noa Levi",   healthScore: 61, health: "needs-attention", renewal: "2026-10-02", autoRenew: true,  requirePO: false, churnRisk: "watch", cpm: 0.08, pricePerScan: 0.0005, packageSize: "18M imps/mo", products: "RUM", plan: "Address block-rate complaints in Sep health check; confirm auto-renew stands", lastYear: "Renewed on auto; two escalations since March", riskReason: "Two escalations since March, open block-rate complaints" }
  ],

  /* est = annual pipeline value (used for the pipeline tile); monthly = monthly amount */
  /* est = annual value; monthly = monthly amount; openDate = when opened; contact = client-side contact */
  opportunities: [
    { account: "AdNexa",                owner: "Tom Rosen",  contact: "Sarah Mitchell",  stage: "Negotiation/Review",    oppName: "APAC team rollout",           monthly: 4000, est: 48000, probability: 70,  openDate: "2026-06-12", closeDate: "2026-09-30", nextStep: "Send updated pricing for APAC seats",     nextStepUpdate: "2026-08-04" },
    { account: "Daily Chronicle Group", owner: "Dana Katz",  contact: "James Porter",    stage: "Commercial Discussion", oppName: "AppHarbr SDK upsell",         monthly: 3000, est: 36000, probability: 55,  openDate: "2026-07-01", closeDate: "2026-10-15", nextStep: "Schedule technical review with ad-ops",  nextStepUpdate: "2026-08-05" },
    { account: "Velocity Ads",          owner: "Noa Levi",   contact: "Omer Shalev",     stage: "Discovery",             oppName: "Video verification module",   monthly: 1500, est: 18000, probability: 40,  openDate: "2026-07-18", closeDate: "2026-11-20", nextStep: "Confirm video inventory volumes",        nextStepUpdate: "2026-08-01" },
    { account: "Nordpress Media",       owner: "Noa Levi",   contact: "Mats Lindqvist",  stage: "Commercial Discussion", oppName: "SpecHub cross-sell",          monthly: 1000, est: 12000, probability: 50,  openDate: "2026-06-28", closeDate: "2026-10-05", nextStep: "Share SpecHub ROI one-pager",           nextStepUpdate: "2026-07-30" },
    { account: "Sunrise Media House",   owner: "Maya Stern", contact: "Grace Tan",       stage: "Discovery",             oppName: "RUM impression tier upgrade", monthly: 750,  est: 9000,  probability: 35,  openDate: "2026-07-22", closeDate: "2026-12-01", nextStep: "Review current impression overage",     nextStepUpdate: "2026-08-02" },
    { account: "BidCore Technologies",  owner: "Dana Katz",  contact: "Lukas Weber",     stage: "Closed Won",            oppName: "Multi-year renewal + seats",  monthly: 2500, est: 30000, probability: 100, openDate: "2026-05-10", closeDate: "2026-07-18", nextStep: "Kickoff expansion onboarding",           nextStepUpdate: "2026-07-18" },
    { account: "PixelBridge",           owner: "Tom Rosen",  contact: "David Alvarez",   stage: "Closed Won",            oppName: "AppHarbr SDK add-on",         monthly: 1200, est: 14400, probability: 100, openDate: "2026-05-20", closeDate: "2026-08-05", nextStep: "Schedule SDK integration",               nextStepUpdate: "2026-08-05" },
    { account: "StreamCast TV",         owner: "Maya Stern", contact: "Kenji Watanabe",  stage: "Closed Lost",           oppName: "RUM tier upgrade",            monthly: 900,  est: 10800, probability: 0,   openDate: "2026-05-15", closeDate: "2026-07-28", nextStep: "Revisit next fiscal year",               nextStepUpdate: "2026-07-28" }
  ],

  onboarding: [
    { account: "Spark Media Group",   stage: "setup",    goLive: "2026-08-28", status: "on-track" },
    { account: "Quantum Ads Network", stage: "training", goLive: "2026-09-15", status: "blocked", blocker: "waiting on tag deployment" },
    { account: "PlayGrid Media",      stage: "kickoff",  goLive: "2026-09-30", status: "delayed" }
  ],

  /* percent: 0-100 complete; blockers: free text (empty = none); notes: newest last;
     priority: High/Medium/Low; estimateMin: estimated effort in minutes; array order = manual sort order */
  tasks: [
    { id: "T-101", priority: "High", estimateMin: 120, title: "Send renewal proposal",        account: "TrafficLane",         owner: "Dana Katz",  due: "2026-08-06", percent: 60, blockers: "",
      description: "Send the renewal proposal with the approved 15% save offer ahead of the 20 Aug decision call.",
      notes: [ { date: "2026-07-26", text: "Save offer approved by management, up to 15%." },
               { date: "2026-07-28", text: "Draft proposal reviewed; waiting on final legal wording." } ] },
    { id: "T-102", priority: "High", estimateMin: 240, title: "Prep QBR deck",                account: "AdNexa",              owner: "Tom Rosen",  due: "2026-08-09", percent: 40, blockers: "",
      description: "Quarterly business review deck for the 8 Sep QBR — include APAC expansion pricing slide.",
      notes: [ { date: "2026-08-03", text: "Usage data pulled; waiting on APAC pricing from sales." } ] },
    { id: "T-103", priority: "Medium", estimateMin: 30, title: "Chase blocked tag deployment", account: "Quantum Ads Network", owner: "Noa Levi",   due: "2026-08-12", percent: 30,
      blockers: "Client CSP policy blocks our tag domain — fix ships in their next release.",
      description: "Follow up with client engineering on the CSP allowlist change so onboarding can resume.",
      notes: [ { date: "2026-08-05", text: "Engineering call held — fix scheduled for their next release window." } ] },
    { id: "T-104", priority: "Medium", estimateMin: 60, title: "Health check call",            account: "MobiReach",           owner: "Maya Stern", due: "2026-08-13", percent: 0, blockers: "",
      description: "Pre-renewal health check — walk through alert-noise fixes and confirm renewal terms.",
      notes: [] },
    { id: "T-105", priority: "Low", estimateMin: 45, title: "Share July block-rate report", account: "Nordpress Media",     owner: "Dana Katz",  due: "2026-08-14", percent: 80, blockers: "",
      description: "Send the July block-rate report; champion shares it upstream with their leadership.",
      notes: [ { date: "2026-08-10", text: "Report generated; adding the SpecHub teaser slide before sending." } ] }
  ],

  /* per-client detail (keyed by portal) — health breakdown dims average to the
     account's healthScore; contacts/tickets/news are fictional like everything else */
  clientDetails: {
    "adnexa.verif": {
      healthBreakdown: { "Usage & adoption": 85, "Engagement": 80, "Support health": 70, "Sentiment": 77 },
      contacts: [
        { name: "Sarah Mitchell", title: "VP Ad Operations", location: "New York, USA", tz: "ET (UTC-5)" },
        { name: "Kevin Zhao", title: "Programmatic Lead", location: "New York, USA", tz: "ET (UTC-5)" },
        { name: "Rina Patel", title: "Procurement Manager", location: "Jersey City, USA", tz: "ET (UTC-5)" }
      ],
      tickets: [
        { id: "GE-4812", title: "Discrepancy in blocked-impression counts vs internal logs", status: "Open", priority: "Medium", opened: "2026-07-29" }
      ],
      news: [
        { date: "2026-08-01", title: "AdNexa Q2 revenue up 18% YoY", url: "https://www.example.com/news/adnexa-q2-revenue-up-18-yoy" },
        { date: "2026-07-15", title: "AdNexa launches CTV marketplace expansion in APAC", url: "https://www.example.com/news/adnexa-launches-ctv-marketplace-expansion-in-apac" }
      ],
      contractNotes: "PO required each term — procurement lead time ~3 weeks. SLA addendum on discrepancy reporting signed last renewal. 60-day out clause.",
      recentActivity: "QBR prep underway for 8 Sep. Steady product usage; two pricing calls in July about APAC seats. Last exec touch 22 Jul."
    },
    "bidcore.verif": {
      healthBreakdown: { "Usage & adoption": 92, "Engagement": 90, "Support health": 82, "Sentiment": 88 },
      contacts: [
        { name: "Lukas Weber", title: "Head of Supply Quality", location: "Berlin, Germany", tz: "CET (UTC+1)" },
        { name: "Anja Fischer", title: "Ad Ops Manager", location: "Berlin, Germany", tz: "CET (UTC+1)" }
      ],
      tickets: [],
      news: [
        { date: "2026-06-20", title: "BidCore named among fastest-growing EU SSPs", url: "https://www.example.com/news/bidcore-named-among-fastest-growing-eu-ssps" }
      ],
      contractNotes: "Auto-renews annually on 1 Apr. Multi-year discussion open — their legal prefers 1-year + auto. No PO.",
      recentActivity: "Healthy cadence with monthly syncs. Champion demoed our reporting to their exec team in July."
    },
    "chronicle.rum": {
      healthBreakdown: { "Usage & adoption": 88, "Engagement": 78, "Support health": 79, "Sentiment": 83 },
      contacts: [
        { name: "James Porter", title: "Director of Ad Revenue", location: "Chicago, USA", tz: "CT (UTC-6)" },
        { name: "Maria Gonzalez", title: "Head of Programmatic", location: "Chicago, USA", tz: "CT (UTC-6)" },
        { name: "Tom Wills", title: "Ad Ops Analyst", location: "Austin, USA", tz: "CT (UTC-6)" }
      ],
      tickets: [
        { id: "GE-4790", title: "False-positive block on house creative", status: "Open", priority: "Low", opened: "2026-08-03" }
      ],
      news: [
        { date: "2026-07-22", title: "Daily Chronicle Group acquires two regional news sites", url: "https://www.example.com/news/daily-chronicle-group-acquires-two-regional-news-sites" }
      ],
      contractNotes: "Auto-renew, no PO. Rate locked through Feb 2027; AppHarbr SDK upsell must go on a separate order form.",
      recentActivity: "Expanded RUM to two new sites in June; AppHarbr demo scheduled for the Dec bundle discussion."
    },
    "advantage.rum": {
      healthBreakdown: { "Usage & adoption": 80, "Engagement": 74, "Support health": 68, "Sentiment": 78 },
      contacts: [
        { name: "Emily Chen", title: "VP Marketplace Operations", location: "Austin, USA", tz: "CT (UTC-6)" },
        { name: "Derek Johnson", title: "Exchange QA Lead", location: "Austin, USA", tz: "CT (UTC-6)" }
      ],
      tickets: [
        { id: "GE-4801", title: "Slow dashboard load on large date ranges", status: "Open", priority: "Low", opened: "2026-07-25" }
      ],
      news: [
        { date: "2026-07-30", title: "AdVantage Exchange partners with major CTV platform", url: "https://www.example.com/news/advantage-exchange-partners-with-major-ctv-platform" }
      ],
      contractNotes: "Auto-renew 1 Dec. Usage running ~20% above tier — upgrade conversation recommended before renewal.",
      recentActivity: "Usage growth continues; champion reconfirmed auto-renew at the Q2 check-in."
    },
    "nordpress.rum": {
      healthBreakdown: { "Usage & adoption": 86, "Engagement": 88, "Support health": 78, "Sentiment": 84 },
      contacts: [
        { name: "Mats Lindqvist", title: "Programmatic Director", location: "Stockholm, Sweden", tz: "CET (UTC+1)" },
        { name: "Elin Berg", title: "Ad Quality Analyst", location: "Stockholm, Sweden", tz: "CET (UTC+1)" }
      ],
      tickets: [],
      news: [
        { date: "2026-06-12", title: "Nordpress Media wins Nordic digital publishing award", url: "https://www.example.com/news/nordpress-media-wins-nordic-digital-publishing-award" }
      ],
      contractNotes: "Auto-renew 10 Jan. SpecHub to be quoted as an add-on module; champion wants a single combined invoice.",
      recentActivity: "Strong block-rate results shared with their leadership; SpecHub demo booked for Nov."
    },
    "mobireach.verif": {
      healthBreakdown: { "Usage & adoption": 62, "Engagement": 50, "Support health": 55, "Sentiment": 65 },
      contacts: [
        { name: "Priya Nair", title: "Head of Ad Operations", location: "Singapore", tz: "SGT (UTC+8)" },
        { name: "Marcus Lim", title: "SDK Engineer", location: "Singapore", tz: "SGT (UTC+8)" }
      ],
      tickets: [
        { id: "GE-4756", title: "Alert noise — tuning thresholds for video campaigns", status: "Open", priority: "High", opened: "2026-07-08" },
        { id: "GE-4788", title: "API rate limits hit during reporting pulls", status: "In progress", priority: "Medium", opened: "2026-07-27" }
      ],
      news: [
        { date: "2026-07-05", title: "MobiReach expands into Indonesian market", url: "https://www.example.com/news/mobireach-expands-into-indonesian-market" }
      ],
      contractNotes: "Renews 28 Aug. Last cycle's 10% annual-prepay discount expires; champion expects the same terms again.",
      recentActivity: "Escalation on alert noise in July; exec call scheduled this week. Renewal at watch until complaints are resolved."
    },
    "streamcast.rum": {
      healthBreakdown: { "Usage & adoption": 40, "Engagement": 42, "Support health": 48, "Sentiment": 50 },
      contacts: [
        { name: "Kenji Watanabe", title: "Head of Digital Revenue", location: "Tokyo, Japan", tz: "JST (UTC+9)" },
        { name: "Yuki Tanaka", title: "Ad Tech Manager", location: "Tokyo, Japan", tz: "JST (UTC+9)" }
      ],
      tickets: [
        { id: "GE-4699", title: "Integration errors after player migration", status: "In progress", priority: "High", opened: "2026-06-14" },
        { id: "GE-4771", title: "Latency reports on video verification", status: "Open", priority: "Medium", opened: "2026-07-19" }
      ],
      news: [
        { date: "2026-07-28", title: "StreamCast TV announces streaming platform relaunch", url: "https://www.example.com/news/streamcast-tv-announces-streaming-platform-relaunch" }
      ],
      contractNotes: "Manual renewal 20 Oct — no auto-renew clause. SLA credits offered as save-play; discounts past 15% need VP sign-off.",
      recentActivity: "Save plan active with weekly check-ins since June. Usage down 30% after player migration; exec sponsor engaged 1 Aug."
    },
    "pixelbridge.verif": {
      healthBreakdown: { "Usage & adoption": 84, "Engagement": 78, "Support health": 76, "Sentiment": 82 },
      contacts: [
        { name: "David Alvarez", title: "Director of Ad Quality", location: "San Francisco, USA", tz: "PT (UTC-8)" },
        { name: "Lauren Kim", title: "Procurement Specialist", location: "San Francisco, USA", tz: "PT (UTC-8)" }
      ],
      tickets: [],
      news: [
        { date: "2026-07-10", title: "PixelBridge launches in-app ad quality program", url: "https://www.example.com/news/pixelbridge-launches-in-app-ad-quality-program" }
      ],
      contractNotes: "PO required — last year's PO arrived late and nearly lapsed service. Start the PO chase 4+ weeks early; procurement contact changed.",
      recentActivity: "Steady usage; verifying the new procurement contact. AppHarbr SDK adoption ramping well."
    },
    "velocity.rum": {
      healthBreakdown: { "Usage & adoption": 70, "Engagement": 52, "Support health": 66, "Sentiment": 68 },
      contacts: [
        { name: "Omer Shalev", title: "VP Ad Platform", location: "Tel Aviv, Israel", tz: "IST (UTC+2)" },
        { name: "Dana Mizrahi", title: "Ad Ops Lead", location: "Tel Aviv, Israel", tz: "IST (UTC+2)" }
      ],
      tickets: [
        { id: "GE-4805", title: "Question on video verification coverage", status: "Open", priority: "Low", opened: "2026-08-02" }
      ],
      news: [
        { date: "2026-07-12", title: "Velocity Ads hires new CRO from major SSP", url: "https://www.example.com/news/velocity-ads-hires-new-cro-from-major-ssp" }
      ],
      contractNotes: "Auto-renew Mar 2027. Previous sponsor left the company — the new CRO has not yet engaged with us.",
      recentActivity: "Engagement dropped since the sponsor change in March; video-verification pilot proposed to rebuild momentum."
    },
    "sunrise.rum": {
      healthBreakdown: { "Usage & adoption": 85, "Engagement": 80, "Support health": 76, "Sentiment": 83 },
      contacts: [
        { name: "Grace Tan", title: "Head of Ad Operations", location: "Sydney, Australia", tz: "AEST (UTC+10)" },
        { name: "Oliver Reed", title: "Programmatic Analyst", location: "Sydney, Australia", tz: "AEST (UTC+10)" }
      ],
      tickets: [],
      news: [
        { date: "2026-06-30", title: "Sunrise Media House reports record digital audience", url: "https://www.example.com/news/sunrise-media-house-reports-record-digital-audience" }
      ],
      contractNotes: "Auto-renew May 2027. Overage discussions resolved — price the impression-tier upgrade into the renewal.",
      recentActivity: "Healthy cadence with quarterly reviews. Tier-upgrade opportunity flagged for the renewal window."
    },
    "sparkmedia.verif": {
      healthBreakdown: { "Usage & adoption": 65, "Engagement": 78, "Support health": 72, "Sentiment": 73 },
      contacts: [
        { name: "Liam O'Brien", title: "Ad Operations Director", location: "Dublin, Ireland", tz: "GMT (UTC+0)" },
        { name: "Aoife Kelly", title: "Integration Engineer", location: "Dublin, Ireland", tz: "GMT (UTC+0)" }
      ],
      tickets: [
        { id: "GE-4809", title: "Onboarding: tag configuration for secondary domain", status: "In progress", priority: "Medium", opened: "2026-08-05" }
      ],
      news: [
        { date: "2026-07-18", title: "Spark Media Group merges EU sales houses", url: "https://www.example.com/news/spark-media-group-merges-eu-sales-houses" }
      ],
      contractNotes: "First term ends Jun 2027. Standard terms, no PO. Onboarding milestones are written into the order form.",
      recentActivity: "Onboarding in setup stage, go-live 28 Aug on track. Monthly adoption reviews planned post-launch."
    },
    "quantumads.verif": {
      healthBreakdown: { "Usage & adoption": 58, "Engagement": 70, "Support health": 62, "Sentiment": 74 },
      contacts: [
        { name: "Ji-woo Park", title: "Platform Operations Lead", location: "Seoul, South Korea", tz: "KST (UTC+9)" },
        { name: "Min-seo Choi", title: "Ad Quality Engineer", location: "Seoul, South Korea", tz: "KST (UTC+9)" }
      ],
      tickets: [
        { id: "GE-4795", title: "Tag deployment blocked by CSP policy", status: "Open", priority: "High", opened: "2026-07-22" }
      ],
      news: [
        { date: "2026-06-25", title: "Quantum Ads Network raises Series B", url: "https://www.example.com/news/quantum-ads-network-raises-series-b" }
      ],
      contractNotes: "First renewal Jul 2027. Success metrics to be agreed during onboarding; no commercial nuances yet.",
      recentActivity: "Onboarding blocked on tag deployment (their CSP policy). Engineering call held 5 Aug; fix lands in their next release."
    },
    "playgrid.rum": {
      healthBreakdown: { "Usage & adoption": 78, "Engagement": 72, "Support health": 80, "Sentiment": 78 },
      contacts: [
        { name: "Sofia Rossi", title: "Head of Ad Monetization", location: "Milan, Italy", tz: "CET (UTC+1)" }
      ],
      tickets: [],
      news: [
        { date: "2026-07-08", title: "PlayGrid Media adds three casual-gaming portals", url: "https://www.example.com/news/playgrid-media-adds-three-casual-gaming-portals" }
      ],
      contractNotes: "Auto-renew Feb 2027. Low-touch tier; email-first support plan.",
      recentActivity: "Quiet, stable account. Quarterly usage review completed in July — no changes."
    },
    "trafficlane.verif": {
      healthBreakdown: { "Usage & adoption": 35, "Engagement": 30, "Support health": 40, "Sentiment": 47 },
      contacts: [
        { name: "Tomas Novak", title: "Ad Operations Manager", location: "Prague, Czechia", tz: "CET (UTC+1)" },
        { name: "Petra Svobodova", title: "Finance Manager", location: "Prague, Czechia", tz: "CET (UTC+1)" }
      ],
      tickets: [
        { id: "GE-4692", title: "Recurring false positives on native creatives", status: "Open", priority: "High", opened: "2026-06-10" },
        { id: "GE-4760", title: "Portal login issues for sub-users", status: "In progress", priority: "Medium", opened: "2026-07-12" },
        { id: "GE-4802", title: "Billing query — scan overage line item", status: "Open", priority: "Low", opened: "2026-07-31" }
      ],
      news: [
        { date: "2026-07-20", title: "TrafficLane downsizes EU operations", url: "https://www.example.com/news/trafficlane-downsizes-eu-operations" }
      ],
      contractNotes: "Manual renewal 4 Sep — decision call 20 Aug. Downgraded from Gold last cycle. 15% save offer approved by management.",
      recentActivity: "Support tickets doubled since spring; save proposal sent 28 Jul. Decision call booked for 20 Aug."
    },
    "metronews.rum": {
      healthBreakdown: { "Usage & adoption": 66, "Engagement": 58, "Support health": 55, "Sentiment": 65 },
      contacts: [
        { name: "Claire Dubois", title: "Directrice Ad Ops", location: "Paris, France", tz: "CET (UTC+1)" },
        { name: "Hugo Martin", title: "Ad Quality Analyst", location: "Paris, France", tz: "CET (UTC+1)" }
      ],
      tickets: [
        { id: "GE-4778", title: "Block-rate spike investigation on sports section", status: "In progress", priority: "Medium", opened: "2026-07-21" }
      ],
      news: [
        { date: "2026-07-25", title: "MetroNews Digital launches paid newsletter tier", url: "https://www.example.com/news/metronews-digital-launches-paid-newsletter-tier" }
      ],
      contractNotes: "Auto-renew 2 Oct. Two escalations since March on record; confirm the renewal stands at the Sep health check.",
      recentActivity: "Block-rate complaints under investigation; Sep health check scheduled. Auto-renew expected to stand."
    }
  },

  kpi: {
    mrrGoal: 125000,
    arrGoal: 1500000,
    logoChurnYtd: 6.7,        /* %  — target: 8% or lower  */
    logoChurnTarget: 8,
    churnedYtd: 3,            /* count — target: 5 or fewer */
    churnedTarget: 5,
    convertedThisQuarter: 2,
    lostThisQuarter: 1,
    completedTasksThisWeek: 4,
    avgHealthDelta: "+2 vs last month",
    onboardingAvgDaysToGoLive: 34
  }
};
