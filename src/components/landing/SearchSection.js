import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import "react-time-picker/dist/TimePicker.css";
import { useRouter } from "next/router";

const SearchSection = () => {
  const [trial, setTrial] = useState(5); // Initial number of trials
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("12:00");
  const [selectedCity, setSelectedCity] = useState("");
  const router = useRouter();

  const handleHourChange = (time) => {
    // Check if time is non-null
    if (time) {
      // Format the Dayjs object to a string with format 'HH:mm'
      const timeString = time.format('HH:mm');
      // Extracting only the hours part and appending ':00' for minutes
      const modifiedTime = timeString.split(':')[0] + ':00';
      setSelectedTime(modifiedTime);
    } else {
      // Handle case when time is null (e.g., user deletes everything)
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
      <div className="mb-5 container" id="search">
        <form onSubmit={handleSearch}>
          <div className="card">
            <h5 className="card-header text-dark text-center">Search Records</h5>
            <div className="text-nowrap">
              <div className="card-body text-center p-auto">
                <div className="row">
                  <div className="col-md-2 my-auto">Date</div>
                  <div className="col-md-10 mb-2">
                    <DatePicker
                      wrapperClassName="datePicker"
                      selected={selectedDate}
                      onChange={(date) => setSelectedDate(date)}
                      dateFormat="yyyy-MM-dd"
                      className="form-control mx-auto timh"
                    />
                    <div className="tooltip">Choose hours</div>
                  </div>
                  <div className="col-md-2 my-auto">Hours</div>
                  <div className="col-md-10 mb-2">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <TimePicker
                        views={['hours', 'minutes']}
                        value={selectedTime}
                        onChange={handleHourChange}
                        className="form-control w-75 p-0 mx-auto"
                        clearIcon={null} // Hiding the clear icon since minutes are always '00'
                        format="HH:mm" // Display and select time in 24-hour format
                        ampm={false}
                      />
                    </LocalizationProvider>
                    {/* <div className="tooltip">Choose hours</div> */}
                  </div>
                  <div className="col-md-2 my-auto">City</div>
                  <div className="col-md-10 mb-2">
                    <select
                      name="city"
                      value={selectedCity}
                      onChange={(event) =>
                        setSelectedCity(event.target.value)
                      }
                      className="form-select w-75 mx-auto timh"
                    >
                      <option value="">Choose City</option>  {/* Just in case a user fails to choose a city, Mombasa is taken as the default value */}
                      <option value="Mombasa">Mombasa</option>
                      <option value="Malindi">Malindi</option>
                      <option value="Kilifi">Kilifi</option>
                    </select>
                  </div>
                  <div className="col-md-12 mb-2">
                    <input
                      type="submit"
                      name="search"
                      value="Search"
                      className="btn btn-success"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchSection;
