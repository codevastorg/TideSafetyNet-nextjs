import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import TimePicker from 'react-time-picker';
import 'react-time-picker/dist/TimePicker.css';

const SearchSection = () => {
  const [trial, setTrial] = useState(5); // Initial number of trials
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('12:00');
  const [selectedCity, setSelectedCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const handleHourChange = time => {
    // Extracting only the hours part and appending ':00' for minutes
    const modifiedTime = time.split(':')[0] + ':00';
    setSelectedTime(modifiedTime);
  };

  const handleSearch = (event) => {
    event.preventDefault();
    // Decrease trial count when user searches records
    setTrial(prevTrial => prevTrial - 1);
    // Implement search logic here
    // Dummy search results for demonstration
    const dummyResults = [
      { date: '2024-02-10', time: '09:00', city: 'Mombasa', height: 5, wind: 10, weather: 'Sunny' },
      { date: '2024-02-10', time: '10:00', city: 'Malindi', height: 6, wind: 15, weather: 'Cloudy' },
      { date: '2024-02-10', time: '11:00', city: 'Kilifi', height: 7, wind: 20, weather: 'Rainy' },
    ];
    // Filter results based on selected date, time, and city
    const filteredResults = dummyResults.filter(result => 
      result.date === selectedDate.toISOString().split('T')[0] &&
      result.time === selectedTime &&
      result.city === selectedCity
    );
    setSearchResults(filteredResults);
    setShowResults(true);
  };

  return (
    <div className="col-md-10 m-auto">
      {trial < 1 ? (
        <div className="alert alert-danger">
          <p className="text-center m-auto">
            You have 0 trials left, contact Startups for premiumship via tel: +254 711 847 597
          </p>
        </div>
      ) : (
        <div className="alert alert-primary">
          <p className="text-center m-auto">
            You have {trial} trials left!
          </p>
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
                        onChange={date => setSelectedDate(date)}
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
                        onChange={event => setSelectedCity(event.target.value)}
                        className="form-select"
                      >
                        <option value="">Choose City</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Malindi">Malindi</option>
                        <option value="Kilifi">Kilifi</option>
                      </select>
                    </td>
                    <td>
                      <input type="submit" name="search" value="Search" className="btn btn-success" />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </form>
      </div>
      {showResults && (
        <div className="mb-5">
          <div className="card">
            <h5 className="card-header text-dark text-center">Search Results</h5>
            <div className="table-responsive text-nowrap">
              <table className="table table-hover">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Hours</th>
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchSection;
