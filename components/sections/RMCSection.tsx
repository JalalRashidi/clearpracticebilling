"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
// ─── Types ───────────────────────────────────────────────────────────────────
type StatType = "bar" | "simple";

type Stat = {
  label: string;
  value: string;
  sub: string;
  type: StatType;
  pct?: number;
  color: string;
};

type ServiceData = {
  color: string;
  bgLight: string;
  textColor: string;
  label: string;
  title: string;
  desc: string;
  stats: Stat[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────
const DATA: Record<string, ServiceData> = {
  billing: {
    color: "#3b82f6",
    bgLight: "#eff6ff",
    textColor: "#1d4ed8",
    label: "Medical Billing",
    title: "Reliable medical billing that improves collections",
    desc: "Our billing team ensures accurate claim submission, proactive denial management, and consistent follow-ups to maintain a steady revenue cycle.",
    stats: [
      { label: "Submission Speed", value: "95%", sub: "Claims submitted within 24 hrs", type: "bar", pct: 95, color: "#3b82f6" },
      { label: "Clean Claims Rate", value: "98%", sub: "First-pass acceptance rate", type: "bar", pct: 98, color: "#3b82f6" },
      { label: "Claims Billed", value: "7M+", sub: "Processed annually", type: "simple", color: "#3b82f6" },
      { label: "Avg. Reimbursement", value: "14 days", sub: "Average billing cycle", type: "bar", pct: 72, color: "#10b981" },
      { label: "Denial Rate", value: "< 3%", sub: "Industry-leading low rate", type: "bar", pct: 3, color: "#ef4444" },
      { label: "Revenue Collected", value: "$500M+", sub: "Total revenue managed", type: "simple", color: "#3b82f6" },
    ],
  },
  coding: {
    color: "#8b5cf6",
    bgLight: "#f5f3ff",
    textColor: "#6d28d9",
    label: "Medical Coding",
    title: "Precision coding for maximum compliance & reimbursement",
    desc: "Expert coders ensuring ICD-10, CPT, and HCPCS accuracy to minimize audit risks and maximize legitimate reimbursement.",
    stats: [
      { label: "Coding Accuracy", value: "99%", sub: "Verified accuracy rate", type: "bar", pct: 99, color: "#8b5cf6" },
      { label: "HIPAA Compliance", value: "100%", sub: "Fully compliant operations", type: "bar", pct: 100, color: "#8b5cf6" },
      { label: "Charts Coded", value: "12M", sub: "Coded annually", type: "simple", color: "#8b5cf6" },
      { label: "Avg. Turnaround", value: "24 hrs", sub: "Average coding completion", type: "bar", pct: 80, color: "#8b5cf6" },
      { label: "Audit Pass Rate", value: "97%", sub: "External audit success", type: "bar", pct: 97, color: "#8b5cf6" },
      { label: "Cost Reduction", value: "15%", sub: "Operational savings", type: "simple", color: "#8b5cf6" },
    ],
  },
  credentialing: {
    color: "#f59e0b",
    bgLight: "#fffbeb",
    textColor: "#b45309",
    label: "Credentialing",
    title: "Simplified provider enrollment & credentialing",
    desc: "Expedite your enrollment process with major payers and ensure your providers remain compliant and ready to see patients.",
    stats: [
      { label: "Enrollment Success", value: "100%", sub: "Success rate", type: "bar", pct: 100, color: "#f59e0b" },
      { label: "Payer Networks", value: "150+", sub: "Networks managed", type: "simple", color: "#f59e0b" },
      { label: "Providers Enrolled", value: "5K+", sub: "Credentialed to date", type: "simple", color: "#f59e0b" },
      { label: "Processing Speed", value: "45 days", sub: "Faster than industry avg", type: "bar", pct: 60, color: "#f59e0b" },
      { label: "Missed Re-cred", value: "0", sub: "Deadlines tracked & met", type: "simple", color: "#f59e0b" },
      { label: "Paperwork Reduced", value: "60%", sub: "Admin burden cut", type: "bar", pct: 60, color: "#f59e0b" },
    ],
  },
  ar: {
    color: "#ec4899",
    bgLight: "#fdf2f8",
    textColor: "#be185d",
    label: "AR Solutions",
    title: "Strategic accounts receivable recovery",
    desc: "Turn aged accounts receivable into cash flow. Our recovery specialists target old claims to ensure no dollar is left behind.",
    stats: [
      { label: "Aged AR Recovery", value: "85%", sub: "Recovery on old claims", type: "bar", pct: 85, color: "#ec4899" },
      { label: "90-Day+ Claims", value: "Resolved", sub: "Successfully processed", type: "simple", color: "#ec4899" },
      { label: "Cash Flow Increase", value: "40%", sub: "Monthly improvement", type: "bar", pct: 40, color: "#ec4899" },
      { label: "Claims Resolved", value: "250K", sub: "Per month", type: "simple", color: "#ec4899" },
      { label: "Write-Off Rate", value: "2%", sub: "Reduced write-offs", type: "bar", pct: 2, color: "#ef4444" },
      { label: "Total AR Managed", value: "$1.2B", sub: "Portfolio under management", type: "simple", color: "#ec4899" },
    ],
  },
  vob: {
    color: "#06b6d4",
    bgLight: "#ecfeff",
    textColor: "#0e7490",
    label: "VOB & Prior Auth",
    title: "Seamless verification & prior authorization",
    desc: "Eliminate administrative bottlenecks by verifying insurance and obtaining authorizations before the patient even walks in.",
    stats: [
      { label: "Verification Accuracy", value: "99%", sub: "Verified benefit accuracy", type: "bar", pct: 99, color: "#06b6d4" },
      { label: "Prior-Auth Approval", value: "94%", sub: "First-submission approvals", type: "bar", pct: 94, color: "#06b6d4" },
      { label: "Avg. Verify Time", value: "10 min", sub: "Per patient on average", type: "simple", color: "#06b6d4" },
      { label: "Authorizations/Yr", value: "800K", sub: "Processed annually", type: "simple", color: "#06b6d4" },
      { label: "Denial Prevention", value: "25%", sub: "Front-end reduction", type: "bar", pct: 25, color: "#06b6d4" },
      { label: "Provider Satisfaction", value: "4.9/5", sub: "Average score", type: "simple", color: "#06b6d4" },
    ],
  },
  scribing: {
    color: "#10b981",
    bgLight: "#ecfdf5",
    textColor: "#047857",
    label: "Scribing Services",
    title: "Real-time medical scribing to reduce physician burnout",
    desc: "Focus on your patients while our virtual scribes handle documentation. Reduce burnout and increase chart completion speed.",
    stats: [
      { label: "Daily Time Saved", value: "3 hrs", sub: "Per physician per day", type: "simple", color: "#10b981" },
      { label: "Same-Day Charts", value: "100%", sub: "Completed same day", type: "bar", pct: 100, color: "#10b981" },
      { label: "Patient Volume", value: "+20%", sub: "Increase in throughput", type: "simple", color: "#10b981" },
      { label: "Burnout Reduction", value: "70%", sub: "Reported stress drop", type: "bar", pct: 70, color: "#10b981" },
      { label: "Note Accuracy", value: "98%", sub: "Documentation accuracy", type: "bar", pct: 98, color: "#10b981" },
      { label: "Scribe Experience", value: "10 yrs", sub: "Average team experience", type: "simple", color: "#10b981" },
    ],
  },
};

// ─── Animation Variants ───────────────────────────────────────────────────────
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.05 },
  },
  exit: {
    opacity: 0,
    y: -6,
    transition: { duration: 0.15, ease: "easeIn" },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring", // ✅ now correctly inferred
      stiffness: 280,
      damping: 24,
    },
  },
};

