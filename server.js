const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 9352;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
    console.log('I am running')
});
