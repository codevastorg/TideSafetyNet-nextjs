import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { get, ref } from "firebase/database";
import { firebase_database } from "../firebase/config";
import Link from "next/link";

const ResultsPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [advice, setAdvice] = useState("");
  const router = useRouter();
  const { date, time, city } = router.query;

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      // Adjust the path as necessary based on your database structure
      const snapshot = await get(ref(firebase_database, "records"));

      if (snapshot.exists()) {
        const data = snapshot.val();
        const recordsArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));

        const filteredResults = recordsArray.filter(
          (record) =>
            record.date === date &&
            record.hours === time &&
            record.city.toLowerCase() === city.toLowerCase()
        );

        setSearchResults(
          filteredResults.map((result) => ({
            ...result,
            time: result.hours, // Mapping 'hours' from the data to 'time' for the state
            height: parseFloat(result.value), // Assuming 'value' is equivalent to 'height' and converting it to a number
          }))
        );

        // After setting the search results, generate advice based on these results
        generateAdvice(filteredResults);
      } else {
        console.log("No data available");
        setSearchResults([]);
        setAdvice(
          "No results found for the selected criteria. Try adjusting your search parameters."
        );
      }
    };

    fetchData();
  }, [router.isReady, date, time, city]);

  const generateAdvice = (results) => {
    if (results.length > 0) {
      let advice =
        "It's a great day for outdoor activities, but let's check the conditions.";

      // Check each result and accumulate advice
      results.forEach((result) => {
        const { weather, wind, value } = result; // Destructure for easier access

        // Weather condition advice
        if (weather === "rainy") {
          advice +=
            " Rainy weather might not be ideal for swimming or surfing, but it could be good for fishing.";
        } else if (weather === "sunny") {
          advice +=
            " Sunny weather is perfect for surfing and swimming, especially if the wind and tide conditions are favorable.";
        } else if (weather === "cloudy") {
          advice +=
            " Cloudy weather is suitable for fishing and possibly for surfing if the wind and tide conditions are right.";
        }

        // Wind speed advice
        const windSpeedValue = parseFloat(wind); // Ensure windSpeed is a number
        if (windSpeedValue > 20) {
          advice +=
            " High wind speeds might make surfing challenging and fishing uncomfortable.";
        } else if (windSpeedValue <= 20 && windSpeedValue >= 10) {
          advice += " Moderate wind speeds could be good for surfing.";
        }

        // Tide height advice
        const tideHeightValue = parseFloat(value); // Ensure tideHeight is a number
        if (tideHeightValue < 0.5) {
          advice += " Low tide might not be ideal for swimming or surfing.";
        } else if (tideHeightValue >= 0.5 && tideHeightValue <= 2) {
          advice += " Medium tide height is generally good for all activities.";
        } else if (tideHeightValue > 2) {
          advice +=
            " High tide might offer great conditions for surfing, but be cautious while swimming.";
        }
      });

      setAdvice(advice);
    } else {
      setAdvice(
        "No results found for the selected criteria. Try adjusting your search parameters."
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundSize: "cover",
        backgroundImage: 'url("/wave.jpeg")',
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="mb-5">
              <div className="card" style={{ borderRadius: "20px" }}>
                <h5 className="card-header text-dark text-center">
                  Search Results
                </h5>
                <div className="card-body">
                  {searchResults.map((result, index) => (
                    <div className="row text-center" key={index}>
                      <div className="col-md-2 my-auto">Date</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">
                        {result.date}
                      </div>
                      <div className="col-md-2 my-auto">Time</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">
                        {result.time}
                      </div>
                      <div className="col-md-2 my-auto">City</div>
                      <div className="col-md-10 rcorners2 mb-2 text-capitalize w-75 mx-auto">
                        {result.city}
                      </div>
                      <div className="col-md-2 my-auto">Height (Meters)</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">
                        {result.height}
                      </div>
                      <div className="col-md-2 my-auto">Wind (km/h)</div>
                      <div className="col-md-10 rcorners2 mb-2 w-75 mx-auto">
                        {result.wind}
                      </div>
                      <div className="col-md-2 my-auto">Weather</div>
                      <div className="col-md-10 rcorners2 mb-2 text-capitalize w-75 mx-auto">
                        {result.weather}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="alert alert-info mb-3 text-center">
                  {advice}
                </div>
                <div className="text-center d-grid gap-3 d-sm-flex justify-content-sm-center">
                  <Link
                    className="btn btn-primary btn-lg px-4 gap-3 mb-3"
                    style={{ textTransform: "none" }}
                    href="/dashboard/homepage/#search"
                  >
                    Search Again
                  </Link>

                  <Link
                    className="mb-3 btn btn-outline-secondary btn-lg px-4"
                    style={{ textTransform: "none" }}
                    href=""
                  >
                    Seek More Advice
                  </Link>
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
