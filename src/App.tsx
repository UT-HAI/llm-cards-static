import "./App.css";
import CardsDownloadButton from "./components/CardsDownloadButton";
import Container from "./components/Container";
import Methodology from "./components/Methodology";

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
          Large Language Model (LLM) capability cards
        </h1>
        <p className="text-lg mb-14">
          Tools and Framework for Co-Designing LLM Platforms
        </p>

        <CardsDownloadButton />
      </Container>

      <Container
        backgroundColor={colors["offwhite-pink"]}
        textColor="#2D2D2D"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">The Challenge</p>
        <h1 className="serif mb-10">
          As LLMs enter workplaces, co-designing them with workers is essential
          to center worker priorities and agency. Yet co-design is challenging
          when workers lack a clear understanding of LLM capabilities.
        </h1>
      </Container>

      <Container
        backgroundColor={colors["saturated-yellow"]}
        textColor="#1C2F60"
        style={{ padding: "2rem 0" }}
      >
        <p className="text-lg mb-8">Our Approach</p>
        <h1 className="serif mb-10">
          To address this challenge. We use the Co-Design method involve users
          in the early design process. Our aim was to design <i>with</i> our
          users, not <i>for</i> them.
        </h1>

        <Methodology />
      </Container>

      <Container
        backgroundColor={colors["faded-yellow"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">What is Co-Design</p>
        <h1 className="serif mb-10">
          We present a two-phase co-design method that pairs LLM capability
          cards with hands-on prototyping to ground ideation in real workflows.
        </h1>
      </Container>

      <Container
        backgroundColor={colors["offwhite-yellow"]}
        textColor={colors["accent-orange"]}
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Bloom-Aligned Capability Cards</p>
        <h1 className="serif mb-10">
          • the cards are a tool that facilitates codesign, but it is not a
          product of codesign
          <br />• the cards bucket what LLMs can do and order it based on
          complexity
        </h1>
      </Container>

      <Container
        backgroundColor={colors["faded-yellow"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Results</p>
        <h1 className="serif mb-10">
          • something such as, “we found these cards improved X by Y--try the
          cards yourself here”
          <br />
          • number of participants, number of idea generated, number of areas
          they want LLM help with, number of insights gained(?), and a link out
          to the study
          <br />• want more info? check out the study here
        </h1>
      </Container>

      <Container
        backgroundColor={colors["pastel-green"]}
        textColor="#1C2F60"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Future Considerations + CTA</p>
        <h1 className="serif mb-10">
          For Designers
          <br />
          For Researchers
        </h1>

        <CardsDownloadButton backgroundColor={colors["accent-orange"]} />
      </Container>

      <Container
        backgroundColor={colors["deep-blue"]}
        textColor="white"
        style={{ padding: "4rem 0" }}
      >
        <p className="text-lg mb-8">Credits & Feedback Form</p>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe7d5uN0fuuh8XTSdzz-BPjmM357G0jKEUOrwhRVUlMe9DzKw/viewform?usp=header"
          target="_blank"
        >
          Feedback form tmp link
        </a>
      </Container>
    </>
  );
}
