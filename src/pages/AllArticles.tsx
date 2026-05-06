// Figma node 2146:253 — DESKTOP - ALL ARTICLES
// Header + Footer extracted into shared components.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgErikMcleanNfoRa6NhTbUUnsplash1 = "/assets/69452e4d767ffd8133d1c980fae5cda9c55fdcdc.png";
const imgPhoto1541185933Ef5D8Ed016C21 = "/assets/6d275602c62080b61d6d90f55f81fd2420799bed.png";
const img090425FifaWorldCupLedeGettyImages2223637244UpdateJpg1 = "/assets/dd566a8b3ea392deeb7e03b15328ded576dc6850.png";
const imgScreenshot20260429At104735Am1 = "/assets/f4b8b3eda046c19e94d4872d8df82f02fa3fbdc9.png";
const imgHeydarALiyevCenterInBakuCropped11 = "/assets/153a0fbc6deafc3916a01a9c7225ac1237ba2fb3.png";
const imgWordImage61123Png1 = "/assets/0f5ea5b2468e391c755e93ed3664b4169722298f.png";
const imgAiCancerMedicine1 = "/assets/adba52d92f57c2e06d3cb43acaaa85b363416e77.png";
const img25382Pia2417316001 = "/assets/9c993eb8ad77267d2286b551be0d272c8520375b.png";
const imgVod00373109Still008Png1 = "/assets/a4f3e75a7e56cf9eb28082887f03faa45f6018de.png";
const imgVector = "/assets/5a4ed809b67e06532653b202b8c400adcb3ac153.svg";
const imgVector1 = "/assets/7a29da8bae215eba188cee6b53391681aecddfb0.svg";
const imgVector2 = "/assets/f9d9611b79528ac1f2b747f8c5e051a59ee89a64.svg";
const imgVector3 = "/assets/c6d45bf3e22da64b71acce196bd57eb3af588731.svg";
const imgVector4 = "/assets/125fa7a00aed991de1c96d1d55bc95bb79925093.svg";
const imgVector5 = "/assets/fcaeda9de80eb009cb61571bc2be010a7676e5e4.svg";
const imgLayer4 = "/assets/7bcee66d1b27f45e135e9eaa0fdef44ca11b2be2.svg";
const imgLayer5 = "/assets/bf571c7ca3e454a1413ecbaaec9372bda4807c76.svg";
const imgIcon = "/assets/e273ba0783d9e5e47be192b029d2266df0db2624.svg";

// --- Article catalogue: each card defines its photo + img classes (cropping), text, and route ---
type Card = {
  photoSrc: string;
  imgClass: string;
  title: string;
  desc: React.ReactNode;
  to: string;
};

