const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { id, fullName, address, status } = req.body;
    let fee = 0;
    if (status === 'student') fee = 10;
    else if (status === 'staff') fee = 50;
    else if (status === 'volunteer') fee = 0;

    res.json({ id, fullName, address, status, fee });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
