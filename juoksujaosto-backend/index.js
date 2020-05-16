const express = require("express");
const app = express();

let mockData = [
  {
    id: 1,
    runner: "Linda",
    date: "2020-01-10T17:30:31.098Z",
    completed: true,
    km: 24,
  },
  {
    id: 2,
    runner: "Pauliina",
    date: "2020-01-10T18:39:34.091Z",
    completed: true,
    km: 12,
  },
  {
    id: 3,
    runner: "Oona",
    date: "2020-01-10T19:20:14.298Z",
    completed: true,
    km: 22,
  },
];

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/api/notes", (req, res) => {
  res.json(mockData);
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
