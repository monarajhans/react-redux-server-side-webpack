var React = require("react");
import ReactDOM from 'react-dom';
var Application = require("./Application");

ReactDOM.render(
	<Application url={location.pathname + (location.search || "")} />,
	document.getElementById("content")
);

var serverSideStyle = document.getElementById("server-side-style");
if(serverSideStyle)
	document.getElementsByTagName("head")[0].removeChild(serverSideStyle);
