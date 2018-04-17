import React from 'react';

class Reservation extends React.Component {
	constructor (props) {
		super(props)
		this.state = {}
	}
	render() {
		return(
			<div className="smalltable">
				<h3>Make a Reservation</h3>
				<div>
					<form>
						<input type="text" name="firstname" value="some day"/>
						<br/>
						<input type="text" name="firstname" value="time"/>
						<input type="text" name="firstname" value="how many"/>
						<br/>
						<input className="ReservationButton"type="submit" value="Find a Table" />
					</form>
				</div>
			</div>
		)
	}
}

export default Reservation;