const headerVariants:Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.28, ease: "easeOut" },
  },
};

const dividerVariants:Variants = {
  hidden: { scaleX: 0, originX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.4, ease: "easeOut", delay: 0.1 },
  },
};

// ─── Animated Bar ─────────────────────────────────────────────────────────────
const AnimatedBar = ({ pct, color }: { pct: number; color: string }) => (
  <div className="w-full h-1 rounded-full bg-gray-100 overflow-hidden mt-3">
    <motion.div
      className="h-full rounded-full"
      style={{ backgroundColor: color }}
      initial={{ width: 0 }}
      animate={{ width: `${Math.min(pct, 100)}%` }}
      transition={{ duration: 0.85, ease: [0.4, 0, 0.2, 1], delay: 0.15 }}
    />
  </div>
);

// ─── Stat Card ────────────────────────────────────────────────────────────────
const StatCard = ({ stat }: { stat: Stat }) => (
  <motion.div
    variants={cardVariants}
    whileHover={{ y: -3, transition: { duration: 0.2 } }}
    className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-5 flex flex-col gap-3 cursor-default shadow-sm hover:shadow-md transition-shadow duration-200"
  >
    {/* Label row */}
    <div className="flex items-center justify-between">
      <span className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-widest text-gray-400 leading-none">
        {stat.label}
      </span>
      <span
        className="w-2 h-2 rounded-full flex-shrink-0 opacity-50"
        style={{ backgroundColor: stat.color }}
      />
    </div>

    {/* Value */}
    <div>
      <motion.div
        className="text-2xl sm:text-3xl font-bold text-gray-900 leading-none tracking-tight"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
      >
        {stat.value}
      </motion.div>
      <p className="text-xs text-gray-500 mt-1.5 leading-snug">{stat.sub}</p>
    </div>

    {/* Bar */}
    {stat.type === "bar" && stat.pct !== undefined && (
      <AnimatedBar pct={stat.pct} color={stat.color} />
    )}
  </motion.div>
);

