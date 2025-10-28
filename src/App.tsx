import "./App.css";
import CoDesign from "./components/CoDesign";
import Container from "./components/Container";
import FloatIn from "./components/FloatIn";
import GetTheCardDeck from "./components/GetTheCardDeck";
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

//todo: make workshop button download the actual contents

export default function App() {
  return (
    <>
      <Container
        backgroundColor={"#9198E5"}
        style={{
          padding: "13rem 0",
        }}
      >
        <FloatIn>
          <h1 className="serif mt-[-3rem] mb-10">
            Large Language Model (LLM) Capability Cards
          </h1>

          <p className="text-lg mb-14">
            Tools and Framework for Co-Designing LLM Platforms
          </p>

          <GetTheCardDeck />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={colors["offwhite-pink"]}
        textColor="#2D2D2D"
        style={{ padding: "4rem 0 6rem" }}
      >
        <p className="text-lg mb-8">The Challenge</p>
        <FloatIn>
          <h2 className="serif mb-10">
            Tools powered by Large Language Models like Microsoft Copilot, Chat
            GPT, Claude, and Google Gemini promise faster, easier, and smarter
            workflows. However, not all of them center worker priorities,
            agency, and values.
          </h2>
          <ParagraphText>
            Organizations often push new technologies onto workers without
            soliciting or incorporating people’s demands. Additionally, since
            LLMs only gained public attention recently, workers may not be
            familiar with LLMs capabilities enough to articulate their demands
            on this emerging technology.
            <br />
            <br />
            <b>
              So, how do we give workers sufficient knowledge on LLM
              capabilities to build the tools that meet their demands?
            </b>
          </ParagraphText>
        </FloatIn>
      </Container>

      <Container
        backgroundColor={colors["deep-blue"]}
        textColor="white"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Our Approach</p>

        <FloatIn>
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
        </FloatIn>
      </Container>

      <Container
        backgroundColor={colors["faded-yellow"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">
          A Case Study: Co-Designing LLM Tools with Social Workers
        </p>

        <FloatIn>
          <h2 className="serif mb-10">
            Starting out as a partnership with the City of Austin in 2023, our
            team of researchers conducted two-phased co-design sessions with
            fifteen practicing social workers to generate more than 100 ways
            that LLM can help their workflow by translating LLM capabilities
            into approachable, user-oriented representations.
          </h2>
        </FloatIn>

        <FloatIn>
          <p className="text-lg font-bold italic text-center mt-12 mb-6">
            Study Overview
          </p>
          <img src="./assets/study.png" alt="Study overview" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={"#EEF1F8"}
        textColor={"#272555"}
        style={{ padding: "8rem 0" }}
      >
        <p className="text-lg mb-8">Bloom-Aligned Capability Cards</p>

        <FloatIn>
          <h2 className="serif mb-10">
            The Capability Cards were key to helping non-technical stakeholders
            understand, discuss, and design with LLM’s. In our study, the cards
            connected social workers’ experience to what LLM can do and surfaced
            the levels of decision-making power it required to perform
            capabilities across in the{" "}
            <a
              href="https://teaching.cornell.edu/resource/blooms-taxonomy"
              target="_blank"
              className="serif"
              style={{ color: "#272555" }}
            >
              Bloom’s Taxonomy
            </a>{" "}
            ladder.
          </h2>
        </FloatIn>

        <FloatIn>
          <video controls className="mb-12">
            <source
              src="./assets/capabilities_recording.mp4"
              type="video/mp4"
            />
          </video>
        </FloatIn>

        <FloatIn>
          <img
            src="./assets/taxonomy_capabilities.png"
            alt="LLM capabilities taxonomy"
          />
        </FloatIn>

        <FloatIn>
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
        </FloatIn>

        <FloatIn>
          <p className="text-lg font-bold italic text-center mt-12 mb-6">
            What's on the Card
          </p>
          <div className="bg-white max-w-[750px] mx-auto px-[24px]">
            <img src="./assets/card_anatomy.png" alt="Card anatomy" />
          </div>
        </FloatIn>

        <FloatIn>
          <h3 className="serif mb-10 text-4xl my-10">
            By organizing LLM capabilities into Bloom’s Taxonomy’s categories,
            it turns abstract possibilities into concrete functions while
            highlighting the decisions an LLM makes when performing a task.
          </h3>
          <ParagraphText>
            This offers users—especially non-experts—a transparent view of its
            capabilities. Without this structured breakdown, many users
            underestimate the extent of decision-making power they delegate to
            an LLM. By visualizing these capabilities through the Bloom’s
            Taxonomy ladder, users gain both transparency and control, becoming
            more aware of the LLM’s impact on tasks like creating, categorizing,
            and evaluating.
          </ParagraphText>

          <GetTheCardDeck center marginTop="4rem" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={"white"}
        textColor={colors["accent-orange"]}
        style={{ padding: "8rem 0" }}
      >
        <FloatIn>
          <p className="text-lg font-bold italic text-center mb-8">
            Workshop Photos
          </p>
          <div className="flex gap-4 justify-center items-center [&>img]:w-[300px] flex-wrap mb-24">
            <img
              src="./assets/workshop/0.jpg"
              alt="Social worker using LLM interface"
            />
            <img src="./assets/workshop/1.png" alt="LLM Cards in use" />
            <img
              src="./assets/workshop/2.png"
              alt="Social workers brainstorming"
            />
            <img src="./assets/workshop/3.jpg" alt="Brainstorming board" />
            <img
              src="./assets/workshop/4.jpg"
              alt="Social workers organizing ideas"
            />
          </div>
        </FloatIn>
        {/* todo: add workshop photos here */}

        <FloatIn>
          <p className="text-lg font-bold italic text-center mb-8">
            Results in Numbers
          </p>
          <Results />

          <GetTheCardDeck center marginTop="5rem" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={colors["pastel-green"]}
        textColor="#1C2F60"
        style={{ padding: "10rem 0" }}
      >
        <FloatIn>
          <h2 className="serif mb-10">
            Try out the Capability Cards in your LLM Co-Design project.
          </h2>

          <GetTheCardDeck marginTop="4rem" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={colors["deep-blue"]}
        textColor="white"
        style={{ padding: "6rem 0" }}
      >
        <FloatIn>
          <p className="text-lg mb-8">Team</p>
          <p className="my-2">
            <b className="mr-6">Whit Nelson</b> Lead Researcher
          </p>
          <p className="my-2">
            <b className="mr-6">Meah Lin</b> Researcher, Writer, UI Designer
          </p>
          <p className="my-2">
            <b className="mr-6">Jake Lohman</b> Writer, Developer
          </p>

          <p className="mt-16 mb-4">Got any feedback for us?</p>
          <p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSe7d5uN0fuuh8XTSdzz-BPjmM357G0jKEUOrwhRVUlMe9DzKw/viewform?usp=header"
              target="_blank"
            >
              Feedback Form
            </a>
          </p>
        </FloatIn>
      </Container>
    </>
  );
}
