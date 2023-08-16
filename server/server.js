const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors'); 

const app = express();
const port = 3000;
app.use(cors());

// Configure MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Satya@222',
  database: 'room'
});

db.connect(err => {
  if (err) {
    console.error('Database connection error:', err);
  } else {
    console.log('Connected to the database');
  }
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Handle user registration
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  const query = 'INSERT INTO users (username, email, password) VALUES (?, ?, ?)';
  
  db.query(query, [username, email, password], (err, result) => {
    if (err) {
      console.error('Registration error:', err);
      res.status(500).json({ message: 'Registration failed' });
    } else {
      console.log('User registered:', result);
      res.status(200).json({ message: 'Registration successful' });
    }
  });
});

// Handle user login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const query = 'SELECT * FROM users WHERE username = ? AND password = ?';

  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Login error:', err);
      res.status(500).json({ message: 'Login failed' });
    } else {
      if (result.length > 0) {
        console.log('User logged in:', result);
        res.status(200).json({ message: 'Login successful' });
      } else {
        res.status(401).json({ message: 'Invalid credentials' });
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
