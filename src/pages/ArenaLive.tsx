// Figma node 2146:2275 — DESKTOP - THE ARENA LIVE
// Header + Footer extracted into shared components.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BetModal from '../components/BetModal';

const imgImage9 = "/assets/374ff845dc8136b6bcbc26b9c4446a708fb0be43.png";
const imgRectangle1 = "/assets/d403509e66227500fee13a57f86130fa68c1fc59.png";
const imgLayer3 = "/assets/34dedc8e2a8a69c5694cd6b6349610bb39882973.svg";
const imgLayer4 = "/assets/cf15046f418aad83878b934dc23520d07ed0bdc8.svg";
const imgLayer1 = "/assets/2e59e589bbeaf9fa90aabaf9580123058b3b2fc8.svg";
const imgLayer2 = "/assets/bf571c7ca3e454a1413ecbaaec9372bda4807c76.svg";
const imgGroup15 = "/assets/e8ec1c80fec97043c0c0d5dd90a18dc214f2ce9b.svg";
const imgGroup7 = "/assets/92bcec29c39a9e109cfa5d69bcc669591c41ea25.svg";
const imgGroup14 = "/assets/65238ab5adb5375f24ebd0bd6dab43acd97f3099.svg";
const imgRectangle = "/assets/5507c50b88fb07e81f4317a0ff39a9fe6f77158c.svg";

