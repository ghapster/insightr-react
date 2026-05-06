import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Snapshot from './pages/Snapshot';
import AllArticles from './pages/AllArticles';
import Login from './pages/Login';
import Download from './pages/Download';
import ArenaLive from './pages/ArenaLive';
import ArenaTrending from './pages/ArenaTrending';
import ArenaLeaderboard from './pages/ArenaLeaderboard';
import ArenaTokens from './pages/ArenaTokens';
import InflationArticle from './pages/InflationArticle';
import ComfortFood from './pages/articles/ComfortFood';
import WorldCupBump from './pages/articles/WorldCupBump';
import TatumDagger from './pages/articles/TatumDagger';
import NasaRover from './pages/articles/NasaRover';
import AiCancer from './pages/articles/AiCancer';
import PsychologyOfSpace from './pages/articles/PsychologyOfSpace';
import SpaceXIpo from './pages/articles/SpaceXIpo';
import GreenArchitecture from './pages/articles/GreenArchitecture';
import Header from './components/Header';
import Footer from './components/Footer';

// Placeholder for pages we haven't imported from Figma yet.
function ComingSoon({ name }: { name: string }) {
  return (
    <div className="bg-white relative w-[1440px] h-[900px] mx-auto overflow-hidden">
      <div className="absolute bg-black h-[900px] left-0 top-0 w-[1440px]" />
      <div className="absolute top-0 left-0">
        <Header />
      </div>
      <div className="absolute top-[300px] left-0 w-[1440px] text-center font-['Righteous',sans-serif] text-white text-[64px]">
        {name} — coming soon
      </div>
      <div className="absolute top-[600px] left-0 w-[1440px] text-center font-['Open_Sans',sans-serif] text-[rgba(255,255,255,0.7)] text-[18px]">
        Send me the Figma frame link for this page and I'll wire it up.
      </div>
      <div className="absolute top-[820px] left-0">
        <Footer />
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"                              element={<Homepage />} />
        <Route path="/snapshot"                      element={<Snapshot />} />
        <Route path="/articles"                      element={<AllArticles />} />
        <Route path="/articles/inflation"            element={<InflationArticle />} />
        <Route path="/articles/comfort-food"         element={<ComfortFood />} />
        <Route path="/articles/world-cup-bump"       element={<WorldCupBump />} />
        <Route path="/articles/tatum-dagger"         element={<TatumDagger />} />
        <Route path="/articles/nasa-rover"           element={<NasaRover />} />
        <Route path="/articles/ai-cancer"            element={<AiCancer />} />
        <Route path="/articles/psychology-of-space"  element={<PsychologyOfSpace />} />
        <Route path="/articles/spacex-ipo"           element={<SpaceXIpo />} />
        <Route path="/articles/green-architecture"   element={<GreenArchitecture />} />
        <Route path="/login"                         element={<Login />} />
        <Route path="/downloads"                     element={<Download />} />
        <Route path="/arena"                         element={<ArenaLive />} />
        <Route path="/arena/trending"                element={<ArenaTrending />} />
        <Route path="/arena/leaderboard"             element={<ArenaLeaderboard />} />
        <Route path="/arena/tokens"                  element={<ArenaTokens />} />
        <Route path="/contact"                       element={<ComingSoon name="Contact" />} />
        <Route path="*"                              element={<ComingSoon name="Not Found" />} />
      </Routes>
    </BrowserRouter>
  );
}
