"use client";

import {
  Trophy,
  Calendar,
  Home,
  BarChart2,
  User,
  ArrowLeft,
  ArrowRight,
} from "lucide-react";

export default function DashboardMobile() {
  const daysInMonth = 31;
  const firstDayOfWeek = 0; // March 1, 2026 is a Sunday (0)

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eef7e5] via-[#e2f1ea] to-[#d6eff2] flex items-center justify-center p-4 font-sans">
      {/* Mobile Phone Mockup Card */}
      <div className="bg-[#f8fafa] w-full max-w-[400px] h-[85vh] max-h-[850px] rounded-[2.5rem] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden relative border-[6px] border-white/80">
        {/* Header */}
        <header className="flex items-center justify-between px-6 pt-10 pb-4 bg-white/50 backdrop-blur-md">
          <button className="text-[#5b8e7d] hover:text-[#4a7566] transition-colors p-2 rounded-full hover:bg-white/60">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">
              2026年3月
            </h1>
            <p className="text-[13px] text-slate-500 mt-0.5 font-medium">
              本月2次
            </p>
          </div>
          <button className="text-[#5b8e7d] hover:text-[#4a7566] transition-colors p-2 rounded-full hover:bg-white/60">
            <ArrowRight className="w-6 h-6" />
          </button>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-5 py-6 flex flex-col items-center overflow-y-auto w-full no-scrollbar">
          {/* Calendar Grid */}
          <div className="w-full mb-8">
            <div className="grid grid-cols-7 mb-4 text-center">
              {["日", "一", "二", "三", "四", "五", "六"].map((day) => (
                <div key={day} className="text-slate-500 font-bold text-[13px]">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-5 text-center">
              {/* Empty days */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`}></div>
              ))}
              {/* Days of month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const date = i + 1;
                return (
                  <div
                    key={date}
                    className="flex flex-col items-center justify-center relative"
                  >
                    <div className="w-10 h-10 flex items-center justify-center text-slate-700 font-medium text-[15px] rounded-full hover:bg-slate-200 cursor-pointer transition-colors">
                      {date}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Training Record Status */}
          <div className="text-center text-slate-500 text-[15px] mb-8 font-medium">
            當日無訓練記錄
          </div>

          {/* Today's Review */}
          <div className="w-full bg-white shadow-sm rounded-3xl p-6 mb-8 border border-slate-50">
            <h2 className="text-[17px] font-bold text-slate-800 mb-4">
              今日點評
            </h2>
            <input
              readOnly
              placeholder="無法編輯未來日期"
              className="w-full bg-[#f8fafa] border border-slate-100 rounded-[1.2rem] px-5 py-4 text-slate-400 cursor-not-allowed focus:outline-none text-[14px]"
            />
          </div>
        </main>

        {/* Bottom Tab Bar */}
        <div className="bg-white/90 backdrop-blur-md pt-3 pb-6 border-t border-slate-100 px-6 mt-auto">
          <nav className="flex items-center justify-between">
            <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-all p-2">
              <Trophy className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] font-bold">成就</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-[#5b8e7d] transition-all p-2 relative">
              <Calendar className="w-6 h-6" strokeWidth={2} />
              <span className="text-[11px] font-bold">歷史</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-all p-2">
              <Home className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] font-bold">主頁</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-all p-2">
              <BarChart2 className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] font-bold">統計</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-slate-700 transition-all p-2">
              <User className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[11px] font-bold">設定</span>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
