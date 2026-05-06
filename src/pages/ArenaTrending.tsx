// Figma node 2146:2563 — DESKTOP - THE ARENA TRENDING
// Header + Footer extracted into shared components.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BetModal from '../components/BetModal';

const imgImage9 = "/assets/374ff845dc8136b6bcbc26b9c4446a708fb0be43.png";
const imgLayer3 = "/assets/34dedc8e2a8a69c5694cd6b6349610bb39882973.svg";
const imgLayer4 = "/assets/cf15046f418aad83878b934dc23520d07ed0bdc8.svg";
const imgGroup7 = "/assets/92bcec29c39a9e109cfa5d69bcc669591c41ea25.svg";
const imgLayer5 = "/assets/71fa71893636e737805b9cd3949b085a9c3a6186.svg";
const imgLayer6 = "/assets/20c4f616641b53f3891058a5de0502fa95443aaa.svg";
const imgLayer7 = "/assets/2e59e589bbeaf9fa90aabaf9580123058b3b2fc8.svg";
const imgLayer8 = "/assets/bf571c7ca3e454a1413ecbaaec9372bda4807c76.svg";
const imgLayer9 = "/assets/1b5341412a191cb60d41ef3ccce1c6734c27d075.svg";
const imgLayer10 = "/assets/723c205277b4011b0958f1397a60e000414a18e3.svg";
const imgLayer11 = "/assets/3ceabe9f2f7a3ffced9bd82d2994f017f3928e11.svg";
const imgLayer12 = "/assets/4c8d4526b15001a4c014ea3c3fcce86e3b7ba976.svg";
const imgGroup30 = "/assets/65238ab5adb5375f24ebd0bd6dab43acd97f3099.svg";
const imgGroup31 = "/assets/29790eaf8340b302f813fdc6c9102dea866b9ffb.svg";

