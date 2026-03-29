"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function LoginPage() {
  const [step, setStep] = useState(1);
  const router = useRouter();

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
    } else {
      router.push("/dashboard");
    }
  };

  const handlePrev = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#eef7e5] via-[#e2f1ea] to-[#d6eff2] flex items-center justify-center p-4 sm:p-8 font-sans">
      <div className="bg-white w-full max-w-[420px] rounded-[2rem] shadow-[0_10px_40px_-5px_rgba(0,0,0,0.1)] flex flex-col p-8 sm:p-10">
        {/* Header */}
        <div className="flex items-center justify-center gap-3 mb-8 mt-2">
          <div className="w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center shadow-inner text-slate-800 font-black text-2xl">
            LF
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">
            LifeFitness.com
          </h1>
        </div>

        {/* Step Progress */}
        <div className="flex items-center justify-between mb-10 w-full relative px-2">
          <div className="absolute top-4 left-6 right-6 h-0.5 bg-slate-100 -z-10"></div>

          <div className="flex flex-col items-center gap-2 bg-white px-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 1 ? "bg-[#5fb3ce] text-white shadow-md" : "bg-slate-100 text-slate-400"}`}
            >
              1
            </div>
            <div
              className={`text-xs font-bold ${step >= 1 ? "text-[#5fb3ce]" : "text-slate-400"}`}
            >
              帳號
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white px-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 2 ? "bg-[#5fb3ce] text-white shadow-md" : "bg-slate-100 text-slate-400"}`}
            >
              2
            </div>
            <div
              className={`text-xs font-bold ${step >= 2 ? "text-[#5fb3ce]" : "text-slate-400"}`}
            >
              驗證
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 bg-white px-1">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${step >= 3 ? "bg-[#5fb3ce] text-white shadow-md" : "bg-slate-100 text-slate-400"}`}
            >
              3
            </div>
            <div
              className={`text-xs font-bold ${step >= 3 ? "text-[#5fb3ce]" : "text-slate-400"}`}
            >
              完成
            </div>
          </div>
        </div>

        {/* Content based on step */}
        <div className="flex-1 min-h-[220px]">
          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-[22px] font-bold text-slate-800 mb-2 tracking-tight">
                歡迎回來
              </h2>
              <p className="text-[13px] text-slate-500 mb-8">
                請輸入您的帳號密碼來登入系統
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#5fb3ce] mb-2">
                    信箱 (Email)
                  </label>
                  <input
                    type="email"
                    placeholder="name@example.com"
                    className="w-full bg-[#f3f7f8] border-none rounded-2xl px-5 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5fb3ce]/50 transition-all font-medium text-sm"
                    defaultValue="name@example.com"
                  />
                </div>
                <div className="pt-2">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-[13px] font-bold text-slate-600">
                      密碼 (Password)
                    </label>
                    <a
                      href="#"
                      className="text-[11px] text-[#5fb3ce] font-bold hover:underline"
                    >
                      忘記密碼？
                    </a>
                  </div>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full bg-[#f3f7f8] border-none rounded-2xl px-5 py-4 text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#5fb3ce]/50 transition-all font-medium text-sm tracking-widest"
                    defaultValue="12345678"
                  />
                </div>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300">
              <h2 className="text-[22px] font-bold text-slate-800 mb-2 tracking-tight">
                登入驗證
              </h2>
              <p className="text-[13px] text-slate-500 mb-8">
                我們已發送驗證碼到您的信箱，請查看並輸入下方。
              </p>

              <div>
                <label className="block text-[13px] font-bold text-[#5fb3ce] mb-2">
                  驗證碼
                </label>
                <div className="flex justify-between gap-2 mt-4">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <input
                      key={i}
                      type="text"
                      maxLength={1}
                      className="w-full bg-[#f3f7f8] border-none rounded-xl text-center py-4 text-slate-700 font-bold text-xl focus:outline-none focus:ring-2 focus:ring-[#5fb3ce]/50 transition-all"
                      defaultValue={i === 1 ? "5" : ""}
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-4 duration-300 flex flex-col items-center justify-center py-6">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-teal-500 mb-6 shadow-sm border border-green-100">
                <svg
                  className="w-10 h-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-[22px] font-bold text-slate-800 mb-2 tracking-tight">
                驗證成功！
              </h2>
              <p className="text-[13px] text-center text-slate-500 leading-relaxed px-4">
                您已成功登入 MyApp。
                <br />
                點擊繼續前往儀表板，開始您的訓練計畫。
              </p>
            </div>
          )}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3 mt-10 mb-6">
          <button
            onClick={handlePrev}
            disabled={step === 1}
            className={`flex items-center justify-center gap-2 py-3.5 rounded-2xl font-bold transition-all text-sm ${step === 1 ? "bg-[#f3f7f8] text-slate-300 cursor-not-allowed" : "bg-[#eef6f9] text-[#5fb3ce] hover:bg-[#dff0f5]"}`}
          >
            <ArrowLeft className="w-4 h-4" />
            <span>上一步</span>
          </button>
          <button
            onClick={handleNext}
            className="flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#5fb3ce] text-white font-bold hover:bg-[#4ea2bd] hover:shadow-lg hover:shadow-[#5fb3ce]/30 transition-all text-sm"
          >
            <span>繼續</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Divider & Footer */}
        {step === 1 && (
          <div className="animate-in fade-in">
            <div className="relative flex items-center justify-center mb-6 mt-4">
              <div className="border-t border-slate-100 w-full absolute"></div>
              <span className="bg-white px-4 text-[11px] text-slate-300 font-medium relative z-10">
                或
              </span>
            </div>

            <div className="text-center text-[12px] font-bold text-slate-400">
              還沒有帳號？{" "}
              <a href="#" className="text-[#5fb3ce] hover:underline">
                立即註冊
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
