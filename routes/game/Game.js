
var fs = require('fs');
var request = require('request');
var requestPromise = require('request-promise');
var utils = require('../../utils/Utils');


import Responses from '../../configs/responses';
import errorMessages from '../../configs/errorMessages';


export default class Game {
    constructor() {
        this.response = new Responses();
    }

    downloadTestCases = async () => {
        let response;
        try {

            response =  await request('https://s3-eu-west-1.amazonaws.com/yoco-testing/tests.json', function (error, response, body){ return body})  

            return this.response.success(200, 'Test cases successfully downloaded', response)

        } catch (error) {
            return this.response.error(
                400,
                "Could not download test cases",
                error
            )
        }

    }

    playerAWins = async (body) => {

         /**
         * INPUT OBJECT EXAMPLE
         * { 
         *  "playerA" : [
         *      "9S",
         *      "2S"
         * ],
         *  "playerB" : [
         *      "5D",
         *      "7C"
         * ]
         * }
         */

         const sumOfPlayerA = utils.calculateSum(body.playerA);
         const sumOfPlayerB = utils.calculateSum(body.playerB)
    }
}