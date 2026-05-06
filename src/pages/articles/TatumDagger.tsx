// Figma node 2146:1382 — DESKTOP - CELTICS ARTICLE (Sports)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function TatumDagger() {
  return (
    <ArticleLayout
      activeCategory="Sports"
      heroImage="/assets/a4f3e75a7e56cf9eb28082887f03faa45f6018de.png"
      heroLeft="118px"
      title="Tatum Dagger Ends Game 3"
      subtitle={<><p className="leading-[normal] mb-0">{`Boston reclaims home court in first round `}</p><p className="leading-[normal]">stand-off with 76ers: 4 takeaways.</p></>}
      author="John Schuhmann"
      bettingQuestion="Game 4 outcome?"
      bettingOptions={[
        { text: 'Celtics win (25pt or more)', textTop: 1373, oddsTop: 1368, odds: '+128' },
        { text: 'Celtics win (25pt or less)', textTop: 1440, oddsTop: 1435, odds: '-247' },
        { text: '76ers win (25pt or more)', textTop: 1505, oddsTop: 1500, odds: '+1143' },
        { text: '76ers win (25pt or less)', textTop: 1571, oddsTop: 1566, odds: '+893' },
      ]}
      subQuestion={<p className="leading-[normal]">Teams in NBA Finals?</p>}
      footerTop={4325}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/35e514baef3c373b0bac363ce54b312e997692ef.svg"
      smallVectors={[
        '/assets/be38aea614538574364c0d79cf0afa3395893212.svg',
        '/assets/b9142b483741b06b0dd3695cdaf23b9930e0a25d.svg',
        '/assets/104bf775a3efb123b62c6871d456a0bb6aeeaaa9.svg',
      ]}
    >
      <ArticleBody height={2482}>
        <ArticleHeading>The 3s are flying again</ArticleHeading>
        <P>Last season's Celtics took 53.6% of their shots from 3-point range, the highest rate in the 47 years of the 3-point line. This season, they still ranked fourth, but saw the league's biggest drop in 3-point rate and took only 46.7% of their shots from beyond the arc.</P>
        <Spacer />
        <P>The playoffs are a fresh start, and the Celtics are taking more than half of their shots from 3-point range again. On Friday, 47 (58%) of their 81 shots came from beyond the arc, the highest rate for any team in these playoffs, topping their rate (56.2%) from Game 1.</P>
        <Spacer />
        <P>This has been a make-or-miss series, with the more accurate team from 3-point range winning all three games. In Game 3, that was the Celtics, who made 20 (43%) of those 47 attempts, including three down the stretch to put the game away.</P>
        <Spacer />
        <P>The Celtics didn't get to the basket much on Friday. They were outscored by 20 points (34-14) in the restricted area and by four at the free throw line. But they were a plus-24 from beyond the arc.</P>
        <Spacer />
        <P>Eight of the 10 Celtics who played make at least one 3-pointer, with Tatum and Payton Pritchard hitting five apiece. And those were the two guys that closed the door on the Sixers, with Pritchard beating the shot-clock buzzer to put Boston up six with 1:17 left and Tatum putting them back up six with a pull-up from 29 feet in the final minute.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Switching has gone out of style</ArticleHeading>
        <P>It's pretty surprising how few switches we've seen in this series. Through Game 3, the Celtics have switched only 10.8% of the Sixers' ball-screens, while the Sixers have switched just 11.4% of the Celtics'. Those are the second and fourth lowest switch rates in these playoffs.</P>
        <Spacer />
        <P>Instead, we've seen a lot of drop coverage, with the defense prioritizing rim protection and challenging the ball-handler to making shots off the dribble.</P>
        <Spacer />
        <P>On one end of the floor, Tatum was happy to step into a pull-up 3-pointer. On the other end, Paul George did the same.</P>
        <Spacer />
        <P>The Celtics didn't even switch screens between two perimeter players. Late in the game, George set a screen for Maxey and Tatum didn't switch or even contain the ball. Maxey got downhill, drew help from both corners, and hit Andre Drummond for a wide-open 3 that kept the game close.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>White struggles from deep</ArticleHeading>
        <P>This hasn't just been a rough-shooting series for White. It's been a rough-shooting season. After shooting 38.7% from 3-point range over his previous three full seasons with the Celtics, White shot just 32.7% from beyond the arc in 2025-26. That was the worst mark, by a wide margin, among the 26 players with at least 500 3-point attempts this year.</P>
        <Spacer />
        <P>The playoffs haven't exactly provided White with a fresh start, and he's just 5-for-25 (20%) from 3-point range in this series after going 1-for-8 on Friday.</P>
        <Spacer />
        <P>He keeps shooting, though. The Celtics want him to keep shooting, and they want him on the floor. Obviously, he's one of the best defensive guards in the league. And he made two huge offensive plays down the stretch of Game 3.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Tatum matches Maxey's minutes</ArticleHeading>
        <P>We're still 18 days away from the one-year anniversary of when Tatum tore his Achilles at Madison Square Garden, and this was just his 19th game back from a 10-month absence.</P>
        <Spacer />
        <P>A lot of us assumed that if he came back this season, his minutes would be limited, maybe capped around 30 in any given night. But Tatum played less than 30 minutes in only the first three of his 16 regular-season games. He almost hit the 40-minute mark in the Celtics' big win back in New York in the final week of the season and again in Game 2 on Tuesday.</P>
        <Spacer />
        <P>On Friday, Tatum played 42 minutes and 24 seconds, including the entirety of the fourth quarter.</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
