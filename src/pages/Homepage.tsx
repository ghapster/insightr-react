// Figma node 545:11007 — DESKTOP - HOMEPAGE
// Header + Footer extracted into shared components.

import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const imgMariaLinKimPdtSqvEwvqUnsplash1 = "/assets/hero-1.png";
const imgImage6 = "/assets/hero-2.png";
const imgSeanPollockPhYq704FfdAUnsplash1 = "/assets/hero-3.png";
const imgJoelFilipeRfdp780V5AUnsplash1 = "/assets/hero-4.png";
const imgB682Ra = "/assets/card-celtics.png";
const imgLayer0 = "/assets/card-inflation.png";
const imgImage8 = "/assets/card-comfort.png";
const imgLayer3 = "/assets/card-extra.png";
// Additional photos for the carousel's 2nd page (varied images, not all the robot)
const imgNasaRoverPhoto    = "/assets/9c993eb8ad77267d2286b551be0d272c8520375b.png";
const imgWorldCupPhoto     = "/assets/dd566a8b3ea392deeb7e03b15328ded576dc6850.png";
const imgAiCancerPhoto     = "/assets/adba52d92f57c2e06d3cb43acaaa85b363416e77.png";
const imgLayer1 = "/assets/purple-stats.svg";
const imgIcon = "/assets/arrow.svg";
const imgLayer2 = "/assets/quote.svg";
const imgLayer4 = "/assets/star-green.svg";
const imgLayer5 = "/assets/purple-swoosh-1.svg";
const imgLayer6 = "/assets/purple-swoosh-2.svg";
const imgVector = "/assets/purple-deco-1.svg";
const imgVector1 = "/assets/purple-deco-2.svg";
const imgVector2 = "/assets/purple-deco-3.svg";
const imgLayer7 = "/assets/green-deco-left.svg";
const imgLayer8 = "/assets/green-deco-right.svg";
const imgLayer9 = "/assets/book-small.svg";
const imgLayer12 = "/assets/purple-top-swoosh.svg";

type HappeningCard = {
  photoSrc: string;
  imgClass: string;
  title: string;
  desc: ReactNode;
  to: string;
};

const HAPPENING_CARDS: HappeningCard[] = [
  {
    photoSrc: imgImage8,
    imgClass: "absolute h-full left-[-44.3%] max-w-none top-0 w-[203.67%]",
    title: "Comfort Food Comeback",
    desc: (
      <>
        Classic dishes are bringing families
        <br aria-hidden="true" />
        {`back to the table. `}
      </>
    ),
    to: "/articles/comfort-food",
  },
  {
    photoSrc: imgB682Ra,
    imgClass: "absolute h-[100.05%] left-[-68.91%] max-w-none top-0 w-[202.81%]",
    title: "Celtics Defeat 76ers",
    desc: (
      <>
        {`Game 3 victory gives team 2-1 advantage `}
        <br aria-hidden="true" />
        {`in the first round series. `}
      </>
    ),
    to: "/articles/tatum-dagger",
  },
  {
    photoSrc: imgLayer0,
    imgClass: "absolute h-[111.11%] left-0 max-w-none top-[-11.11%] w-full",
    title: "Inflation Isn’t Over Yet",
    desc: (
      <>
        {`Rising costs continue to pressure `}
        <br aria-hidden="true" />
        households and policymakers alike.
      </>
    ),
    to: "/articles/inflation",
  },
  {
    photoSrc: imgNasaRoverPhoto,
    imgClass: "absolute inset-0 max-w-none object-cover size-full",
    title: "NASA Rover on Mars",
    desc: (
      <>
        The Curiosity adds to list of organic compounds discovered on the Red Planet.
      </>
    ),
    to: "/articles/nasa-rover",
  },
  {
    photoSrc: imgWorldCupPhoto,
    imgClass: "absolute inset-0 max-w-none object-cover size-full",
    title: "World Cup Bump",
    desc: (
      <>
        Can the international competition boost interest in MLS play?
      </>
    ),
    to: "/articles/world-cup-bump",
  },
  {
    photoSrc: imgAiCancerPhoto,
    imgClass: "absolute inset-0 max-w-none object-cover size-full",
    title: "How AI Can Beat Cancer",
    desc: (
      <>
        The new technology may finally produce a breakthrough.
      </>
    ),
    to: "/articles/ai-cancer",
  },
];

