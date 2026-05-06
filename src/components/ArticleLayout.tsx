// Shared article-page layout used by every individual article.
// Per-article data is passed via props; the chrome (header, breadcrumb,
// category tab row, hero photo placement, betting card grid, sub-question
// card, side decorations, footer) is identical across articles.
//
// Body content is passed as `children` so each article can render its own
// paragraphs + H2 headings with full control over text & links.

import { useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import BetModal from './BetModal';

const imgIcon = "/assets/e273ba0783d9e5e47be192b029d2266df0db2624.svg";
const imgQrPattern = "/assets/f95129b97c3c3fd3bcfd42f6fcf8800a0bf4afcc.svg";
const imgGreenStar = "/assets/a31174e8265382810a2f726bf60868323137eee6.svg";
const imgPurpleStar = "/assets/25ef4ea08802b03c3f610757e35961681e0437c3.svg";

export type ArticleCategory =
  | 'World' | 'Politics' | 'Economy' | 'Finance'
  | 'Tech' | 'Culture' | 'Sports' | 'Weather';

const CATEGORIES: Array<{ label: ArticleCategory; left: string; width: string }> = [
  { label: 'World',    left: 'calc(25% + 64px)',     width: '98px' },
  { label: 'Politics', left: 'calc(33.33% + 54.5px)', width: '99px' },
  { label: 'Economy',  left: 'calc(41.67% + 59px)',  width: '98px' },
  { label: 'Finance',  left: 'calc(50% + 66px)',     width: '98px' },
  { label: 'Tech',     left: 'calc(58.33% + 54px)',  width: '98px' },
  { label: 'Culture',  left: 'calc(66.67% + 40px)',  width: '98px' },
  { label: 'Sports',   left: 'calc(66.67% + 153px)', width: '98px' },
  { label: 'Weather',  left: 'calc(83.33% + 33px)',  width: '98px' },
];

export interface BettingOption {
  text: ReactNode;
  /** Plain-text fallback for the modal when `text` is JSX (e.g. multi-line). */
  textPlain?: string;
  odds: string;        // e.g. "+1345" or "-285"
  textTop: number;     // y-position of option text
  oddsTop: number;     // y-position of odds badge
}

export interface ArticleLayoutProps {
  /** Active category tab (lights green) */
  activeCategory: ArticleCategory;
  /** Hero photo URL (already prefixed with /assets/) */
  heroImage: string;
  /** Optional left/width tweaks for hero (some articles vary slightly) */
  heroLeft?: string;
  heroWidth?: string;
  /** Big Think Bold title — same string used for both shadow + main */
  title: string;
  /** Optional title width override (Mars/inflation use narrower width) */
  titleWidth?: string;
  /** Subtitle area (Righteous 32 white) */
  subtitle: ReactNode;
  /** Author name (Open Sans 20 white) */
  author: string;
  /** Sub-betting card question (top of the gray card) */
  bettingQuestion: string;
  /** Question position adjustment (some articles use 1279, others 1288/1291) */
  bettingQuestionTop?: number;
  /** 2-4 betting options + odds */
  bettingOptions: BettingOption[];
  /** "See More" sub-question card text (1-2 lines) */
  subQuestion: ReactNode;
  /** Article body — paragraphs and H2 headings inside <ArticleBody> */
  children: ReactNode;
  /** Where to place the footer */
  footerTop: number;
  /** Total page height — defaults to 5118 */
  pageHeight?: number;
  /** Vertical purple deco layer hashes — vary per article */
  topDecoSrc?: string;
  bottomDecoSrc?: string;
  /** Three small starburst SVGs left of the betting card */
  smallVectors?: [string, string, string];
}

/**
 * Wrap your article body in this for consistent typography.
 * It defaults to: 825px wide, top:1920, white-translucent text 20px on 30 leading.
 */
export function ArticleBody({ height, children }: { height: number; children: ReactNode }) {
  return (
    <div
      className="absolute font-['Open_Sans',sans-serif] font-normal leading-[0] left-[117px] text-[0px] text-[rgba(255,255,255,0.7)] top-[1920px] w-[825px] whitespace-pre-wrap"
      style={{ height: `${height}px` }}
    >
      {children}
    </div>
  );
}

/** H2 heading inside an article body (#a3c0ff blue, 50px Righteous) */
export function ArticleHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <p className="font-['Righteous',sans-serif] leading-[30px] mb-0 not-italic text-[#a3c0ff] text-[50px]">{children}</p>
      <p className="leading-[30px] mb-0 text-[50px]">​</p>
    </>
  );
}

