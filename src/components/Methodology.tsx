import type { ReactNode } from "react";

const methodologyData: string[] = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
];

interface SingleMethodProps {
  number: number;
  children: ReactNode;
}

function SingleMethod({ number, children }: SingleMethodProps) {
  return (
    <div className="text-center">
      <div className="serif text-6xl mb-6">{number}</div>
      <p className="border">{children}</p>
    </div>
  );
}

export default function Methodology() {
  return (
    // todo: breakpoints for flexwrap
    <div className="flex-center mb-8 gap-4">
      {methodologyData.map((datum, idx) => (
        <SingleMethod key={`method${idx}`} number={idx + 1}>
          {datum}
        </SingleMethod>
      ))}
    </div>
  );
}
