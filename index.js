import "dotenv/config";
import express from "express";
import cors from "cors";
import expressSanitizer from 'express-sanitizer';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(expressSanitizer());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Docker Back');
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});