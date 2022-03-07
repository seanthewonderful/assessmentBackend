const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json()); // When we want to be able to accept JSON.



app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/fortunes", (req, res) => {
  const fortunes = ["You will most likely make it through the day.",
          "You will soon encounter a temporary friend.",
          "Soon, $10 or more will come your way.",
          "Act like a flower: throw your seed to the wind and reproduce before you wither away.",
          "Like a rushing river, life will roughly push you downstream much of the time."
        ]
  let randomIndex = Math.floor(Math.random() * fortunes.length)
  let randomFortune = fortunes[randomIndex]

  res.status(200).send(randomFortune)
})

app.get("/api/ducks", (req, res) => {
  const quack = "Quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quackquack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack quack..."
  res.send(quack)
})

let fingers = []

app.post("/api/fingers", (req, res) => {
  const { newFinger } = req.body
  fingers.push(newFinger)
  console.log(fingers)
  res.status(200).send(fingers)
})

app.delete("/api/delete/", (res) => {
  fingers.pop()
  res.status(200).send(fingers)
})

// app.put("/api/edit/", )

app.listen(4000, () => console.log("Server running on 4000"));
