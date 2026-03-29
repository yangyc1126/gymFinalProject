'use client';

import { useState } from 'react';
import { Trophy, Calendar, Home, BarChart2, User, ArrowLeft, ArrowRight } from "lucide-react";

export default function DashboardMobile() {
  const [records, setRecords] = useState<number[]>([]); // Array to store dates that have workouts

  const daysInMonth = 31;
  const firstDayOfWeek = 0; // March 1, 2026 is a Sunday (0)
  const todayDate = 29; // Hardcoded today's date for demo

  // Toggle record for a specific date
  const toggleRecord = (date: number) => {
    if (records.includes(date)) {
      setRecords(records.filter(r => r !== date));
    } else {
      setRecords([...records, date]);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e6faef] to-[#d6eff2] flex items-center justify-center p-4 font-sans">
      {/* Mobile Phone Mockup Card */}
      <div className="bg-[#fcfdfd] w-[#380px] max-w-full h-auto min-h-[640px] rounded-[3rem] shadow-[0_20px_50px_-10px_rgba(30,50,40,0.15)] flex flex-col overflow-hidden relative">
        
        {/* Header */}
        <header className="flex items-center justify-between px-8 pt-8 pb-3">
          <button className="text-[#5b8e7d] hover:text-[#4a7566] transition-colors p-2 rounded-full hover:bg-black/5">
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div className="text-center">
            <h1 className="text-xl font-bold text-slate-800 tracking-tight">2026年3月</h1>
            <p className="text-[12px] text-slate-400 mt-1 font-medium">本月{records.length}次</p>
          </div>
          <button className="text-[#5b8e7d] hover:text-[#4a7566] transition-colors p-2 rounded-full hover:bg-black/5">
            <ArrowRight className="w-5 h-5" />
          </button>
        </header>

        {/* Content Area - Just Calendar */}
        <main className="flex-1 px-6 pb-4 pt-0 flex flex-col items-center justify-start w-full">
          
          {/* Calendar Grid */}
          <div className="w-full">
            <div className="grid grid-cols-7 mb-4 text-center">
              {['日', '一', '二', '三', '四', '五', '六'].map((day) => (
                <div key={day} className="text-[#647c94] font-medium text-[13px]">{day}</div>
              ))}
            </div>
            <div className="grid grid-cols-7 gap-y-4 gap-x-1 text-center">
              {/* Empty days */}
              {Array.from({ length: firstDayOfWeek }).map((_, i) => (
                <div key={`empty-${i}`}></div>
              ))}
              {/* Days of month */}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const date = i + 1;
                const isRecorded = records.includes(date);
                const isToday = date === todayDate;
                
                return (
                  <div key={date} className="flex flex-col items-center justify-center relative py-1">
                    <button 
                      onClick={() => toggleRecord(date)}
                      className={`w-10 h-10 relative flex items-center justify-center font-medium text-[15px] rounded-full transition-all duration-300 box-border
                      ${isRecorded 
                        ? 'bg-[#5b8e7d] text-white shadow-md border-2 border-[#5b8e7d]' 
                        : isToday 
                          ? 'border-2 border-dashed border-[#5b8e7d] text-[#5b8e7d] bg-[#f2f8f5] hover:bg-[#e4efe9]'
                          : 'border-2 border-transparent text-slate-700 hover:bg-slate-100'}`}
                    >
                      {date}
                      {isRecorded && (
                        <span className="absolute -bottom-1 -right-1 text-[13px] drop-shadow-md">
                          💪
                        </span>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

        </main>

        {/* Bottom Tab Bar */}
        <div className="bg-[#fcfdfd] py-4 border-t border-slate-100/50 px-8 mt-auto">
          <nav className="flex items-center justify-between">
            <button className="flex flex-col items-center gap-1.5 text-[#a0aab5] hover:text-[#647c94] transition-all p-2">
              <Trophy className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[10px] font-bold">成就</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-[#5b8e7d] transition-all p-2 relative">
              <Calendar className="w-6 h-6" strokeWidth={2} />
              <span className="text-[10px] font-bold">歷史</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-[#a0aab5] hover:text-[#647c94] transition-all p-2">
              <Home className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[10px] font-bold">主頁</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-[#a0aab5] hover:text-[#647c94] transition-all p-2">
              <BarChart2 className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[10px] font-bold">統計</span>
            </button>
            <button className="flex flex-col items-center gap-1.5 text-[#a0aab5] hover:text-[#647c94] transition-all p-2">
              <User className="w-6 h-6" strokeWidth={1.5} />
              <span className="text-[10px] font-bold">設定</span>
            </button>
          </nav>
        </div>

      </div>
    </div>
  );
}
