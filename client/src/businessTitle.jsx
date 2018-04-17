import React from 'react';

const BusinessTitle = function(props){
	var checkStar = function (num) {
		if(num === 5){
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='five-stars'/>);
		} else if (num === 4.5) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='four-half-stars'/>);
		} else if (num === 4) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='four-stars'/>);
		} else if (num === 3.5) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='three-half-stars'/>);
		} else if (num === 3) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='three-stars'/>);
		} else if (num === 2.5) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='two-half-stars'/>);
		} else if (num === 2) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='two-stars'/>);
		} else if (num === 1.5) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='one-half-stars'/>);
		} else if (num === 1) {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='one-stars'/>)
		} else {
			return (<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" className='no-stars'/>)
		}
	}

	var checkRange = function(num){
		if (num === 1) {
			return '$';
		} else if (num === 2) {
			return '$$';
		} else if (num === 3) {
			return '$$$';
		}
	}


	return(
		<div>
	 		<h1 className="title">{props.infors.name}</h1>
	 		<p>{checkStar(props.infors.stars)}<span>{props.infors.review_count}  reviews</span></p>
	 		<p>{checkRange(props.infors.attributes.RestaurantsPriceRange2)}<span>{props.infors.categories.map((item) => <a className="typeFood" href={`https://www.yelp.com/c/las-vegas/${item.substr(0,1).toLowerCase() + item.substr(1,item.length)}`}> {item} </a>)}  </span></p>
	 	</div>
 )	
}

export default BusinessTitle;