// Figma node 2146:2980 — DESKTOP - THE ARENA LEADERBOARD
// Header + Footer extracted into shared components.

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage9 = "/assets/374ff845dc8136b6bcbc26b9c4446a708fb0be43.png";
const imgRectangle45 = "/assets/db0e35de8138d265eb54b62927f249e4717d3032.png";
const imgRectangle44 = "/assets/765a218237f6a121f8867d6fef5e6bde125c70b9.png";
const imgRectangle43 = "/assets/f16c96aa8080881228e9350b2969f0bb949629d5.png";
const imgLayer3 = "/assets/34dedc8e2a8a69c5694cd6b6349610bb39882973.svg";
const imgLayer4 = "/assets/cf15046f418aad83878b934dc23520d07ed0bdc8.svg";
const imgGroup7 = "/assets/92bcec29c39a9e109cfa5d69bcc669591c41ea25.svg";
const imgLayer5 = "/assets/917d7e71bd406d4191b31cf114227b40e2146b10.svg";
const imgGroup8 = "/assets/1793ee0b5745bd6b255eb319c2d32b436a584cb3.svg";
const imgLine1 = "/assets/fea302ca4917689bc88bafbb2d4533dc8efc77a5.svg";
const imgEllipse4 = "/assets/c6dcc2e7c74071361cc172286145e5405ce69184.svg";

const RANKED_PLAYERS: Array<{ name: string; rank: string; top: number }> = [
  { name: 'Player4',  rank: '4th',  top: 2399 },
  { name: 'Player5',  rank: '5th',  top: 2552 },
  { name: 'Player6',  rank: '6th',  top: 2706 },
  { name: 'Player7',  rank: '7th',  top: 2861 },
  { name: 'Player8',  rank: '8th',  top: 3022 },
  { name: 'Player9',  rank: '9th',  top: 3178 },
  { name: 'Player10', rank: '10th', top: 3337 },
  { name: 'Player11', rank: '11th', top: 3501 },
  { name: 'Player12', rank: '12th', top: 3664 },
  { name: 'Player13', rank: '13th', top: 3820 },
  { name: 'Player14', rank: '14th', top: 3973 },
  { name: 'Player15', rank: '15th', top: 4125 },
  { name: 'Player16', rank: '16th', top: 4285 },
];

const AVATAR_TOPS = [2374, 2525, 2686, 2846, 3002, 3158, 3326, 3478, 3642, 3798, 3968, 4110, 4274];
// One divider above each row 5–13. The original Figma file had a degenerate
// h:0 line at y=2970 (between Player 7 and Player 8) — adding it back here.
const LINE_TOPS   = [2494, 2654, 2814, 2970, 3139, 3294, 3454, 3614, 3771, 3922, 4078, 4238];

