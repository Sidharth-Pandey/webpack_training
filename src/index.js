import '.././index.css';
import {run} from './app/app.js';
import AlertService from './app/alert.service.js';
import ComponentService from './app/component.service.js';

const alertServices = new AlertService();
const componentService = new ComponentService();

run(componentService, alertServices);
