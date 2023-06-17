const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL database configuration
const connection = mysql.createConnection({
  host: 'containers-us-west-194.railway.app',
  user: 'root',
  password: 'VqNeruojCLDjlMKdVIdY',
  database: 'railway',
  port: '7017'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Set up routes
app.post('/submit', (req, res) => {
  const { name, email, phone } = req.body;
  const query = 'INSERT INTO users (name, email, phone) VALUES (?, ?, ?)';

  connection.query(query, [name, email, phone], (err, results) => {
    if (err) {
      console.error('Error executing MySQL query:', err);
      res.sendStatus(500);
      return;
    }
    console.log('Data inserted into MySQL');
    res.sendStatus(200);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
