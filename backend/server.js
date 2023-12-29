import express from "express";

const app = express();

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("hello");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "joke 1",
      content: "This is first joke",
    },
    {
      id: 2,
      title: "joke 2",
      content: "This is second joke",
    },
    {
      id: 3,
      title: "joke 3",
      content: "This is third joke",
    },
    {
      id: 4,
      title: "joke 4",
      content: "This is forth joke",
    },
    {
      id: 5,
      title: "joke 5",
      content: "This is fifth joke",
    },
  ];

  res.send(jokes);
});

app.listen(port, () => {
  console.log("app is running at", port);
});
