import React from "react";
import "./passenger-info.css";

class PassengerInfo extends React.Component {
  state = {
    showInformation: true,
    visa: false,
  };

  toggleInformation = () => {
    console.log("button clicked");
    this.setState({ showInformation: !this.state.showInformation });
    console.log(this.state.showInformation);
  };

  render() {
    return (
      <div className="passenger-card">
        <section className="intro">
          <p>PASSENGER INFO</p>
          <div>
            <h3>Hide information</h3>
            <label class="switch">
              <input type="checkbox" onClick={this.toggleInformation} />
              <span class="slider round"></span>
            </label>
          </div>
        </section>

        {this.state.showInformation ? (
          <div>
            <div id="upper-part">
              <section className="user-info">
                <div>
                  <img src={this.props.passenger.image} />
                  <div id="name-interactions">
                    <h3>{this.props.passenger.name}</h3>
                    <p>{this.props.passenger.interactions} interactions</p>
                  </div>
                </div>
                <p>EMAIL</p>
                <h3>{this.props.passenger.email}</h3>
                <p>PHONE</p>
                <h3>{this.props.passenger.phone}</h3>
                <p>LOCATION</p>
                <h3>{this.props.passenger.location}</h3>
              </section>
              <section className="payment-methods">
                <div>
                  <img src="data:image/png;base64,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" />
                </div>
                <div>
                  <img src="data:image/png;base64,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" />
                </div>
                <div>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWtHxnoUwBi1dDS2s0n2Htjt1vTOUsd2xvw&usqp=CAU" />
                </div>
                <div>
                  <img src="https://www.apple.com/v/apple-pay/i/images/overview/og_image.png?202010020241" />
                </div>
              </section>
            </div>

            <section className="journey-details">
              <div id="journey-icons">
                <i class="fas fa-check"></i>
                <hr id="journey-line" />
                <i class="fas fa-map-marker-alt"></i>
              </div>
              <div className="journey-points">
                <div>
                  <h3>{this.props.passenger.journeys[0].startPoint}</h3>
                  <p>{this.props.passenger.journeys[0].startPointDetails}</p>
                </div>
                <div id="endpoint">
                  <h3>{this.props.passenger.journeys[0].endPoint}</h3>
                  <p>{this.props.passenger.journeys[0].endPointDetails}</p>
                </div>
              </div>
              <hr id="horizontal-line" />
              <div className="journey-facts">
                <div>
                  <h3>{this.props.passenger.journeys[0].distance} km</h3>
                  <p>Distance</p>
                </div>
                <div>
                  <h3>{this.props.passenger.journeys[0].time} min</h3>
                  <p>Time</p>
                </div>
                <div>
                  <h3>${this.props.passenger.journeys[0].price}</h3>
                  <p>Price</p>
                </div>
                <div>
                  <h3>{this.props.passenger.journeys[0].energy} kWh</h3>
                  <p>Energy</p>
                </div>
              </div>
            </section>
          </div>
        ) : null}
      </div>
    );
  }
}

export default PassengerInfo;
