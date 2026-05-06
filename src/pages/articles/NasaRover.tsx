// Figma node 2146:940 — DESKTOP - NASA ARTICLE (Tech)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function NasaRover() {
  return (
    <ArticleLayout
      activeCategory="Tech"
      heroImage="/assets/9c993eb8ad77267d2286b551be0d272c8520375b.png"
      heroLeft="117px"
      heroWidth="835px"
      title="NASA Rover on Mars"
      titleWidth="1120px"
      subtitle={<>{`The Curiosity adds to list of organic `}<br />compounds discovered on the Red Planet.</>}
      author="Abigail Bowman"
      bettingQuestion="Why are the newly discovered organic molecules important to scientists?"
      bettingQuestionTop={1288}
      bettingOptions={[
        { text: 'They prove that humans once lived on Mars', textTop: 1388, oddsTop: 1386, odds: '+932' },
        { text: 'They show Mars has more oxygen than Earth', textTop: 1477, oddsTop: 1474, odds: '+329' },
        { text: <>{`They suggest Mars once had the right chemistry `}<br />to support life</>, textTop: 1557, oddsTop: 1554, odds: '-182' },
      ]}
      subQuestion={<p className="leading-[normal] whitespace-pre-wrap">{`What was significant `}<br />about the "Mary Anning 3" rock sample?</p>}
      footerTop={4750}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/35e514baef3c373b0bac363ce54b312e997692ef.svg"
      smallVectors={[
        '/assets/1a777c2a843574483a012d44a8168284c3d96480.svg',
        '/assets/6b9f541a73fb1cb8fbef84014f88f5b0c2856fa9.svg',
        '/assets/d99fafc574380af2ef97f3cdf7b081c69f9ebce6.svg',
      ]}
    >
      <ArticleBody height={2482}>
        <P>After years of lab work, the results are in: A rock that NASA's Curiosity Mars rover drilled and analyzed in 2020 includes the most diverse collection of organic molecules ever found on the Red Planet. Of the 21 carbon-containing molecules identified in the sample, seven of them were detected for the first time on Mars.</P>
        <Spacer />
        <P>Scientists have no way of knowing whether these organic molecules were created by biologic or geologic processes — either path is possible — but their discovery renewed confirmation that ancient Mars had the right chemistry to support life. What's more, the molecules join a growing list of compounds known to be preserved in rocks even after billions of years of exposure on Mars to radiation, which can break down these molecules over time.</P>
        <Spacer />
        <P>The rock sample, nicknamed "Mary Anning 3" after an English fossil collector and paleontologist, was collected on a part of Mount Sharp covered by lakes and streams billions of years ago. This oasis surged and dried up multiple times in the planet's ancient past, eventually enriching the area with clay minerals, which are especially good at preserving organic compounds — carbon-containing molecules that are the building blocks of life and are found throughout the solar system.</P>
        <Spacer />
        <P>Among the newly identified molecules is a nitrogen heterocycle, a ring of carbon atoms that includes nitrogen. This kind of molecular structure is considered a predecessor to RNA and DNA, two nucleic acids that are key to genetic information.</P>
        <Spacer />
        <P>"That detection is pretty profound because these structures can be chemical precursors to more complex nitrogen-bearing molecules," said the paper's lead author, Amy Williams of the University of Florida in Gainesville. "Nitrogen heterorcycles have never been found before on the Martian surface or confirmed in Martian meteorites."</P>
        <Spacer />
        <P>Another exciting discovery was benzothiophene, a carbon- and sulfur-bearing molecule that's been found in many meteorites. These meteorites, along with the organic molecules within them, are thought by some scientists to have seeded prebiotic chemistry across the early solar system.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Martian chemistry</ArticleHeading>
        <P>The new paper complements last year's finding of the largest organic molecules ever discovered on Mars: long-chain hydrocarbons, including decane, undecane, and dodecane.</P>
        <P>"This is Curiosity and our team at their best. It took dozens of scientists and engineers to locate this site, drill the sample, and make these discoveries with our awesome robot," said the mission's project scientist, Ashwin Vasavada of NASA's Jet Propulsion Laboratory in Southern California. "This collection of organic molecules once again increases the prospect that Mars offered a home for life in the ancient past."</P>
        <Spacer />
        <P>Both sets of findings were made with a sophisticated minilab called Sample Analysis at Mars (SAM), located in Curiosity's belly. A drill on the end of the rover's robotic arm pulverizes a carefully selected rock sample into powder and then trickles it into SAM, where a high-temperature oven heats the material, releasing gases that instruments in the lab analyze to reveal the rock's composition.</P>
        <Spacer />
        <P>In addition, SAM can perform "wet chemistry," dropping samples into a small cup of solvent. The resulting reactions can break apart larger molecules that would be difficult to detect and identify otherwise. While the instrument has several such cups, only two contain tetramethylammonium hydroxide (TMAH), a powerful solution reserved for the highest-value samples. The Mary Anning 3 sample was the first to be exposed to TMAH.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Trailblazing for future missions</ArticleHeading>
        <P>Built by NASA's Goddard Space Flight Center in Greenbelt, Maryland, SAM is based on larger, commercial-grade lab instruments. Getting such complex equipment into the rover required engineers to dramatically shrink it down and develop a way for it to run on less power.</P>
        <Spacer />
        <P>"It was a feat just figuring out how to conduct this kind of chemistry for the first time on Mars," said Charles Malespin, the instrument's principal investigator at NASA Goddard and a study coauthor. "But now that we've had some practice, we're prepared to run similar experiments on future missions."</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
