export default function Statistics({ good, neutral, bad }) {
  const all = good + neutral + bad;
  const average = (good * 1 + neutral * 0 + bad * -1) / all;
  const positive = (good / all) * 100;

  if (!good && !neutral && !bad) {
    return (
      <>
        <h1 className="m-2 text-3xl">statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }

  return (
    <>
      <h1 className="m-2 text-3xl">statistics</h1>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </>
  );
}
