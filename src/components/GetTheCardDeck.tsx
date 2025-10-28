import type { ReactNode } from "react";

interface GetTheCardDeckProps {
  children?: ReactNode;
  center?: boolean;
  marginTop?: string;
}

export default function GetTheCardDeck({
  children,
  center = false,
  marginTop = "0",
}: GetTheCardDeckProps) {
  return (
    <button
      className="text-lg"
      style={{
        display: "block",
        margin: center ? "0 auto" : "",
        marginTop: marginTop,
      }}
    >
      <a
        href="./assets/Bloom_Taxonomy_LLM_Capabilities_Cards.pdf"
        download
        target="_blank"
        className="sans-serif underline border py-3 px-5"
        style={{
          backgroundColor: "#ed6434",
          borderColor: "white",
          color: "white",
        }}
      >
        {children || "Get the Card Deck"}
      </a>
    </button>
  );
}
