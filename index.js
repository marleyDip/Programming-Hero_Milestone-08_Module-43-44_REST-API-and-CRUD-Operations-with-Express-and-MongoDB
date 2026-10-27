import express from "express";

const app = express();
const PORT = process.env.PORT || 5000;

// request -> req
// Response -> res
// Callback function
app.get("/", (req, res) => {
  res.send("Hello world from ExpressJS");
});

app.get("/about", (req, res) => {
  res.send("About Page");
});

app.get("/dashboard", (req, res) => {
  res.send("Dashboard Page");
});

app.get("/contact", (req, res) => {
  res.send("Contact Page from ExpressJS Today!");
});

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
