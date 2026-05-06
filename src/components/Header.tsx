// Shared site header (nav + logo + buttons).
// Self-contained 1440×130 box. Place inside a positioned ancestor with
// `<div className="absolute top-0 left-0"><Header /></div>` on each page.
//
// Active nav item is colored green based on the current route.

import { Link, useLocation } from 'react-router-dom';

const imgImage2 = "/assets/logo.png";

const NAV_ITEMS: Array<{
  label: string;
  to: string;
  // disclosure circle position (in px from left)
  dotLeft: string;
  // text label position (left, top, width)
  textLeft: string;
  textTop: string;
  textWidth: string;
  textHeight: string;
}> = [
  { label: 'Home',        to: '/',         dotLeft: 'calc(8.33% + 113px)', textLeft: 'calc(8.33% + 86px)',   textTop: '77px',   textWidth: '66px',  textHeight: '32px' },
  { label: 'The Arena',   to: '/arena',    dotLeft: 'calc(25% + 31px)',    textLeft: 'calc(16.67% + 97.5px)', textTop: '77px',   textWidth: '119px', textHeight: '32px' },
  { label: 'Snapshot',    to: '/snapshot', dotLeft: 'calc(33.33% + 57px)', textLeft: 'calc(25% + 127px)',     textTop: '77px',   textWidth: '134px', textHeight: '32px' },
  { label: 'All Articles',to: '/articles', dotLeft: 'calc(41.67% + 102px)',textLeft: 'calc(33.33% + 166.5px)',textTop: '77.5px', textWidth: '121px', textHeight: '31px' },
  { label: 'Downloads',   to: '/downloads',dotLeft: 'calc(58.33% + 29px)', textLeft: 'calc(50% + 89.5px)',    textTop: '77px',   textWidth: '129px', textHeight: '32px' },
  { label: 'Contact',     to: '/contact',  dotLeft: 'calc(66.67% + 40px)', textLeft: 'calc(58.33% + 117.5px)',textTop: '79.5px', textWidth: '95px',  textHeight: '31px' },
];

export default function Header() {
  const { pathname } = useLocation();

  return (
    <div className="relative w-[1440px] h-[130px]">

      {/* Logo */}
      <Link to="/" className="absolute block cursor-pointer h-[102px] left-[17px] top-[28px] w-[121px]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[398.1%] left-[-7.51%] max-w-none top-[-20%] w-[336.19%]" src={imgImage2} />
        </div>
      </Link>

      {NAV_ITEMS.map((item) => {
        const isActive =
          item.to === '/'
            ? pathname === '/'
            : pathname === item.to || pathname.startsWith(item.to + '/');
        const color = isActive ? 'text-[#bcfa07]' : 'text-white';
        return (
          <span key={item.to}>
            {/* Disclosure dot — decorative */}
            <div
              className="absolute content-stretch flex flex-col items-center justify-end overflow-clip rounded-[1000px] size-[41px] top-[59px]"
              style={{ left: item.dotLeft }}
            >
              <div className="absolute left-0 overflow-clip size-6 top-0">
                <div className="absolute bg-white inset-0 opacity-5" />
              </div>
              <div className="flex flex-[1_0_0] flex-col font-bold justify-center leading-[0] min-h-px min-w-full relative text-[10px] text-center text-white w-[min-content]">
                <p className="leading-[normal]">{`\u{100188}`}</p>
              </div>
            </div>

            {/* Nav label */}
            <Link
              to={item.to}
              className={`-translate-x-1/2 -translate-y-1/2 absolute flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic text-[24px] text-center hover:text-[#bcfa07] transition-colors ${color}`}
              style={{ left: item.textLeft, top: item.textTop, width: item.textWidth, height: item.textHeight }}
            >
              <p className="leading-[normal]">{item.label}</p>
            </Link>
          </span>
        );
      })}

      {/* 0 Tokens → /arena/tokens */}
      <Link to="/arena/tokens" className="absolute content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(75%+60px)] overflow-clip px-4 rounded-[6px] top-[64px] w-[133px] cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">0 Tokens</p>
        </div>
      </Link>

      {/* Sign In → /login */}
      <Link to="/login" className="absolute content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(83.33%+93px)] overflow-clip px-4 rounded-[6px] top-[64px] w-[107px] cursor-pointer hover:brightness-110 active:brightness-95 transition">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">Sign In</p>
        </div>
      </Link>

    </div>
  );
}
