// Figma node 2146:2143 — DESKTOP - LOGIN PAGE
// Header + Footer extracted into shared components.

import Header from '../components/Header';
import Footer from '../components/Footer';

const imgVector1 = "/assets/45659ee88eab6296d812b725c185142cd8a32b05.svg";
const imgGroup18 = "/assets/a252af0bd7a17faefd4c339cc218caa2cd913fce.svg";

export default function Login() {
  return (
    <div className="bg-white relative w-[1440px] h-[2122px] mx-auto overflow-hidden" data-node-id="2146:2143" data-name="DESKTOP - LOGIN PAGE">
      <div className="absolute bg-black h-[2122px] left-0 top-0 w-[1440px]" data-node-id="2146:2144" />

      {/* Create an Account card */}
      <div className="absolute bg-[#1c1e20] h-[565px] left-[calc(8.33%+18px)] rounded-[10px] top-[300px] w-[537px]" data-node-id="2146:2148" />

      {/* Welcome Back card */}
      <div className="absolute bg-[#1c1e20] h-[565px] left-[calc(50%+44px)] rounded-[10px] top-[300px] w-[537px]" data-node-id="2146:2154" />

      {/* "or" divider lines (Welcome Back) */}
      <div className="absolute h-0 left-[calc(58.33%+1px)] top-[640px] w-[144.5px]" data-node-id="2146:2155">
        <div className="absolute inset-[-1px_0_-1px_-0.69%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>
      <div className="absolute h-0 left-3/4 top-[640px] w-[144.5px]" data-node-id="2146:2156">
        <div className="absolute inset-[-1px_0_-1px_-0.69%]">
          <img alt="" className="block max-w-none size-full" src={imgVector1} />
        </div>
      </div>

      {/* Card titles */}
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(16.67%+167px)] not-italic text-[64px] text-center text-white top-[363px] w-[276px]" data-node-id="2146:2157">
        Create an Account
      </p>
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(58.33%+193px)] not-italic text-[64px] text-center text-white top-[363px] w-[276px]" data-node-id="2146:2158">
        Welcome Back
      </p>

      {/* Buttons */}
      <button className="absolute content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(16.67%+42px)] overflow-clip px-4 rounded-[6px] top-[776px] w-[250px] cursor-pointer" data-node-id="2146:2219">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">Create an Account</p>
        </div>
      </button>
      <button className="absolute content-stretch flex flex-col h-[32px] items-center justify-center left-[calc(58.33%+70px)] overflow-clip px-4 rounded-[6px] top-[776px] w-[250px] cursor-pointer" data-node-id="2146:2220">
        <div className="absolute inset-0 overflow-clip">
          <div className="absolute bg-[#bcfa07] inset-0 rounded-[10px]" />
        </div>
        <div className="flex flex-col font-['Righteous',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[24px] text-black text-center whitespace-nowrap">
          <p className="leading-[16px]">Login</p>
        </div>
      </button>

      {/* Form input field backgrounds */}
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(8.33%+90px)] rounded-[10px] top-[512px] w-[156px]" data-node-id="2146:2221" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(8.33%+90px)] rounded-[10px] top-[558px] w-[120px]" data-node-id="2146:2222" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(16.67%+107px)] rounded-[10px] top-[558px] w-[114px]" data-node-id="2146:2223" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(33.33%-6px)] rounded-[10px] top-[558px] w-[120px]" data-node-id="2146:2224" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(8.33%+92px)] rounded-[10px] top-[604px] w-[384px]" data-node-id="2146:2225" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(58.33%+1px)] rounded-[10px] top-[512px] w-[384px]" data-node-id="2146:2226" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(8.33%+92px)] rounded-[10px] top-[649px] w-[384px]" data-node-id="2146:2227" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(58.33%+1px)] rounded-[10px] top-[557px] w-[384px]" data-node-id="2146:2228" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(58.33%+1px)] rounded-[10px] top-[666px] w-[384px]" data-node-id="2146:2229" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(58.33%+1px)] rounded-[10px] top-[716px] w-[384px]" data-node-id="2146:2230" />
      <div className="absolute bg-[#2b3641] h-[29px] left-[calc(25%+16px)] rounded-[10px] top-[512px] w-[218px]" data-node-id="2146:2231" />

      {/* Form labels */}
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(8.33%+106px)] not-italic text-[#bbcef9] text-[14px] top-[518px] w-[137px]">First Name</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(8.33%+106px)] not-italic text-[#bbcef9] text-[14px] top-[564px] w-[137px]">Month</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(25%+3px)] not-italic text-[#bbcef9] text-[14px] top-[564px] w-[52px]">Day</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(33.33%+10px)] not-italic text-[#bbcef9] text-[14px] top-[564px] w-[52px]">Year</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(8.33%+108px)] not-italic text-[#bbcef9] text-[14px] top-[609px] w-[137px]">Email</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(58.33%+17px)] not-italic text-[#bbcef9] text-[14px] top-[517px] w-[137px]">Username or Email</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(8.33%+108px)] not-italic text-[#bbcef9] text-[14px] top-[654px] w-[137px]">Phone Number</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(58.33%+17px)] not-italic text-[#bbcef9] text-[14px] top-[562px] w-[137px]">Password</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(58.33%+17px)] not-italic text-[#bbcef9] text-[14px] top-[672px] w-[154px]">Sign In with Google</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(58.33%+17px)] not-italic text-[#bbcef9] text-[14px] top-[722px] w-[237px]">Sign In with Your Organization</p>
      <p className="absolute font-['Righteous',sans-serif] h-[25px] leading-[normal] left-[calc(25%+35px)] not-italic text-[#bbcef9] text-[14px] top-[518px] w-[137px]">Last Name</p>

      {/* T&C + Forgot password + or */}
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[47px] leading-[15px] left-[calc(25%-5px)] text-[12px] text-[rgba(255,255,255,0.7)] top-[702px] w-[173px]">{`I have read and agree to the Terms & Conditions.`}</p>
      <p className="absolute font-['Open_Sans',sans-serif] font-normal h-[47px] leading-[15px] left-[calc(66.67%+15px)] text-[12px] text-[rgba(255,255,255,0.7)] top-[600px] w-[203px]">Forgot Password?</p>
      <p className="-translate-x-1/2 absolute font-['Open_Sans',sans-serif] font-normal h-[13px] leading-[15px] left-[calc(66.67%+71.5px)] text-[12px] text-[rgba(255,255,255,0.7)] text-center top-[632px] w-[91px]">or</p>

      {/* T&C checkbox */}
      <div className="absolute bg-[rgba(255,255,255,0)] border border-[#bbbbbc] border-solid left-[calc(16.67%+91px)] rounded-[2px] size-[10px] top-[705px]" data-node-id="2146:2247" />

      {/* ACCOUNT PERKS */}
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[62px] leading-[normal] left-[calc(33.33%+240px)] not-italic text-[64px] text-center text-white top-[1073.34px] w-[454px]" data-node-id="2146:2248">
        ACCOUNT PERKS
      </p>

      {/* Account perks decoration */}
      <div className="absolute inset-[47.13%_66.35%_47.31%_23.68%]" data-node-id="2146:2249">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup18} />
      </div>

      {/* Account perks card backgrounds */}
      <div className="absolute bg-[#1c1e20] h-[188px] left-[calc(8.33%+21px)] rounded-[10px] top-[1178.34px] w-[209px]" data-node-id="2146:2149" />
      <div className="absolute bg-[#1c1e20] h-[188px] left-[calc(25%+20px)] rounded-[10px] top-[1178.34px] w-[209px]" data-node-id="2146:2150" />
      <div className="absolute bg-[#1c1e20] h-[188px] left-[calc(41.67%+15px)] rounded-[10px] top-[1178.34px] w-[209px]" data-node-id="2146:2151" />
      <div className="absolute bg-[#1c1e20] h-[188px] left-[calc(58.33%+12px)] rounded-[10px] top-[1178.34px] w-[209px]" data-node-id="2146:2152" />
      <div className="absolute bg-[#1c1e20] h-[188px] left-[calc(75%+9px)] rounded-[10px] top-[1178.34px] w-[209px]" data-node-id="2146:2153" />

      {/* Account perks labels */}
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[100px] leading-[40px] left-[calc(8.33%+125.5px)] not-italic text-[30px] text-center text-white top-[1228.34px] w-[191px]" data-node-id="2146:2253">GET THE FULL SCOOP</p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[100px] leading-[40px] left-[calc(25%+124.5px)] not-italic text-[30px] text-center text-white top-[1228.34px] w-[191px]" data-node-id="2146:2254">TRACK YOUR TOKENS</p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[100px] leading-[40px] left-[calc(41.67%+119.5px)] not-italic text-[30px] text-center text-white top-[1228.34px] w-[191px]" data-node-id="2146:2255">REDEEM REWARDS</p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[100px] leading-[40px] left-[calc(58.33%+116.5px)] not-italic text-[30px] text-center text-white top-[1228.34px] w-[191px]" data-node-id="2146:2257">SEE WHO'S IN THE LEAD</p>
      <p className="-translate-x-1/2 absolute font-['Righteous',sans-serif] h-[100px] leading-[40px] left-[calc(75%+113.5px)] not-italic text-[30px] text-center text-white top-[1228.34px] w-[191px]" data-node-id="2146:2258">COMPETE IN THE ARENA</p>

      {/* Champion tagline */}
      <p className="-translate-x-1/2 absolute font-['Think',sans-serif] h-[100px] leading-[normal] left-[calc(25%+360.5px)] not-italic text-[40px] text-center text-white top-[1424.34px] tracking-[3.2px] w-[681px]" data-node-id="2146:2256">
        SHOW US THE CHAMPION YOU ARE
      </p>

      {/* Shared header */}
      <div className="absolute top-0 left-0">
        <Header />
      </div>

      {/* Shared footer (Login frame puts it at top:1645) */}
      <div className="absolute top-[1645px] left-0">
        <Footer />
      </div>

    </div>
  );
}
