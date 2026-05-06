// Figma node 2146:504 — DESKTOP - INFLATION ARTICLE
// Header + Footer extracted into shared components.
// This is an individual article page — different layout from list pages.

import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BetModal from '../components/BetModal';

const imgErikMcleanPhoto = "/assets/69452e4d767ffd8133d1c980fae5cda9c55fdcdc.png";
const imgIcon = "/assets/e273ba0783d9e5e47be192b029d2266df0db2624.svg";
const imgLayer1 = "/assets/f95129b97c3c3fd3bcfd42f6fcf8800a0bf4afcc.svg";
const imgVector  = "/assets/47e8187d0ed0b66b071e56edc582873398b8f39d.svg";
const imgVector1 = "/assets/16eb5be6c44b4af9d4340a4753e7d487f3680750.svg";
const imgVector2 = "/assets/bbb4f4dc1974aee1faee19ede8da9bd12e177926.svg";
const imgLayer2 = "/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg";
const imgLayer3 = "/assets/73ee97c5efeaf48174f00caa2d2e290b375da616.svg";
const imgLayer4 = "/assets/a31174e8265382810a2f726bf60868323137eee6.svg";
const imgLayer5 = "/assets/25ef4ea08802b03c3f610757e35961681e0437c3.svg";

const CATEGORY_TABS: Array<{ label: string; left: string; width: string; active?: boolean }> = [
  { label: 'World',    left: 'calc(25% + 64px)',   width: '98px' },
  { label: 'Politics', left: 'calc(33.33% + 54.5px)', width: '99px' },
  { label: 'Economy',  left: 'calc(41.67% + 59px)', width: '98px', active: true },
  { label: 'Finance',  left: 'calc(50% + 66px)',   width: '98px' },
  { label: 'Tech',     left: 'calc(58.33% + 54px)', width: '98px' },
  { label: 'Culture',  left: 'calc(66.67% + 40px)', width: '98px' },
  { label: 'Sports',   left: 'calc(66.67% + 153px)', width: '98px' },
  { label: 'Weather',  left: 'calc(83.33% + 33px)', width: '98px' },
];

const BETTING_QUESTION = "Outcome of fed rate decision April 28-29?";
const BETTING_OPTIONS = [
  { top: 1368, label: '+1345', option: '50+ bps decrease' },
  { top: 1435, label: '+593',  option: '25 bps decrease' },
  { top: 1500, label: '-285',  option: 'No change' },
  { top: 1566, label: '+351',  option: '25 bps increase' },
];

