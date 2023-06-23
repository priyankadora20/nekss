const { Router } = require("express");
const User = require("../models/User");
const Data = require("../models/Senddata");

const authRouter = Router();

authRouter.post("/signup", async (req, res) => {
  try {
    const user = new User(req.body);
    const savedUser = await user.save();
    return res.status(201).send({ message: "Signup successful", user: savedUser, user: savedUser["_doc"]});
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).send({ message: "Error occurred" });
  }
});


authRouter.post("/login", async(req, res) => {
    const { username, password } = req.body;
    const validUser = await User.find({ username, password });
  
    if (validUser.length < 1) {
        return res.status(401).send({message:"Invalid Credentials"})
    }
    return res.send(validUser)
})


authRouter.post("/data", async (req, res) => {
  try {
    // Check if the user is authenticated
    if (!req.session.userId) {
      return res.status(401).send({ message: "Unauthorized" });
    }

    // Extract the data from the request body
    const { name, work} = req.body;
    const userId = req.session.userId;
   // const datas = new Data(req.body);
   // const savedDatas = await Data.save();
    // Create a new data document
  if (!name || !work) {
      return res.status(400).send({ message: "Name and work fields are required" });
    }

    const data = new Data({
      userId: userId,
      name: name,
      work: work
    
    });

    // Save the data in the user's database
    const savedData = await data.save();

    return res.status(201).send({ message: "Data posted successfully", data: savedData });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).send({ message: "Error occurred" });
  }
});

module.exports = authRouter;