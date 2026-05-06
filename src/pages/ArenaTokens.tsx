// Figma node 2146:3192 — DESKTOP - THE ARENA TOKENS
// Header + Footer extracted into shared components.

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage9 = "/assets/374ff845dc8136b6bcbc26b9c4446a708fb0be43.png";
const imgScreenshot1 = "/assets/1bb9fd125cb4f761759e104fcb83598cff615475.png";
const imgScreenshot2 = "/assets/2565f35557ad7164507375e2c000722589004d37.png";
const imgLayer3 = "/assets/34dedc8e2a8a69c5694cd6b6349610bb39882973.svg";
const imgLayer4 = "/assets/cf15046f418aad83878b934dc23520d07ed0bdc8.svg";
const imgGroup7 = "/assets/92bcec29c39a9e109cfa5d69bcc669591c41ea25.svg";
const imgVector4 = "/assets/a23cdf08e0753d865276fae655faca307bb353d3.svg";
const imgLayer1 = "/assets/bf571c7ca3e454a1413ecbaaec9372bda4807c76.svg";

export default function ArenaTokens() {
  return (
    <div className="bg-white relative w-[1440px] h-[5118px] mx-auto overflow-hidden" data-node-id="2146:3192" data-name="DESKTOP - THE ARENA TOKENS">
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
      <div className="absolute bg-[#bcfa07] h-[18px] left-[131px] rounded-[10px] top-[513px] w-[836px]" />
      <p className="absolute font-['Think',sans-serif] inset-[20.89%_-6.67%_74.23%_2.29%] leading-[normal] not-italic text-[175px] text-[rgba(255,255,255,0.1)]">Arbo the host</p>

      {/* Mascot character */}
      <div className="absolute flex inset-[16.28%_4.82%_76.5%_69.86%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(14.2054cqw,86.2781cqh)] rotate-[-9.22deg] w-[hypot(85.7946cqw,-13.7219cqh)]">
          <div className="relative size-full"><div className="absolute inset-[0_-1.8%_-1.76%_-1.8%]"><img alt="" className="block max-w-none size-full" src={imgLayer3} /></div></div>
        </div>
      </div>
      <div className="absolute flex inset-[16.63%_10.11%_77.73%_73.87%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(18.1489cqw,89.3844cqh)] rotate-[-9.22deg] w-[hypot(81.8511cqw,-10.6156cqh)]">
          <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} /></div>
        </div>
      </div>

      {/* Tab nav: Live / Trending / Leaderboard / Tokens (active) */}
      <div className="absolute bg-[rgba(188,250,7,0.42)] h-[47px] left-[1028px] rounded-[34px] shadow-[0px_4px_4px_0px_rgba(255,255,255,0.6)] top-[1285px] w-[226px]" />
      <Link to="/arena" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[236px] not-italic text-[48px] text-white top-[1279px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Live</Link>
      <Link to="/arena/trending" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[416px] not-italic text-[48px] text-white top-[1279px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Trending</Link>
      <Link to="/arena/leaderboard" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[684px] not-italic text-[48px] text-white top-[1279px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Leaderboard</Link>
      <Link to="/arena/tokens" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[1065px] not-italic text-[48px] text-white top-[1279px] whitespace-nowrap">Tokens</Link>

      {/* Decorative purple groups */}
      <div className="absolute inset-[38.49%_-15.97%_51.35%_85.14%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>
      <div className="absolute inset-[66.31%_85.42%_23.52%_-16.25%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>

      {/* Pill-shaped "You Have 2,000 Tokens" container */}
      <div className="absolute bg-[rgba(217,217,217,0.81)] h-[3936px] left-[45px] rounded-[641.5px] top-[1453px] w-[1346px]" />

      {/* "You Have" headline */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[95px] justify-center leading-[0] left-[722.5px] not-italic text-[96px] text-center text-white top-[1533.5px] w-[523px]" style={{ textShadow: '9px 16px 8.9px rgba(0,0,0,0.25)' }}>
        <p className="leading-[16px]">You Have</p>
      </div>

      {/* "2,000 Tokens" green text */}
      <div className="-translate-x-1/2 absolute font-['Righteous',sans-serif] leading-[0] left-[718px] not-italic text-[#bcfa07] text-[128px] text-center top-[1575px] w-[636px]" style={{ textShadow: '9px 16px 8.9px rgba(0,0,0,0.25)' }}>
        <p className="leading-[normal] mb-0">2,000</p>
        <p className="leading-[normal]">Tokens</p>
      </div>

      {/* Horizontal divider line */}
      <div className="absolute h-[4px] left-[33px] top-[1895px] w-[1358px]">
        <img alt="" className="absolute inset-0 max-w-none size-full" src={imgVector4} />
      </div>

      {/* Decorative green stars around headline */}
      <div className="absolute h-[103px] left-[12px] top-[1860px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} /></div>
      <div className="absolute h-[103px] left-[435px] top-[1424px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} /></div>
      <div className="absolute h-[103px] left-[1080px] top-[1498px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} /></div>
      <div className="absolute h-[103px] left-[1289px] top-[1824px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} /></div>

      {/* Token shop screenshot 1 (top half) */}
      <div className="absolute h-[1963px] left-[45px] top-[1963px] w-[1346px]">
        <img alt="Token shop part 1" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot1} />
      </div>

      {/* Token shop screenshot 2 (bottom half) */}
      <div className="absolute h-[2025px] left-[45px] top-[3851px] w-[1344px]">
        <img alt="Token shop part 2" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgScreenshot2} />
      </div>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute top-[4626px] left-0">
        <Footer />
      </div>

    </div>
  );
}
