import axios from "axios";
import { useEffect, useState } from "react";
import Country from "./components/Country";

const baseURL = "https://studies.cs.helsinki.fi/restcountries/";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [showDetails, setShowDetails] = useState(null);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = () => {
    axios
      .get(`${baseURL}api/all`)
      .then((res) => {
        setCountries(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchCountries = (name) => {
    if (name.length === 0) {
      setFiltered([]);
      return;
    }
    const res = countries.filter((c) =>
      c.name.common.toLowerCase().includes(name.toLowerCase())
    );

    setFiltered(res);
    console.info(res);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setSearchText(value);
    searchCountries(value);
  };

  const handleShowDetails = (country) => {
    console.log(country.name.common);
    setShowDetails(country);
  };

  return (
    <div className="m-2">
      <div>
        find countries
        <input
          value={searchText}
          placeholder="input ..."
          className="mx-1 px-1 border-2 border-gray-400 rounded-md"
          onChange={handleChange}
        />
      </div>
      {filtered.length !== 0 &&
        (filtered.length === 1 ? (
          <Country country={filtered[0]} />
        ) : (
          <div>
            {filtered.length > 10 ? (
              <p>Too many countries, specify another filter</p>
            ) : (
              filtered.map((country) => (
                <div key={country.area}>
                  <p>
                    {country.name.common}{" "}
                    <button
                      className="rounded-md bg-blue-600 text-white px-2 my-2"
                      onClick={() => handleShowDetails(country)}
                    >
                      show
                    </button>
                  </p>
                  <div>
                    {showDetails.area === country.area && (
                      <Country country={country} />
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        ))}
    </div>
  );
}
