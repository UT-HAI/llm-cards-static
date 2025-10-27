import "./App.css";
import Button from "./components/Button";
import CoDesign from "./components/CoDesign";
import Container from "./components/Container";
import ParagraphText from "./components/ParagraphText";
import Results from "./components/Results";

// These should probably be css colors but this works for now
const colors: { [name: string]: string } = {
  "faded-purple": "#a6abe8",
  "accent-orange": "#ed6434",
  "offwhite-pink": "#f3eef6",
  "saturated-yellow": "#f6be42",
  "faded-yellow": "#ffedc5",
  "offwhite-yellow": "#f9f4e9",
  "pastel-green": "#cdd9b9",
  "deep-blue": "#1c2f60",
};

export default function App() {
  return (
    <>
      <Container
        backgroundColor={colors["faded-purple"]}
        style={{
          padding: "13rem 0",
        }}
      >
        <h1 className="serif mt-[-3rem] mb-10">
          Large Language Model (LLM) Capability Cards
        </h1>
        <p className="text-lg mb-14">
          Tools and Framework for Co-Designing LLM Platforms
        </p>

        <Button href="" backgroundColor={colors["accent-orange"]}>
          Get the Card Deck
        </Button>
      </Container>

      <Container
        backgroundColor={colors["offwhite-pink"]}
        textColor="#2D2D2D"
        style={{ padding: "4rem 0 6rem" }}
      >
        <p className="text-lg mb-8">The Challenge</p>
        <h2 className="serif mb-10">
          Tools powered by Large Language Models like Microsoft Copilot, Chat
          GPT, Claude, and Google Gemini promise faster, easier, and smarter
          workflows. However, not all of them center worker priorities, agency,
          and values.
        </h2>
        <ParagraphText>
          Organizations often push new technologies onto workers without
          soliciting or incorporating people’s demands. Additionally, since LLMs
          only gained public attention recently, workers may not be familiar
          with LLMs capabilities enough to articulate their demands on this
          emerging technology.
          <br />
          <br />
          <b>
            So, how do we give workers sufficient knowledge on LLM capabilities
            to build the tools that meet their demands?
          </b>
        </ParagraphText>
      </Container>

      <Container
        backgroundColor={colors["deep-blue"]}
        textColor="white"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Our Approach</p>
        <h2 className="serif mb-10">
          To address this challenge. We use the Co-Design method involve users
          in the early design process. Our aim was to design <i>with</i> our
          users, not <i>for</i> them.
        </h2>

        <CoDesign maxWidth="50rem" />

        <p className="my-8">
          The following section features a our research project that puts
          co-design into practice.
        </p>
      </Container>

      <Container
        backgroundColor={colors["faded-yellow"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">
          A Case Study: Co-Designing LLM Tools with Social Workers
        </p>
        <h2 className="serif mb-10">
          Starting out as a partnership with the City of Austin in 2023, our
          team of researchers conducted two-phased co-design sessions with
          fifteen practicing social workers to generate more than 100 ways that
          LLM can help their workflow by translating LLM capabilities into
          approachable, user-oriented representations.
        </h2>

        <p className="text-lg font-bold italic text-center mt-12 mb-6">
          Study Overview
        </p>
        <img src="./assets/study.png" alt="Study overview" />
      </Container>

      <Container
        backgroundColor={"#EEF1F8"}
        textColor={"#272555"}
        style={{ padding: "8rem 0" }}
      >
        <p className="text-lg mb-8">Bloom-Aligned Capability Cards</p>
        <h2 className="serif mb-10">
          The Capability Cards were key to helping non-technical stakeholders
          understand, discuss, and design with LLM’s. In our study, the cards
          connected social workers’ experience to what LLM can do and surfaced
          the levels of decision-making power it required to perform
          capabilities across in the Bloom’s Taxonomy ladder.
        </h2>

        {/* todo: video embed here of cards if possible */}
        <img
          src="./assets/taxonomy_capabilities.png"
          alt="LLM capabilities taxonomy"
        />

        <p className="text-lg font-bold italic text-center mt-12 mb-6">
          Cards Preview
        </p>
        <p className="text-center mx-auto mb-8 max-w-180">
          Each card represents a different kind of thinking a model can
          perform—like remembering, analyzing, or creating—based on Bloom’s
          Taxonomy. By sorting capabilities into these levels, the cards make
          LLM behavior easier to see, compare, and discuss.
        </p>
        <img src="./assets/cards_preview.png" alt="Cards preview" />

        <p className="text-lg font-bold italic text-center mt-12 mb-6">
          What's on the Card
        </p>
        <img src="./assets/card_anatomy.png" alt="Card anatomy" />

        <p className="mt-8 mb-2">The cards helped participants:</p>
        <ul className="list-disc pl-6">
          <li>
            See what kinds of reasoning and decisions an LLM makes in their
            workflow
          </li>
          <li>Distinguish between automation and augmentation</li>
          <li>Make abstract AI behavior visible and discussable</li>
          <li>Support worker agency by clarifying what should remain human</li>
        </ul>
      {/* todo: add "get the card deck" btn here, centered */}
      </Container>

      <Container
        backgroundColor={colors["offwhite-yellow"]}
        textColor={colors["accent-orange"]}
        style={{ padding: "8rem 0" }}
      >
        <p className="text-lg font-bold italic text-center mb-8">
          Results in Numbers
        </p>
        <Results />
      </Container>

      <Container
        backgroundColor={colors["pastel-green"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Future Considerations + CTA</p>
        <h2 className="serif mb-10">
          For Designers
          <br />
          For Researchers
        </h2>

        <Button href="" backgroundColor={colors["accent-orange"]}>
          Get the Card Deck
        </Button>
      </Container>

      <Container
        backgroundColor={colors["deep-blue"]}
        textColor="white"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Share Your Feedback</p>
        <ParagraphText>
          Tried our cards or explored the study? We’d love to hear what you
          think! Your feedback helps us improve and design better tools for
          everyone.
        </ParagraphText>

        <br />
        <br />
        <Button
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7d5uN0fuuh8XTSdzz-BPjmM357G0jKEUOrwhRVUlMe9DzKw/viewform?usp=header"
          backgroundColor={colors["accent-orange"]}
        >
          Share Your Feedback
        </Button>
      </Container>
    </>
  );
}
