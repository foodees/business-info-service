import React from 'react';
import $ from 'jquery'
// NEED TRY TO MAKE THE REAL TIME WORK 
// MARK DOWN IT IS OPEN OR CLOSE
class Hours extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}

	componentDidMount () {
		// var currentURL = new URL( document.location ).searchParams;
		// var business_id = currentURL.get( 'business_id' )
		// console.log('business_id: ', business_id)
		// fetch('http://localhost:3002/info', {business_id: business_id})
		// $.ajax({
		// 	url: 'http://localhost:3002/info',
		// 	type: 'GET',
		// 	data: `business_id=${business_id}`,
		// 	success: function (d) {
		// 		console.log('success: ', d)
		// 	},
		// 	error: function (e) {
		// 		console.log('error: ', e)
		// 	}
		// })
		// $.get('http://localhost:3002/info', `business_id=${business_id}`, function (d) {
		// 	console.log('success: ', d)
		// })
	}

	showOpenOrClosed (str) {
  		var hours = new Date().getHours();
  		var mins = new Date().getMinutes();
  		var restaurantHours = this.props.infors.hours[str]; 

  		if(restaurantHours === undefined) {
  			return null;
  		} else {
	  		var hoursArr = restaurantHours.split("-");
	  		var openHour = hoursArr[0].split(":")[0];
	  		var openMin = hoursArr[0].split(":")[1];
	  		var closedHour = hoursArr[1].split(":")[0];

	  		if(hours > openHour && hours < closedHour && mins > openMin) {
	  			return (<span style={{color: 'green'}}>Open Now</span>)
	  		} else {
	  			return (<span style={{color: 'red'}}>Closed Now</span>)
	  		}

	  	}
  	}

  	isToday (day,str) {
  		var x = new Date().getDay()
  		if (day === x) {
  			return this.showOpenOrClosed(str)
  		} else {
  			return null;
  		}
  	}

	render () {
		return (
			<div>
			 	<div className="smalltable">
 					<p></p>
 					<p>Price range</p>
 				</div>

				<h3 className="hours">Hours</h3>
				<table className="hoursTable">
				<tbody>
					<tr>
						<th><b>Mon</b></th>
							<td>{this.props.infors.hours.Monday || 'Closed Today'} {this.isToday(1,'Monday')}</td>
					</tr>
					<tr>
						<th><b>Tue</b></th>
							<td>{this.props.infors.hours.Tuesday || 'Closed Today'} {this.isToday(2,'Tuesday')}</td>
					</tr>
					<tr>
						<th><b>Wed</b></th>
							<td>{this.props.infors.hours.Wednesday || 'Closed Today'} {this.isToday(3,'Wednesday')}</td>
					</tr>
				  <tr>
				  	<th><b>Thu</b></th>
				  		<td>{this.props.infors.hours.Thursday || 'Closed Today'} {this.isToday(4,'Thursday')}</td>
				  </tr>
					<tr>
						<th><b>Fri</b></th>
							<td>{this.props.infors.hours.Friday || 'Closed Today'} {this.isToday(5,'Friday')}</td>
					</tr>
					<tr>
						<th><b>Sat</b></th>
							<td>{this.props.infors.hours.Saturday || 'Closed Today'} {this.isToday(6,'Saturday')}</td>
					</tr>
					<tr>
						<th><b>Sun</b></th>
							<td>{this.props.infors.hours.Sunday || 'Closed Today'} {this.isToday(0,'Sunday')}</td>
					</tr>
					</tbody>
				</table>
				<p><i class="fas fa-pencil-alt"></i>    <a className="typeFood" href={`https://www.yelp.com/biz_attribute?biz_id=${this.props.infors.business_id}`}>Edit business info</a></p>
			</div>
		)
	}
}

export default Hours;