export default function ArenaTrending() {
  const [activeBet, setActiveBet] = useState<{ question: string; optionLabel: string; odds: string } | null>(null);
  const openBet = (question: string, optionLabel: string, odds: string) =>
    setActiveBet({ question, optionLabel, odds });

  // Question metadata for the modal
  const Q_FED   = 'Outcome of fed rate decision April 28-29?';
  const Q_MLS   = 'New MLS single-game attendance record post-World Cup 2026?';
  const Q_MARS  = 'Why are the newly discovered organic molecules important to scientists?';
  const Q_SPX   = 'SpaceX 12-month post-IPO price?';
  const Q_GENERIC = 'Sub question title';

  return (
    <div className="bg-white relative w-[1440px] h-[5118px] mx-auto overflow-hidden" data-node-id="2146:2563" data-name="DESKTOP - THE ARENA TRENDING">
      <div className="absolute bg-black h-[5118px] left-0 top-0 w-[1440px]" data-node-id="2146:2564" />
      <div className="absolute h-[1106px] left-[-85px] opacity-65 top-[119px] w-[1659px]" data-node-id="2146:2568" data-name="image 9">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage9} />
      </div>
      <p className="absolute font-['Think',sans-serif] h-[140px] leading-[normal] left-[131px] not-italic text-[200px] text-white top-[311px] w-[1174px]" data-node-id="2146:2569">
        The Arena
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[175px] not-italic text-[32px] text-white top-[459px] w-[912px]" data-node-id="2146:2570">
        Enter the Arena, Turn Headlines into High Scores
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[149px] not-italic text-[#bcfa07] text-[20px] top-[280px] w-[912px]" data-node-id="2146:2571">
        #1 in News Gamification
      </p>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[350px] justify-center leading-[0] left-[138px] not-italic text-[24px] text-white top-[650px] w-[1237px] whitespace-pre-wrap" data-node-id="2146:2572">
        <p className="leading-[26px] mb-0">Welcome to the Arena — your destination for engaging with the news in a dynamic, interactive way. Here, you can place predictions on daily headlines, from politics to market trends, and test your instincts in real time.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px] mb-0">Earn tokens based on the accuracy of your predictions and redeem them for rewards. Track your performance on our daily-updated leaderboard and see how you rank among other participants.</p>
        <p className="leading-[26px] mb-0">​</p>
        <p className="leading-[26px]">The Arena is designed for entertainment and insight—no real money is involved, only tokens earned through participation and success.</p>
      </div>
      <div className="absolute bg-[#bcfa07] h-[18px] left-[131px] rounded-[10px] top-[513px] w-[836px]" data-node-id="2146:2573" />
      <p className="absolute font-['Think',sans-serif] inset-[20.89%_-6.67%_74.23%_2.29%] leading-[normal] not-italic text-[175px] text-[rgba(255,255,255,0.1)] text-shadow-[23px_2px_13.6px_rgba(0,0,0,0.25)]" data-node-id="2146:2574">
        Arbo the host
      </p>
      <Link to="/arena/leaderboard" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[683px] not-italic text-[48px] text-white top-[1260px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Leaderboard</Link>
      <div className="absolute flex inset-[16.1%_5.03%_76.67%_69.65%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(14.2054cqw,86.2781cqh)] rotate-[-9.22deg] w-[hypot(85.7946cqw,-13.7219cqh)]">
          <div className="relative size-full" data-node-id="2146:2576" data-name="Layer 3">
            <div className="absolute inset-[0_-1.8%_-1.76%_-1.8%]">
              <img alt="" className="block max-w-none size-full" src={imgLayer3} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[16.46%_10.32%_77.9%_73.66%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(18.1489cqw,89.3844cqh)] rotate-[-9.22deg] w-[hypot(81.8511cqw,-10.6156cqh)]">
          <div className="relative size-full" data-node-id="2146:2582" data-name="Layer 4">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
          </div>
        </div>
      </div>
      <Link to="/arena/tokens" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[1033px] not-italic text-[48px] text-white top-[1254px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Tokens</Link>
      {/* Shared footer */}
      <div className="absolute top-[4626px] left-0">
        <Footer />
      </div>
      <div className="absolute bg-[rgba(188,250,7,0.42)] h-[47px] left-[390px] rounded-[34px] shadow-[0px_4px_4px_0px_rgba(255,255,255,0.6)] top-[1267px] w-[241px]" data-node-id="2146:2664" />
      <Link to="/arena" className="absolute z-10 font-['Righteous',sans-serif] inset-[24.62%_79.72%_74.21%_14.1%] leading-[normal] not-italic text-[48px] text-white whitespace-nowrap hover:text-[#bcfa07] transition-colors">Live</Link>
      <div className="absolute inset-[38.49%_-15.97%_51.35%_85.14%]" data-node-id="2146:2666">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <div className="absolute inset-[26.32%_84.44%_63.52%_-15.28%]" data-node-id="2146:2670">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <div className="absolute inset-[64.2%_85.55%_25.63%_-16.39%]" data-node-id="2146:2674">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
      </div>
      <Link to="/arena/trending" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[415px] not-italic text-[48px] text-white top-[1260px] whitespace-nowrap">Trending</Link>
      <p className="absolute font-['Righteous',sans-serif] h-[147px] leading-[normal] left-[84px] not-italic text-[96px] text-white top-[1458px] w-[1408px]" data-node-id="2146:2679">
        Trending Bets In the Arena...
      </p>
      <div className="absolute flex h-[275.054px] items-center justify-center left-[869px] top-[1839px] w-[121.448px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.49deg]">
          <div className="h-[119px] relative w-[274px]" data-node-id="2146:2680" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[275.054px] items-center justify-center left-[859px] top-[2975px] w-[121.448px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[89.49deg]">
          <div className="h-[119px] relative w-[274px]" data-node-id="2146:2699" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[274.689px] items-center justify-center left-[863px] top-[2452px] w-[120.595px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[90.33deg]">
          <div className="h-[119px] relative w-[274px]" data-node-id="2146:2718" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer6} />
          </div>
        </div>
      </div>
      <div className="absolute z-10 h-[119px] left-[627px] top-[2344px] w-[274px]" data-node-id="2146:2737" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
      </div>
      <div className="absolute contents left-[99px] top-[2416px]" data-node-id="2146:2756">
        <div className="absolute bg-[#d9d9d9] h-[400px] left-[99px] rounded-[10px] top-[2416px] w-[808px]" data-node-id="2146:2757" />
        <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[136px] not-italic text-[32px] text-black top-[2452px] w-[771px]" data-node-id="2146:2758">
          New MLS single-game attendance record post-World Cup 2026?
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[136px] text-[32px] text-black top-[2592px] w-[508px]" data-node-id="2146:2759" style={{ fontVariationSettings: "'wdth' 100" }}>
          Over 82,110
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[136px] text-[32px] text-black top-[2657px] w-[508px]" data-node-id="2146:2760" style={{ fontVariationSettings: "'wdth' 100" }}>
          Under 82,110
        </p>
        <button type="button" onClick={() => openBet(Q_MLS, 'Under 82,110', '-354')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[2652px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2761" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2761;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2761;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2761;121:11926">
            <p className="leading-[16px]">-354</p>
          </div>
        </button>
        <button type="button" onClick={() => openBet(Q_MLS, 'Over 82,110', '+473')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[2587px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2762" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2762;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2762;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2762;121:11926">
            <p className="leading-[16px]">+473</p>
          </div>
        </button>
      </div>
      <div className="absolute z-10 h-[103px] left-[860px] top-[2360px] w-[111px]" data-node-id="2146:2763" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer8} />
      </div>
      <div className="absolute z-10 h-[119px] left-[615px] top-[2132px] w-[274px]" data-node-id="2146:2766" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
      </div>
      <div className="absolute z-10 h-[119px] left-[596px] top-[3278px] w-[274px]" data-node-id="2146:2785" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
      </div>
      <div className="absolute contents left-[99px] top-[1762px]" data-node-id="2146:2804">
        <div className="absolute bg-[#d9d9d9] h-[400px] left-[99px] rounded-[10px] top-[1762px] w-[808px]" data-node-id="2146:2805" />
        <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[136px] not-italic text-[32px] text-black top-[1798px] w-[771px]" data-node-id="2146:2806">
          Outcome of fed rate decision April 28-29?
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[136px] text-[32px] text-black top-[1880px] w-[508px]" data-node-id="2146:2807" style={{ fontVariationSettings: "'wdth' 100" }}>
          50+ bps decrease
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[136px] text-[32px] text-black top-[1947px] w-[508px]" data-node-id="2146:2808" style={{ fontVariationSettings: "'wdth' 100" }}>
          25 bps decrease
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[136px] text-[32px] text-black top-[2012px] w-[508px]" data-node-id="2146:2809" style={{ fontVariationSettings: "'wdth' 100" }}>
          No change
        </p>
        <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[136px] text-[32px] text-black top-[2078px] w-[508px]" data-node-id="2146:2810" style={{ fontVariationSettings: "'wdth' 100" }}>
          25 bps increase
        </p>
        <button type="button" onClick={() => openBet(Q_FED, 'No change', '-285')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[2007px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2811" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2811;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2811;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2811;121:11926">
            <p className="leading-[16px]">-285</p>
          </div>
        </button>
        <button type="button" onClick={() => openBet(Q_FED, '25 bps increase', '+351')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[2073px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2812" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2812;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2812;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2812;121:11926">
            <p className="leading-[16px]">+351</p>
          </div>
        </button>
        <button type="button" onClick={() => openBet(Q_FED, '25 bps decrease', '+593')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[1942px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2813" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2813;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2813;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2813;121:11926">
            <p className="leading-[16px]">+593</p>
          </div>
        </button>
        <button type="button" onClick={() => openBet(Q_FED, '50+ bps decrease', '+1345')} className="absolute flex h-[32px] items-center justify-center left-[627px] px-4 rounded-[6px] top-[1875px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2814" data-name="Push Button">
          <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2814;501:5756" data-name="BG">
            <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2814;501:5756;703:5743" data-name="Black" />
          </div>
          <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2814;121:11926">
            <p className="leading-[16px]">+1345</p>
          </div>
        </button>
      </div>
      <div className="absolute z-10 h-[103px] left-[867px] top-[2105px] w-[111px]" data-node-id="2146:2815" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer8} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[92px] rounded-[10px] top-[2909px] w-[808px]" data-node-id="2146:2818" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[129px] not-italic text-[32px] text-black top-[2942px] w-[771px]" data-node-id="2146:2819">
        Why are the newly discovered organic molecules important to scientists?
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[99px] text-[32px] text-black top-[3030px] w-[508px]" data-node-id="2146:2820" style={{ fontVariationSettings: "'wdth' 100" }}>
        They prove that humans once lived on Mars
      </p>
      <button type="button" onClick={() => openBet(Q_MARS, 'They prove that humans once lived on Mars', '+1345')} className="absolute flex h-[32px] items-center justify-center left-[620px] px-4 rounded-[6px] top-[3040px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2821" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2821;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2821;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2821;121:11926">
          <p className="leading-[16px]">+1345</p>
        </div>
      </button>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[99px] text-[32px] text-black top-[3125px] w-[476px]" data-node-id="2146:2822" style={{ fontVariationSettings: "'wdth' 100" }}>
        They show Mars has more oxygen than Earth
      </p>
      <button type="button" onClick={() => openBet(Q_MARS, 'They show Mars has more oxygen than Earth', '+593')} className="absolute flex h-[32px] items-center justify-center left-[621px] px-4 rounded-[6px] top-[3128px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2823" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2823;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2823;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2823;121:11926">
          <p className="leading-[16px]">+593</p>
        </div>
      </button>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[99px] text-[32px] text-black top-[3208px] w-[476px]" data-node-id="2146:2824" style={{ fontVariationSettings: "'wdth' 100" }}>
        They suggest Mars once had the right chemistry to support life
      </p>
      <button type="button" onClick={() => openBet(Q_MARS, 'They suggest Mars once had the right chemistry to support life', '-285')} className="absolute flex h-[32px] items-center justify-center left-[623px] px-4 rounded-[6px] top-[3208px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2825" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2825;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2825;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2825;121:11926">
          <p className="leading-[16px]">-285</p>
        </div>
      </button>
      <div className="absolute z-10 h-[103px] left-[854px] top-[3249px] w-[111px]" data-node-id="2146:2826" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer8} />
      </div>
      <div className="absolute z-10 h-[119px] left-[601px] top-[3482px] w-[274px]" data-node-id="2146:2829" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer9} />
      </div>
      <div className="absolute flex h-[274.643px] items-center justify-center left-[856px] top-[3592px] w-[120.489px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[90.31deg]">
          <div className="h-[119px] relative w-[274px]" data-node-id="2146:2848" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer10} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[274.643px] items-center justify-center left-[863px] top-[4217px] w-[120.489px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[90.31deg]">
          <div className="h-[119px] relative w-[274px]" data-node-id="2146:2867" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer10} />
          </div>
        </div>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[91px] rounded-[10px] top-[3573px] w-[808px]" data-node-id="2146:2886" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[128px] not-italic text-[32px] text-black top-[3609px] w-[771px]" data-node-id="2146:2887">
        SpaceX 12-month post-IPO price?
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[144px] text-[32px] text-black top-[3691px] w-[508px]" data-node-id="2146:2888" style={{ fontVariationSettings: "'wdth' 100" }}>
        $100-$200
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[144px] text-[32px] text-black top-[3758px] w-[508px]" data-node-id="2146:2889" style={{ fontVariationSettings: "'wdth' 100" }}>
        $400-$500
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[144px] text-[32px] text-black top-[3823px] w-[508px]" data-node-id="2146:2890" style={{ fontVariationSettings: "'wdth' 100" }}>
        $700-$800
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[144px] text-[32px] text-black top-[3889px] w-[508px]" data-node-id="2146:2891" style={{ fontVariationSettings: "'wdth' 100" }}>
        $1,000-$1,100
      </p>
      <button type="button" onClick={() => openBet(Q_SPX, '$700-$800', '+1143')} className="absolute flex h-[32px] items-center justify-center left-[619px] px-4 rounded-[6px] top-[3818px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2892" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2892;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2892;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2892;121:11926">
          <p className="leading-[16px]">+1143</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_SPX, '$1,000-$1,100', '+893')} className="absolute flex h-[32px] items-center justify-center left-[619px] px-4 rounded-[6px] top-[3884px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2893" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2893;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2893;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2893;121:11926">
          <p className="leading-[16px]">+893</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_SPX, '$400-$500', '-247')} className="absolute flex h-[32px] items-center justify-center left-[619px] px-4 rounded-[6px] top-[3753px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2894" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2894;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2894;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2894;121:11926">
          <p className="leading-[16px]">-247</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_SPX, '$100-$200', '+128')} className="absolute flex h-[32px] items-center justify-center left-[619px] px-4 rounded-[6px] top-[3686px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2895" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2895;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2895;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2895;121:11926">
          <p className="leading-[16px]">+128</p>
        </div>
      </button>
      <div className="absolute z-10 h-[103px] left-[852px] top-[3516px] w-[111px]" data-node-id="2146:2896" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer11} />
      </div>
      <div className="absolute z-10 h-[119px] left-[628px] top-[4450px] w-[274px]" data-node-id="2146:2899" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer9} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[92px] rounded-[10px] top-[4083px] w-[808px]" data-node-id="2146:2918" data-name="Sub question container" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[129px] not-italic text-[32px] text-black top-[4119px] w-[771px]" data-node-id="2146:2919">
        Average energy conversion rate by 2030?
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[129px] text-[32px] text-black top-[4201px] w-[508px]" data-node-id="2146:2920" style={{ fontVariationSettings: "'wdth' 100" }}>
        90% or more
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[129px] text-[32px] text-black top-[4268px] w-[508px]" data-node-id="2146:2921" style={{ fontVariationSettings: "'wdth' 100" }}>
        90%
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[129px] text-[32px] text-black top-[4333px] w-[508px]" data-node-id="2146:2922" style={{ fontVariationSettings: "'wdth' 100" }}>
        70%
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[129px] text-[32px] text-black top-[4399px] w-[508px]" data-node-id="2146:2923" style={{ fontVariationSettings: "'wdth' 100" }}>
        70% or less
      </p>
      <button type="button" onClick={() => openBet(Q_GENERIC, 'Outcome option', '+459')} className="absolute flex h-[32px] items-center justify-center left-[620px] px-4 rounded-[6px] top-[4328px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2924" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2924;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2924;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2924;121:11926">
          <p className="leading-[16px]">+459</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_GENERIC, 'Outcome option', '+694')} className="absolute flex h-[32px] items-center justify-center left-[620px] px-4 rounded-[6px] top-[4394px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2925" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2925;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2925;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2925;121:11926">
          <p className="leading-[16px]">+694</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_GENERIC, 'Outcome option', '-362')} className="absolute flex h-[32px] items-center justify-center left-[620px] px-4 rounded-[6px] top-[4263px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2926" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2926;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2926;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2926;121:11926">
          <p className="leading-[16px]">-362</p>
        </div>
      </button>
      <button type="button" onClick={() => openBet(Q_GENERIC, 'Outcome option', '+101')} className="absolute flex h-[32px] items-center justify-center left-[620px] px-4 rounded-[6px] top-[4196px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2927" data-name="Push Button">
        <div className="absolute inset-0 overflow-clip" data-node-id="I2146:2927;501:5756" data-name="BG">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" data-node-id="I2146:2927;501:5756;703:5743" data-name="Black" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap" data-node-id="I2146:2927;121:11926">
          <p className="leading-[16px]">+101</p>
        </div>
      </button>
      <div className="absolute flex h-[113.653px] items-center justify-center left-[855px] top-[4434px] w-[105.865px]" style={{ "--transform-inner-width": "300", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[88.5deg]">
          <div className="h-[103px] relative w-[111px]" data-node-id="2146:2928" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer12} />
          </div>
        </div>
      </div>
      <div className="absolute inset-[32.2%_29.62%_64.27%_61.94%]" data-node-id="2146:2931">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup30} />
      </div>
      <div className="absolute inset-[26.94%_3.85%_69.52%_87.71%]" data-node-id="2146:2935">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup30} />
      </div>
      <div className="absolute inset-[77.63%_30.03%_18.84%_61.53%]" data-node-id="2146:2939">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup30} />
      </div>
      <div className="absolute flex inset-[54.63%_91.59%_41.77%_-0.42%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-scale-x-100 flex-none h-[hypot(4.37565cqw,97.9732cqh)] rotate-[-1.76deg] w-[hypot(-95.6244cqw,2.02681cqh)]">
          <div className="relative size-full" data-node-id="2146:2943">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup31} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[307px] not-italic text-[40px] text-white top-[1582px] whitespace-nowrap" data-node-id="2146:2947">
        See what everyone’s betting on right now
      </p>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[173px] not-italic text-[40px] text-white top-[3998px] whitespace-nowrap" data-node-id="2146:2948">
        Live counter: 18,908 bets placed today
      </p>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[173px] not-italic text-[40px] text-white top-[4502px] whitespace-nowrap" data-node-id="2146:2949">
        Live counter: 15,678 bets placed today
      </p>
      {/* Place your bet — Q1: Fed rate */}
      <button type="button" onClick={() => openBet(Q_FED, '50+ bps decrease', '+1345')} className="absolute bg-[#bcfa07] h-[54px] left-[530px] rounded-[10px] top-[2224px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2950">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]" data-node-id="2146:2952">Place your bet</p>
      </button>
      {/* Place your bet — Q2: MLS attendance */}
      <button type="button" onClick={() => openBet(Q_MLS, 'Over 82,110', '+473')} className="absolute bg-[#bcfa07] h-[54px] left-[565px] rounded-[10px] top-[2773px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2951">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]" data-node-id="2146:2953">Place your bet</p>
      </button>
      {/* Place your bet — Q3: Mars molecules */}
      <button type="button" onClick={() => openBet(Q_MARS, 'They prove that humans once lived on Mars', '-182')} className="absolute bg-[#bcfa07] h-[54px] left-[531px] rounded-[10px] top-[3374px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2954">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]" data-node-id="2146:2956">Place your bet</p>
      </button>
      {/* Place your bet — Q4: SpaceX IPO */}
      <button type="button" onClick={() => openBet(Q_SPX, '$100-$200', '+128')} className="absolute bg-[#bcfa07] h-[54px] left-[559px] rounded-[10px] top-[3942px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2957">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]" data-node-id="2146:2959">Place your bet</p>
      </button>
      {/* Place your bet — Q5: Generic */}
      <button type="button" onClick={() => openBet(Q_GENERIC, 'Outcome option', '+101')} className="absolute bg-[#bcfa07] h-[54px] left-[551px] rounded-[10px] top-[4562px] w-[342px] flex items-center justify-center cursor-pointer hover:brightness-110 active:brightness-95 transition" data-node-id="2146:2960">
        <p className="font-['Righteous',sans-serif] text-[#1c1e20] text-[36px]" data-node-id="2146:2962">Place your bet</p>
      </button>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[154px] not-italic text-[40px] text-white top-[3315px] whitespace-nowrap" data-node-id="2146:2963">
        Live counter: 10,253 bets placed today
      </p>
      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
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
