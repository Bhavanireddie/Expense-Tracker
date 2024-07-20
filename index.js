@@ -1,10 +1,10 @@
import React from 'react';
import ReactDOM from 'react-dom';
import React from "react";
import ReactDOM from "react-dom";

import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'material-icons/css/material-icons.css'
import './index.css';
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import "material-icons/css/material-icons.css";
import "./index.css";

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
 