const C = {
  worldCupBump: {
    photoSrc: img090425FifaWorldCupLedeGettyImages2223637244UpdateJpg1,
    imgClass: "absolute h-[100.05%] left-[-18.67%] max-w-none top-[-0.03%] w-[118.67%]",
    title: "The World Cup Bump",
    desc: <>{`Can the international competition boost `}<br aria-hidden="true" />interest in MLS play?</>,
    to: "/articles/world-cup-bump",
  } as Card,
  greenArchitecture: {
    photoSrc: imgScreenshot20260429At104735Am1,
    imgClass: "absolute h-[181.14%] left-[-31.19%] max-w-none top-[-40.68%] w-[162.24%]",
    title: "Green Architecture",
    desc: <>{`Innovative buildings that breathe nature. `}</>,
    to: "/articles/green-architecture",
  } as Card,
  inflation: {
    photoSrc: imgErikMcleanNfoRa6NhTbUUnsplash1,
    imgClass: "absolute h-[118.84%] left-[-18.85%] max-w-none top-0 w-[118.88%]",
    title: "Inflation Isn’t Over Yet",
    desc: <>{`Rising costs continue to pressure `}<br aria-hidden="true" />households and policymakers alike.</>,
    to: "/articles/inflation",
  } as Card,
  spacexIpo: {
    photoSrc: imgPhoto1541185933Ef5D8Ed016C21,
    imgClass: "absolute h-[118.58%] left-[-9.33%] max-w-none top-[-5.99%] w-[118.67%]",
    title: "SpaceX IPO",
    desc: <>{`Tech company expected to begin trading `}<br aria-hidden="true" />{`in June 2026. `}</>,
    to: "/articles/spacex-ipo",
  } as Card,
  aiCancer: {
    photoSrc: imgAiCancerMedicine1,
    imgClass: "absolute h-[118.83%] left-[-9.56%] max-w-none top-[-18.8%] w-[118.89%]",
    title: "How AI Can Beat Cancer",
    desc: <>{`The new technology may finally produce a breakthrough. `}</>,
    to: "/articles/ai-cancer",
  } as Card,
  nasaRover: {
    photoSrc: img25382Pia2417316001,
    imgClass: "absolute h-[100.36%] left-[-9.56%] max-w-none top-[-0.07%] w-[119.11%]",
    title: "NASA Rover on Mars",
    desc: <>{`The Curiosity adds to list of organic `}<br aria-hidden="true" />compounds discovered on the Red Planet.</>,
    to: "/articles/nasa-rover",
  } as Card,
  comfortFood: {
    photoSrc: imgWordImage61123Png1,
    imgClass: "absolute h-[118.99%] left-[-9.33%] max-w-none top-[-18.99%] w-[118.67%]",
    title: "Comfort Food Comeback",
    desc: <>{`Classic dishes are bringing families `}<br aria-hidden="true" />back to the table.</>,
    to: "/articles/comfort-food",
  } as Card,
  psychologyOfSpace: {
    photoSrc: imgHeydarALiyevCenterInBakuCropped11,
    imgClass: "absolute h-full left-[-9.8%] max-w-none top-0 w-[135.86%]",
    title: "Psychology of Space",
    desc: <>{`Design choices quietly shape how we think, `}<br aria-hidden="true" />{`feel, and behave. `}</>,
    to: "/articles/psychology-of-space",
  } as Card,
  celticsDefeat76ers: {
    photoSrc: imgVod00373109Still008Png1,
    imgClass: "absolute h-full left-[-15.34%] max-w-none top-0 w-[115.42%]",
    title: "Celtics Defeat 76ers",
    desc: <>{`Game 3 victory gives team 2-1 advantage `}<br aria-hidden="true" />{`in the first round series. `}</>,
    to: "/articles/tatum-dagger",
  } as Card,
};

// 7 rows, 4 cards each (2 pages of 2)
const CARDS_PER_ROW: Card[][] = [
  [C.worldCupBump, C.greenArchitecture, C.inflation, C.spacexIpo],            // Row 0: World
  [C.inflation, C.spacexIpo, C.aiCancer, C.nasaRover],                         // Row 1: Economy
  [C.spacexIpo, C.inflation, C.comfortFood, C.psychologyOfSpace],              // Row 2: Finance
  [C.aiCancer, C.nasaRover, C.greenArchitecture, C.spacexIpo],                 // Row 3: Tech
  [C.comfortFood, C.psychologyOfSpace, C.aiCancer, C.inflation],               // Row 4: Culture
  [C.celticsDefeat76ers, C.worldCupBump, C.nasaRover, C.comfortFood],          // Row 5: Sports
  [C.psychologyOfSpace, C.aiCancer, C.greenArchitecture, C.nasaRover],         // Row 6: Weather
];

const PAGES_PER_ROW = 2; // 4 cards / 2 visible = 2 pages

