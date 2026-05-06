// Shared site footer (mascot + 3 columns + legal).
// Self-contained 1440×526 box anchored at top:0 of its own container.
// Each page wraps it: <div className="absolute top-[Ypx] left-0"><Footer /></div>
// where Y is whatever the frame's footer position is in Figma.

import { Link } from 'react-router-dom';

const imgLayer10 = "/assets/footer-mascot-bg.svg";
const imgLayer11 = "/assets/footer-mascot-face.svg";

export default function Footer() {
  return (
    <div className="relative w-[1440px] h-[526px]">

      {/* Background panel */}
      <div className="absolute bg-[#1c1e20] h-[526px] left-0 rounded-[32px] top-0 w-[1440px]" />

      {/* Mascot */}
      <div className="absolute h-[431.851px] left-[calc(8.33%-2px)] overflow-clip top-[126px] w-[325px]" data-name="Frame">
        <div className="absolute inset-[0_0_0.01%_0]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer10} />
        </div>
        <div className="absolute inset-[2.56%_3.87%_2.57%_3.87%]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgLayer11} />
        </div>
      </div>

      {/* Column titles */}
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[30px] left-[calc(33.33%+52px)] not-italic text-[#bcfa07] text-[32px] top-[121px] w-[267px]">
        Company
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[61px] leading-[30px] left-[calc(50%+85px)] not-italic text-[#bcfa07] text-[32px] top-[122px] w-[266px]">
        Articles
      </p>
      <p className="absolute font-['Righteous',sans-serif] h-[62px] leading-[30px] left-[calc(75%+14px)] not-italic text-[#bcfa07] text-[32px] top-[122px] w-[266px]">{`Games & Bets`}</p>

      {/* Column links */}
      <div className="absolute font-['Open_Sans',sans-serif] font-normal h-[301px] leading-[0] left-[calc(33.33%+52px)] text-[20px] text-white top-[170px] w-[247px]">
        <Link to="/"          className="block leading-[40px] hover:text-[#bcfa07] transition">About Us</Link>
        <Link to="/contact"   className="block leading-[40px] hover:text-[#bcfa07] transition">Contact Us</Link>
        <Link to="/downloads" className="block leading-[40px] hover:text-[#bcfa07] transition">Downloads</Link>
      </div>
      <div className="absolute font-['Open_Sans',sans-serif] font-normal h-[410px] leading-[0] left-[calc(50%+85px)] text-[20px] text-white top-[170px] w-[249px]">
        <Link to="/snapshot" className="block leading-[40px] hover:text-[#bcfa07] transition">Snapshot of Today</Link>
        <Link to="/articles" className="block leading-[40px] hover:text-[#bcfa07] transition">Happening Now</Link>
      </div>
      <div className="absolute font-['Open_Sans',sans-serif] font-normal h-[428px] leading-[0] left-[calc(75%+14px)] text-[20px] text-white top-[170px] w-[249px]">
        <Link to="/arena/trending"    className="block leading-[40px] hover:text-[#bcfa07] transition">Bet Trends</Link>
        <Link to="/arena/tokens"      className="block leading-[40px] hover:text-[#bcfa07] transition">Token Prizes</Link>
        <Link to="/arena/leaderboard" className="block leading-[40px] hover:text-[#bcfa07] transition">Championship</Link>
      </div>

      {/* Legal */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[58px] leading-[40px] left-[calc(33.33%+52px)] text-[10px] text-white top-[388px] w-[657px] whitespace-pre-wrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        {`Legal            Safety & Privacy Policy            Cookie settings            About Ads            Accessibility`}
      </p>

    </div>
  );
}