export default function ArenaLeaderboard() {
  return (
    <div className="bg-white relative w-[1440px] h-[5118px] mx-auto overflow-hidden" data-node-id="2146:2980" data-name="DESKTOP - THE ARENA LEADERBOARD">
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
      <div className="absolute flex inset-[16.1%_5.03%_76.67%_69.65%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(14.2054cqw,86.2781cqh)] rotate-[-9.22deg] w-[hypot(85.7946cqw,-13.7219cqh)]">
          <div className="relative size-full"><div className="absolute inset-[0_-1.8%_-1.76%_-1.8%]"><img alt="" className="block max-w-none size-full" src={imgLayer3} /></div></div>
        </div>
      </div>
      <div className="absolute flex inset-[16.46%_10.32%_77.9%_73.66%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(18.1489cqw,89.3844cqh)] rotate-[-9.22deg] w-[hypot(81.8511cqw,-10.6156cqh)]">
          <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} /></div>
        </div>
      </div>

      {/* Tab nav: Live / Trending / Leaderboard (active) / Tokens */}
      <div className="absolute bg-[rgba(188,250,7,0.42)] h-[47px] left-[661px] rounded-[34px] shadow-[0px_4px_4px_0px_rgba(255,255,255,0.6)] top-[1265px] w-[334px]" />
      <Link to="/arena" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[204px] not-italic text-[48px] text-white top-[1259px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Live</Link>
      <Link to="/arena/trending" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[407px] not-italic text-[48px] text-white top-[1259px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Trending</Link>
      <Link to="/arena/leaderboard" className="absolute z-10 font-['Righteous',sans-serif] leading-[normal] left-[684px] not-italic text-[48px] text-white top-[1259px] whitespace-nowrap">Leaderboard</Link>
      <Link to="/arena/tokens" className="absolute font-['Righteous',sans-serif] leading-[normal] left-[1056px] not-italic text-[48px] text-white top-[1259px] whitespace-nowrap hover:text-[#bcfa07] transition-colors">Tokens</Link>

      {/* Confetti deco above podium */}
      <div className="absolute h-[119px] left-[319px] top-[1576px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} /></div>
      <div className="absolute h-[119px] left-[818px] top-[1576px] w-[274px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} /></div>

      {/* Decorative purple groups */}
      <div className="absolute inset-[27.18%_88.4%_58.26%_-19.24%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} /></div>
      <div className="absolute inset-[41.74%_-15.97%_43.71%_85.14%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup8} /></div>
      <div className="absolute inset-[66.31%_85.42%_23.52%_-16.25%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>

      {/* Top 3 podium photos (Player2 left, Player1 center/tallest, Player3 right) */}
      <div className="absolute h-[550px] left-[209px] rounded-[44px] shadow-[4px_4px_4px_1px_white] top-[1663px] w-[364px] overflow-hidden">
        <img alt="Player 2" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full" src={imgRectangle44} />
      </div>
      <div className="absolute h-[580px] left-[508px] rounded-[44px] shadow-[0px_4px_4px_0px_white] top-[1608px] w-[390px] overflow-hidden">
        <img alt="Player 1 (winner)" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full" src={imgRectangle43} />
      </div>
      <div className="absolute h-[550px] left-[821px] rounded-[44px] shadow-[0px_4px_4px_0px_white] top-[1663px] w-[357px] overflow-hidden">
        <img alt="Player 3" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[44px] size-full" src={imgRectangle45} />
      </div>

      {/* Top 3 player labels */}
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[315px] not-italic text-[48px] text-white top-[2225px] whitespace-nowrap">Player2</p>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[620px] not-italic text-[48px] text-white top-[2196px] whitespace-nowrap">Player1</p>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[920px] not-italic text-[48px] text-white top-[2225px] whitespace-nowrap">Player3</p>

      {/* Big purple ranked-list container */}
      <div className="absolute bg-[rgba(185,103,254,0.56)] h-[2046px] left-[217px] opacity-74 rounded-[10px] top-[2341px] w-[961px]" />

      {/* Player avatars (green ellipses) */}
      {AVATAR_TOPS.map((top, i) => (
        <div key={`avatar-${i}`} className="absolute h-[100px] left-[256px] w-[95px]" style={{ top: `${top}px` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse4} />
        </div>
      ))}

      {/* Horizontal divider lines between rows */}
      {LINE_TOPS.map((top, i) => (
        <div key={`line-${i}`} className="absolute h-[4px] left-[217px] w-[955px]" style={{ top: `${top}px` }}>
          <img alt="" className="absolute inset-0 max-w-none size-full" src={imgLine1} />
        </div>
      ))}

      {/* Ranked player names + ordinals */}
      {RANKED_PLAYERS.map((p) => (
        <div key={p.name}>
          <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[379px] not-italic text-[48px] text-white whitespace-nowrap" style={{ top: `${p.top}px` }}>{p.name}</p>
          <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[1027px] not-italic text-[#bcfa07] text-[48px] whitespace-nowrap" style={{ top: `${p.top + 5}px` }}>{p.rank}</p>
        </div>
      ))}

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
