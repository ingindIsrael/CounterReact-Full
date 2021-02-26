//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

import Counter from "./component/counter";

var n = 0;
/*
var set = setInterval(function() {
	if (stopi === true) {
		clearTimeout(set);
	} else if (resumi === true) {
		setTimeout(set);
	} else {
		ReactDOM.render(
			<Counter seconds={n.toString()} />,
			document.querySelector("#app")
		);
	}
	n++;
}, 1000);
*/

ReactDOM.render(
	<Counter seconds={n.toString()} />,
	document.querySelector("#app")
);

//render your react application
