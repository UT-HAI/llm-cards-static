interface CardsDownloadButtonProps {
  backgroundColor?: string;
  textColor?: string;
}

export default function CardsDownloadButton({
  backgroundColor = "#1c2f60",
  textColor = "white",
}: CardsDownloadButtonProps) {
  return (
    <button className="text-lg">
      <a
        href=""
        className="sans-serif underline border py-3 px-5"
        style={{
          backgroundColor: backgroundColor,
          borderColor: textColor,
          color: textColor,
        }}
      >
        Get the Card Deck
      </a>
    </button>
  );
}
