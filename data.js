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
    { name: "AdNexa",               portal: "adnexa.verif",      product: "Verification", type: "Platform",  tier: "Strategic", region: "USA",  mrr: 22000, csm: "Tom Rosen",  healthScore: 78, health: "healthy",         renewal: "2026-09-25", autoRenew: false, requirePO: true,  churnRisk: "low"   },
    { name: "BidCore Technologies", portal: "bidcore.verif",     product: "Verification", type: "Platform",  tier: "Strategic", region: "EU",   mrr: 16500, csm: "Dana Katz",  healthScore: 88, health: "healthy",         renewal: "2027-04-01", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "Daily Chronicle Group", portal: "chronicle.rum",    product: "RUM",          type: "Publisher", tier: "Strategic", region: "USA",  mrr: 14500, csm: "Dana Katz",  healthScore: 82, health: "healthy",         renewal: "2027-02-15", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "AdVantage Exchange",   portal: "advantage.rum",     product: "RUM",          type: "Platform",  tier: "Gold",      region: "USA",  mrr: 8000,  csm: "Tom Rosen",  healthScore: 75, health: "healthy",         renewal: "2026-12-01", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "Nordpress Media",      portal: "nordpress.rum",     product: "RUM",          type: "Publisher", tier: "Gold",      region: "EU",   mrr: 7900,  csm: "Noa Levi",   healthScore: 84, health: "healthy",         renewal: "2027-01-10", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "MobiReach",            portal: "mobireach.verif",   product: "Verification", type: "Platform",  tier: "Gold",      region: "APAC", mrr: 6500,  csm: "Maya Stern", healthScore: 58, health: "needs-attention", renewal: "2026-08-28", autoRenew: true,  requirePO: false, churnRisk: "watch" },
    { name: "StreamCast TV",        portal: "streamcast.rum",    product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 6400,  csm: "Maya Stern", healthScore: 45, health: "at-risk",         renewal: "2026-10-20", autoRenew: false, requirePO: false, churnRisk: "high"  },
    { name: "PixelBridge",          portal: "pixelbridge.verif", product: "Verification", type: "Platform",  tier: "Gold",      region: "USA",  mrr: 6000,  csm: "Tom Rosen",  healthScore: 80, health: "healthy",         renewal: "2026-11-01", autoRenew: true,  requirePO: true,  churnRisk: "low"   },
    { name: "Velocity Ads",         portal: "velocity.rum",      product: "RUM",          type: "Platform",  tier: "Gold",      region: "Other",mrr: 5500,  csm: "Noa Levi",   healthScore: 64, health: "needs-attention", renewal: "2027-03-12", autoRenew: true,  requirePO: false, churnRisk: "watch" },
    { name: "Sunrise Media House",  portal: "sunrise.rum",       product: "RUM",          type: "Publisher", tier: "Gold",      region: "APAC", mrr: 4750,  csm: "Maya Stern", healthScore: 81, health: "healthy",         renewal: "2027-05-20", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "Spark Media Group",    portal: "sparkmedia.verif",  product: "Verification", type: "Platform",  tier: "Gold",      region: "Other",mrr: 4500,  csm: "Dana Katz",  healthScore: 72, health: "healthy",         renewal: "2027-06-30", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "Quantum Ads Network",  portal: "quantumads.verif",  product: "Verification", type: "Platform",  tier: "Silver",    region: "APAC", mrr: 5000,  csm: "Noa Levi",   healthScore: 66, health: "needs-attention", renewal: "2027-07-15", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "PlayGrid Media",       portal: "playgrid.rum",      product: "RUM",          type: "Platform",  tier: "Silver",    region: "EU",   mrr: 2400,  csm: "Dana Katz",  healthScore: 77, health: "healthy",         renewal: "2027-02-28", autoRenew: true,  requirePO: false, churnRisk: "low"   },
    { name: "TrafficLane",          portal: "trafficlane.verif", product: "Verification", type: "Platform",  tier: "Silver",    region: "EU",   mrr: 1900,  csm: "Dana Katz",  healthScore: 38, health: "at-risk",         renewal: "2026-09-04", autoRenew: false, requirePO: false, churnRisk: "high"  },
    { name: "MetroNews Digital",    portal: "metronews.rum",     product: "RUM",          type: "Publisher", tier: "Silver",    region: "EU",   mrr: 1800,  csm: "Noa Levi",   healthScore: 61, health: "needs-attention", renewal: "2026-10-02", autoRenew: true,  requirePO: false, churnRisk: "watch" }
  ],

  opportunities: [
    { account: "AdNexa",               desc: "expansion intent: APAC team rollout",      est: 48000 },
    { account: "Daily Chronicle Group", desc: "upsell fit: AppHarbr SDK",                est: 36000 },
    { account: "Velocity Ads",         desc: "upsell fit: video verification module",    est: 18000 },
    { account: "Nordpress Media",      desc: "cross-sell: SpecHub",                      est: 12000 },
    { account: "Sunrise Media House",  desc: "expansion: RUM impression tier upgrade",   est: 9000  }
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
