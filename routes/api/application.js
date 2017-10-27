exports.IsAuthenticated = function(req, res, next){
    // console.log(req);
	if(req.isAuthenticated()){
		console.log("IsAuthenticated worked");
		next();
	} else {
		console.log("IsAuthenticated failed");
		//do something here to redirect or kindly tell the user to login first. or display a nice error page
		next(new Error(401));
		// next(res.status(401).send('not logged in!'));
	}
}

exports.destroySession = function(req, res, next) {
	console.log("destroying session");
	req.logOut();
	req.session.destroy()
	res.redirect("/")
}