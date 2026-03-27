"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function LoginPage() {
    const [focused, setFocused] = useState<string | null>(null)

    return (
        <div
            className="flex items-center justify-center min-h-screen relative overflow-hidden"
            style={{
                background: "linear-gradient(135deg, #e8f5e1 0%, #d4f0ea 30%, #c8e8f0 60%, #d8ecf8 100%)",
            }}
        >
            {/* Decorative blobs */}
            <div
                className="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, #b8e8c8 0%, transparent 70%)" }}
            />
            <div
                className="absolute bottom-[-60px] right-[-60px] w-[280px] h-[280px] rounded-full opacity-40 pointer-events-none"
                style={{ background: "radial-gradient(circle, #b8d8f0 0%, transparent 70%)" }}
            />
            <div
                className="absolute top-[40%] right-[8%] w-[180px] h-[180px] rounded-full opacity-30 pointer-events-none"
                style={{ background: "radial-gradient(circle, #d0f0d8 0%, transparent 70%)" }}
            />

            {/* Main card */}
            <Card
                className="relative w-[400px] border-0"
                style={{
                    background: "rgba(255,255,255,0.75)",
                    backdropFilter: "blur(20px)",
                    borderRadius: "24px",
                    boxShadow: "0 8px 40px rgba(100,160,200,0.18), 0 2px 8px rgba(100,160,200,0.10)",
                }}
            >
                {/* Top app bar style header */}
                <CardHeader className="pb-0 pt-7 px-8">
                    {/* Logo area */}
                    <div className="flex items-center gap-3 mb-6">
                        <div
                            className="w-10 h-10 rounded-2xl flex items-center justify-center text-white text-lg font-bold"
                            style={{ background: "linear-gradient(135deg, #6ab8d4 0%, #4a9cb8 100%)" }}
                        >
                            ⚡
                        </div>
                        <span
                            className="text-lg font-bold tracking-tight"
                            style={{ color: "#2a4a5e", fontFamily: "'Segoe UI', sans-serif" }}
                        >
                            MyApp
                        </span>
                    </div>

                    {/* Step indicators */}
                    <div className="flex items-center gap-2 mb-2">
                        {[
                            { num: 1, label: "帳號", active: true, done: false },
                            { num: 2, label: "驗證", active: false, done: false },
                            { num: 3, label: "完成", active: false, done: false },
                        ].map((step, i) => (
                            <div key={i} className="flex items-center gap-2">
                                <div className="flex flex-col items-center gap-1">
                                    <div
                                        className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all"
                                        style={{
                                            background: step.active
                                                ? "linear-gradient(135deg, #6ab8d4, #4a9cb8)"
                                                : "rgba(180,210,225,0.35)",
                                            color: step.active ? "#fff" : "#8ab4c8",
                                            boxShadow: step.active ? "0 2px 8px rgba(74,156,184,0.35)" : "none",
                                        }}
                                    >
                                        {step.num}
                                    </div>
                                    <span
                                        className="text-xs font-medium"
                                        style={{ color: step.active ? "#4a9cb8" : "#9bbdd0" }}
                                    >
                                        {step.label}
                                    </span>
                                </div>
                                {i < 2 && (
                                    <div
                                        className="w-16 h-[2px] rounded-full mb-4"
                                        style={{ background: "rgba(150,200,220,0.35)" }}
                                    />
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="mt-4 mb-1">
                        <h2
                            className="text-2xl font-bold"
                            style={{ color: "#2a4a5e", fontFamily: "'Segoe UI', sans-serif", letterSpacing: "-0.5px" }}
                        >
                            歡迎回來
                        </h2>
                        <p className="text-sm mt-1" style={{ color: "#7a9db0" }}>
                            請輸入您的帳號密碼來登入系統
                        </p>
                    </div>
                </CardHeader>

                <CardContent className="px-8 pt-6 pb-2">
                    <div className="grid w-full items-center gap-5">
                        {/* Email field */}
                        <div className="flex flex-col space-y-2">
                            <Label
                                htmlFor="email"
                                className="text-sm font-semibold"
                                style={{ color: "#4a7a90" }}
                            >
                                信箱 (Email)
                            </Label>
                            <div className="relative">
                                <span
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none"
                                    style={{ color: focused === "email" ? "#4a9cb8" : "#a0c0d0" }}
                                >
                                </span>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="name@example.com"
                                    onFocus={() => setFocused("email")}
                                    onBlur={() => setFocused(null)}
                                    className="pl-10 h-11 border-0 text-sm transition-all"
                                    style={{
                                        background: focused === "email" ? "rgba(106,184,212,0.10)" : "rgba(200,230,240,0.30)",
                                        borderRadius: "14px",
                                        outline: focused === "email" ? "2px solid #6ab8d4" : "2px solid transparent",
                                        color: "#2a4a5e",
                                    }}
                                />
                            </div>
                        </div>

                        {/* Password field */}
                        <div className="flex flex-col space-y-2">
                            <div className="flex justify-between items-center">
                                <Label
                                    htmlFor="password"
                                    className="text-sm font-semibold"
                                    style={{ color: "#4a7a90" }}
                                >
                                    密碼 (Password)
                                </Label>
                                <a
                                    href="#"
                                    className="text-xs font-medium hover:underline"
                                    style={{ color: "#6ab8d4" }}
                                >
                                    忘記密碼？
                                </a>
                            </div>
                            <div className="relative">
                                <span
                                    className="absolute left-3 top-1/2 -translate-y-1/2 text-base pointer-events-none"
                                    style={{ color: focused === "password" ? "#4a9cb8" : "#a0c0d0" }}
                                >
                                </span>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="••••••••"
                                    onFocus={() => setFocused("password")}
                                    onBlur={() => setFocused(null)}
                                    className="pl-10 h-11 border-0 text-sm transition-all"
                                    style={{
                                        background: focused === "password" ? "rgba(106,184,212,0.10)" : "rgba(200,230,240,0.30)",
                                        borderRadius: "14px",
                                        outline: focused === "password" ? "2px solid #6ab8d4" : "2px solid transparent",
                                        color: "#2a4a5e",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </CardContent>

                <CardFooter className="flex gap-3 px-8 pt-4 pb-8">
                    <Button
                        variant="outline"
                        className="flex-1 h-11 border-0 font-semibold text-sm transition-all hover:opacity-80"
                        style={{
                            background: "rgba(200,230,240,0.40)",
                            color: "#5a9ab4",
                            borderRadius: "14px",
                        }}
                    >
                        ← 上一步
                    </Button>
                    <Button
                        className="flex-1 h-11 font-semibold text-sm transition-all hover:opacity-90"
                        style={{
                            background: "linear-gradient(135deg, #8ecfdf 0%, #6ab8d4 50%, #4a9cb8 100%)",
                            color: "#fff",
                            borderRadius: "14px",
                            boxShadow: "0 4px 16px rgba(74,156,184,0.35)",
                            border: "none",
                        }}
                    >
                        繼續 →
                    </Button>
                </CardFooter>

                {/* Divider + social login hint */}
                <div className="px-8 pb-7">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="flex-1 h-px" style={{ background: "rgba(150,200,220,0.35)" }} />
                        <span className="text-xs" style={{ color: "#9bbdd0" }}>或</span>
                        <div className="flex-1 h-px" style={{ background: "rgba(150,200,220,0.35)" }} />
                    </div>
                    <p className="text-center text-xs" style={{ color: "#9bbdd0" }}>
                        還沒有帳號？{" "}
                        <a href="#" className="font-semibold hover:underline" style={{ color: "#4a9cb8" }}>
                            立即註冊
                        </a>
                    </p>
                </div>
            </Card>
        </div>
    )
}