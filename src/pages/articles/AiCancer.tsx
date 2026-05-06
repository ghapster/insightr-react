// Figma node 2146:794 — DESKTOP - AI ARTICLE (Tech)
import ArticleLayout, { ArticleBody, ArticleHeading, P, Spacer } from '../../components/ArticleLayout';

export default function AiCancer() {
  return (
    <ArticleLayout
      activeCategory="Tech"
      heroImage="/assets/adba52d92f57c2e06d3cb43acaaa85b363416e77.png"
      title="How AI Can Beat Cancer"
      subtitle={<>The new technology may finally<br />produce a breakthrough.</>}
      author="Cyriac Roeding"
      bettingQuestion="Why are current cancer treatments often limited in effectiveness?"
      bettingQuestionTop={1291}
      bettingOptions={[
        { text: 'They rely entirely on outdated technology', textTop: 1395, oddsTop: 1388, odds: '+536' },
        { text: 'They are too inexpensive to develop properly', textTop: 1463, oddsTop: 1460, odds: '+247' },
        { text: <>They target features found in both cancerous <br />and healthy cells, causing harmful side effects</>, textTop: 1528, oddsTop: 1534, odds: '-92' },
      ]}
      subQuestion={<><p className="leading-[normal] mb-0">What is the main advantage of using AI</p><p className="leading-[normal]">in cancer research according to the article?</p></>}
      footerTop={5300}
      topDecoSrc="/assets/2a83865e185d2e6e47e72a048c97d99df0663fd0.svg"
      bottomDecoSrc="/assets/35e514baef3c373b0bac363ce54b312e997692ef.svg"
      smallVectors={[
        '/assets/85ec2c5676a570ec0062c0746e54a5f0ae3cbb94.svg',
        '/assets/8fa68bef5f57f3b507ddf772a5f48072af5b762f.svg',
        '/assets/f05faa4725abbecf2e41aa0d9cede6247f829ffd.svg',
      ]}
    >
      <ArticleBody height={3304}>
        <P>The core problem in oncology has always been one of discrimination. Cancer cells and normal cells are, at the molecular level, nearly identical. What distinguishes a cancer cell is dysregulation, a set of genetic switches flipped in the wrong direction, causing uncontrolled growth. For decades, finding and exploiting those switches required hunting through patient samples by hand, looking for patterns subtle enough to be almost invisible.</P>
        <P>AI has changed what's possible. Systems trained on genomic databases spanning tens of thousands of sequenced cancer samples can now identify the master regulatory patterns that are active specifically in cancer cells and not in surrounding healthy tissue. Unlike the biomarkers of older precision oncology, these are fine-grained genomic signatures that encode the difference between malignant and normal at the level of how genes are switched on and off.</P>
        <P>Once those signatures are identified, they unlock a range of approaches that simply weren't possible before. AI is helping researchers design personalized cancer vaccines that train the immune system against the unique mutations a patient's tumor produces.</P>
        <P>Moderna and Merck are already in late-stage trials doing this, building on the same mRNA infrastructure that powered the COVID-19 vaccines. AI is also helping engineers build smarter CAR T cells that use tumor-specific signals to stay active inside the immunosuppressive environment of a cancer, rather than exhausting themselves before the job is done. At the earliest end of the pipeline, AI-driven analysis of genomic and imaging data is making it possible to detect cancers years before symptoms appear, when survival rates are dramatically higher.</P>
        <Spacer />
        <Spacer />
        <ArticleHeading>How we fight cancer today</ArticleHeading>
        <Spacer />
        <P>The current state of the art is that scientists identify naturally occurring targets on or in tumor cells (proteins, enzymes, receptors) and build drugs to hit them. It is slow, expensive, and profoundly limited. This is because the natural targets not only exist in the cancer cell, but also exist in healthy cells. Any drug that activates the immune system also activates elsewhere, causing an immune storm response that is dangerous and toxic.</P>
        <P>Today, reducing the dose is the only way we know how to address this. But when we reduce the dose, the efficacy also decreases, increasing the chances of the cancer coming back. Often, when cancer returns, it has time to mutate and develop resistance to the drugs.</P>
        <P>In lung cancer, the most deadly form that accounts for 1.8 million deaths globally every year, we have made progress and nearly doubled the 5-year survival rate in the past two decades. However, that still means that around 70% of diagnosed patients will die in the next 5 years.</P>
        <Spacer />
        <ArticleHeading>How AI-driven cancer bioengineering works</ArticleHeading>
        <Spacer />
        <P>Artificial intelligence is far more consequential than just clever chatbots. While AI helping radiologists read scans faster or algorithms combing drug databases for repurposing candidates are a good start, we need to play a different game entirely.</P>
        <Spacer />
        <P>The analogy researchers are beginning to use is that this AI approach is to DNA and cancer biology what AlphaFold has become to protein science. AlphaFold didn't discover proteins; it decoded the rules governing how they fold, making it possible to reason about protein structure systematically for the first time.</P>
        <Spacer />
        <P>AI-driven cancer bioengineering decodes the rules of cancer's genetic circuits well enough to write programs that run inside tumor cells with a precision that natural biomarkers never permitted. We are not just reading the code. We are rewriting it.</P>
        <P>The delivery mechanism requires its own breakthrough. To reach a cancer cell, a synthetic genetic payload must first travel through the body without being destroyed by the immune system. Lipid nanoparticles, the same technology behind the COVID-19 vaccines, are emerging as the vehicle.</P>
        <Spacer />
        <P>The pandemic programs proved what researchers had long suspected: lipid nanoparticles could safely and at scale deliver mRNA payloads into human cells. Bioengineers are now adapting that infrastructure for cancer and for therapeutic, transient, and safe DNA payloads, engineering nanoparticle surfaces to evade immune detection and extend the window for reaching their target. Here, too, AI algorithms decoding large screens on massive compound libraries are accelerating progress.</P>
        <Spacer />
        <ArticleHeading>China has already taken the lead</ArticleHeading>
        <Spacer />
        <P>However, none of this matters if America doesn't treat it as a strategic priority. China has made biotechnology a national strategic priority, channeling government funds directly into biotech startups, cutting regulatory review timelines, and mounting a credible threat to American dominance in the sector. In the first half of last year alone, the pharma industry committed $48.5 billion to Chinese biotech deals, more than all of 2024 combined. Meanwhile, U.S. venture capital continues to flow overwhelmingly toward AI in the narrow software sense. AI startups attracted over $200 billion in funding last year; that represents 50% of all venture capital funding. Biopharma drew roughly $26 billion.</P>
        <Spacer />
        <P>The gap is not just a market inefficiency. It reflects a failure to recognize that the truly most consequential application of AI this decade may not be solely about making software smarter. It may be changing the physical world we live in, and expanding biology from science to engineering by making cells programmable.</P>
        <Spacer />
        <ArticleHeading>How the U.S. can lead the future of cancer treatment</ArticleHeading>
        <Spacer />
        <P>For the U.S. to lead on the future of cancer treatment, Congress should establish a dedicated national biotech investment fund. Not just the Advanced Research Projects Agency for Health (ARPA-H), which remains largely channeled through academic institutions, but a vehicle that puts capital directly into early-stage platform companies and keeps that intellectual property on American soil.</P>
        <Spacer />
        <P>Large institutional investors and VC firms must also play a key role. While many have migrated toward software AI, they need to ask themselves whether a technology that can program cells to fight cancer deserves at least the same urgency as the next large language model.</P>
        <Spacer />
        <P>Finally, the FDA's new expedited review pathways need to be extended explicitly to platform-based biological therapies, not just single-asset drugs, so that the companies building the next generation of cancer treatments are not waiting a decade for regulatory clarity.</P>
      </ArticleBody>
    </ArticleLayout>
  );
}
