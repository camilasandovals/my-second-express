import express from 'express';

const PORT = 3000;

const app = express();

app.get('/' , (req, res) => {
    res.send("I am root")
})

app.get('/hello', (req, res) => {
   res.send("Hello there"); 
});

app.listen(PORT, () => {
    console.log(`Listening to the http://localhost:${PORT}`)
})

