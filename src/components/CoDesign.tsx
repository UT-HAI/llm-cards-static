interface CoDesignProps {
  maxWidth?: string;
}

export default function CoDesign({ maxWidth = "100%" }: CoDesignProps) {
  return (
    <div
      className="mb-12 border border-gray-400 rounded-xl p-8 mx-auto"
      style={{ maxWidth }}
    >
      <p className="font-bold italic">What is Co-Design?</p>
      <br />
      <p>
        Co-design is a collaborative approach where designers work together with
        non-designers to create solutions. Designers act as facilitators and
        guide the participants through the design process. Co-design aims to
        harness the collective wisdom and insights of everyone involved,
        especially the end-users, to innovate and solve problems effectively.
      </p>
      <br />
      <a href="" target="_blank">
        Learn More About Co-Design
      </a>
    </div>
  );
}
