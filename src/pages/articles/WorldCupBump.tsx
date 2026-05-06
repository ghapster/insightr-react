// Figma node 2146:1232 — DESKTOP - WC ARTICLE (Sports)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function WorldCupBump() {
  return (
    <ArticleLayout
      activeCategory="Sports"
      heroImage="/assets/dd566a8b3ea392deeb7e03b15328ded576dc6850.png"
      heroLeft="117px"
      title="The World Cup Bump"
      subtitle={<>{`Is it real? `}<br />{`MLS is going to find out. `}</>}
      author="Pablo Iglesias Maurer"
      bettingQuestion="New MLS single-game attendance record post-World Cup 2026?"
      bettingOptions={[
        { text: 'Over 82,110', textTop: 1431, oddsTop: 1426, odds: '+473' },
        { text: 'Under 82,110', textTop: 1496, oddsTop: 1491, odds: '-354' },
      ]}
      subQuestion={<p className="leading-[normal] whitespace-pre-wrap">{`Robert Lewandowski `}<br />to MLS?</p>}
      footerTop={4300}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/73ee97c5efeaf48174f00caa2d2e290b375da616.svg"
      smallVectors={[
        '/assets/5c2285cb7656ff846728d541d0324506f164fa0e.svg',
        '/assets/56065f1d6ac399a2b84c8710e0fd83906b2ebf8a.svg',
        '/assets/9022ee726c7c1d8f2e84117816bdd912a5c9f059.svg',
      ]}
    >
      <ArticleBody height={2482}>
        <P>In 1988, a full eight years before Major League Soccer debuted, it got its first "World Cup bump".</P>
        <Spacer />
        <P>Fifa had just awarded the 1994 World Cup to the United States, but there was a stipulation. The US could host the tournament, but only if there was a competitive club league in place by the time it rolled around, something that hadn't been true since the North American Soccer League collapsed in 1985. Tournament organizers missed that 1994 deadline, but two years later, MLS became a reality. Thirty years on, it is still here.</P>
        <Spacer />
        <P>MLS was in every way, shape and form a byproduct of that World Cup. Executives lured some of the tournament's standout players to the league and ensured that many of its 10 teams were stocked with the US national team's biggest names. It's no exaggeration to suggest that MLS would not have been created without the tournament, and that it never would've survived without the initial excitement created by that World Cup.</P>
        <Spacer />
        <P>That particular World Cup bump was transformative, and every four years since, minds all over the American soccer landscape have attempted to capitalize on that very same idea: that the coming World Cup, which drives millions of non-soccer fans and casual viewers to the game, will lead to a surge in interest in MLS.</P>
        <Spacer />
        <P>With the tournament coming to the United States this summer for the first time in the league's history, MLS executives and cheerleaders have taken a particular interest in maximizing the World Cup's effect. Commissioner Don Garber has frequently suggested the tournament will be a major catalyst in the growth of his league and the game as a whole in the US.</P>
        <Spacer />
        <P>"The next decade will redefine what's possible for MLS and North American soccer," Garber said in his "state of the league" address this past December. "As the world turns towards North America, the 2026 World Cup will soon serve as rocket fuel for our entire ecosystem, and it will do so for MLS."</P>
        <Spacer />
        <P>If Garber's take feels lacking in detail, that's possibly by design. Though the commissioner has at times suggested that the idea of a World Cup bump is statistically proven – in one interview, he said research has found a 15-to-20% increase in domestic league interest off the World Cup – many studies have shown otherwise. Oftentimes, whatever marginal bump any given league has gotten off the back of any given tournament is impossible to divorce from other variables such as preexisting growth, planned expansion and increased investment.</P>
        <Spacer />
        <P>It's a question worth asking ahead of what's been called the most pivotal moment in the history of American men's soccer: is the World Cup bump even real?</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Soccernomics</ArticleHeading>
        <P>Few are more familiar with the phenomenon of the World Cup bump than University of Michigan professor Stefan Szymanski, who co-authored Soccernomics with British journalist Simon Kuper. The 2009 book, which has become a bit of a bible in its field, seems to get reprinted every World Cup, receiving a far more defined bump than any particular league.</P>
        <Spacer />
        <P>In 2020, Szymanskii published the result of his research on the effects of a major tournament on a country's domestic league attendance, focusing on the World Cup and Euros from 1966 onwards. The research was exhaustive and detailed, and in the end did little to identify any conclusive truths surrounding the tournament's effect.</P>
        <Spacer />
        <P>"[The data] varied significantly," Szymanski told the Guardian. "Generally speaking the league attendance in host countries was already on an upward trajectory around the time when the international championship was hosted, and then there were different narratives.</P>
        <Spacer />
        <P>"There was a 'step jump' of sorts around the date of the event, which was true in various tournaments, and then an upward trend that was continuous across all seasons in other tournaments. Or one that starts around the time of the event. In several instances there was just a short-term spike."</P>
        <Spacer />
        <P>Other tournaments, such as the 2010 World Cup in South Africa and the 1984 Euros in France, had no effect whatsoever on league attendance. Some, such as the 2012 Euros in Poland and Ukraine and the 1990 World Cup in Italy, saw a decrease in post-tournament attendance.</P>
        <Spacer />
        <P>"Generally speaking there is some observable trend which is not guaranteed, but possible in many cases," said Szymanski. "And then the obvious question here is, what should we expect in the case of MLS?"</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
