// Token-portioning popup. Triggered by clicking an odds badge on a bet card.
// Demo-only — selected amount is logged to console + shown in confirmation toast.

import { useEffect, useState } from 'react';

interface BetModalProps {
  open: boolean;
  onClose: () => void;
  question: string;
  optionLabel: string;
  odds: string;          // e.g. "+1345"
  availableTokens?: number;  // default 2000
}

const QUICK_AMOUNTS = [10, 50, 100, 250, 500, 1000];

export default function BetModal({
  open,
  onClose,
  question,
  optionLabel,
  odds,
  availableTokens = 2000,
}: BetModalProps) {
  const [amount, setAmount] = useState(50);
  const [confirmed, setConfirmed] = useState(false);

  // Reset state every time the modal opens with a new bet
  useEffect(() => {
    if (open) {
      setAmount(50);
      setConfirmed(false);
    }
  }, [open, optionLabel, odds]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onClose]);

  if (!open) return null;

  // Calculate potential payout based on American odds.
  // +N: bet 100 to win N. -N: bet N to win 100.
  const oddsNum = parseInt(odds.replace(/[^-\d]/g, ''), 10);
  const isPositive = !odds.startsWith('-');
  const payout = isPositive
    ? Math.round((amount * oddsNum) / 100)
    : Math.round((amount * 100) / Math.abs(oddsNum));

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#1c1e20] rounded-[16px] w-[480px] max-w-[90vw] p-8 shadow-2xl border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center"
          aria-label="Close"
        >
          ×
        </button>

        {confirmed ? (
          /* ---------- Confirmation view ---------- */
          <div className="text-center py-6">
            <div className="text-[#bcfa07] text-[64px] mb-4">✓</div>
            <p className="font-['Righteous',sans-serif] text-white text-[28px] mb-2">Bet Placed!</p>
            <p className="text-white/70 text-[16px] mb-6">
              {amount} tokens on <span className="text-[#a3c0ff]">{optionLabel}</span>
            </p>
            <p className="text-white/50 text-[14px] mb-6">
              Potential payout: <span className="text-[#bcfa07]">{payout} tokens</span>
            </p>
            <button
              onClick={onClose}
              className="bg-[#bcfa07] text-black font-['Righteous',sans-serif] text-[18px] px-8 py-2 rounded-[8px] hover:brightness-110 transition"
            >
              Done
            </button>
          </div>
        ) : (
          /* ---------- Bet placement view ---------- */
          <>
            <p className="text-white/60 text-[12px] uppercase tracking-wider mb-2">Place your bet</p>
            <p className="font-['Righteous',sans-serif] text-white text-[20px] leading-tight mb-6">
              {question}
            </p>

            <div className="bg-black/40 rounded-[10px] p-4 mb-6 flex items-center justify-between gap-4">
              <p className="text-white text-[16px] leading-tight">{optionLabel}</p>
              <div className="bg-[#bcfa07] rounded-[6px] px-3 py-1 font-['Righteous',sans-serif] text-black text-[18px] whitespace-nowrap">
                {odds}
              </div>
            </div>

            {/* Quick amount chips */}
            <p className="text-white/60 text-[12px] uppercase tracking-wider mb-2">Wager</p>
            <div className="grid grid-cols-3 gap-2 mb-4">
              {QUICK_AMOUNTS.map((amt) => (
                <button
                  key={amt}
                  onClick={() => setAmount(amt)}
                  disabled={amt > availableTokens}
                  className={`py-2 rounded-[6px] font-['Righteous',sans-serif] text-[16px] transition ${
                    amount === amt
                      ? 'bg-[#bcfa07] text-black'
                      : 'bg-white/10 text-white hover:bg-white/20 disabled:opacity-40 disabled:cursor-not-allowed'
                  }`}
                >
                  {amt}
                </button>
              ))}
            </div>

            {/* Amount input */}
            <div className="flex items-center gap-2 mb-2">
              <input
                type="number"
                min={1}
                max={availableTokens}
                value={amount}
                onChange={(e) => setAmount(Math.max(1, Math.min(availableTokens, Number(e.target.value) || 0)))}
                className="flex-1 bg-black/40 text-white text-[20px] font-['Righteous',sans-serif] py-2 px-3 rounded-[6px] border border-white/10 focus:border-[#bcfa07] outline-none"
              />
              <span className="text-white/60 text-[14px]">tokens</span>
            </div>
            <input
              type="range"
              min={1}
              max={availableTokens}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full mb-4 accent-[#bcfa07]"
            />

            {/* Potential payout summary */}
            <div className="flex items-center justify-between text-[14px] mb-6 pt-4 border-t border-white/10">
              <span className="text-white/60">Potential payout</span>
              <span className="font-['Righteous',sans-serif] text-[#bcfa07] text-[24px]">
                +{payout}
              </span>
            </div>

            <div className="flex gap-2">
              <button
                onClick={onClose}
                className="flex-1 py-2 rounded-[6px] bg-white/10 text-white font-['Righteous',sans-serif] text-[18px] hover:bg-white/20 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  setConfirmed(true);
                  // eslint-disable-next-line no-console
                  console.log('[bet placed]', { question, optionLabel, odds, amount, payout });
                }}
                className="flex-1 py-2 rounded-[6px] bg-[#bcfa07] text-black font-['Righteous',sans-serif] text-[18px] hover:brightness-110 transition"
              >
                Place Bet
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