/** Standard body paragraph (20px / 30 leading) */
export function P({ children }: { children: ReactNode }) {
  return <p className="leading-[30px] mb-0 text-[20px]">{children}</p>;
}

/** Empty spacer paragraph (a Figma-style "blank line") */
export function Spacer() {
  return <p className="leading-[30px] mb-0 text-[20px]">​</p>;
}

export default function ArticleLayout(props: ArticleLayoutProps) {
  const {
    activeCategory,
    heroImage,
    heroLeft = '115px',
    heroWidth = '836px',
    title,
    titleWidth = '1174px',
    subtitle,
    author,
    bettingQuestion,
    bettingQuestionTop = 1291,
    bettingOptions,
    subQuestion,
    children,
    footerTop,
    pageHeight = 5118,
    topDecoSrc,
    bottomDecoSrc,
    smallVectors,
  } = props;

  // Token-portioning modal state — clicking any odds badge opens the modal.
  const [activeBet, setActiveBet] = useState<{ optionLabel: string; odds: string } | null>(null);

  return (
    <div
      className="bg-white relative w-[1440px] mx-auto overflow-hidden"
      style={{ height: `${pageHeight}px` }}
    >
      <div
        className="absolute bg-black left-0 top-0 w-[1440px]"
        style={{ height: `${pageHeight}px` }}
      />

      {/* "All Articles" breadcrumb + back arrow */}
      <Link to="/articles" className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%-2px)] not-italic text-[#bcfa07] text-[20px] top-[227px] w-[138px] hover:underline">
        All Articles
      </Link>
      <Link to="/articles" className="absolute flex items-center justify-center left-[35px] size-[84px] top-[199px]">
        <div className="-rotate-90 flex-none">
          <div className="overflow-clip relative size-[84px]">
            <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]">
              <img alt="Back" className="absolute block inset-0 max-w-none size-full" src={imgIcon} />
            </div>
          </div>
        </div>
      </Link>

      {/* Category tabs */}
      {CATEGORIES.map((tab) => (
        <Link
          key={tab.label}
          to="/articles"
          className={`-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] not-italic text-[20px] text-center top-[228px] ${
            activeCategory === tab.label
              ? 'text-[#bcfa07]'
              : 'text-[#a3c0ff] hover:text-white cursor-pointer'
          }`}
          style={{ left: tab.left, width: tab.width }}
        >
          {tab.label}
        </Link>
      ))}

      {/* Hero photo */}
      <div
        className="absolute h-[469px] rounded-[10px] top-[288px] overflow-hidden"
        style={{ left: heroLeft, width: heroWidth }}
      >
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[10px] size-full" src={heroImage} />
      </div>

      {/* Title — black shadow layer (rendered first → behind) — z-20 to sit above hero photo */}
      <p
        className="absolute z-20 font-['Think',sans-serif] h-[373px] leading-[150px] left-[calc(8.33%+1px)] not-italic text-[200px] text-black top-[709px]"
        style={{ width: titleWidth }}
      >
        {title}
      </p>
      {/* Title — white main layer on top, offset 12px down + 11px right from shadow */}
      <p
        className="absolute z-20 font-['Think',sans-serif] h-[373px] leading-[150px] left-[calc(8.33%+12px)] not-italic text-[200px] text-white top-[697px]"
        style={{ width: titleWidth }}
      >
        {title}
      </p>

      {/* Subtitle */}
      <p className="absolute z-20 font-['Righteous',sans-serif] h-[131px] leading-[normal] left-[calc(8.33%+2px)] not-italic text-[32px] text-white top-[1015px] w-[912px] whitespace-pre-wrap">
        {subtitle}
      </p>

      {/* Author */}
      <p className="absolute z-20 font-['Open_Sans',sans-serif] font-normal h-[46px] leading-[30px] left-[calc(8.33%+2px)] text-[20px] text-white top-[1111px] w-[327px]">
        {author}
      </p>

      {/* QR-pattern decoration above betting card — z-10 so it overlaps */}
      <div className="absolute z-10 h-[119px] left-[calc(33.33%+41px)] top-[1153px] w-[274px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgQrPattern} />
      </div>

      {/* Betting card background */}
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[117px] rounded-[10px] top-[1255px] w-[808px]" />

      {/* Sub-question card background */}
      <div className="absolute bg-[#d9d9d9] h-[135px] left-[117px] rounded-[10px] top-[1679px] w-[356px]" />

      {/* Betting question */}
      <p
        className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[calc(8.33%+34px)] not-italic text-[32px] text-black w-[771px]"
        style={{ top: `${bettingQuestionTop}px` }}
      >
        {bettingQuestion}
      </p>

      {/* Betting options + odds badges (odds open the BetModal) */}
      {bettingOptions.map((opt, i) => {
        const optionText = typeof opt.text === 'string'
          ? opt.text
          : (opt.textPlain ?? `Option ${i + 1}`);
        return (
          <span key={i}>
            <p
              className="absolute font-['Open_Sans',sans-serif] font-normal leading-[30px] left-[calc(8.33%+34px)] text-[20px] text-black w-[508px] whitespace-pre-wrap"
              style={{ top: `${opt.textTop}px` }}
            >
              {opt.text}
            </p>
            <button
              type="button"
              onClick={() => setActiveBet({ optionLabel: optionText, odds: opt.odds })}
              className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[calc(41.67%+45px)] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition"
              style={{ top: `${opt.oddsTop}px` }}
            >
              <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{opt.odds}</p>
            </button>
          </span>
        );
      })}

      {/* Small star decos near the betting card — z-10 so they overlap the cards */}
      <div className="absolute z-10 h-[103px] left-[calc(58.33%+38px)] top-[1198px] w-[111px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGreenStar} />
      </div>
      <div className="absolute z-10 h-[103px] left-[70px] top-[1759px] w-[111px] pointer-events-none">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgPurpleStar} />
      </div>

      {/* See More button → opens the Arena Live page */}
      <Link to="/arena" className="absolute bg-[#a3c0ff] flex h-[32px] items-center justify-center left-[calc(33.33%+20px)] overflow-clip px-4 rounded-[6px] top-[1679px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">See More</p>
      </Link>

      {/* Sub-question text */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[135px] justify-center leading-[0] left-[295px] not-italic text-[24px] text-black text-center top-[1746.5px] w-[356px]">
        {subQuestion}
      </div>

      {/* Article body */}
      {children}

      {/* Vertical purple decorations on the right */}
      {topDecoSrc && (
        <div className="absolute h-[787px] left-[calc(66.67%+47px)] top-[1814px] w-[671.977px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={topDecoSrc} />
        </div>
      )}
      {bottomDecoSrc && (
        <div className="absolute flex h-[787px] items-center justify-center left-[calc(66.67%+47px)] top-[3713px] w-[671.977px]">
          <div className="flex-none rotate-180">
            <div className="h-[787px] relative w-[671.977px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={bottomDecoSrc} />
            </div>
          </div>
        </div>
      )}

      {/* Three small starburst Vectors left of the page */}
      {smallVectors && (
        <>
          <div className="absolute flex inset-[32.16%_100.87%_67.18%_-5.13%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={smallVectors[0]} /></div></div>
          </div>
          <div className="absolute flex inset-[32.14%_106.44%_67.2%_-10.69%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={smallVectors[1]} /></div></div>
          </div>
          <div className="absolute flex inset-[31.9%_103.61%_67.44%_-7.87%] items-center justify-center" style={{ containerType: "size" }}>
            <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={smallVectors[2]} /></div></div>
          </div>
        </>
      )}

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute left-0" style={{ top: `${footerTop}px` }}>
        <Footer />
      </div>

      {/* Bet placement modal */}
      <BetModal
        open={activeBet !== null}
        onClose={() => setActiveBet(null)}
        question={bettingQuestion}
        optionLabel={activeBet?.optionLabel ?? ''}
        odds={activeBet?.odds ?? ''}
      />
    </div>
  );
}
