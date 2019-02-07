import express from 'express';
import Game from './Game';

const gameClass = new Game();
const router = express.Router()

router.get("/", function (request, result) {

    result.send("Hello Yoco Jack");
});

router.get("/testcases", function (request, result) {
    gameClass
    .then(response => {
        result.send(response)
    })
    .catch(error => {
        result.send(error);
    })

})



export default router