
var fs = require('fs');

import Responses from '../../configs/responses';
import errorMessages from '../../configs/errorMessages';


export default class Game {
    constructor() {
        this.response = new Responses();
    }
}