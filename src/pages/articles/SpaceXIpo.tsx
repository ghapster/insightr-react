// Figma node 2146:1527 — DESKTOP - SPACEX ARTICLE (Finance)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function SpaceXIpo() {
  return (
    <ArticleLayout
      activeCategory="Finance"
      heroImage="/assets/6d275602c62080b61d6d90f55f81fd2420799bed.png"
      title="SpaceX Files to Go Public"
      subtitle={<>The company is aiming to raise between<br />$40 billion and $80 billion in an offering.</>}
      author="Corrie Driebusch"
      bettingQuestion="SpaceX 12-month post-IPO price?"
      bettingQuestionTop={1291}
      bettingOptions={[
        { text: '$100-$200',     textTop: 1373, oddsTop: 1368, odds: '+128' },
        { text: '$400-$500',     textTop: 1440, oddsTop: 1435, odds: '-247' },
        { text: '$700-$800',     textTop: 1505, oddsTop: 1500, odds: '+1143' },
        { text: '$1,000-$1,100', textTop: 1571, oddsTop: 1566, odds: '+893' },
      ]}
      subQuestion={<p className="leading-[normal]">Anthropic IPO Date?</p>}
      footerTop={3775}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/73ee97c5efeaf48174f00caa2d2e290b375da616.svg"
      smallVectors={[
        '/assets/ab6b3a2a1a3679d859931da6d9b63d30f6ff74f8.svg',
        '/assets/a8f74779c543f80cb9d38c3480ee27d444d9f13d.svg',
        '/assets/81afe1d4472400706064da4ff91cc368296b8b54.svg',
      ]}
    >
      <ArticleBody height={2482}>
        <P>Elon Musk's SpaceX is one step closer to staging what could be the largest initial public offering of all time.</P>
        <Spacer />
        <P>The satellite builder and rocket operator has confidentially filed IPO paperwork with the Securities and Exchange Commission, according to people familiar with the matter. SpaceX is aiming for an IPO that could raise between $40 billion and $80 billion, The Wall Street Journal has reported.</P>
        <Spacer />
        <P>The filing puts the company on track to potentially list shares by July, as Musk has told people is his goal.</P>
        <Spacer />
        <P>SpaceX would be the first of three mega-IPOs that could go in 2026: Artificial-intelligence companies OpenAI and Anthropic are both waiting in the wings for potential offerings before year-end. Many smaller technology-company IPOs have been pushed off in 2026, as fears about how AI will upend the software industry have sent investors running.</P>
        <Spacer />
        <P>Because SpaceX filed its paperwork confidentially, as is customary these days, most investors will have to wait until closer to the IPO to see the company's financial performance. The confidential process allows regulators and companies to engage in a back-and-forth dialogue about disclosures as they wrap up the paperwork.</P>
        <Spacer />
        <P>Bloomberg earlier reported that SpaceX filed.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>The Underwriting Syndicate</ArticleHeading>
        <P>SpaceX selected five banks to lead the offering: Bank of America, Citigroup, Goldman Sachs, JPMorgan Chase, and Morgan Stanley, people familiar with the matter said. Several other banks are set to have supporting roles in the IPO, which could reap the banks involved tens of millions of dollars in fees if the offering goes on as planned.</P>
        <Spacer />
        <P>SpaceX combined with Musk's AI company, xAI, in February, to create a $1.25 trillion juggernaut in the biggest corporate tie-up by value in U.S. history. By tying the two companies closer together, Musk is giving xAI more financial muscle to compete against its larger competitors OpenAI and Anthropic.</P>
        <Spacer />
        <P>
          Details of the Texas-based company's sales, costs, earnings and balance sheet have been a tightly held secret for years, available only to investors who forged close relationships with SpaceX leadership. While the space side of the business has built up revenue and generated earnings,{' '}
          <a className="underline decoration-solid" href="https://www.wsj.com/tech/elon-musk-xai-spacex-merger-2896ae1e?mod=article_inline" target="_blank" rel="noreferrer">its</a>
          {' '}xAI artificial intelligence arm is at a much more nascent stage, needing significant amounts of cash.
        </P>
        <Spacer />
        <Spacer />
        <ArticleHeading>SpaceX Operations</ArticleHeading>
        <P>Once made public, SpaceX's filing is expected to shed light on the combined company's operations, which now range from satellite factories and launchpads to xAI's sprawling facility in Memphis.</P>
        <Spacer />
        <P>Additional data about customers is also likely to be laid out in the documents. The company has built a large business selling Starlink to consumers, and often works for the National Aeronautics and Space Administration and U.S. national-security agencies.</P>
        <Spacer />
        <P>SpaceX executives spent years saying the company wouldn't go public until its rockets were regularly flying to Mars. But it changed course and began racing to a stock listing last year as part of a bet by Musk that the next frontier for AI dominance is building out data centers in space. It is a pricey endeavor, and a giant IPO could help fund the efforts.</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
