import { Bell, Moon, Languages, User, Dumbbell, Activity, Calendar, BarChart2, Wrench, Trophy, Crown, ArrowLeft, ArrowRight, Mail, Globe, MessageCircle } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eef7e5] via-[#e2f1ea] to-[#d6eff2] flex items-center justify-center p-4 sm:p-8 font-sans">

      {/* Main Card */}
      <div className="bg-white/95 backdrop-blur-xl w-full max-w-6xl rounded-3xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.15)] flex flex-col overflow-hidden border border-white/60 min-h-[85vh]">

        {/* Header */}
        <header className="flex items-center justify-between px-6 sm:px-10 py-5 border-b border-slate-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-inner text-slate-800 font-black text-2xl">
              LF
            </div>
            <h1 className="text-2xl font-bold text-slate-800 tracking-tight">LifeFitness.com</h1>
          </div>
          <div className="flex items-center gap-6 text-slate-400">
            <button className="hover:text-blue-500 transition-colors"><Bell className="w-6 h-6" /></button>
            <button className="hover:text-blue-500 transition-colors"><Moon className="w-6 h-6" /></button>
            <button className="hover:text-blue-500 transition-colors"><Languages className="w-6 h-6" /></button>
            <button className="w-10 h-10 bg-[#3b82f6] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-transform hover:scale-105">
              <User className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 px-4 sm:px-10 py-10 flex flex-col items-center">

          {/* Step Progress */}
          <div className="flex items-start justify-between mb-12 max-w-4xl w-full relative px-4">
            <div className="absolute top-6 left-10 right-10 h-0.5 bg-slate-100 -z-10"></div>

            <div className="flex flex-col items-center gap-4 bg-transparent">
              <div className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center font-bold text-lg shadow-[0_0_15px_rgba(59,130,246,0.4)] ring-8 ring-white">1</div>
              <div className="text-center">
                <div className="font-bold text-[#3b82f6] text-lg">設備

                </div>
                <div className="text-sm text-slate-400 mt-1">選擇您的設備</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-transparent">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-lg ring-8 ring-white">2</div>
              <div className="text-center">
                <div className="font-bold text-slate-400 text-lg">肌肉</div>
                <div className="text-sm text-slate-400 mt-1">選擇您的訓練</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 bg-transparent">
              <div className="w-12 h-12 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center font-bold text-lg ring-8 ring-white">3</div>
              <div className="text-center">
                <div className="font-bold text-slate-400 text-lg">練習</div>
                <div className="text-sm text-slate-400 mt-1">自訂您的訓練</div>
              </div>
            </div>
          </div>

          {/* Equipment Grid */}
          <div className="w-full max-w-5xl bg-slate-50/50 rounded-3xl p-6 sm:p-10 border border-slate-100 mb-6 flex-1 relative">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {[
                { name: "自重", highlight: true, bg: "bg-blue-50/80", text: "text-blue-600", dot: "bg-[#3b82f6]", border: "border-blue-100" },
                { name: "啞鈴" },
                { name: "槓鈴" },
                { name: "壺鈴" },
                { name: "彈力繩" },
                { name: "繩索" },
                { name: "器械" },
                { name: "無限制" }
              ].map((item, idx) => (
                <button
                  key={idx}
                  className={`group relative p-8 rounded-[2rem] flex flex-col items-center justify-center gap-6 border-2 transition-all duration-300 ${item.highlight
                    ? `${item.bg} ${item.border} shadow-sm`
                    : 'bg-white border-transparent shadow-sm hover:shadow-md hover:-translate-y-1'
                    }`}
                >
                  <div className={`absolute top-5 left-5 w-2 h-2 rounded-full ${item.highlight ? item.dot : 'bg-slate-200'}`}></div>
                  <div className={`p-4 rounded-full transition-colors ${item.highlight ? 'bg-blue-100/50' : 'bg-slate-50 group-hover:bg-blue-50'}`}>
                    <Dumbbell className={`w-12 h-12 ${item.highlight ? item.text : 'text-slate-400 group-hover:text-blue-400 transition-colors'}`} strokeWidth={1.5} />
                  </div>
                  <span className={`font-bold text-lg ${item.highlight ? 'text-slate-800' : 'text-slate-500 group-hover:text-slate-700'}`}>{item.name}</span>
                </button>
              ))}
            </div>

            {/* Action Navigation Overlay inside Card bottom */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 grid grid-cols-2 gap-4 bg-white border border-slate-200 rounded-[2.5rem] p-1.5 shadow-xl w-[90%] sm:w-[500px]">
              <button className="flex items-center justify-center gap-3 py-4 rounded-[2rem] text-slate-400 font-bold hover:bg-slate-50 hover:text-slate-600 transition-all text-lg">
                <ArrowLeft className="w-5 h-5" />
                <span>上一步</span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 rounded-[2rem] bg-blue-200 text-white font-bold hover:bg-[#3b82f6] hover:shadow-lg hover:shadow-blue-500/30 transition-all text-lg duration-300">
                <span>繼續</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

          </div>

        </main>

        {/* Bottom Tab Bar */}
        <div className="border-t border-slate-100 bg-white mt-8">
          <nav className="flex items-center justify-center px-4 py-3 gap-6 sm:gap-16 max-w-4xl mx-auto overflow-x-auto no-scrollbar">
            <button className="flex flex-col items-center gap-2 relative py-3 group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-10 h-1 bg-teal-400 rounded-b-full shadow-[0_2px_8px_rgba(45,212,191,0.5)]"></div>
              <Activity className="w-7 h-7 text-teal-400 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold text-teal-500">锻炼</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all py-3 group">
              <Calendar className="w-7 h-7 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold">課程</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all py-3 group">
              <BarChart2 className="w-7 h-7 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold">統計</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all py-3 group">
              <Wrench className="w-7 h-7 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold">工具</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-slate-400 hover:text-slate-700 transition-all py-3 group">
              <Trophy className="w-7 h-7 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold">排行榜</span>
            </button>
            <button className="flex flex-col items-center gap-2 text-amber-500 hover:text-amber-600 transition-all relative py-3 group">
              <div className="absolute top-2 right-1 w-2 h-2 bg-amber-400 rounded-full shadow-[0_0_8px_theme(colors.amber.400)] animate-pulse"></div>
              <Crown className="w-7 h-7 transition-transform group-hover:scale-110" />
              <span className="text-[13px] font-bold">高級</span>
            </button>
          </nav>
        </div>

        {/* Footer */}
      <footer className="px-10 py-5 bg-white/80 backdrop-blur-md flex flex-col sm:flex-row items-center justify-between text-slate-400 text-sm border-t border-slate-100 gap-4">
        {/* 左側：兩個 Icon */}
        <div className="flex gap-5">
          <button className="hover:text-slate-700 transition-colors p-1" title="Language">
            <Globe className="w-5 h-5" />
          </button>
          <button className="hover:text-slate-700 transition-colors p-1" title="Chat">
            <MessageCircle className="w-5 h-5" />
          </button>
        </div>

        {/* 右側：兩個 Icon */}
        <div className="flex gap-5">
          <button className="hover:text-slate-700 transition-colors p-1" title="Contact Us">
            <Mail className="w-5 h-5" />
          </button>
          <button className="hover:text-slate-700 transition-colors p-1" title="Discord">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.9555 2.419-2.1569 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3333-.946 2.419-2.1568 2.419z" />
            </svg>
          </button>
        </div>
      </footer>

      </div>
    </div>
  );
}
