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
        backgroundColor=""
        backgroundImage="url(./assets/workshop/1.png)"
        style={{
          padding: "13rem 0",
        }}
        textColor="#1C2F60"
      >
        <FloatIn>
          <div className="bg-white/90 p-8 pb-12 max-w-[45rem] mx-auto">
            <h1 className="serif mb-10 font-semibold">
              Large Language Model Capability Cards
            </h1>

            <p className="text-lg mb-14">
              A Tool for Co-Designing LLMs with Stakeholders
            </p>

            <GetTheCardDeck />
          </div>
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
            Tools powered by Large Language Models (LLM) like Microsoft Copilot,
            Chat GPT, Claude, and Google Gemini promise faster, easier, and
            smarter workflows. However, not all of them center worker needs,
            agency, and values.
          </h2>
          <ParagraphText>
            Organizations often push new technologies onto workers without
            soliciting or incorporating workers’ priorities. Additionally,
            workers may not be familiar with LLM capabilities enough to
            articulate their demands.
            <br />
            <br />
            <b>
              So, how do we give workers sufficient knowledge on LLM
              capabilities to build the tools that center their needs?
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
            This discrepancy is what we faced in our research project. To
            address it, we employed the{" "}
            <a
              href="https://www.interaction-design.org/literature/topics/interaction-design"
              target="_blank"
              className="serif"
            >
              Co-Design
            </a>{" "}
            method along with an LLM Capability Card Deck. Our aim was to design{" "}
            <i>with</i>, not <i>for</i>, our users.
          </h2>

          <CoDesign maxWidth="50rem" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor=""
        backgroundImage="url(./assets/workshop/4.jpg)"
        style={{
          padding: "200px 0",
        }}
        textColor="#1C2F60"
      >
        {" "}
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
            team conducted two-phased co-design sessions with fifteen practicing
            social workers to generate more than 100 ways that LLM could help
            their workflow by translating LLM capabilities into approachable,
            user-oriented representations.
          </h2>
        </FloatIn>

        <FloatIn>
          <p className="text-lg font-bold italic text-center mt-12 mb-6">
            Study Overview
          </p>
          <img src="./assets/study.png" alt="Study overview" />
          <p className="text-center px-8 mb-16 mt-6">
            A structured two-session framework for aligning workflows with AI
            support: from mapping tasks and determining AI integration levels to
            generating synthetic data and prototyping LLM-driven solutions.
          </p>
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
            understand, discuss, and design with LLM’s. We used{" "}
            <a
              href="https://teaching.cornell.edu/resource/blooms-taxonomy"
              target="_blank"
              className="serif"
              style={{ color: "#272555" }}
            >
              Bloom’s Taxonomy
            </a>{" "}
            to organize LLM capabilities into six categories. This helped
            connect workers’ experience to what an LLM could do and surface
            differing levels of complexity involved in performing capabilities
            across the{" "}
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
          <video controls className="mb-8">
            <source
              src="./assets/capabilities_recording.mp4"
              type="video/mp4"
            />
          </video>

          <p className="text-center px-8 mb-16">
            An animation that illustrates how our team used the Bloom’s Taxonomy
            to organize LLM capabilities so they were easier for our users to
            understand.
          </p>
        </FloatIn>

        <FloatIn>
          <img
            src="./assets/taxonomy_capabilities.png"
            alt="LLM capabilities taxonomy"
          />

          <p className="text-center px-8 mb-16 mt-6">
            Bloom-aligned LLM capabilities: A pyramid framework showcasing
            levels from Remembering to Generating, with practical prompt
            examples for each cognitive stage.
          </p>
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
            we turned abstract possibilities into concrete functions. This
            approach also offer users, especially non-experts, a transparent
            view of its capabilities.
          </h3>
          <ParagraphText>
            Without this structured breakdown, many users underestimate the
            extent of decision-making power they delegate to an LLM. By
            visualizing these capabilities through the Bloom’s Taxonomy ladder,
            users gain both transparency and control, becoming more aware of the
            LLM’s impact on tasks like creating, categorizing, and evaluating.
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
            <img
              src="./assets/workshop/2.png"
              alt="Social workers brainstorming"
            />
            <img src="./assets/workshop/3.jpg" alt="Brainstorming board" />
          </div>
        </FloatIn>

        <FloatIn>
          <p className="text-lg font-bold italic text-center mb-8">
            Results in Numbers
          </p>
          <Results />

          <GetTheCardDeck center marginTop="5rem" />
        </FloatIn>
      </Container>

      <Container
        backgroundColor={"#9198E5"}
        textColor="white"
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
          <div className="flex">
            <img
              src="./assets/hai.png"
              alt="HAI lab logo"
              className="h-12 mr-12"
            />
            <img
              src="./assets/ischool.png"
              alt="University of Texas"
              className="h-12"
            />
          </div>

          <p className="text-xl mt-16 mb-6 font-bold">Team Members</p>
          <p className="mt-4 font-bold">Whit Nelson</p>
          <p>Lead Researcher</p>

          <p className="mt-4 font-bold">Meah Lin</p>
          <p>Researcher, Writer, UI Designer</p>

          <p className="mt-4 font-bold">Jake Lohman</p>
          <p>Writer, Developer</p>

          <p className="text-lg my-12">
            We are a team of researchers, designers, and engineers at the
            Human-AI Interaction Lab at the University of Texas at Austin. You
            can learn more about our work at{" "}
            <a href="https://hai.ischool.utexas.edu/" target="_blank">
              our website.
            </a>
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
