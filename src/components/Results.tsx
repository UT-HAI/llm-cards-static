const resultsData: string[] = [
  "15 Social Workers Interviewed",
  "100 LLM Ideas Generated",
  "3 LLM readiness tiers for social work tasks identified",
];

export default function Results() {
  return (
    <div className="grid grid-cols-3">
      {resultsData.map((datum, idx) => {
        const splitAt = datum.indexOf(" ");
        const number = datum.slice(0, splitAt);
        const data = datum.slice(splitAt);
        return (
          <div key={`${datum}_${idx}`} className="text-center p-2">
            <div className="serif text-6xl mb-4">{number}</div>
            <p className="sans-serif">{data}</p>
          </div>
        );
      })}
    </div>
  );
}
