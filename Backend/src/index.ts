const express = require('express');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
