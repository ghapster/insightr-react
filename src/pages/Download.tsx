// Figma node 2146:2068 — DESKTOP - DOWNLOAD
// Header + Footer extracted into shared components.

import Header from '../components/Header';
import Footer from '../components/Footer';

const imgImage4 = "/assets/10b1aa7cc3d441493837fec5b13941745c2d887d.png";
const imgImage5 = "/assets/7567aaa7cc4a4c0d7d75eea59288a12fff24ddd8.png";
const imgImage6 = "/assets/e712a54e620109762d9250b35fa521841b3b9191.png";
const imgImage17 = "/assets/c8bae6766978885726e303415ee4a3c07053b13f.png";
const imgImage19 = "/assets/fc475418085582b6076f62f54bfc47e58ac4fe6e.png";
const imgImage21 = "/assets/6ea8d1ffeee99583f9dd6f44c9d99046f60eb971.png";
const imgImage16 = "/assets/4d88498b3110414eda071f7215abc2d00eb86714.svg";
const imgImage18 = "/assets/9dfeb164b6ccace57fafbfe1d07586636a99cb47.svg";
const imgImage20 = "/assets/15d1eb7cdfdfdd7bec640ae52eae8ce040e86121.svg";
const imgGroup7 = "/assets/92bcec29c39a9e109cfa5d69bcc669591c41ea25.svg";

export default function Download() {
  return (
    <div className="bg-white relative w-[1440px] h-[2426px] mx-auto overflow-hidden" data-node-id="2146:2068" data-name="DESKTOP - DOWNLOAD">
      <div className="absolute bg-black h-[2426px] left-0 top-0 w-[1440px]" />

      {/* Hero black tint band */}
      <div className="absolute bg-[rgba(0,0,0,0.57)] h-[453px] left-[calc(50%+106px)] top-[200px] w-[92px]" />

      {/* Hero photos */}
      <div className="absolute h-[386px] left-[calc(58.33%+35px)] rounded-[10px] top-[250px] w-[106px] overflow-hidden">
        <img alt="" className="absolute h-full left-[-264.15%] max-w-none top-0 w-[364.15%]" src={imgImage6} />
      </div>
      <div className="absolute h-[386px] left-[calc(66.67%+42px)] rounded-[10px] top-[250px] w-[306px] overflow-hidden">
        <img alt="" className="absolute h-[100.06%] left-[-65.67%] max-w-none top-[-0.03%] w-[189.35%]" src={imgImage4} />
      </div>
      <div className="absolute h-[386px] left-[calc(91.67%+18px)] rounded-[10px] top-[250px] w-[306px] overflow-hidden">
        <img alt="" className="absolute h-[100.16%] left-[-41.5%] max-w-none top-[-0.08%] w-[189.87%]" src={imgImage5} />
      </div>

      {/* Hero gradient */}
      <div className="absolute h-[444px] left-[calc(33.33%+85px)] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] top-[228px] w-[594px]" style={{ backgroundImage: "linear-gradient(90deg, rgb(0, 0, 0) 34.135%, rgb(0, 0, 0) 57.212%, rgba(0, 0, 0, 0.46) 86.058%, rgba(0, 0, 0, 0) 100%)" }} />

      {/* Hero text */}
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[normal] left-[calc(8.33%+7px)] not-italic text-[#bcfa07] text-[20px] top-[280px] w-[912px]">#1 in News Gamification</p>
      <p className="absolute font-['Think',sans-serif] h-[140px] leading-[normal] left-[calc(8.33%+6px)] not-italic text-[200px] text-white top-[310px] w-[1174px]">INSIGHTR</p>
      <p className="absolute font-['Righteous',sans-serif] h-[46px] leading-[normal] left-[calc(8.33%+7px)] not-italic text-[32px] text-white top-[468px] w-[912px]">Enter the Arena, Turn Headlines into High Scores</p>
      <p className="absolute font-['Righteous',sans-serif] h-[80px] leading-[30px] left-[calc(8.33%+7px)] not-italic text-[18px] text-white top-[514px] w-[698px]">Get reading and rewarded on the go. Download the InsightR app now!</p>

      {/* Download Now button */}
      <button className="absolute content-stretch cursor-pointer flex flex-col h-[42px] items-center justify-center left-[calc(8.33%+7px)] overflow-clip px-4 rounded-[6px] top-[590px] w-[250px]">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">Download Now</p>
        </div>
      </button>

      {/* Section titles */}
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(25%+361px)] not-italic text-[64px] text-center text-white top-[880px] w-[688px]">DOWNLOAD FOR DESKTOP</p>
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(25%+361px)] not-italic text-[64px] text-center text-white top-[1231px] w-[688px]">DOWNLOAD FOR TABLET</p>
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(25%+361px)] not-italic text-[64px] text-center text-white top-[1580px] w-[688px]">DOWNLOAD FOR MOBILE</p>

      {/* Store badges — 3 rows × 3 platforms (App Store, Microsoft Store, Google Play) */}
      {[
        { row: 'desktop', y: 988 },
        { row: 'tablet', y: 1339 },
        { row: 'mobile', y: 1688 },
      ].map((row) => (
        <div key={row.row}>
          {/* Apple App Store (left) */}
          <div className="absolute h-[73.591px] left-[calc(8.33%+112.47px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[6.534px_4.667px] mask-size-[234px_67.21px] w-[247.886px]"
               style={{ top: `${row.y + 2.33}px`, maskImage: `url('${imgImage18}')` }}>
            <img alt="App Store" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage19} />
          </div>
          {/* Microsoft Store (middle) */}
          <div className="absolute h-[85.225px] left-[calc(33.33%+108.46px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[7.539px_6.089px] mask-size-[225px_73.647px] w-[238.392px]"
               style={{ top: `${row.y - 6.09}px`, maskImage: `url('${imgImage16}')` }}>
            <img alt="Windows Store" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage17} />
          </div>
          {/* Google Play (right) */}
          <div className="absolute h-[141.684px] left-[calc(58.33%+78.32px)] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[21.677px_41.687px] mask-size-[209px_60.03px] w-[251.883px]"
               style={{ top: `${row.y - 41.69}px`, maskImage: `url('${imgImage20}')` }}>
            <img alt="Google Play" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage21} />
          </div>
        </div>
      ))}

      {/* Right-side purple decoration */}
      <div className="absolute inset-[45.63%_-15.42%_32.93%_84.58%]"><img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} /></div>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer */}
      <div className="absolute top-[1934px] left-0">
        <Footer />
      </div>

    </div>
  );
}
