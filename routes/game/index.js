import express from 'express';
import Game from './Game';

const gameClass = new Game();
const router = express.Router()

router.get("/", function (request, result) {

    result.send("Hello Yoco Jack");
});

export default router