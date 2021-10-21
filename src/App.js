import React, { Component } from 'react';
import './App.css';
export default class App extends Component {
	state = {
		flagImg: '//restcountries.com/data/png/per.png',
	};
	selectCountryHandler = (e) => {
		this.setState({ countryCodeValue: e.target.value });
	};

	countryFlagHandler = () => {
		const select = document.querySelector('#country');
		this.setState({
			flagImg: `https://flagpedia.net/data/flags/h80/${select.selectedOptions[0].dataset.countrycode.toLowerCase()}.webp`
		});
	};

	render() {
		return (
			<div className="page">
        <h1>Choose the Country</h1>
						<div className="select-box" onChange={this.countryFlagHandler}>
              <div className="div1">
              <p>Country Flag</p>
							<img src={this.state.flagImg} alt="country-flag" id="img" className="flag-img" />
              </div>
              <div className="div2"> 
              <p>Calling code:</p>
              <p className="same">{this.state.countryCodeValue}</p>
              </div>
							<select
								id="country"
								onChange={this.selectCountryHandler}
								defaultValue={this.state.countryCodeValue}
							>
								<option value="" hidden>
									Select Country
								</option>
								<option data-countryCode="IN" value="91">
									India 
								</option>
								<option data-countryCode="CH" value="86">
									China
								</option>
								<option data-countryCode="SK" value="82">
									South Koria 
								</option>
								<option data-countryCode="JP" value="81">
									  Japan
								</option>
                </select>
						</div>
					
				
			
				</div>
		
		);
	}
}