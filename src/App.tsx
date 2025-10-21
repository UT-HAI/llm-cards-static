import "./App.css";
import Container from "./components/Container";
import Methodology from "./components/Methodology";

export default function App() {
  return (
    <>
      {/* Home/landing */}
      <Container
        backgroundColor="#606060"
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

        <p className="text-lg text-center">
          <a href="" className="underline">
            Download the Card Deck
          </a>
        </p>
      </Container>

      {/* The Challenge (context) */}
      <Container backgroundColor="#2B2B2B" style={{ padding: "2rem 0" }}>
        <p className="text-lg mb-6">The Challenge</p>
        <h1 className="serif mb-10">
          As LLMs enter workplaces, co-designing them with workers is essential
          to center worker priorities and agency. Yet co-design is challenging
          when workers lack a clear understanding of LLM capabilities.
        </h1>
      </Container>

      {/* Our Answer (solution) */}
      <Container
        backgroundColor="#D9D9D9"
        textColor="black"
        style={{ padding: "2rem 0" }}
      >
        <p className="text-lg mb-6">Our Answer</p>
        <h1 className="serif mb-10">
          We present a two-phase co-design method that pairs LLM capability
          cards with hands-on prototyping to ground ideation in real workflows.
        </h1>

        <p className="text-lg mt-20 mb-6 text-center">Our Method</p>
        <Methodology />
      </Container>
    </>
  );
}
