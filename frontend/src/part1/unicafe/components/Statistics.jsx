import StatisticLine from "./StatisticLine";

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
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={all} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={`${positive}%`} />
    </>
  );
}
