import { useState } from "react";

import Statistics from "./components/Statistics";

export default function Unicafe() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1 className="m-2 text-3xl">give feedback</h1>
      <button
        className="mx-1 px-1 border-black border-2 rounded"
        onClick={() => setGood(good + 1)}
      >
        good
      </button>
      <button
        className="mx-1 px-1  border-black border-2 rounded"
        onClick={() => setNeutral(neutral + 1)}
      >
        neutral
      </button>
      <button
        className="mx-1 px-1 border-black border-2 rounded"
        onClick={() => setBad(bad + 1)}
      >
        bad
      </button>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}
