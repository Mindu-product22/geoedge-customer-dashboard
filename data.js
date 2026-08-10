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
     churnRisk: low / watch / high (renewal readiness) */
  accounts: [
    { name: "AdNexa",               portal: "adnexa.verif", contact: "Sarah Mitchell", location: "New York, USA",      product: "Verification", type: "Platform",  tier: "Strategic", region: "USA",  mrr: 22000, csm: "Tom Rosen",  healthScore: 78, health: "healthy",         renewal: "2026-09-25", autoRenew: false, requirePO: true,  churnRisk: "low", plan: "Lock PO by mid-Sep; QBR on 8 Sep to present APAC expansion pricing", lastYear: "Renewed flat; negotiated discrepancy-reporting SLA after two escalations", riskReason: "Strong engagement, healthy QBR cadence, no open escalations" },
    { name: "BidCore Technologies", portal: "bidcore.verif", contact: "Lukas Weber", location: "Berlin, Germany",     product: "Verification", type: "Platform",  tier: "Strategic", region: "EU",   mrr: 16500, csm: "Dana Katz",  healthScore: 88, health: "healthy",         renewal: "2027-04-01", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Standard auto-renew track; propose multi-year at Q1 QBR", lastYear: "Renewed with 8% uplift; added second seat for EU ad-ops team", riskReason: "Health score 88, stable usage, champion actively engaged" },
    { name: "Daily Chronicle Group", portal: "chronicle.rum", contact: "James Porter", location: "Chicago, USA",    product: "RUM",          type: "Publisher", tier: "Strategic", region: "USA",  mrr: 14500, csm: "Dana Katz",  healthScore: 82, health: "healthy",         renewal: "2027-02-15", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Bundle AppHarbr SDK upsell into renewal conversation in Dec", lastYear: "Renewed early at flat rate; expanded RUM to two more sites", riskReason: "Healthy usage growth, early adopter of new features" },
    { name: "AdVantage Exchange",   portal: "advantage.rum", contact: "Emily Chen", location: "Austin, USA",     product: "RUM",          type: "Platform",  tier: "Gold",      region: "USA",  mrr: 8000,  csm: "Tom Rosen",  healthScore: 75, health: "healthy",         renewal: "2026-12-01", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Confirm auto-renew with champion in Oct; review usage vs tier", lastYear: "Renewed on auto; usage grew 20% with no plan change", riskReason: "Consistent usage, auto-renew reconfirmed last quarter" },
    { name: "Nordpress Media",      portal: "nordpress.rum", contact: "Mats Lindqvist", location: "Stockholm, Sweden",     product: "RUM",          type: "Publisher", tier: "Gold",      region: "EU",   mrr: 7900,  csm: "Noa Levi",   healthScore: 84, health: "healthy",         renewal: "2027-01-10", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Pair renewal with SpecHub cross-sell demo in Nov", lastYear: "Renewed with small uplift after strong block-rate results", riskReason: "Strong block-rate results, positive sentiment from champion" },
    { name: "MobiReach",            portal: "mobireach.verif", contact: "Priya Nair", location: "Singapore",   product: "Verification", type: "Platform",  tier: "Gold",      region: "APAC", mrr: 6500,  csm: "Maya Stern", healthScore: 58, health: "needs-attention", renewal: "2026-08-28", autoRenew: true,  requirePO: false, churnRisk: "watch", plan: "Exec call with champion this week; fix alert-noise complaints before renewal", lastYear: "Renewed late after 6-week negotiation; 10% discount for annual prepay", riskReason: "Open alert-noise complaints, health score dipped to 58" },
    { name: "StreamCast TV",        portal: "streamcast.rum", contact: "Kenji Watanabe", location: "Tokyo, Japan",    product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 6400,  csm: "Maya Stern", healthScore: 45, health: "at-risk",         renewal: "2026-10-20", autoRenew: false, requirePO: false, churnRisk: "high", plan: "Save plan active: weekly check-ins, SLA credits offered, exec sponsor engaged", lastYear: "Renewed reluctantly after integration issues; usage has declined since", riskReason: "Health 45, usage down 30% since integration issues, manual renewal" },
    { name: "PixelBridge",          portal: "pixelbridge.verif", contact: "David Alvarez", location: "San Francisco, USA", product: "Verification", type: "Platform",  tier: "Gold",      region: "USA",  mrr: 6000,  csm: "Tom Rosen",  healthScore: 80, health: "healthy",         renewal: "2026-11-01", autoRenew: true,  requirePO: true,  churnRisk: "low", plan: "Request PO early Oct; verify new procurement contact", lastYear: "Renewed on time; late PO nearly caused a service gap", riskReason: "Healthy adoption; PO timing is the only known friction" },
    { name: "Velocity Ads",         portal: "velocity.rum", contact: "Omer Shalev", location: "Tel Aviv, Israel",      product: "RUM",          type: "Platform",  tier: "Gold",      region: "Other",mrr: 5500,  csm: "Noa Levi",   healthScore: 64, health: "needs-attention", renewal: "2027-03-12", autoRenew: true,  requirePO: false, churnRisk: "watch", plan: "Rebuild engagement via video-verification pilot before spring", lastYear: "Renewed flat; sponsor changed mid-year, relationship needs rebuilding", riskReason: "Sponsor left mid-year, engagement dropped since March" },
    { name: "Sunrise Media House",  portal: "sunrise.rum", contact: "Grace Tan", location: "Sydney, Australia",       product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 4750,  csm: "Maya Stern", healthScore: 81, health: "healthy",         renewal: "2027-05-20", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "On track; tie impression-tier upgrade to renewal for better unit price", lastYear: "Renewed with tier upgrade after overage discussions", riskReason: "Healthy account, overage discussions resolved amicably" },
    { name: "Spark Media Group",    portal: "sparkmedia.verif", contact: "Liam O'Brien", location: "Dublin, Ireland",  product: "Verification", type: "Platform",  tier: "Gold",      region: "Other",mrr: 4500,  csm: "Dana Katz",  healthScore: 72, health: "healthy",         renewal: "2027-06-30", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Finish onboarding cleanly; monthly adoption reviews until usage sticks", lastYear: "New logo — first renewal cycle coming up", riskReason: "New logo mid-onboarding, tracking to plan" },
    { name: "Quantum Ads Network",  portal: "quantumads.verif", contact: "Ji-woo Park", location: "Seoul, South Korea",  product: "Verification", type: "Platform",  tier: "Silver",    region: "APAC", mrr: 5000,  csm: "Noa Levi",   healthScore: 66, health: "needs-attention", renewal: "2027-07-15", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Unblock tag deployment; establish success metrics before first renewal", lastYear: "New logo — first renewal cycle coming up", riskReason: "Onboarding blocker open, but renewal is 11 months out" },
    { name: "PlayGrid Media",       portal: "playgrid.rum", contact: "Sofia Rossi", location: "Milan, Italy",      product: "RUM",          type: "Platform",  tier: "Silver",    region: "EU",   mrr: 2400,  csm: "Dana Katz",  healthScore: 77, health: "healthy",         renewal: "2027-02-28", autoRenew: true,  requirePO: false, churnRisk: "low", plan: "Standard track; quarterly usage reviews", lastYear: "Renewed on auto with no issues", riskReason: "Stable low-touch account, no open issues" },
    { name: "TrafficLane",          portal: "trafficlane.verif", contact: "Tomas Novak", location: "Prague, Czechia", product: "Verification", type: "Platform",  tier: "Silver",    region: "EU",   mrr: 1900,  csm: "Dana Katz",  healthScore: 38, health: "at-risk",         renewal: "2026-09-04", autoRenew: false, requirePO: false, churnRisk: "high", plan: "Proposal sent; decision call 20 Aug; 15% save offer approved", lastYear: "Renewed after downgrade from Gold; support tickets doubled since", riskReason: "Support tickets doubled, downgraded last year, health 38" },
    { name: "MetroNews Digital",    portal: "metronews.rum", contact: "Claire Dubois", location: "Paris, France",     product: "RUM",          type: "Publisher", tier: "Silver",    region: "EU",   mrr: 1800,  csm: "Noa Levi",   healthScore: 61, health: "needs-attention", renewal: "2026-10-02", autoRenew: true,  requirePO: false, churnRisk: "watch", plan: "Address block-rate complaints in Sep health check; confirm auto-renew stands", lastYear: "Renewed on auto; two escalations since March", riskReason: "Two escalations since March, open block-rate complaints" }
  ],

  /* est = annual pipeline value (used for the pipeline tile); monthly = monthly amount */
  opportunities: [
    { account: "AdNexa",                owner: "Tom Rosen",  stage: "Negotiation", oppName: "APAC team rollout",           monthly: 4000, est: 48000, probability: 70, closeDate: "2026-09-30", createdDate: "2026-06-12", nextStep: "Send updated pricing for APAC seats",     nextStepUpdate: "2026-08-04" },
    { account: "Daily Chronicle Group", owner: "Dana Katz",  stage: "Proposal",    oppName: "AppHarbr SDK upsell",         monthly: 3000, est: 36000, probability: 55, closeDate: "2026-10-15", createdDate: "2026-07-01", nextStep: "Schedule technical review with ad-ops",  nextStepUpdate: "2026-08-05" },
    { account: "Velocity Ads",          owner: "Noa Levi",   stage: "Discovery",   oppName: "Video verification module",   monthly: 1500, est: 18000, probability: 40, closeDate: "2026-11-20", createdDate: "2026-07-18", nextStep: "Confirm video inventory volumes",        nextStepUpdate: "2026-08-01" },
    { account: "Nordpress Media",       owner: "Noa Levi",   stage: "Proposal",    oppName: "SpecHub cross-sell",          monthly: 1000, est: 12000, probability: 50, closeDate: "2026-10-05", createdDate: "2026-06-28", nextStep: "Share SpecHub ROI one-pager",           nextStepUpdate: "2026-07-30" },
    { account: "Sunrise Media House",   owner: "Maya Stern", stage: "Discovery",   oppName: "RUM impression tier upgrade", monthly: 750,  est: 9000,  probability: 35, closeDate: "2026-12-01", createdDate: "2026-07-22", nextStep: "Review current impression overage",     nextStepUpdate: "2026-08-02" }
  ],

  onboarding: [
    { account: "Spark Media Group",   stage: "setup",    goLive: "2026-08-28", status: "on-track" },
    { account: "Quantum Ads Network", stage: "training", goLive: "2026-09-15", status: "blocked", blocker: "waiting on tag deployment" },
    { account: "PlayGrid Media",      stage: "kickoff",  goLive: "2026-09-30", status: "delayed" }
  ],

  tasks: [
    { title: "Send renewal proposal",            account: "TrafficLane",         owner: "Dana Katz",  due: "2026-08-06" },
    { title: "Prep QBR deck",                    account: "AdNexa",              owner: "Tom Rosen",  due: "2026-08-09" },
    { title: "Chase blocked tag deployment",     account: "Quantum Ads Network", owner: "Noa Levi",   due: "2026-08-12" },
    { title: "Health check call",                account: "MobiReach",           owner: "Maya Stern", due: "2026-08-13" },
    { title: "Share July block-rate report",     account: "Nordpress Media",     owner: "Dana Katz",  due: "2026-08-14" }
  ],

  kpi: {
    mrrGoal: 125000,
    arrGoal: 1500000,
    logoChurnYtd: 6.7,        /* %  — target: 8% or lower  */
    logoChurnTarget: 8,
    churnedYtd: 3,            /* count — target: 5 or fewer */
    churnedTarget: 5,
    convertedThisQuarter: 2,
    completedTasksThisWeek: 4,
    avgHealthDelta: "+2 vs last month",
    onboardingAvgDaysToGoLive: 34
  }
};
