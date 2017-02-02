import $ from 'jquery';                   // system.js extends ES6 module loader and knows how to get jquery
import {Car} from './classes/car.js';
import {Drone} from './classes/drone.js';
import {fleet} from './fleet-data.js';
import {FleetDataService} from './services/fleet-data-service.js';
import {Button} from './ui/button.js';

let b = new Button('Click Me');
b.appendToElement($('body'));
