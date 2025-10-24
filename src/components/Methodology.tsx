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
    <div className="grid grid-cols-[4rem_auto] mb-8">
      <div className="serif text-6xl mt-[-1rem]">{number}</div>
      <p className="">{children}</p>
    </div>
  );
}

export default function Methodology() {
  return (
    <div className="mb-8 max-w-[700px] mx-auto">
      <p className="text-lg mt-20 mb-6">Our Method</p>
      {methodologyData.map((datum, idx) => (
        <SingleMethod key={`method${idx}`} number={idx + 1}>
          {datum}
        </SingleMethod>
      ))}
    </div>
  );
}
