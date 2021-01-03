import * as React from "react";
import {render} from "react-dom";

import Amplify, {Auth} from 'aws-amplify';
import awsmobile from './aws-exports'; 
Amplify.configure(awsmobile);
Auth.configure(awsmobile);

import App from './Components/App'

render (<> <App/> </>, document.querySelector("#app"));