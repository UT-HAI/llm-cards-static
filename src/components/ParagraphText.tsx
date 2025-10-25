import type { ReactNode } from "react";

export default function ParagraphText({ children }: { children: ReactNode }) {
  return <p className="max-w-[45rem]">{children}</p>;
}
