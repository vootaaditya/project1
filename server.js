const express = require('express');

const app = express();
const port = process.env.PORT || 8080;
const public_path = express.static(__dirname + '/dist');
const index_path = __dirname + '/dist/app.html';

app.use(public_path);
app.get('*', function (request, response) {
    response.sendFile(index_path, function (error) {
        if (error) {
            console.log(error);
        }
    });
});
app.listen(port);
console.log("Listening at http://localhost:" + port);