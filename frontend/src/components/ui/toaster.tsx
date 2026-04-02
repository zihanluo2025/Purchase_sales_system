"use client";

import { useToast } from "@/hooks/use-toast";
import {
    CheckCircle2,
    XCircle,
    AlertTriangle,
    Info,
    X,
} from "lucide-react";

function getToastStyle(variant?: string) {
    switch (variant) {
        case "success":
            return {
                icon: <CheckCircle2 className="text-green-600" size={18} />,
                bgIcon: "bg-green-50",
                accent: "bg-green-500",
            };
        case "error":
            return {
                icon: <XCircle className="text-red-600" size={18} />,
                bgIcon: "bg-red-50",
                accent: "bg-red-500",
            };
        case "warning":
            return {
                icon: <AlertTriangle className="text-yellow-600" size={18} />,
                bgIcon: "bg-yellow-50",
                accent: "bg-yellow-500",
            };
        default:
            return {
                icon: <Info className="text-blue-600" size={18} />,
                bgIcon: "bg-blue-50",
                accent: "bg-blue-500",
            };
    }
}

export function Toaster() {
    const { toasts } = useToast();

    return (
        <div className="fixed top-6 right-6 z-50 space-y-3">
            {toasts.map((t) => {
                const style = getToastStyle(t.variant);

                return (
                    <div
                        key={t.id}
                        className="relative flex w-[320px] items-start gap-3 rounded-xl bg-white px-4 py-3 shadow-md border border-gray-100
                       animate-in slide-in-from-top-2 fade-in duration-300"
                    >
                        {/* 左侧 accent 条（更细更高级） */}
                        <div className={`absolute left-0 top-0 h-full w-1 rounded-l-xl ${style.accent}`} />

                        {/* icon */}
                        <div
                            className={`flex h-9 w-9 items-center justify-center rounded-lg ${style.bgIcon}`}
                        >
                            {style.icon}
                        </div>

                        {/* 内容 */}
                        <div className="flex-1">
                            <div className="text-sm font-semibold text-gray-900">
                                {t.title}
                            </div>
                            {t.description && (
                                <div className="mt-1 text-sm text-gray-500 leading-relaxed">
                                    {t.description}
                                </div>
                            )}
                        </div>

                        {/* close */}
                        <button className="text-gray-400 hover:text-gray-600 transition">
                            <X size={16} />
                        </button>
                    </div>
                );
            })}
        </div>
    );
}