export default function InflationArticle() {
  const [activeBet, setActiveBet] = useState<{ optionLabel: string; odds: string } | null>(null);

  return (
    <div className="bg-white relative w-[1440px] h-[4896px] mx-auto overflow-hidden" data-node-id="2146:504" data-name="DESKTOP - INFLATION ARTICLE">
      <div className="absolute bg-black h-[4896px] left-0 top-0 w-[1440px]" />

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

      {/* Category tabs row */}
      {CATEGORY_TABS.map((tab) => (
        <Link
          key={tab.label}
          to="/articles"
          className={`-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] not-italic text-[20px] text-center top-[228px] ${tab.active ? 'text-[#bcfa07]' : 'text-[#a3c0ff] hover:text-white cursor-pointer'}`}
          style={{ left: tab.left, width: tab.width }}
        >
          {tab.label}
        </Link>
      ))}

      {/* Hero photo (Erik McLean shopping photo) */}
      <div className="absolute h-[469px] left-[115px] rounded-[10px] top-[288px] w-[837.572px] overflow-hidden">
        <img alt="" className="absolute h-[118.84%] left-[0.22%] max-w-none top-0 w-[99.81%]" src={imgErikMcleanPhoto} />
      </div>

      {/* Article title — BLACK shadow layer (renders first, sits behind) */}
      <p className="absolute font-['Think',sans-serif] h-[373px] leading-[0] left-[calc(8.33%+1px)] not-italic text-[200px] text-black top-[709px] w-[1174px]">
        <span className="leading-[150px]">Inflation</span>
        <span className="leading-[150px] tracking-[-1.92px]">{` `}</span>
        <span className="leading-[150px]">Isn't<br aria-hidden="true" />Over</span>
        <span className="leading-[150px] tracking-[-1.92px]">{` `}</span>
        <span className="leading-[150px]">Yet</span>
      </p>

      {/* Article title — WHITE layer on top */}
      <p className="absolute font-['Think',sans-serif] leading-[0] left-[calc(8.33%+12px)] not-italic text-[200px] text-white top-[697px] w-[1174px]">
        <span className="leading-[150px]">Inflation</span>
        <span className="leading-[150px] tracking-[-1.92px]">{` `}</span>
        <span className="leading-[150px]">Isn't<br aria-hidden="true" />Over</span>
        <span className="leading-[150px] tracking-[-1.92px]">{` `}</span>
        <span className="leading-[150px]">Yet</span>
      </p>

      {/* Article subhead */}
      <p className="absolute font-['Righteous',sans-serif] h-[131px] leading-[normal] left-[calc(8.33%+2px)] not-italic text-[32px] text-white top-[1015px] w-[912px] whitespace-pre-wrap">
        {`Rising costs continue to pressure households `}<br aria-hidden="true" />{`and policymakers alike. `}
      </p>

      {/* Author */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[46px] leading-[30px] left-[calc(8.33%+2px)] text-[20px] text-white top-[1111px] w-[153px]">
        Jessica Dickler
      </p>

      {/* Sub-question card 1: Fed rate decision */}
      <div className="absolute h-[119px] left-[calc(33.33%+41px)] top-[1153px] w-[274px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer1} />
      </div>
      <div className="absolute bg-[#d9d9d9] h-[400px] left-[117px] rounded-[10px] top-[1255px] w-[808px]" />
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[normal] left-[calc(8.33%+34px)] not-italic text-[32px] text-black top-[1291px] w-[771px]">Outcome of fed rate decision April 28-29?</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[34px] leading-[30px] left-[calc(8.33%+34px)] text-[32px] text-black top-[1373px] w-[508px]">50+ bps decrease</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[calc(8.33%+34px)] text-[32px] text-black top-[1440px] w-[508px]">25 bps decrease</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[calc(8.33%+34px)] text-[32px] text-black top-[1505px] w-[508px]">No change</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[43px] leading-[30px] left-[calc(8.33%+34px)] text-[32px] text-black top-[1571px] w-[508px]">25 bps increase</p>
      {BETTING_OPTIONS.map((b, i) => (
        <button
          key={`q-${i}`}
          type="button"
          onClick={() => setActiveBet({ optionLabel: b.option, odds: b.label })}
          className="absolute bg-[#bcfa07] flex h-[32px] items-center justify-center left-[calc(41.67%+45px)] px-4 rounded-[6px] w-[138px] cursor-pointer hover:brightness-110 active:brightness-95 transition"
          style={{ top: `${b.top}px` }}
        >
          <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">{b.label}</p>
        </button>
      ))}

      {/* Sub-question card 2: Kevin Warsh + See More */}
      <div className="absolute bg-[#d9d9d9] h-[135px] left-[117px] rounded-[10px] top-[1679px] w-[356px]" />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] h-[135px] justify-center leading-[0] left-[295px] not-italic text-[24px] text-black text-center top-[1746.5px] w-[356px]">
        <p className="leading-[normal] mb-0">Kevin Warsh cuts rates</p>
        <p className="leading-[normal]">at first Fed meeting?</p>
      </div>
      <Link to="/arena" className="absolute bg-[#a3c0ff] flex h-[32px] items-center justify-center left-[calc(33.33%+20px)] overflow-clip px-4 rounded-[6px] top-[1679px] w-[257px] cursor-pointer hover:brightness-110 transition">
        <p className="font-['Righteous',sans-serif] leading-[16px] text-[24px] text-black text-center whitespace-nowrap">See More</p>
      </Link>

      {/* Decorative small stars near sub-question */}
      <div className="absolute h-[103px] left-[calc(58.33%+38px)] top-[1198px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer4} /></div>
      <div className="absolute h-[103px] left-[70px] top-[1759px] w-[111px]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer5} /></div>

      {/* Article body */}
      <div className="absolute font-['Open_Sans',sans-serif] font-normal h-[2482px] leading-[0] left-[117px] text-[0px] text-[rgba(255,255,255,0.7)] top-[1920px] w-[825px] whitespace-pre-wrap">
        <p className="leading-[30px] mb-0 text-[20px]">The Federal Reserve is on the cusp of a regime change after the Department of Justice dropped its criminal investigation into Fed Chair Jerome Powell, eliminating a potential obstacle to confirming President Donald Trump's nominee, Kevin Warsh, to replace him.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Central bankers are expected to hold interest rates steady at their policy meeting next week — likely Powell's last as chair — doing little to ease consumers' current affordability challenges.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">{`With an inflation shock, a war with Iran and an uncertain labor market, futures market pricing is implying virtually no chance of a rate cut, according to the CME Group's FedWatch gauge. `}</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Brent crude has surged more than 55% since the Iran war began in late February, triggering price jumps for gasoline and jet fuel. Many employers are putting hiring plans on hold, and consumer confidence is at an all-time low.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">"Even if gas spikes were to go away, prices are still higher," said certified financial planner Stephen Kates, a financial analyst at Bankrate. "Even if we get back to where we were prior to the Iran conflict, there's plenty of evidence that this is not the right time to get back to cutting rates."</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">The Fed's benchmark sets what banks charge each other for overnight lending, but also has a knock-on effect on many of the borrowing and savings rates Americans face every day.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Shorter-term rates are closely pegged to the prime rate, which is typically 3 percentage points above the federal funds rate. Longer-term rates are more dependent on inflation expectations and other economic factors.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">"Americans are dealing with trillions of dollars in credit cards, auto and student loan debt. Higher interest rates are making that more difficult for them on top of it," said Rohit Chopra, former director of the Consumer Financial Protection Bureau.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="font-['Righteous',sans-serif] leading-[30px] mb-0 not-italic text-[#a3c0ff] text-[50px]">How the Fed affects your finances</p>
        <p className="leading-[30px] mb-0 text-[50px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">The impact of the Fed's actions varies significantly across loan types.</p>
        <p className="leading-[30px] mb-0 text-[20px]">For example, 15- and 30-year fixed rates don't directly track the Fed but typically follow the lead of long-term Treasury rates. As a result, mortgage rates remain <a href="#" className="underline">volatile</a> amid mixed signals from <a href="#" className="underline">Trump</a> on the war with Iran.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Auto loan rates are tied to several factors, including the Fed's benchmark. But because financing costs remain elevated, new-car buyers are taking on longer loans to keep their monthly payments manageable, according to the latest data from Edmunds. Federal student loan rates are based in part on the last 10-year Treasury note auction in May. They are fixed for the life of the loan, so most borrowers are somewhat shielded from Fed moves and recent economic uncertainty.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">By contrast, most credit cards have a variable rate, so there's a more direct connection to the Fed's overnight rate. With the Fed rate expected to remain where it stands, the interest rate on credit card debt is unlikely to come down anytime soon.</p>
        <p className="leading-[30px] mb-0 text-[20px]">Savings rates also tend to be correlated with changes in the target federal funds rate. Therefore, holding that rate unchanged has kept savings yields above the inflation rate, a rare win for savers.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="font-['Righteous',sans-serif] leading-[30px] mb-0 not-italic text-[#a3c0ff] text-[50px]">A changing of the guard</p>
        <p className="leading-[30px] mb-0 text-[50px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">{`Even though central bankers have indicated that their goal of stabilizing prices and maximizing employment is the reason they want to hold rates steady for now, rate-setting decisions could change under new leadership. `}</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">On Tuesday, the Senate Banking Committee held a hearing to consider Trump's nomination of <a href="#" className="underline">Warsh</a> to serve as the next Fed chair.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">If confirmed, Warsh, a former Fed governor with a Wall Street background, will take over when Powell's term ends next month.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Warsh said under <a href="#" className="underline">his direction</a>, the central bank would remain independent, despite the president's push to cut rates more aggressively.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">Trump has been a vocal critic of Powell and the central bank's decision to hold the benchmark in its current range. The president has argued that maintaining a federal funds rate that is too high makes it harder for businesses and consumers to borrow and puts the U.S. at an economic disadvantage to countries with lower rates.</p>
        <p className="leading-[30px] mb-0 text-[20px]">​</p>
        <p className="leading-[30px] mb-0 text-[20px]">{`"We should have the lowest interest rate in the world," Trump said Tuesday on CNBC's "Squawk Box."  `}</p>
      </div>

      {/* Right-side decorative purple shapes (Layer_1 originals) */}
      <div className="absolute h-[787px] left-[calc(66.67%+47px)] top-[1814px] w-[671.977px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer2} />
      </div>
      <div className="absolute flex h-[787px] items-center justify-center left-[calc(66.67%+47px)] top-[3713px] w-[671.977px]">
        <div className="flex-none rotate-180">
          <div className="h-[787px] relative w-[671.977px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer3} />
          </div>
        </div>
      </div>

      {/* Decorative small stars left of card */}
      <div className="absolute flex inset-[32.87%_100.87%_66.45%_-5.13%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} /></div></div>
      </div>
      <div className="absolute flex inset-[32.85%_106.44%_66.47%_-10.69%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector1} /></div></div>
      </div>
      <div className="absolute flex inset-[32.61%_103.61%_66.72%_-7.87%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[100cqw] rotate-90 w-[100cqh]"><div className="relative size-full"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector2} /></div></div>
      </div>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute top-[4425px] left-0">
        <Footer />
      </div>

      {/* Bet placement modal */}
      <BetModal
        open={activeBet !== null}
        onClose={() => setActiveBet(null)}
        question={BETTING_QUESTION}
        optionLabel={activeBet?.optionLabel ?? ''}
        odds={activeBet?.odds ?? ''}
      />

    </div>
  );
}