export default function ArenaLive() {
  const [activeBet, setActiveBet] = useState<{ question: string; optionLabel: string; odds: string } | null>(null);
  const openBet = (question: string, optionLabel: string, odds: string) =>
    setActiveBet({ question, optionLabel, odds });

  // Question metadata for the modal
  const Q_FED   = 'Outcome of fed rate decision April 28-29?';
  const Q_MLS   = 'New MLS single-game attendance record post-World Cup 2026?';
  const Q_FOOD  = 'According to the article, why do imperfections in comfort food matter?';
  const Q_GAME4 = 'Game 4 outcome?';
  const Q_ENERGY = 'Average energy conversion rate by 2030?';

  return (
    <div className="bg-white relative w-[1440px] h-[5118px] mx-auto overflow-hidden" data-node-id="2146:2275" data-name="DESKTOP - THE ARENA LIVE">
      <div className="absolute bg-black h-[5118px] left-0 top-0 w-[1440px]" />

      {/* Hero background image */}
      <div className="absolute h-[1106px] left-[-73px] opacity-65 top-[124px] w-[1659px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>

      {/* Hero text */}
      <p className="absolute font-['Think',sans-serif] h-[140px] leading-[normal] left-[131px] not-italic text-[200px] text-white top-[311px] w-[1174px]">The Arena</p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[175px] not-italic text-[32px] text-white top-[459px] w-[912px]">Enter the Arena, Turn Headlines into High Scores</p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[149px] not-italic text-[#bcfa07] text-[20px] top-[280px] w-[912px]">#1 in News Gamification</p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[350px] justify-center leading-[0] left-[138px] not-italic text-[24px] text-white top-[650px] w-[1237px] whitespace-pre-wrap">
        <p className="leading-[26px] mb-0">Welcome to the Arena — your destination for engaging with the news in a dynamic, interactive way. Here, you can place predictions on daily headlines, from politics to market trends, and test your instincts in real time.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px] mb-0">Earn tokens based on the accuracy of your predictions and redeem them for rewards. Track your performance on our daily-updated leaderboard and see how you rank among other participants.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px]">The Arena is designed for entertainment and insight—no real money is involved, only tokens earned through participation and success.</p>
      </div>

      {/* Green underline under subtitle */}
      <div className="absolute bg-[#bcfa07] h-[18px] left-[131px] rounded-[10px] top-[513px] w-[836px]" />

      {/* Arbo the host watermark text */}
      <p className="absolute font-['Think',sans-serif] inset-[20.89%_-6.67%_74.23%_2.29%] leading-[normal] not-italic text-[175px] text-[rgba(255,255,255,0.1)]">Arbo the host</p>

      {/* Mascot character (layered SVGs) */}
      <div className="absolute flex inset-[16.1%_5.03%_76.67%_69.65%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(14.2054cqw,86.2781cqh)] rotate-[-9.22deg] w-[hypot(85.7946cqw,-13.7219cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[0_-1.8%_-1.76%_-1.8%]">
              <img alt="" className="block max-w-none size-full" src={imgLayer3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[16.46%_10.32%_77.9%_73.66%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(18.1489cqw,89.3844cqh)] rotate-[-9.22deg] w-[hypot(81.8511cqw,-10.6156cqh)]">
          <div className="relative size-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
          </div>
        </div>
      </div>

      {/* Tab nav: Live (active), Trending, Leaderboard, Tokens */}
      <div className="absolute bg-[rgba(188,250,7,0.42)] h-[47px] left-[223px] rounded-[34px] shadow-[0px_4px_4px_0px_rgba(255,255,255,0.6)] top-[1268px] w-[168px]" />
      <Link to="/arena"             className="absolute z-10 font-['Righteous',sans-serif] inset-[24.64%_75.56%_74.19%_18.26%] leading-[normal] not-italic text-[48px] text-white whitespace-nowrap">Live</Link>
      <Link to="/arena/trending"    className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[475px]  not-italic text-[48px] text-white top-[1261px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Trending</Link>
      <Link to="/arena/leaderboard" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[743px]  not-italic text-[48px] text-white top-[1261px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Leaderboard</Link>
      <Link to="/arena/tokens"      className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[1093px] not-italic text-[48px] text-white top-[1259px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Tokens</Link>

      {/* Group 15 — small green-deco arrow under Live tab */}
      <div className="absolute flex inset-[31.09%_83.81%_65.36%_7.64%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(1.25742cqw,-99.4276cqh)] rotate-[-179.51deg] w-[hypot(-98.7426cqw,-0.572417cqh)]">
          <div className="relative size-full">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup15} />
          </div>
        </div>
      </div>

      {/* User profile photo (424x424 square) */}
      <div className="absolute left-[148px] overflow-clip size-[424px] top-[1394px]">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[424px_424px]" style={{ maskImage: `url('${imgRectangle}')` }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgRectangle1} />
          </div>
        </div>
      </div>

      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[706px] not-italic text-[40px] text-white top-[1484px] whitespace-nowrap">-Your Name-</p>
      <div className="absolute font-['Righteous',sans-serif] leading-[0] left-[707px] not-italic text-[40px] text-white top-[1580px] whitespace-nowrap">
        <p className="leading-[normal] mb-0">Ranking: Rookie</p>
        <p className="leading-[normal] mb-0">Tokens: 352</p>
        <p className="leading-[normal] mb-0">Predictions: +0.7%</p>
      </div>

      {/* Decorative purple groups */}
      <div className="absolute inset-[26.28%_58.85%_70.19%_32.71%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup14} /></div>
      <div className="absolute inset-[38.49%_-15.97%_51.35%_85.14%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>
      <div className="absolute inset-[66.31%_85.42%_23.52%_-16.25%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>

      {/* QR-grid decorations + green stars */}
      <div className="absolute z-10 h-[119px] left-[545px] top-[1826px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full pointer-events-none" src={imgLayer1} /></div>
      <div className="absolute z-10 h-[103px] left-[898px] top-[1877px] w-[111px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} /></div>

      {/* Question Card 1: Fed rate */}
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[137px] rounded-[10px] top-[1938px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[174px] not-italic text-[32px] text-black top-[1974px] w-[771px]">Outcome of fed rate decision April 28-29?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[174px] text-[32px] text-black top-[2056px] w-[508px]">50+ bps decrease</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[174px] text-[32px] text-black top-[2123px] w-[508px]">25 bps decrease</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[174px] text-[32px] text-black top-[2188px] w-[508px]">No change</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[174px] text-[32px] text-black top-[2254px] w-[508px]">25 bps increase</p>
      {/* Q1 odds badges */}
      {[
        { top: 2051, label: '+1345', option: '50+ bps decrease' },
        { top: 2118, label: '+593',  option: '25 bps decrease' },
        { top: 2183, label: '-285',  option: 'No change' },
        { top: 2249, label: '+351',  option: '25 bps increase' },
      ].map((b, i) => (
        <button key={`q1-${i}`} type="button" onClick={() => openBet(Q_FED, b.option, b.label)} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[665px] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" style={{ top: `${b.top}px` }}>
          <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{b.label}</p>
        </button>
      ))}
      {/* Q1 Place your bet */}
      <button type="button" onClick={() => openBet(Q_FED, '50+ bps decrease', '+1345')} className="absolute bg-[#bcfa07] h-[54px] left-[605px] rounded-[10px] top-[2342px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]">Place your bet</p>
      </button>

      {/* Question Card 2: MLS attendance */}
      <div className="absolute z-10 h-[119px] left-[536px] top-[2369px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full pointer-events-none" src={imgLayer1} /></div>
      <div className="absolute z-10 h-[103px] left-[889px] top-[2420px] w-[111px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} /></div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[128px] rounded-[10px] top-[2476px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[165px] not-italic text-[32px] text-black top-[2512px] w-[771px]">New MLS single-game attendance record post-World Cup 2026?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[2652px] w-[508px]">Over 82,110</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[2717px] w-[508px]">Under 82,110</p>
      <button type="button" onClick={() => openBet(Q_MLS, 'Over 82,110', '+473')} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[656px] px-4 rounded-[6px] top-[2647px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition"><p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">+473</p></button>
      <button type="button" onClick={() => openBet(Q_MLS, 'Under 82,110', '-354')} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[656px] px-4 rounded-[6px] top-[2712px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition"><p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">-354</p></button>
      <button type="button" onClick={() => openBet(Q_MLS, 'Over 82,110', '+473')} className="absolute bg-[#bcfa07] h-[54px] left-[596px] rounded-[10px] top-[2880px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]">Place your bet</p>
      </button>

      {/* Question Card 3: Comfort food */}
      <div className="absolute z-10 h-[119px] left-[541px] top-[2910px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full pointer-events-none" src={imgLayer1} /></div>
      <div className="absolute z-10 h-[103px] left-[894px] top-[2961px] w-[111px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} /></div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[131px] rounded-[10px] top-[3017px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[170px] not-italic text-[32px] text-black top-[3040px] w-[771px]">According to the article, why do imperfections in comfort food matter?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[170px] text-[32px] text-black top-[3134px] w-[508px]">They make the food look more professional</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[170px] text-[32px] text-black top-[3205px] w-[508px]">They reduce cooking time</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[170px] text-[32px] text-black top-[3266px] w-[508px]">They make the food healthier</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[170px] text-[32px] text-black top-[3332px] w-[508px]">They make the experience feel more human and relaxed</p>
      {[
        { top: 3129, label: '-1345', option: 'They make the food look more professional' },
        { top: 3196, label: '+593',  option: 'They reduce cooking time' },
        { top: 3261, label: '+285',  option: 'They make the food healthier' },
        { top: 3327, label: '-351',  option: 'They make the experience feel more human and relaxed' },
      ].map((b, i) => (
        <button key={`q3-${i}`} type="button" onClick={() => openBet(Q_FOOD, b.option, b.label)} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[661px] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" style={{ top: `${b.top}px` }}>
          <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{b.label}</p>
        </button>
      ))}
      <button type="button" onClick={() => openBet(Q_FOOD, 'They make the food healthier', '+285')} className="absolute bg-[#bcfa07] h-[54px] left-[596px] rounded-[10px] top-[3421px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]">Place your bet</p>
      </button>

      {/* Question Card 4: Game 4 outcome */}
      <div className="absolute z-10 h-[119px] left-[532px] top-[3451px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full pointer-events-none" src={imgLayer1} /></div>
      <div className="absolute z-10 h-[103px] left-[889px] top-[3496px] w-[111px] pointer-events-none"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} /></div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[128px] rounded-[10px] top-[3553px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[165px] not-italic text-[32px] text-black top-[3589px] w-[771px]">Game 4 outcome?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[165px] text-[32px] text-black top-[3671px] w-[508px]">Celtics win (25pt or more)</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[3738px] w-[508px]">Celtics win (25pt or less)</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[3803px] w-[508px]">76ers win (25pt or more)</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[3869px] w-[508px]">76ers win (25pt or less)</p>
      {[
        { top: 3666, label: '+128',  option: 'Celtics win (25pt or more)' },
        { top: 3733, label: '-247',  option: 'Celtics win (25pt or less)' },
        { top: 3798, label: '+1143', option: '76ers win (25pt or more)' },
        { top: 3864, label: '+893',  option: '76ers win (25pt or less)' },
      ].map((b, i) => (
        <button key={`q4-${i}`} type="button" onClick={() => openBet(Q_GAME4, b.option, b.label)} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[656px] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" style={{ top: `${b.top}px` }}>
          <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{b.label}</p>
        </button>
      ))}
      <button type="button" onClick={() => openBet(Q_GAME4, 'Celtics win (25pt or more)', '+128')} className="absolute bg-[#bcfa07] h-[54px] left-[594px] rounded-[10px] top-[3961px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]">Place your bet</p>
      </button>

      {/* Question Card 5: Average energy conversion rate */}
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[128px] rounded-[10px] top-[4083px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[165px] not-italic text-[32px] text-black top-[4119px] w-[771px]">Average energy conversion rate by 2030?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[165px] text-[32px] text-black top-[4201px] w-[508px]">90% or more</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[4268px] w-[508px]">90%</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[4333px] w-[508px]">70%</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[165px] text-[32px] text-black top-[4399px] w-[508px]">70% or less</p>
      {[
        { top: 4196, label: '+101', option: '90% or more' },
        { top: 4263, label: '-362', option: '90%' },
        { top: 4328, label: '+459', option: '70%' },
        { top: 4394, label: '+694', option: '70% or less' },
      ].map((b, i) => (
        <button key={`q5-${i}`} type="button" onClick={() => openBet(Q_ENERGY, b.option, b.label)} className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[656px] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" style={{ top: `${b.top}px` }}>
          <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{b.label}</p>
        </button>
      ))}
      <button type="button" onClick={() => openBet(Q_ENERGY, '90% or more', '+101')} className="absolute bg-[#bcfa07] h-[54px] left-[594px] rounded-[10px] top-[4484px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]">Place your bet</p>
      </button>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute top-[4626px] left-0">
        <Footer />
      </div>

      {/* Bet placement modal — shared across all 5 question cards */}
      <BetModal
        open={activeBet !== null}
        onClose={() => setActiveBet(null)}
        question={activeBet?.question ?? ''}
        optionLabel={activeBet?.optionLabel ?? ''}
        odds={activeBet?.odds ?? ''}
      />

    </div>
  );
}
