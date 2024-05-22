import { useState } from "react";

export default function Unicafe() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <button
        className="mx-8 border-black border-2"
        onClick={() => setGood(good + 1)}
      >
        good
      </button>
      <button
        className="mx-8 border-black border-2"
        onClick={() => setNeutral(neutral + 1)}
      >
        neutral
      </button>
      <button
        className="mx-8 border-black border-2"
        onClick={() => setBad(bad + 1)}
      >
        bad
      </button>
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
    </div>
  );
}
