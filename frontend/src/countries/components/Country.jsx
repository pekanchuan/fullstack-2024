export default function Country({ country }) {
  const {
    name: { common },
    capital,
    area,
    languages,
    flags: { svg, alt },
  } = country;
  return (
    <>
      <h1 className="text-4xl my-5">{common}</h1>
      <div className="my-5">
        <p>capital {capital[0]}</p>
        <p>area {area}</p>
      </div>
      <h5 className="text-2xl">languages:</h5>
      <ul className="list-disc pl-5">
        {Object.entries(languages).map(([code, name]) => (
          <li key={code}>{name}</li>
        ))}
      </ul>
      <img src={svg} alt={alt} className="w-40 h-40 my-5 object-contain" />
    </>
  );
}