// ─── Mobile Tab Bar ───────────────────────────────────────────────────────────
const MobileTabBar = ({
  keys,
  activeKey,
  onSwitch,
}: {
  keys: string[];
  activeKey: string;
  onSwitch: (k: string) => void;
}) => (
  <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden [&::-webkit-scrollbar]:hidden">
    {keys.map((key) => {
      const d = DATA[key];
      const isActive = key === activeKey;
      return (
        <motion.button
          key={key}
          onClick={() => onSwitch(key)}
          whileTap={{ scale: 0.95 }}
          className="flex-shrink-0 flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 outline-none"
          style={{
            background: isActive ? d.bgLight : "white",
            color: isActive ? d.textColor : "#9ca3af",
            borderColor: isActive ? d.color + "50" : "#f0f0f0",
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
            style={{ backgroundColor: d.color, opacity: isActive ? 1 : 0.35 }}
          />
          {d.label}
        </motion.button>
      );
    })}
  </div>
);

// ─── Sidebar ──────────────────────────────────────────────────────────────────
const Sidebar = ({
  keys,
  activeKey,
  onSwitch,
}: {
  keys: string[];
  activeKey: string;
  onSwitch: (k: string) => void;
}) => (
  <aside className="hidden lg:flex flex-col w-56 flex-shrink-0 border-r border-gray-100 bg-gray-50/70 py-5 px-2.5 gap-0.5">
    <p className="text-[10px] font-bold uppercase tracking-[0.12em] text-gray-400 px-3 pb-3">
      Services
    </p>
    {keys.map((key) => {
      const d = DATA[key];
      const isActive = key === activeKey;
      return (
        <button
          key={key}
          onClick={() => onSwitch(key)}
          className="relative w-full text-left px-3 py-2.5 rounded-xl text-sm transition-colors duration-150 flex items-center gap-2.5 outline-none"
          style={{
            color: isActive ? "#111827" : "#6b7280",
            fontWeight: isActive ? 600 : 400,
          }}
        >
          {/* Animated background pill */}
          {isActive && (
            <motion.div
              layoutId="sidebarActiveBg"
              className="absolute inset-0 rounded-xl bg-white shadow-sm border border-gray-100"
              transition={{ type: "spring", stiffness: 380, damping: 30 }}
            />
          )}
          <span
            className="relative z-10 w-2 h-2 rounded-full flex-shrink-0 transition-opacity duration-200"
            style={{
              backgroundColor: d.color,
              opacity: isActive ? 1 : 0.35,
            }}
          />
          <span className="relative z-10">{d.label}</span>
        </button>
      );
    })}
  </aside>
);

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function Dashboard() {
  const keys = Object.keys(DATA);
  const [activeKey, setActiveKey] = useState(keys[0]);
  const d = DATA[activeKey];

  return (
    <>
   
    <div className="lg:max-h-200  p-3 sm:p-6 lg:p-10 flex items-start justify-center my-4 ">
      <div className="w-full max-w-7xl">
 <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight my-4">RMC (Revenue Cycle Management)</h2>
        {/* ── Mobile horizontal tab bar ── */}
        <MobileTabBar keys={keys} activeKey={activeKey} onSwitch={setActiveKey} />

        {/* ── Main shell ── */}
        <div className="mt-3 lg:mt-0 bg-white border border-gray-200/70 rounded-2xl sm:rounded-3xl overflow-hidden flex flex-col lg:flex-row shadow-sm">

          {/* Sidebar — desktop only */}
          <Sidebar keys={keys} activeKey={activeKey} onSwitch={setActiveKey} />

          {/* Content panel */}
          <div className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeKey}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="flex flex-col gap-5 sm:gap-6"
              >
                {/* ── Header ── */}
                <motion.div
                  variants={headerVariants}
                  className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4"
                >
                  <div className="flex-1">
                    {/* Service badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.75 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.25, ease: [0.34, 1.56, 0.64, 1] }}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wider uppercase mb-3"
                      style={{ backgroundColor: d.bgLight, color: d.textColor }}
                    >
                      <motion.span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: d.color }}
                        animate={{ scale: [1, 1.4, 1] }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      />
                      {d.label}
                    </motion.div>

                    <motion.h2
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 leading-snug max-w-lg"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.05 }}
                    >
                      {d.title}
                    </motion.h2>

                    <motion.p
                      className="text-sm text-gray-500 leading-relaxed mt-2 max-w-xl"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      {d.desc}
                    </motion.p>
                  </div>

                  {/* CTA button */}
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.25, delay: 0.15 }}
                    className="flex-shrink-0 self-start sm:self-center px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-sm font-semibold border-2 transition-colors duration-150 outline-none"
                    style={{
                      borderColor: d.color,
                      color: d.textColor,
                      backgroundColor: d.bgLight,
                    }}
                  >
                    Learn more →
                  </motion.button>
                </motion.div>

                {/* ── Divider ── */}
                <motion.div
                  variants={dividerVariants}
                  className="h-px bg-gray-100"
                />

                {/* ── Stats Grid ── */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-3 sm:gap-4">
                  {d.stats.map((stat, i) => (
                    <StatCard key={`${activeKey}-${i}`} stat={stat} />
                  ))}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}