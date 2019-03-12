import React from "react";

	class Weather extends React.Component {
		render() {
			return(
				<div>
					<p>Weather comp</p>
					{ this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
					{ this.props.temperature && <p>Temperature: {this.props.temperature}</p> }
					{ this.props.description && <p>Conditions: {this.props.description}</p> }
					{ this.props.humidity && <p>Humidity: {this.props.humidity}</p> }
					{ this.props.pressure && <p>Pressure: {this.props.pressure}</p> }
					{this.props.error && <p>{this.props.error}</p> }
				</div>
			);
		}
	}
	

export default Weather;