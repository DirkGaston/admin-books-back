const express = require('express');

const app = express();

const PORT  = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.json({ message: "Ok!" })
});

app.listen(PORT, (err) => {
    if (err) {
        console.error(err);
        throw err;
    }
    console.log(`server listening on port ${PORT}`);
})
