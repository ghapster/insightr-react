// Figma node 2146:1672 — DESKTOP - GREEN ARTICLE (Tech)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function GreenArchitecture() {
  return (
    <ArticleLayout
      activeCategory="Tech"
      heroImage="/assets/f4b8b3eda046c19e94d4872d8df82f02fa3fbdc9.png"
      title="Green Architecture"
      subtitle={<>Innovative buildings that <br />breathe nature.</>}
      author="Chynna Lee"
      bettingQuestion="Average energy conversion rate by 2030?"
      bettingQuestionTop={1291}
      bettingOptions={[
        { text: '90% or more', textTop: 1373, oddsTop: 1368, odds: '+101' },
        { text: '90%',         textTop: 1440, oddsTop: 1435, odds: '-362' },
        { text: '70%',         textTop: 1505, oddsTop: 1500, odds: '+459' },
        { text: '70% or less', textTop: 1571, oddsTop: 1566, odds: '+694' },
      ]}
      subQuestion={<p className="leading-[normal]">Number of buildings?</p>}
      footerTop={4252}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/35e514baef3c373b0bac363ce54b312e997692ef.svg"
      smallVectors={[
        '/assets/d7e28cc0b52b256908d85f44601851a26c83687f.svg',
        '/assets/729f4332825fe24bba7be449203c99a03ab0ea6f.svg',
        '/assets/f7ceec5234b816aa3cb9c8c6fcdc926cc28f957d.svg',
      ]}
    >
      <ArticleBody height={2482}>
        <P>As the world continues to focus on sustainability, architecture is evolving in inspiring ways. Enter green architecture—a movement redefining how buildings interact with the environment. From energy-saving designs to structures that actively contribute to the health of the planet, these innovative buildings aren't just functional—they breathe with nature.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>What is Green Architecture?</ArticleHeading>
        <P>Green architecture, also known as sustainable or eco-architecture, is the practice of designing buildings that minimize environmental impact. It incorporates environmentally conscious materials and systems while enhancing the comfort and wellbeing of occupants.</P>
        <Spacer />
        <P>The goal? To create spaces that are energy-efficient, resource-smart, and harmoniously connected to the natural world.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Green Roofs: Lush Layers Above</ArticleHeading>
        <P>Green roofs are one of the most recognizable features of sustainable design. These living rooftops are covered in soil and vegetation, transforming otherwise unused surfaces into ecosystems that offer countless benefits.</P>
        <Spacer />
        <ul className="list-disc mb-0 pl-[30px]">
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Improved insulation: Green roofs regulate indoor temperatures by reducing heat absorption, lowering the need for heating and cooling.</span></li>
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Stormwater management: They absorb rainwater, easing the pressure on urban drainage systems.</span></li>
          <li><span className="leading-[30px] text-[20px]">Biodiversity support: Green roofs create habitats for birds, bees, and other pollinators in built-up environments.</span></li>
        </ul>
        <Spacer />
        <P>Cities like Singapore and Copenhagen have embraced green roofing to reduce urban heat and boost greenery in densely populated areas.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Solar Glass: Letting in Light</ArticleHeading>
        <P>Imagine windows that generate electricity. That's the beauty of solar glass—transparent photovoltaic panels that double as architectural features and solar energy generators.</P>
        <P>Solar glass can be installed as:</P>
        <Spacer />
        <ul className="list-disc mb-0 pl-[30px]">
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Windows in homes or offices</span></li>
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Facades for commercial buildings</span></li>
          <li><span className="leading-[30px] text-[20px]">Skylights that capture light while powering the building</span></li>
        </ul>
        <Spacer />
        <P>This technology blends clean energy production seamlessly with modern design, reducing reliance on fossil fuels and contributing to net-zero energy goals.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Passive Energy Systems</ArticleHeading>
        <P>Passive design is about working with nature, not against it. By strategically designing buildings to take advantage of sunlight, airflow, and shading, architects can drastically reduce energy consumption.</P>
        <P>Some key features include:</P>
        <Spacer />
        <ul className="list-disc mb-0 pl-[30px]">
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Natural ventilation to reduce air conditioning use</span></li>
          <li className="mb-0"><span className="leading-[30px] text-[20px]">Orientation and shading that optimize solar heat gain in winter and minimize it in summer</span></li>
          <li><span className="leading-[30px] text-[20px]">Thermal mass materials that absorb and release heat slowly, maintaining indoor comfort</span></li>
        </ul>
        <Spacer />
        <P>These systems reduce the need for mechanical heating and cooling, lowering both emissions and energy bills.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>Building a Greener Future</ArticleHeading>
        <P>Green architecture isn't just a trend—it's a vital step toward a more sustainable future. With features like green roofs, solar glass, and passive energy systems, buildings are becoming part of the environmental solution.</P>
        <P>By embracing these innovations, we can design spaces that are as kind to people as they are to the planet.</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
