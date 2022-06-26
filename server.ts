const express = require('express');
import { Application } from 'express';
import { getAllKRs } from './server/routes';
import * as functions from 'firebase-functions';

const app: Application = express();

// Allow any method from any host and log requests
app.use((req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET');
    if('OPTIONS' === req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.use(express.static(__dirname + '/dist/kr-viewer'));

app.route('/getKRList').get(getAllKRs);

const port = 4201;

app.listen(process.env['PORT'] || port, function() {
    console.log(`Server listening at ${port}`);
})

exports.app = functions.https.onRequest(app);

