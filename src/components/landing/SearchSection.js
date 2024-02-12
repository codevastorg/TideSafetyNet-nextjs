import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import { useRouter } from "next/router";

const SearchSection = () => {
  const [trial, setTrial] = useState(5); // Initial number of trials
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedCity, setSelectedCity] = useState("");
  const router = useRouter();

  const handleHourChange = time => {
    // Check if time is non-empty
    if (time) {
      // Extracting only the hours part and appending ':00' for minutes
      const modifiedTime = time.split(':')[0] + ':00';
      setSelectedTime(modifiedTime);
    } else {
      // Handle case when time is empty (e.g., user deletes everything)
      setSelectedTime('00:00'); // Set the time to a default value or handle it according to your requirements
    }
  };

  const handleSearch = (event) => {
    event.preventDefault();
    if (trial > 0) {
      setTrial(trial - 1); // Decrease trial by 1
      router.push({
        pathname: "/results",
        query: {
          date: selectedDate.toISOString().split("T")[0],
          time: selectedTime,
          city: selectedCity,
        },
      });
    } else {
      alert("You have no trials left. Please contact support for more trials.");
      // Optionally, prevent the form submission or navigation
    }
  };

  return (
    <div className="col-md-10 m-auto">
      {trial < 1 ? (
        <div className="alert alert-danger">
          <p className="text-center m-auto">
            You have 0 trials left, contact Startups for premiumship via tel:
            +254 711 847 597
          </p>
        </div>
      ) : (
        <div className="alert alert-primary">
          <p className="text-center m-auto">You have {trial} trials left!</p>
        </div>
      )}
      <div className="mb-5">
        <form onSubmit={handleSearch}>
          <div className="card">
            <h5 className="card-header text-dark">Search Records</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hours</th>
                    <th>City</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody className="table-border-bottom-0">
                  <tr>
                    <td>
                      <DatePicker
                        selected={selectedDate}
                        onChange={(date) => setSelectedDate(date)}
                        dateFormat="yyyy-MM-dd"
                        className="form-control"
                      />
                    </td>
                    <td>
                      <div className="custom-time-picker-container">
                        <TimePicker
                          value={selectedTime}
                          onChange={handleHourChange}
                          className="form-control"
                          clearIcon={null} // Hiding the clear icon since minutes are always '00'
                          format="HH:mm" // Display and select time in 24-hour format
                        />
                        <div className="tooltip">Choose hours</div>
                      </div>
                    </td>
                    <td>
                      <select
                        name="city"
                        value={selectedCity}
                        onChange={(event) =>
                          setSelectedCity(event.target.value)
                        }
                        className="form-select"
                      >
                        <option value="">Choose City</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Malindi">Malindi</option>
                        <option value="Kilifi">Kilifi</option>
                      </select>
                    </td>
                    <td>
                      <input
                        type="submit"
                        name="search"
                        value="Search"
                        className="btn btn-success"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
