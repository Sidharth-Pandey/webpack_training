import './main.scss';
import {run} from './app/app.js';
import AlertService from './app/alert.service.js';
import ComponentService from './app/component.service.js';

const alertServices = new AlertService();
const componentService = new ComponentService();

console.log("this is me");
run(componentService, alertServices);
