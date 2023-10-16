const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/test', (req, res) => {
    res.json({ message: 'Hello, World!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server Listening on port:", PORT);
});
