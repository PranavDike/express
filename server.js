import express from 'express';

const app = express();

// Middleware to parse JSON requests
app.use(express.json());
// Middleware to parse URL-encoded requests
app.use(express.urlencoded({ extended: true }));

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Middleware to handle CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

// Route to handle GET requests
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello from Node.js API!" });
});


// Route to handle POST requests
app.post('/', (req, res) => {
  res.json({ message: 'Hello, World!', data: req.body });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
