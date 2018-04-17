const express = require('express')
const bodyParser = require('body-parser')
const dbHelpers = require('../database/info')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.get('/info' ,function(req,res){
	console.log('dbHelpers: ', dbHelpers)
	var business_id = req.query.business_id;
	dbHelpers.find( business_id, function(err,data){
		if(err){
			res.status(404).send("not find");
		} else {
			res.status(200).send(data);
		}
	})
})

app.listen('3002', function () {
	console.log('listening on port 3002')
})