export default function AllArticles() {
  const [rowOffsets, setRowOffsets] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  const shift = (rowIdx: number, dir: -1 | 1) =>
    setRowOffsets((prev) =>
      prev.map((o, i) => (i === rowIdx ? (o + dir + PAGES_PER_ROW) % PAGES_PER_ROW : o)),
    );

  // Helper: pick the card for (rowIdx, slotIdx in {0,1}) given current offset.
  const card = (rowIdx: number, slotIdx: 0 | 1): Card =>
    CARDS_PER_ROW[rowIdx][rowOffsets[rowIdx] * 2 + slotIdx];

  return (
    <div className="bg-white relative w-[1440px] h-[5396px] mx-auto overflow-hidden" data-node-id="2146:253" data-name="DESKTOP - ALL ARTICLES">
      <div className="absolute bg-black h-[5557px] left-[-9px] top-0 w-[1488px]" data-node-id="2146:254" />
      <div className="absolute bg-black h-[5378px] left-0 top-[594px] w-[1440px]" data-node-id="2146:255" />
      <div className="absolute bg-black h-[5378px] left-0 top-[576px] w-[1440px]" data-node-id="2146:256" />
      <div className="absolute bg-black h-[5378px] left-0 top-[1170px] w-[1440px]" data-node-id="2146:257" />
      <div className="absolute bg-[rgba(0,0,0,0.57)] h-[453px] left-[4px] top-[151px] w-[1038px]" data-node-id="2146:258" />
      <p className="absolute font-['Think',sans-serif] h-[384px] leading-[0] left-[calc(8.33%+29px)] not-italic text-[200px] text-white top-[281px] w-[801px]" data-node-id="2146:262">
        <span className="leading-[150px]">ALL</span>
        <span className="leading-[150px] tracking-[-1.92px]">{` `}</span>
        <span className="leading-[150px]">NEWS</span>
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[110px] leading-[normal] left-[calc(8.33%+29px)] not-italic text-[32px] text-white top-[431px] w-[912px]" data-node-id="2146:263">{`The complete InsightR collection. `}</p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%+29px)] not-italic text-[#bcfa07] text-[20px] top-[231px] w-[912px]" data-node-id="2146:264">
        #1 in News Gamification
      </p>
      {/* Shared footer */}
      <div className="absolute top-[4925px] left-0">
        <Footer />
      </div>
      <div className="absolute inset-[13.12%_-8.2%_84.12%_77.36%]" data-node-id="2146:326" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
      </div>
      <div className="absolute inset-[15.88%_-8.2%_81.49%_77.36%]" data-node-id="2146:327" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
      </div>
      <div className="absolute inset-[18.51%_-8.2%_77.24%_77.36%]" data-node-id="2146:328" data-name="Vector">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
      </div>
      <div className="absolute flex inset-[84.31%_-8.26%_12.94%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="2146:329" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector3} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[81.67%_-8.26%_15.69%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="2146:330" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector4} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[77.43%_-8.26%_18.33%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="2146:331" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector5} />
          </div>
        </div>
      </div>

      {/* === Row 1 (Economy) photos — top:1442 === */}
      <div className="absolute h-[300px] left-[calc(16.67%+30px)] rounded-[10px] top-[1442px] w-[450px] overflow-hidden" data-node-id="2146:332">
        <img alt="" className={card(1, 0).imgClass} src={card(1, 0).photoSrc} />
      </div>
      {/* === Row 2 (Finance) photo slot 1 — top:2031, right === */}
      <div className="absolute h-[300px] left-[calc(50%+27px)] rounded-[10px] top-[2031px] w-[450px] overflow-hidden" data-node-id="2146:333">
        <img alt="" className={card(2, 1).imgClass} src={card(2, 1).photoSrc} />
      </div>
      {/* === Row 1 (Economy) photo slot 1 — top:1442, right === */}
      <div className="absolute h-[300px] left-[calc(50%+27px)] rounded-[10px] top-[1442px] w-[450px] overflow-hidden" data-node-id="2146:334">
        <img alt="" className={card(1, 1).imgClass} src={card(1, 1).photoSrc} />
      </div>
      {/* === Row 2 (Finance) photo slot 0 — top:2031, left === */}
      <div className="absolute h-[300px] left-[calc(16.67%+30px)] rounded-[10px] top-[2031px] w-[450px] overflow-hidden" data-node-id="2146:335">
        <img alt="" className={card(2, 0).imgClass} src={card(2, 0).photoSrc} />
      </div>
      {/* === Row 0 (World) photo slot 0 — top:853, left === */}
      <div className="absolute h-[300px] left-[calc(16.67%+17px)] rounded-[10px] top-[853px] w-[450px] overflow-hidden" data-node-id="2146:336">
        <img alt="" className={card(0, 0).imgClass} src={card(0, 0).photoSrc} />
      </div>
      {/* === Row 0 (World) photo slot 1 — top:853, right === */}
      <div className="absolute h-[300px] left-[calc(50%+13px)] rounded-[10px] top-[853px] w-[450px] overflow-hidden" data-node-id="2146:337">
        <img alt="" className={card(0, 1).imgClass} src={card(0, 1).photoSrc} />
      </div>
      {/* === Row 3 (Tech) photo slot 0 — top:2620, left === */}
      <div className="absolute h-[300px] left-[calc(16.67%+30px)] rounded-[10px] top-[2620px] w-[450px] overflow-hidden" data-node-id="2146:338">
        <img alt="" className={card(3, 0).imgClass} src={card(3, 0).photoSrc} />
      </div>
      {/* === Row 3 (Tech) photo slot 1 — top:2620, right === */}
      <div className="absolute h-[300px] left-[calc(50%+27px)] rounded-[10px] top-[2620px] w-[450px] overflow-hidden" data-node-id="2146:339">
        <img alt="" className={card(3, 1).imgClass} src={card(3, 1).photoSrc} />
      </div>
      {/* === Row 4 (Culture) photo slot 0 — top:3210, left === */}
      <div className="absolute h-[300px] left-[calc(16.67%+31px)] rounded-[10px] top-[3210px] w-[450px] overflow-hidden" data-node-id="2146:340">
        <img alt="" className={card(4, 0).imgClass} src={card(4, 0).photoSrc} />
      </div>
      {/* === Row 4 (Culture) photo slot 1 — top:3210, right === */}
      <div className="absolute h-[300px] left-[calc(50%+27px)] rounded-[10px] top-[3210px] w-[450px] overflow-hidden" data-node-id="2146:341">
        <img alt="" className={card(4, 1).imgClass} src={card(4, 1).photoSrc} />
      </div>
      {/* === Row 6 (Weather) photo slot 1 — top:4398, right === */}
      <div className="absolute h-[300px] left-[calc(50%+30px)] rounded-[10px] top-[4398px] w-[450px] overflow-hidden" data-node-id="2146:343">
        <img alt="" className={card(6, 1).imgClass} src={card(6, 1).photoSrc} />
      </div>
      {/* === Row 6 (Weather) photo slot 0 — top:4398, left === */}
      <div className="absolute h-[300px] left-[calc(16.67%+30px)] rounded-[10px] top-[4398px] w-[450px] overflow-hidden" data-node-id="2146:346">
        <img alt="" className={card(6, 0).imgClass} src={card(6, 0).photoSrc} />
      </div>

      <div className="absolute h-[72px] left-[calc(66.67%+27px)] top-[1783px] w-[166px]" data-node-id="2146:347" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
      </div>
      <div className="absolute h-[72px] left-[calc(25%+98px)] top-[3550px] w-[166px]" data-node-id="2146:366" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
      </div>
      <div className="absolute h-[72px] left-[calc(25%+98px)] top-[4738px] w-[166px]" data-node-id="2146:385" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
      </div>
      <div className="absolute h-[103px] left-[calc(75%+70px)] top-[2568px] w-[111px]" data-node-id="2146:404" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} />
      </div>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+244px)] not-italic text-[75px] text-center text-white top-[726px] tracking-[2.25px] w-[450px]" data-node-id="2146:407">
        World
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+258px)] not-italic text-[75px] text-center text-white top-[1315px] tracking-[2.25px] w-[450px]" data-node-id="2146:408">
        Economy
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+258px)] not-italic text-[75px] text-center text-white top-[1904px] tracking-[2.25px] w-[450px]" data-node-id="2146:409">
        Finance
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+258px)] not-italic text-[75px] text-center text-white top-[2493px] tracking-[2.25px] w-[450px]" data-node-id="2146:410">
        Tech
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+256px)] not-italic text-[75px] text-center text-white top-[3677px] tracking-[2.25px] w-[450px]" data-node-id="2146:411">
        Sports
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+256px)] not-italic text-[75px] text-center text-white top-[4271px] tracking-[2.25px] w-[450px]" data-node-id="2146:412">
        Weather
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[93px] leading-[normal] left-[calc(33.33%+259px)] not-italic text-[75px] text-center text-white top-[3082px] tracking-[2.25px] w-[450px]" data-node-id="2146:413">
        Culture
      </p>
      {/* === Row 5 (Sports) photo slot 1 — top:3804, right === */}
      <div className="absolute h-[300px] left-[calc(50%+26px)] rounded-[10px] top-[3804px] w-[450px] overflow-hidden" data-node-id="2146:414">
        <img alt="" className={card(5, 1).imgClass} src={card(5, 1).photoSrc} />
      </div>
      <div className="absolute bg-white h-[124px] left-[calc(25%-1px)] rounded-[10px] top-[1079px] w-[375px]" data-node-id="2146:415" />
      <div className="absolute bg-white h-[124px] left-[calc(25%+13px)] rounded-[10px] top-[1668px] w-[375px]" data-node-id="2146:416" />
      <div className="absolute bg-white h-[124px] left-[calc(25%+13px)] rounded-[10px] top-[2257px] w-[375px]" data-node-id="2146:417" />
      <div className="absolute bg-white h-[124px] left-[calc(25%+13px)] rounded-[10px] top-[2846px] w-[375px]" data-node-id="2146:418" />
      {/* === Row 5 (Sports) photo slot 0 — top:3804, left === */}
      <div className="absolute h-[298px] left-[calc(16.67%+19px)] rounded-[10px] top-[3804px] w-[459px] overflow-hidden" data-node-id="2146:419">
        <img alt="" className={card(5, 0).imgClass} src={card(5, 0).photoSrc} />
      </div>
      <div className="absolute bg-white h-[124px] left-[calc(25%+11px)] rounded-[10px] top-[4030px] w-[375px]" data-node-id="2146:420" />
      <div className="absolute bg-white h-[124px] left-[calc(25%+17px)] rounded-[10px] top-[4624px] w-[375px]" data-node-id="2146:421" />
      <div className="absolute bg-white h-[124px] left-[calc(25%+14px)] rounded-[10px] top-[3435px] w-[375px]" data-node-id="2146:422" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%-6px)] rounded-[10px] top-[1079px] w-[375px]" data-node-id="2146:423" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+8px)] rounded-[10px] top-[1668px] w-[375px]" data-node-id="2146:424" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+8px)] rounded-[10px] top-[2257px] w-[375px]" data-node-id="2146:425" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+8px)] rounded-[10px] top-[2846px] w-[375px]" data-node-id="2146:426" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+6px)] rounded-[10px] top-[4030px] w-[375px]" data-node-id="2146:427" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+12px)] rounded-[10px] top-[4624px] w-[375px]" data-node-id="2146:428" />
      <div className="absolute bg-white h-[124px] left-[calc(58.33%+9px)] rounded-[10px] top-[3435px] w-[375px]" data-node-id="2146:429" />

      {/* === Description text (left column, slot 0) === */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+22px)] text-[14px] text-black top-[1148px] w-[321px] whitespace-pre-wrap" data-node-id="2146:430" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(0, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+36px)] text-[14px] text-black top-[1737px] w-[321px] whitespace-pre-wrap" data-node-id="2146:431" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(1, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+36px)] text-[14px] text-black top-[2326px] w-[321px] whitespace-pre-wrap" data-node-id="2146:432" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(2, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+36px)] text-[14px] text-black top-[2915px] w-[321px]" data-node-id="2146:433" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(3, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+34px)] text-[14px] text-black top-[4099px] w-[321px] whitespace-pre-wrap" data-node-id="2146:434" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(5, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+40px)] text-[14px] text-black top-[4693px] w-[321px] whitespace-pre-wrap" data-node-id="2146:435" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(6, 0).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(25%+37px)] text-[14px] text-black top-[3504px] w-[321px] whitespace-pre-wrap" data-node-id="2146:436" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(4, 0).desc}
      </p>

      {/* === Description text (right column, slot 1) === */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+17px)] text-[14px] text-black top-[1148px] w-[321px]" data-node-id="2146:437" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(0, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+31px)] text-[14px] text-black top-[1737px] w-[321px] whitespace-pre-wrap" data-node-id="2146:438" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(1, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+31px)] text-[14px] text-black top-[2326px] w-[321px] whitespace-pre-wrap" data-node-id="2146:439" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(2, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+31px)] text-[14px] text-black top-[2915px] w-[321px] whitespace-pre-wrap" data-node-id="2146:440" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(3, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+29px)] text-[14px] text-black top-[4099px] w-[321px] whitespace-pre-wrap" data-node-id="2146:441" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(5, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+35px)] text-[14px] text-black top-[4693px] w-[321px]" data-node-id="2146:442" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(6, 1).desc}
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[86px] leading-[18px] left-[calc(58.33%+32px)] text-[14px] text-black top-[3504px] w-[321px] whitespace-pre-wrap" data-node-id="2146:443" style={{ fontVariationSettings: "'wdth' 100" }}>
        {card(4, 1).desc}
      </p>

      {/* === Title text (left column, slot 0) === */}
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+22px)] not-italic text-[26px] text-black top-[1106px] w-[314px]" data-node-id="2146:444">
        {card(0, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+36px)] not-italic text-[26px] text-black top-[1695px] w-[314px]" data-node-id="2146:445">
        {card(1, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+36px)] not-italic text-[26px] text-black top-[2284px] w-[314px]" data-node-id="2146:446">
        {card(2, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] leading-[normal] left-[calc(25%+36px)] not-italic text-[26px] text-black top-[2873px] w-[314px]" data-node-id="2146:447">
        {card(3, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+34px)] not-italic text-[26px] text-black top-[4057px] w-[314px]" data-node-id="2146:448">
        {card(5, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+40px)] not-italic text-[26px] text-black top-[4651px] w-[314px]" data-node-id="2146:449">
        {card(6, 0).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(25%+37px)] not-italic text-[26px] text-black top-[3462px] w-[314px]" data-node-id="2146:450">
        {card(4, 0).title}
      </p>

      {/* === Title text (right column, slot 1) === */}
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+17px)] not-italic text-[26px] text-black top-[1106px] w-[314px]" data-node-id="2146:451">
        {card(0, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+31px)] not-italic text-[26px] text-black top-[1695px] w-[314px]" data-node-id="2146:452">
        {card(1, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+31px)] not-italic text-[26px] text-black top-[2284px] w-[314px]" data-node-id="2146:453">
        {card(2, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+31px)] not-italic text-[26px] text-black top-[2873px] w-[314px]" data-node-id="2146:454">
        {card(3, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+29px)] not-italic text-[26px] text-black top-[4057px] w-[314px]" data-node-id="2146:455">
        {card(5, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+35px)] not-italic text-[26px] text-black top-[4651px] w-[314px]" data-node-id="2146:456">
        {card(6, 1).title}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+32px)] not-italic text-[26px] text-black top-[3462px] w-[314px]" data-node-id="2146:457">
        {card(4, 1).title}
      </p>

      {/* === Prev arrows (left side, rotated -90deg = pointing left) === */}
      {/* Row 0 — top:961 */}
      <button type="button" onClick={() => shift(0, -1)} aria-label="Previous World articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+26px)] size-[84px] top-[961px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:458" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:458;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 1 — top:1550 */}
      <button type="button" onClick={() => shift(1, -1)} aria-label="Previous Economy articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+40px)] size-[84px] top-[1550px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:459" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:459;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 2 — top:2139 */}
      <button type="button" onClick={() => shift(2, -1)} aria-label="Previous Finance articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+40px)] size-[84px] top-[2139px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:460" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:460;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 3 — top:2728 */}
      <button type="button" onClick={() => shift(3, -1)} aria-label="Previous Tech articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+40px)] size-[84px] top-[2728px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:461" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:461;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 5 — top:3912 (Sports) */}
      <button type="button" onClick={() => shift(5, -1)} aria-label="Previous Sports articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+38px)] size-[84px] top-[3912px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:462" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:462;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 6 — top:4506 (Weather) */}
      <button type="button" onClick={() => shift(6, -1)} aria-label="Previous Weather articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+44px)] size-[84px] top-[4506px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:463" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:463;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 4 — top:3317 (Culture) */}
      <button type="button" onClick={() => shift(4, -1)} aria-label="Previous Culture articles" className="absolute z-30 flex items-center justify-center left-[calc(8.33%+41px)] size-[84px] top-[3317px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:464" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:464;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* === Next arrows (right side, rotated 90deg = pointing right) === */}
      {/* Row 0 — top:961 */}
      <button type="button" onClick={() => shift(0, 1)} aria-label="Next World articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+9px)] size-[84px] top-[961px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:465" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:465;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 1 — top:1550 */}
      <button type="button" onClick={() => shift(1, 1)} aria-label="Next Economy articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+23px)] size-[84px] top-[1550px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:466" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:466;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 2 — top:2139 */}
      <button type="button" onClick={() => shift(2, 1)} aria-label="Next Finance articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+23px)] size-[84px] top-[2139px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:467" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:467;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 3 — top:2728 */}
      <button type="button" onClick={() => shift(3, 1)} aria-label="Next Tech articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+23px)] size-[84px] top-[2728px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:468" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:468;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 5 — top:3912 (Sports) */}
      <button type="button" onClick={() => shift(5, 1)} aria-label="Next Sports articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+21px)] size-[84px] top-[3912px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:469" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:469;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 6 — top:4506 (Weather) */}
      <button type="button" onClick={() => shift(6, 1)} aria-label="Next Weather articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+27px)] size-[84px] top-[4506px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:470" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:470;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      {/* Row 4 — top:3317 (Culture) */}
      <button type="button" onClick={() => shift(4, 1)} aria-label="Next Culture articles" className="absolute z-30 flex items-center justify-center left-[calc(83.33%+24px)] size-[84px] top-[3317px] hover:scale-110 active:scale-95 transition-transform cursor-pointer" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="2146:471" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I2146:471;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Card click overlays — 14 cards across 7 categories, data-driven from current rowOffsets */}
      {/* Row 0: World — top:853 */}
      <Link to={card(0, 0).to} aria-label={card(0, 0).title} className="absolute z-20 left-[257px] top-[853px]  w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(0, 1).to} aria-label={card(0, 1).title} className="absolute z-20 left-[733px] top-[853px]  w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 1: Economy — top:1442 */}
      <Link to={card(1, 0).to} aria-label={card(1, 0).title} className="absolute z-20 left-[270px] top-[1442px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(1, 1).to} aria-label={card(1, 1).title} className="absolute z-20 left-[747px] top-[1442px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 2: Finance — top:2031 */}
      <Link to={card(2, 0).to} aria-label={card(2, 0).title} className="absolute z-20 left-[270px] top-[2031px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(2, 1).to} aria-label={card(2, 1).title} className="absolute z-20 left-[747px] top-[2031px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 3: Tech — top:2620 */}
      <Link to={card(3, 0).to} aria-label={card(3, 0).title} className="absolute z-20 left-[270px] top-[2620px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(3, 1).to} aria-label={card(3, 1).title} className="absolute z-20 left-[747px] top-[2620px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 4: Culture — top:3210 */}
      <Link to={card(4, 0).to} aria-label={card(4, 0).title} className="absolute z-20 left-[271px] top-[3210px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(4, 1).to} aria-label={card(4, 1).title} className="absolute z-20 left-[747px] top-[3210px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 5: Sports — top:3804 */}
      <Link to={card(5, 0).to} aria-label={card(5, 0).title} className="absolute z-20 left-[259px] top-[3804px] w-[459px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(5, 1).to} aria-label={card(5, 1).title} className="absolute z-20 left-[746px] top-[3804px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      {/* Row 6: Weather — top:4398 */}
      <Link to={card(6, 0).to} aria-label={card(6, 0).title} className="absolute z-20 left-[270px] top-[4398px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={card(6, 1).to} aria-label={card(6, 1).title} className="absolute z-20 left-[750px] top-[4398px] w-[450px] h-[470px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />

    </div>
  );
}
