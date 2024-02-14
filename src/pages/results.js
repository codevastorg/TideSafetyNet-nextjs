import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { get, ref } from "firebase/database";
import { firebase_database } from "../firebase/config";

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [advice, setAdvice] = useState("");
  const router = useRouter();
  const { date, time, city } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      // Adjust the path as necessary based on your database structure
      const snapshot = await get(ref(firebase_database, 'records'));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const recordsArray = Object.keys(data).map(key => ({
          id: key,
          ...data[key]
        }));

        const filteredResults = recordsArray.filter(record =>
          record.date === date &&
          record.hours === time &&
          record.city.toLowerCase() === city.toLowerCase()
        );

        setSearchResults(filteredResults.map(result => ({
          ...result,
          time: result.hours, // Mapping 'hours' from the data to 'time' for the state
          height: parseFloat(result.value), // Assuming 'value' is equivalent to 'height' and converting it to a number
        })));

        // After setting the search results, generate advice based on these results
        generateAdvice(filteredResults);
      } else {
        console.log("No data available");
        setSearchResults([]);
        setAdvice("No results found for the selected criteria. Try adjusting your search parameters.");
      }
    };

    fetchData();
  }, [router.isReady, date, time, city]);

  const generateAdvice = (results) => {
    if (results.length > 0) {
      const weatherConditions = results.map((result) => result.weather);
      if (weatherConditions.includes("Rainy")) {
        setAdvice("It looks like rain is expected. Don’t forget to bring an umbrella!");
      } else if (weatherConditions.includes("Sunny")) {
        setAdvice("The weather is sunny. It’s a great day for outdoor activities!");
      } else {
        setAdvice("The weather is varied. Make sure to check detailed forecasts before planning your day.");
      }
    } else {
      setAdvice("No results found for the selected criteria. Try adjusting your search parameters.");
    }
  };

  function goBack() {
    history.go(-1);
  }

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundSize: 'cover',
      backgroundImage: 'url("/wave.jpeg")'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="mb-5">
              <div className="card">
                <h5 className="card-header text-dark text-center">Search Results</h5>
                <div className="card-body">
                  {searchResults.map((result, index) => (
                    <div className="row text-center" key={index}>
                      <div className="col-md-2 my-auto">Date</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">{result.date}</div>
                      <div className="col-md-2 my-auto">Time</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">{result.time}</div>
                      <div className="col-md-2 my-auto">City</div>
                      <div className="col-md-10 rcorners2 mb-2 text-capitalize w-75 mx-auto">{result.city}</div>
                      <div className="col-md-2 my-auto">Height (Meters)</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">{result.height}</div>
                      <div className="col-md-2 my-auto">Wind (km/h)</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">{result.wind}</div>
                      <div className="col-md-2 my-auto">Weather</div>
                      <div className="col-md-10 rcorners2 mb-2 text-capitalize w-75 mx-auto">{result.weather}</div>
                    </div>
                  ))}
                </div>
                {/* <div className="table-responsive text-nowrap">
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>City</th>
                        <th>Height (Meters)</th>
                        <th>Wind (km/h)</th>
                        <th>Weather</th>
                      </tr>
                    </thead>
                    <tbody>
                      {searchResults.map((result, index) => (
                        <tr key={index}>
                          <td>{result.date}</td>
                          <td>{result.time}</td>
                          <td>{result.city}</td>
                          <td>{result.height}</td>
                          <td>{result.wind}</td>
                          <td>{result.weather}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div> */}
                {advice && <div className="alert alert-info mb-3 text-center">{advice}</div>}
                <div className="text-center">
                  <button onClick={goBack} className="btn btn-primary mb-3">
                    Back Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;
