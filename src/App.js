import React from "react";
import "./App.css";
import PassengerInfo from "./components/passenger-info";
import passengers from "./utils/mock-passenger-data";

class App extends React.Component {
  state = {
    passengers: passengers,
  };

  render() {
    return (
      <div className="App">
        {this.state.passengers.map((passenger, index) => {
          return (
            <div key={index}>
              <PassengerInfo passenger={passenger} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
