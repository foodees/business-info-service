import React from 'react';
import $ from 'jquery';
import BusinessInfo from './businessInfo.jsx';
import BusinessTitle from './businessTitle.jsx';
import Hours from './hours.jsx'
import Maps from './maps.jsx'
import Reservation from './reservation.jsx'


class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			infors : {
				attributes: {
					GoodForMeal: true
				}
			},
			loaded: false
		}
	}

	componentDidMount() {
		var app = this;
		var searchParams = new URL( document.location ).searchParams
		var business_id = searchParams.get('business_id')
		$.ajax({
			url : 'http://localhost:3002/info/',
			type : 'GET',
			data: {business_id: business_id},
			success : function(data){
        		console.log("data", data);
        		app.setState({
          			infors: data,
          			loaded: true
        		})
      		},
      		error : function(){
        		console.log("not working ")
      		}
		})
  	}

	render() {
		return (
			<div>
				{this.state.loaded ? (
					<div>
						<BusinessTitle infors={this.state.infors}/>
						<Maps infors={this.state.infors}/>
						<Reservation infors={this.state.infors}/>
						<Hours infors={this.state.infors}/>
						<BusinessInfo infors={this.state.infors}/>
					</div>
				) : (
					<p>Loading</p>
				)}
				
			</div>
		)
	}
}

export default App;