type HappeningSlot = {
  // photo geometry
  photoLeft: string;
  photoTop: string;
  photoWidth: string;
  photoHeight: string;
  photoExtraClass?: string;
  // body bg geometry
  bodyLeft: string;
  bodyTop: string;
  bodyWidth: string;
  // text geometry
  titleLeft: string;
  titleTop: string;
  titleWidth: string;
  descLeft: string;
  descTop: string;
  descWidth: string;
  descExtraClass?: string;
  // overlay link geometry (covers full card area)
  linkLeft: string;
  linkTop: string;
  linkWidth: string;
  linkHeight: string;
};

const HAPPENING_SLOTS: HappeningSlot[] = [
  // Slot 0 — left card (Comfort Food position)
  {
    photoLeft: "left-[calc(8.33%+17px)]",
    photoTop: "top-[1694px]",
    photoWidth: "w-[332px]",
    photoHeight: "h-[451px]",
    bodyLeft: "left-[calc(8.33%+54px)]",
    bodyTop: "top-[2094px]",
    bodyWidth: "w-[350px]",
    titleLeft: "left-[calc(8.33%+78px)]",
    titleTop: "top-[2120px]",
    titleWidth: "w-[311px]",
    descLeft: "left-[calc(8.33%+78px)]",
    descTop: "top-[2156px]",
    descWidth: "w-[311px]",
    linkLeft: "left-[137px]",
    linkTop: "top-[1694px]",
    linkWidth: "w-[332px]",
    linkHeight: "h-[524px]",
  },
  // Slot 1 — middle card (Celtics position) — uses inset-based geometry
  {
    photoLeft: "",
    photoTop: "",
    photoWidth: "",
    photoHeight: "",
    photoExtraClass: "inset-[33.08%_38.75%_58.13%_38.13%]",
    bodyLeft: "left-[calc(33.33%+94px)]",
    bodyTop: "top-[2094px]",
    bodyWidth: "w-[350px]",
    titleLeft: "left-[calc(41.67%-1px)]",
    titleTop: "top-[2120px]",
    titleWidth: "w-[325px]",
    descLeft: "left-[calc(41.67%-1px)]",
    descTop: "top-[2156px]",
    descWidth: "w-[325px]",
    descExtraClass: "whitespace-pre-wrap",
    linkLeft: "left-[549px]",
    linkTop: "top-[1694px]",
    linkWidth: "w-[350px]",
    linkHeight: "h-[524px]",
  },
  // Slot 2 — right card (Inflation position) — uses inset-based geometry
  {
    photoLeft: "",
    photoTop: "",
    photoWidth: "",
    photoHeight: "",
    photoExtraClass: "inset-[33.08%_10.83%_58.13%_65.9%]",
    bodyLeft: "left-[calc(66.67%+14px)]",
    bodyTop: "top-[2094px]",
    bodyWidth: "w-[347px]",
    titleLeft: "left-[calc(66.67%+39px)]",
    titleTop: "top-[2120px]",
    titleWidth: "w-[322px]",
    descLeft: "left-[calc(66.67%+39px)]",
    descTop: "top-[2156px]",
    descWidth: "w-[322px]",
    descExtraClass: "whitespace-pre-wrap",
    linkLeft: "left-[949px]",
    linkTop: "top-[1694px]",
    linkWidth: "w-[372px]",
    linkHeight: "h-[524px]",
  },
];

