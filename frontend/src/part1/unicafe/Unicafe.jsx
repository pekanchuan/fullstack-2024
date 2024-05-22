import { useState } from "react";

export default function Unicafe() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;

  return (
    <div>
      <h1>give feedback</h1>
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
      <h1>statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
}
