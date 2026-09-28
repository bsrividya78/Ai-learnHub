import React from 'react';
import { useStudent } from '../context/StudentContext';
import { CheckCircle2, Info, AlertCircle } from 'lucide-react';

export const Toast: React.FC = () => {
  const { toast } = useStudent();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-200">
      <div
        className={`px-4 py-3 rounded-xl shadow-2xl border text-xs sm:text-sm font-medium flex items-center gap-3 backdrop-blur-md ${
          isSuccess
            ? 'bg-slate-900/95 border-emerald-500/50 text-white shadow-emerald-950/40 ring-1 ring-emerald-500/30'
            : isError
            ? 'bg-slate-900/95 border-rose-500/50 text-white shadow-rose-950/40 ring-1 ring-rose-500/30'
            : 'bg-slate-900/95 border-slate-700 text-white shadow-slate-950/40'
        }`}
      >
        {isSuccess && <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />}
        {isError && <AlertCircle className="w-4 h-4 text-rose-400 shrink-0" />}
        {!isSuccess && !isError && <Info className="w-4 h-4 text-indigo-400 shrink-0" />}
        <span>{toast.text}</span>
      </div>
    </div>
  );
};