export default function DesktopHomepage() {
  const [happeningOffset, setHappeningOffset] = useState(0);
  const visibleCards = [0, 1, 2].map(
    (i) => HAPPENING_CARDS[(happeningOffset + i) % HAPPENING_CARDS.length]
  );
  const goPrev = () =>
    setHappeningOffset(
      (o) => (o - 1 + HAPPENING_CARDS.length) % HAPPENING_CARDS.length
    );
  const goNext = () =>
    setHappeningOffset((o) => (o + 1) % HAPPENING_CARDS.length);

  return (
    <div className="bg-white relative w-[1440px] h-[5118px] mx-auto overflow-hidden" data-node-id="545:11007" data-name="DESKTOP - HOMEPAGE">
      <div className="absolute bg-[rgba(0,0,0,0.57)] h-[453px] left-[calc(50%+106px)] top-[200px] w-[92px]" data-node-id="545:11008" />
      <div className="absolute bg-black h-[5118px] left-0 top-0 w-[1440px]" data-node-id="545:11009" />
      <p className="absolute z-10 font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%-2px)] not-italic text-[#bcfa07] text-[20px] top-[279px] w-[912px]" data-node-id="545:11012">
        #1 in News Gamification
      </p>
      {/* Hero photo marquee — slowly scrolls left on a 40s loop, fading into the gradient */}
      <div className="absolute h-[387px] left-[565px] top-[249px] w-[875px] overflow-hidden pointer-events-none">
        <div className="hero-marquee flex h-full w-max items-center gap-4">
          {[
            { src: imgSeanPollockPhYq704FfdAUnsplash1, imgClass: "h-full max-w-none w-[579px] object-cover" },
            { src: imgImage6, imgClass: "h-full max-w-none w-[386px] object-cover" },
            { src: imgMariaLinKimPdtSqvEwvqUnsplash1, imgClass: "h-full max-w-none w-[306px] object-cover" },
            { src: imgJoelFilipeRfdp780V5AUnsplash1, imgClass: "h-full max-w-none w-[306px] object-cover" },
            // Duplicates for seamless loop
            { src: imgSeanPollockPhYq704FfdAUnsplash1, imgClass: "h-full max-w-none w-[579px] object-cover" },
            { src: imgImage6, imgClass: "h-full max-w-none w-[386px] object-cover" },
            { src: imgMariaLinKimPdtSqvEwvqUnsplash1, imgClass: "h-full max-w-none w-[306px] object-cover" },
            { src: imgJoelFilipeRfdp780V5AUnsplash1, imgClass: "h-full max-w-none w-[306px] object-cover" },
          ].map((p, i) => (
            <div key={i} className="h-[386px] w-[306px] flex-none rounded-[10px] overflow-hidden">
              <img alt="" className={p.imgClass} src={p.src} />
            </div>
          ))}
        </div>
      </div>
      {/* Hero gradient — left fade overlay for the marquee */}
      <div className="absolute h-[444px] left-[calc(33.33%+85px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[228px] w-[594px] pointer-events-none z-[5]" data-node-id="545:11016" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 34.135%, rgb(0, 0, 0) 57.212%, rgba(0, 0, 0, 0.46) 86.058%, rgba(0, 0, 0, 0) 100%)" }} />
      <p className="absolute z-10 font-['Think',sans-serif] h-[140px] leading-[normal] left-[calc(8.33%-2px)] not-italic text-[200px] text-white top-[310px] w-[1174px]" data-node-id="545:11017">
        INSIGHTR
      </p>
      <p className="absolute z-10 font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%-2px)] not-italic text-[32px] text-white top-[468px] w-[912px]" data-node-id="545:11018">{`The Real Edge in World Events `}</p>
      <p className="absolute z-10 font-['Righteous',sans-serif] h-[61px] leading-[30px] left-[calc(8.33%-2px)] not-italic text-[18px] text-[rgba(255,255,255,0.7)] top-[520px] w-[698px]" data-node-id="545:11019">{`Enter the Arena and turn headlines into high scores. Place bets without real risk, transform your expertise into tokens, and win a shot in the global championship. `}</p>
      <p className="absolute font-['Righteous',sans-serif] h-[95px] leading-[95px] left-[calc(8.33%-2px)] not-italic text-[#a3c0ff] text-[50px] top-[1272px] w-[232px]" data-node-id="545:11020">
        100,000+
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[27px] leading-[20px] left-[calc(8.33%-2px)] text-[20px] text-[rgba(255,255,255,0.7)] top-[1353px] w-[232px]" data-node-id="545:11021" style={{ fontVariationSettings: "'wdth' 100" }}>
        live prediction markets
        <br aria-hidden="true" />
        <br aria-hidden="true" />
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[27px] leading-[20px] left-[calc(25%+51px)] text-[20px] text-[rgba(255,255,255,0.7)] top-[1353px] w-[232px]" data-node-id="545:11022" style={{ fontVariationSettings: "'wdth' 100" }}>{`active users `}</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[27px] leading-[20px] left-[calc(50%-8px)] text-[20px] text-[rgba(255,255,255,0.7)] top-[1353px] w-[427px]" data-node-id="545:11023" style={{ fontVariationSettings: "'wdth' 100" }}>{`that reflect skin in the game `}</p>
      <p className="absolute font-['Righteous',sans-serif] h-[95px] leading-[95px] left-[calc(25%+51px)] not-italic text-[#a3c0ff] text-[50px] top-[1272px] w-[232px]" data-node-id="545:11024">
        500,000+
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[95px] leading-[95px] left-[calc(50%-8px)] not-italic text-[#a3c0ff] text-[50px] top-[1272px] w-[508px]" data-node-id="545:11025">
        Real time forecasts
      </p>
      <div className="absolute h-[520px] left-[calc(75%+35px)] top-[1380px] w-[444px]" data-node-id="545:11026" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
      </div>

      {/* ============================================================
           Happening Now carousel — 6 cards, 3 visible at a time.
           ============================================================ */}
      {HAPPENING_SLOTS.map((slot, i) => {
        const card = visibleCards[i];
        const photoBaseClass = slot.photoExtraClass
          ? `absolute ${slot.photoExtraClass} rounded-[10px]`
          : `absolute ${slot.photoLeft} ${slot.photoTop} ${slot.photoWidth} ${slot.photoHeight} rounded-[10px]`;
        return (
          <span key={`happening-slot-${i}`}>
            <div className={photoBaseClass}>
              <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[10px]">
                <img alt="" className={card.imgClass} src={card.photoSrc} />
              </div>
            </div>
            <div
              className={`absolute bg-[#d9d9d9] h-[124px] ${slot.bodyLeft} rounded-[10px] ${slot.bodyTop} ${slot.bodyWidth}`}
            />
            <p
              className={`absolute font-['Righteous',sans-serif] h-[98px] leading-[normal] ${slot.titleLeft} not-italic text-[24px] text-black ${slot.titleTop} ${slot.titleWidth}`}
            >
              {card.title}
            </p>
            <p
              className={`absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[18px] ${slot.descLeft} text-[14px] text-black ${slot.descTop} ${slot.descWidth} ${slot.descExtraClass ?? ''}`}
              style={{ fontVariationSettings: "'wdth' 100" }}
            >
              {card.desc}
            </p>
          </span>
        );
      })}

      {/* Click overlays for the 3 visible Happening Now slots — covers photo + body area */}
      <Link to={visibleCards[0].to} aria-label={visibleCards[0].title} className="absolute z-30 left-[137px] top-[1694px] w-[387px] h-[524px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={visibleCards[1].to} aria-label={visibleCards[1].title} className="absolute z-30 left-[549px] top-[1694px] w-[375px] h-[524px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to={visibleCards[2].to} aria-label={visibleCards[2].title} className="absolute z-30 left-[949px] top-[1694px] w-[372px] h-[524px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />

      <button
        type="button"
        onClick={goPrev}
        aria-label="Previous"
        className="absolute flex items-center justify-center left-[33px] size-[84px] top-[1915px] cursor-pointer hover:opacity-80 transition"
        style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
      >
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]" data-node-id="545:11033" data-name="Navigation icon">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I545:11033;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Next"
        className="absolute flex items-center justify-center left-[calc(91.67%+4px)] size-[84px] top-[1915px] cursor-pointer hover:opacity-80 transition"
        style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}
      >
        <div className="flex-none rotate-90">
          <div className="overflow-clip relative size-[84px]" data-node-id="545:11034" data-name="keyboard_arrow_up">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]" data-node-id="I545:11034;57995:3429" data-name="icon">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </button>

      {/* Decorative robot photo — rendered before the More Headlines mini-cards so it sits BEHIND them */}
      <div className="absolute h-[451px] left-[137px] rounded-[10px] top-[2426px] w-[335px] overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[100%] left-[-52.89%] max-w-none top-0 w-[203.16%]" src={imgLayer3} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[124px] left-[calc(33.33%+97px)] rounded-[10px] top-[2674px] w-[350px]" data-node-id="545:11036" data-name="Question background" />
      <div className="absolute h-[72px] left-[66.67%] top-[2615px] w-[166px]" data-node-id="545:11037" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} />
      </div>
      <div className="absolute h-[72px] left-[calc(50%+70px)] top-[3681px] w-[166px]" data-node-id="545:11056" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[124px] left-[calc(33.33%+97px)] rounded-[10px] top-[2830px] w-[350px]" data-node-id="545:11075" />
      <p className="absolute font-['Righteous',sans-serif] h-[363px] leading-[normal] left-[117px] not-italic text-[100px] text-white top-[1552px] w-[927px]" data-node-id="545:11078">
        Happening now
      </p>
      <div className="absolute bg-[#d9d9d9] h-[124px] left-[calc(66.67%+17px)] rounded-[10px] top-[2674px] w-[347px]" data-node-id="545:11080" />
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[18px] left-[calc(66.67%+53px)] text-[14px] text-black top-[2736px] w-[311px] whitespace-pre-wrap" data-node-id="545:11093" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Can the international competition boost `}
        <br aria-hidden="true" />
        interest in MLS play?
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[18px] left-[calc(41.67%+16px)] text-[14px] text-black top-[2736px] w-[311px] whitespace-pre-wrap" data-node-id="545:11092" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`The Curiosity adds to list of organic `}
        <br aria-hidden="true" />
        compounds discovered on the Red Planet.
      </p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[18px] left-[calc(8.33%+79px)] text-[14px] text-black top-[2893px] w-[311px]" data-node-id="545:11091" style={{ fontVariationSettings: "'wdth' 100" }}>{`The new technology may finally produce a breakthrough. `}</p>
      <div className="absolute bg-[#d9d9d9] h-[124px] left-[calc(8.33%+55px)] rounded-[10px] top-[2831px] w-[350px]" data-node-id="545:11090" />
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[62px] leading-[18px] left-[calc(41.67%+16px)] text-[14px] text-black top-[2893px] w-[311px] whitespace-pre-wrap" data-node-id="545:11094" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Tech company expected to begin trading `}
        <br aria-hidden="true" />
        {`in June 2026. `}
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[98px] leading-[normal] left-[calc(8.33%+79px)] not-italic text-[24px] text-black top-[2857px] w-[311px]" data-node-id="545:11095">
        How AI Can Beat Cancer
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[98px] leading-[normal] left-[calc(41.67%+16px)] not-italic text-[24px] text-black top-[2700px] w-[311px]" data-node-id="545:11096">
        NASA Rover on Mars
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[98px] leading-[normal] left-[calc(66.67%+53px)] not-italic text-[24px] text-black top-[2700px] w-[311px]" data-node-id="545:11097">
        World Cup Bump
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[98px] leading-[normal] left-[calc(41.67%+16px)] not-italic text-[24px] text-black top-[2857px] w-[311px]" data-node-id="545:11098">
        SpaceX IPO
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[363px] leading-[95px] left-[calc(33.33%+94px)] not-italic text-[#a3c0ff] text-[100px] top-[2426px] w-[927px] whitespace-pre-wrap" data-node-id="545:11099">
        {`More headlines `}
        <br aria-hidden="true" />
        for you
      </p>
      <Link to="/snapshot" className="absolute bg-[#a3c0ff] content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(66.67%+17px)] overflow-clip px-4 rounded-[6px] top-[2830px] w-[257px] cursor-pointer hover:brightness-110 transition z-30">
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">See More</p>
        </div>
      </Link>
      <div className="absolute bg-[#d9d9d9] h-[525px] left-[calc(8.33%+15.89px)] rounded-[10px] top-[3178.07px] w-[372px]" data-node-id="545:11101" data-name="Sub question container" />
      <div className="absolute bg-[#d9d9d9] h-[250px] left-[calc(33.33%+94px)] rounded-[10px] top-[3453px] w-[353px]" data-node-id="545:11102" />
      <div className="absolute flex h-[200.548px] items-center justify-center left-[calc(8.33%+95.33px)] top-[3060px] w-[230.078px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="-scale-y-100 flex-none rotate-[-67.04deg]">
          <div className="h-[192.074px] relative w-[136.437px]" data-node-id="545:11103" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} />
          </div>
        </div>
      </div>
      <div className="absolute contents inset-[61.71%_71.7%_29.61%_-1.88%]" data-node-id="545:11107" style={{ containerType: "size" }}>
        <div className="absolute flex inset-[61.71%_71.7%_29.61%_-1.88%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(19.7995cqw,81.3264cqh)] rotate-[-13.39deg] w-[hypot(80.2005cqw,-18.6736cqh)]">
            <div className="relative size-full" data-node-id="545:11108" data-name="Layer 2">
              <div className="absolute inset-[0_-1.59%_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLayer5} />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute flex inset-[62.29%_77.9%_29.84%_-0.99%] items-center justify-center" style={{ containerType: "size" }}>
          <div className="flex-none h-[hypot(24.5464cqw,85.161cqh)] rotate-[-13.39deg] w-[hypot(75.4536cqw,-14.839cqh)]">
            <div className="relative size-full" data-node-id="545:11111" data-name="Layer 1">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer6} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[75.07%_-8.26%_22.03%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="545:11131" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[72.29%_-8.26%_24.93%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="545:11132" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} />
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[67.82%_-8.26%_27.71%_77.43%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqh] rotate-180 w-[100cqw]">
          <div className="relative size-full" data-node-id="545:11133" data-name="Vector">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} />
          </div>
        </div>
      </div>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%+201.89px)] not-italic text-[50px] text-black text-center top-[3578.07px] w-[372px]" data-node-id="545:11134">
        The Arena
      </p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[62px] justify-center leading-[0] left-[calc(33.33%+270.5px)] not-italic text-[32px] text-black text-center top-[3578px] w-[353px]" data-node-id="545:11135">
        <p className="leading-[normal]">Leadership</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[250px] left-[calc(66.67%+17px)] rounded-[10px] top-[3453px] w-[345px]" data-node-id="545:11136" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[62px] justify-center leading-[0] left-[calc(66.67%+189.5px)] not-italic text-[32px] text-black text-center top-[3578px] w-[345px]" data-node-id="545:11137">
        <p className="leading-[normal]">All articles</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[250px] left-[calc(66.67%+17px)] rounded-[10px] top-[3178px] w-[345px]" data-node-id="545:11138" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[62px] justify-center leading-[0] left-[calc(66.67%+189.5px)] not-italic text-[32px] text-black text-center top-[3312px] w-[345px]" data-node-id="545:11139">
        <p className="leading-[normal]">Token prizes</p>
      </div>
      <div className="absolute bg-[#d9d9d9] h-[250px] left-[calc(33.33%+94px)] rounded-[10px] top-[3178px] w-[353px]" data-node-id="545:11140" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[62px] justify-center leading-[0] left-[calc(33.33%+270.5px)] not-italic text-[32px] text-black text-center top-[3312px] w-[353px]" data-node-id="545:11141">
        <p className="leading-[normal]">Bet trends</p>
      </div>
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(33.33%+245.5px)] not-italic text-[64px] text-center text-white top-[3993px] w-[453px]" data-node-id="545:11142">
        WHY INSIGHTR?
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] leading-[30px] left-[calc(8.33%+138px)] not-italic text-[#bcfa07] text-[32px] text-center top-[4104px] w-[206px]" data-node-id="545:11143">
        Play the News
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[62px] leading-[30px] left-[calc(25%+207.5px)] not-italic text-[#bcfa07] text-[32px] text-center top-[4105px] w-[267px]" data-node-id="545:11144">
        Socially Sourced Insight
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[61px] leading-[30px] left-[calc(50%+152px)] not-italic text-[#bcfa07] text-[32px] text-center top-[4106px] w-[266px] whitespace-pre-wrap" data-node-id="545:11145">
        {`Curated for `}
        <br aria-hidden="true" />
        Your Vibe
      </p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[62px] leading-[30px] left-[calc(66.67%+208px)] not-italic text-[#bcfa07] text-[32px] text-center top-[4105px] w-[266px] whitespace-pre-wrap" data-node-id="545:11146">
        {`Zero Fluff, `}
        <br aria-hidden="true" />
        Max Speed
      </p>
      <p className="-translate-x-1/2 absolute font-['Open_Sans',sans-serif] font-normal h-[463px] leading-[30px] left-[calc(8.33%+143.5px)] text-[20px] text-center text-white top-[4190px] w-[249px] whitespace-pre-wrap" data-node-id="545:11147" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Stop scrolling, start scoring. InsightR turns every headline into a challenge. Earn XP for staying informed, build daily streaks, and climb the global leaderboards. It’s the first time being "well-read" actually `}
        <br aria-hidden="true" />
        pays off.
      </p>
      <p className="-translate-x-1/2 absolute font-['Open_Sans',sans-serif] font-normal h-[301px] leading-[30px] left-[calc(25%+211.5px)] text-[20px] text-center text-white top-[4190px] w-[247px]" data-node-id="545:11148" style={{ fontVariationSettings: "'wdth' 100" }}>{`News isn't a one-way street. Engage in live polls, drop your hot takes in the comments, and see what the community actually thinks. From Reddit-style deep dives to TikTok-speed reactions, we are the pulse of the conversation.`}</p>
      <p className="-translate-x-1/2 absolute font-['Open_Sans',sans-serif] font-normal h-[410px] leading-[30px] left-[calc(50%+152.5px)] text-[20px] text-center text-white top-[4196px] w-[249px] whitespace-pre-wrap" data-node-id="545:11149" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`No more irrelevant `}
        <br aria-hidden="true" />
        {`clutter. Our AI learns your interests—whether it’s crypto, pop culture, or global finance—to serve you a "For You" feed that actually matters. Get the context you need without the noise you don't.`}
      </p>
      <p className="-translate-x-1/2 absolute font-['Open_Sans',sans-serif] font-normal h-[428px] leading-[30px] left-[calc(66.67%+210.5px)] text-[20px] text-center text-white top-[4191px] w-[249px] whitespace-pre-wrap" data-node-id="545:11150" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Designed for the fast-paced life. Our minimal "News Cards" give you the headline, the visual, and the core context in seconds. If you want the deep dive, it’s one `}
        <br aria-hidden="true" />
        tap away—instant understanding, total control
      </p>
      <div className="absolute h-[103px] left-[calc(25%+67px)] top-[2369px] w-[111px]" data-node-id="545:11151" data-name="Layer_1">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer7} />
      </div>
      <div className="absolute flex h-[103px] items-center justify-center left-[calc(83.33%+59px)] top-[3122px] w-[111px]">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="h-[103px] relative w-[111px]" data-node-id="545:11154" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer8} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[286.7px] items-center justify-center left-[calc(16.67%+17.9px)] top-[3231.98px] w-[253.297px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-[13.66deg]">
          <div className="h-[246.24px] overflow-clip relative w-[200.827px]" data-node-id="545:11157" data-name="Frame">
            <div className="absolute inset-[5.65%_2.11%_4.74%_2.11%]" data-node-id="545:11158" data-name="Layer 1">
              <div className="absolute inset-[-2.16%_-2.48%]">
                <img alt="" className="block max-w-none size-full" src={imgLayer9} />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Shared footer */}
      <div className="absolute top-[4650px] left-0">
        <Footer />
      </div>
      <div className="absolute flex h-[389.323px] items-center justify-center left-[115px] top-[761px] w-[456px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
        <div className="flex-none rotate-90">
          <div className="h-[456px] relative w-[389.323px]" data-node-id="545:11222" data-name="Layer_1">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer12} />
          </div>
        </div>
      </div>
      <p className="absolute font-['Righteous',sans-serif] h-[219px] leading-[95px] left-[calc(25%+5px)] not-italic text-[#b967fe] text-[100px] top-[800px] w-[970px]" data-node-id="545:11225">
        redefine and reimagine
      </p>
      <div className="absolute font-['Righteous',sans-serif] h-[38px] leading-[0] left-[calc(25%+5px)] not-italic text-[32px] text-white top-[1032px] w-[930px] whitespace-pre-wrap" data-node-id="545:11226">
        <p className="leading-[30px] mb-0">
          {`what today’s stories mean to you.  `}
          <br aria-hidden="true" />
          <br aria-hidden="true" />
        </p>
        <p className="leading-[30px]">​</p>
      </div>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[120px] leading-[30px] left-[calc(25%+5px)] text-[20px] text-[rgba(255,255,255,0.7)] top-[1084px] w-[947px] whitespace-pre-wrap" data-node-id="545:11227" style={{ fontVariationSettings: "'wdth' 100" }}>{`With InsightR, stay ahead of the curve when it comes to breaking news. Turn real time information into actionable insights that you can leverage in the Arena, our hub for vetted prediction markets, aggregate token scores, and global leaderboards. Discover, learn, and refine your intuition to stand out from the crowd. We curate the news and the data, you call the shots.   `}</p>
      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* ============================================================
           Click overlays — invisible Links sitting on top of each card
           area so the existing markup stays untouched.
           ============================================================ */}

      {/* More Headlines mini-cards (4 cards in 2x2 grid) */}
      <Link to="/articles/nasa-rover"    aria-label="NASA Rover on Mars"      className="absolute z-20 left-[577px] top-[2674px] w-[350px] h-[124px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/world-cup-bump" aria-label="World Cup Bump"         className="absolute z-20 left-[977px] top-[2674px] w-[347px] h-[124px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/ai-cancer"     aria-label="How AI Can Beat Cancer"  className="absolute z-20 left-[175px] top-[2831px] w-[350px] h-[124px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles/spacex-ipo"    aria-label="SpaceX IPO"              className="absolute z-20 left-[577px] top-[2830px] w-[350px] h-[124px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />

      {/* The Arena 4-cell grid */}
      <Link to="/arena"               aria-label="The Arena"  className="absolute z-20 left-[135.89px] top-[3178.07px] w-[372px] h-[525px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/arena/trending"      aria-label="Bet trends" className="absolute z-20 left-[574px] top-[3178px] w-[353px] h-[250px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/arena/tokens"        aria-label="Token prizes" className="absolute z-20 left-[977px] top-[3178px] w-[345px] h-[250px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/arena/leaderboard"   aria-label="Leadership" className="absolute z-20 left-[574px] top-[3453px] w-[353px] h-[250px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />
      <Link to="/articles"            aria-label="All articles" className="absolute z-20 left-[977px] top-[3453px] w-[345px] h-[250px] hover:ring-2 hover:ring-[#bcfa07] hover:rounded-[10px] transition" />

    </div>
  );
}
