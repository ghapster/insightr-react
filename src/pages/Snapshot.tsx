// Figma node 2146:100 — DESKTOP - SNAPSHOT OF TODAY
// Header + Footer extracted into shared components.

import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgAiCancerMedicine2 = "/assets/a10997be4e50d89cb18e3b99aadd661e4fabdd97.png";
const imgVector  = "/assets/c6d45bf3e22da64b71acce196bd57eb3af588731.svg";
const imgVector1 = "/assets/125fa7a00aed991de1c96d1d55bc95bb79925093.svg";
const imgVector2 = "/assets/fcaeda9de80eb009cb61571bc2be010a7676e5e4.svg";
const imgVector3 = "/assets/5a4ed809b67e06532653b202b8c400adcb3ac153.svg";
const imgVector4 = "/assets/7a29da8bae215eba188cee6b53391681aecddfb0.svg";
const imgVector5 = "/assets/f9d9611b79528ac1f2b747f8c5e051a59ee89a64.svg";
const imgLayer4  = "/assets/7bcee66d1b27f45e135e9eaa0fdef44ca11b2be2.svg";
const imgLayer5  = "/assets/bf571c7ca3e454a1413ecbaaec9372bda4807c76.svg";

export default function Snapshot() {
  return (
    <div className="bg-white relative w-[1440px] h-[3646px] mx-auto overflow-hidden" data-node-id="2146:100" data-name="DESKTOP - SNAPSHOT OF TODAY">
      <div className="absolute bg-black h-[3646px] left-0 top-0 w-[1440px]" data-node-id="2146:101" />

      {/* Hero black tint band */}
      <div className="absolute bg-[rgba(0,0,0,0.57)] h-[453px] left-[4px] top-[170px] w-[1038px]" data-node-id="2146:102" />

      {/* Hero title */}
      <div className="absolute font-['Think',sans-serif] h-[384px] leading-[0] left-[calc(8.33%+29px)] not-italic text-[0px] text-white top-[300px] w-[801px] whitespace-pre-wrap" data-node-id="2146:106">
        <p className="leading-[150px] mb-0 text-[200px]">{`SNAPSHOT `}</p>
        <p className="text-[200px]">
          <span className="leading-[150px]">OF</span>
          <span className="leading-[150px] tracking-[-24px]">{` `}</span>
          <span className="leading-[150px]">TODAY</span>
        </p>
      </div>

      {/* Hero subtitle */}
      <div className="absolute font-['Righteous',sans-serif] h-[110px] leading-[0] left-[calc(8.33%+29px)] not-italic text-[32px] text-white top-[594px] w-[912px]" data-node-id="2146:110">
        <p className="leading-[normal] mb-0">Check out today's daily scoop.</p>
        <p className="leading-[normal]">More headlines just for you.</p>
      </div>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%+29px)] not-italic text-[#bcfa07] text-[20px] top-[250px] w-[912px]" data-node-id="2146:111">
        #1 in News Gamification
      </p>

      {/* Right-side purple decorations near top */}
      <div className="absolute inset-[19.94%_-8.2%_75.98%_77.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} /></div>
      <div className="absolute inset-[24.02%_-8.2%_72.08%_77.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} /></div>
      <div className="absolute inset-[27.92%_-8.2%_65.8%_77.36%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} /></div>

      {/* Featured: How AI Can Beat Cancer */}
      <div className="absolute h-[540px] left-[calc(8.33%+18px)] rounded-[10px] top-[876px] w-[810px]" data-node-id="2146:177">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={imgAiCancerMedicine2} />
      </div>
      <p className="absolute font-['Righteous',sans-serif] h-[363px] leading-[95px] left-[calc(8.33%+18px)] not-italic text-[#a3c0ff] text-[100px] top-[1450px] w-[812px]" data-node-id="2146:176">
        How AI Can Beat Cancer
      </p>

      {/* Quote-mark deco above 5-card grid */}
      <div className="absolute h-[72px] left-[calc(33.33%+6px)] top-[1711px] w-[166px]" data-node-id="2146:220">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
      </div>

      {/* Sparkle deco top-right */}
      <div className="absolute h-[103px] left-[calc(83.33%+50px)] top-[1698px] w-[111px]" data-node-id="2146:217">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
      </div>

      {/* 5 dark cards (3-column grid: 2 in row 1, 2 in row 2, 1 in row 3) */}
      <div className="absolute bg-[#1c1e20] h-[403px] left-[calc(8.33%+18px)] rounded-[10px] top-[1750px] w-[568px]" data-node-id="2146:178" />
      <div className="absolute bg-[#1c1e20] h-[403px] left-[calc(50%+10px)] rounded-[10px] top-[1750px] w-[568px]" data-node-id="2146:198" />
      <div className="absolute bg-[#1c1e20] h-[403px] left-[calc(8.33%+18px)] rounded-[10px] top-[2177px] w-[568px]" data-node-id="2146:199" />
      <div className="absolute bg-[#1c1e20] h-[403px] left-[calc(50%+10px)] rounded-[10px] top-[2177px] w-[568px]" data-node-id="2146:201" />
      <div className="absolute bg-[#1c1e20] h-[403px] left-[calc(8.33%+18px)] rounded-[10px] top-[2604px] w-[568px]" data-node-id="2146:200" />

      {/* Card titles */}
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[100px] justify-center leading-[0] left-[calc(8.33%+55px)] not-italic text-[#a3c0ff] text-[50px] top-[1858px] w-[531px]" data-node-id="2146:202">
        <p className="leading-[normal]">NASA Rover<br aria-hidden="true" />on Mars</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[100px] justify-center leading-[0] left-[calc(50%+47px)] not-italic text-[#a3c0ff] text-[50px] top-[1858px] w-[531px]" data-node-id="2146:203">
        <p className="leading-[normal]">World Cup Bump<br aria-hidden="true" /><br aria-hidden="true" /></p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[100px] justify-center leading-[0] left-[calc(8.33%+59px)] not-italic text-[#a3c0ff] text-[50px] top-[2285px] w-[531px]" data-node-id="2146:204">
        <p className="leading-[normal]">SpaceX IPO<br aria-hidden="true" /><br aria-hidden="true" /></p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[100px] justify-center leading-[0] left-[calc(50%+47px)] not-italic text-[#a3c0ff] text-[50px] top-[2285px] w-[531px]" data-node-id="2146:206">
        <p className="leading-[normal]">Psychology of<br aria-hidden="true" />Space</p>
      </div>
      <div className="-translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[100px] justify-center leading-[0] left-[calc(8.33%+59px)] not-italic text-[#a3c0ff] text-[50px] top-[2712px] w-[531px]" data-node-id="2146:205">
        <p className="leading-[normal]">Green Architecture<br aria-hidden="true" /><br aria-hidden="true" /></p>
      </div>

      {/* Card descriptions */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[25px] left-[calc(8.33%+55px)] text-[20px] text-white top-[1932px] w-[417px] whitespace-pre-wrap" data-node-id="2146:207">
        {`The Curiosity adds to list of organic `}<br aria-hidden="true" />compounds discovered on the Red Planet.
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[25px] left-[calc(50%+47px)] text-[20px] text-white top-[1877px] w-[417px]" data-node-id="2146:208">
        Can the international competition boost<br aria-hidden="true" />interest in MLS play?
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[25px] left-[calc(8.33%+59px)] text-[20px] text-white top-[2300px] w-[417px]" data-node-id="2146:209">
        Tech company expected to begin trading<br aria-hidden="true" />in June 2026.
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[25px] left-[calc(50%+47px)] text-[20px] text-white top-[2359px] w-[417px]" data-node-id="2146:211">
        Design choices quietly shape how we think,<br aria-hidden="true" />feel, and behave.
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[25px] left-[calc(8.33%+59px)] text-[20px] text-white top-[2731px] w-[417px]" data-node-id="2146:210">
        Innovative buildings that breathe nature.
      </p>

      {/* Read More buttons (5x) — each links to its article */}
      <Link to="/articles/nasa-rover" className="absolute bg-[#bcfa07] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(25%+58px)] overflow-clip px-4 rounded-[6px] top-[2075px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap"><p className="leading-[16px]">Read More</p></div>
      </Link>
      <Link to="/articles/world-cup-bump" className="absolute bg-[#bcfa07] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(66.67%+50px)] overflow-clip px-4 rounded-[6px] top-[2075px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap"><p className="leading-[16px]">Read More</p></div>
      </Link>
      <Link to="/articles/spacex-ipo" className="absolute bg-[#bcfa07] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(25%+62px)] overflow-clip px-4 rounded-[6px] top-[2502px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap"><p className="leading-[16px]">Read More</p></div>
      </Link>
      <Link to="/articles/psychology-of-space" className="absolute bg-[#bcfa07] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(66.67%+50px)] overflow-clip px-4 rounded-[6px] top-[2502px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap"><p className="leading-[16px]">Read More</p></div>
      </Link>
      <Link to="/articles/green-architecture" className="absolute bg-[#bcfa07] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(25%+62px)] overflow-clip px-4 rounded-[6px] top-[2929px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap"><p className="leading-[16px]">Read More</p></div>
      </Link>

      {/* Quote deco below cards */}
      <div className="absolute h-[72px] left-[calc(8.33%+64px)] top-[2998px] w-[166px]" data-node-id="2146:179">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
      </div>

      {/* Bottom-right purple decorations */}
      <div className="absolute flex inset-[85.61%_-8.2%_10.31%_77.36%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} /></div>
        </div>
      </div>
      <div className="absolute flex inset-[81.71%_-8.2%_14.39%_77.36%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} /></div>
        </div>
      </div>
      <div className="absolute flex inset-[75.43%_-8.2%_18.29%_77.36%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} /></div>
        </div>
      </div>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute top-[3175px] left-0">
        <Footer />
      </div>

      {/* Card click overlays */}
      <Link to="/articles/ai-cancer"          aria-label="How AI Can Beat Cancer" className="absolute z-20 left-[calc(8.33%+18px)] top-[876px]  w-[810px] h-[540px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/nasa-rover"         aria-label="NASA Rover on Mars"     className="absolute z-20 left-[calc(8.33%+18px)] top-[1750px] w-[568px] h-[403px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/world-cup-bump"     aria-label="World Cup Bump"         className="absolute z-20 left-[calc(50%+10px)]  top-[1750px] w-[568px] h-[403px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/spacex-ipo"         aria-label="SpaceX IPO"             className="absolute z-20 left-[calc(8.33%+18px)] top-[2177px] w-[568px] h-[403px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/psychology-of-space" aria-label="Psychology of Space"   className="absolute z-20 left-[calc(50%+10px)]  top-[2177px] w-[568px] h-[403px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/green-architecture" aria-label="Green Architecture"     className="absolute z-20 left-[calc(8.33%+18px)] top-[2604px] w-[568px] h-[403px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />

    </div>
  );
}
