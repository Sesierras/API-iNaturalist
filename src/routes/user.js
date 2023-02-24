const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

/*<<<<<<<<<<<<<<Routes>>>>>>>>>>>>>>>*/


module.exports = router;

/*<<New observation>>*/
router.post("/users/", (req, res) => {
  const user = new userSchema(req.body);
	user
  .save()
  .then(
    (data) => res.json(data),
    console.log("✅ New observation added to MongoDB-Atlas")
    )
    .catch((error) =>
    res.status(500).json({ message: "Error adding observation" })
    );
	});

  /*<<Get an specific number of observations sort by data>>*/
  router.get("/users", async (req, res) => {
    try {
      const data = await userSchema
      .find()
      .limit(10) // limit the number of observations to be returned
      .sort({ date: -1 }); // sort the observations by date in descending orders
      res.status(200).json(data); // Status code for OK (200)
    console.log("✅ All observations retrieved from MongoDB-Atlas");
  } catch (error) {
    res.status(500).json({ message: "Error retrieving observations" }); // Status code for Internal Server Error (500)
  }
});

/*<<Get an specific number of observations by ID>>*/
router.get("/users/id/:id", (req, res) => {
  const {id}= req.params;
  userSchema
  .findById(id)
  .then((data) => res.status(200).json(data), console.log("✅ Observation retrieved from MongoDB-Atlas"))
  .catch((err) => res.status(404).json({ message: "Observation not found"}))
});

/*<<Get an specific number of observations sort by catalogNumber >>*/
router.get("/users/catalogNumber/:catalogNumber", (req, res) => {
  const { catalogNumber } = req.params;
  userSchema
    .findOne({ catalogNumber })
    .then(
      (data) => res.status(200).json(data),
      console.log("✅ Observation retrieved from MongoDB-Atlas")
    )
    .catch((err) => res.status(404).json({ message: "Observation not found" }));
});
/*<<Get an specific number of observations sort by countryCode >>*/
router.get("/users/countryCode/:countryCode", async (req, res) => {
  try {
    const data = await userSchema
      .find({ countryCode: req.params.countryCode })
      .limit(10) // limit the number of observations to be returned
      .sort({ date: -1 }); // sort the observations by date in descending order

    if (data.length === 0) {
      //If no observation with that countryCode was found, return a 404 error
      return res
        .status(404)
        .json({ message: "No observations found in this Country" });
    }

    console.log(
      `✅ Observations in ${req.params.countryCode} retrieved from MongoDB-Atlas`
    );
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving observations" });
  }
});

/*<<Update an specific observations filter by ID>>*/
router.put("/users/id/:id", async (req, res) => {
  try {
    const filter = { _id: req.params.id };
    const update = { $set: req.body };
    const options = { new: true };

    const data = await userSchema.findOneAndUpdate(filter, update, options);

    if (!data) {
      return res
        .status(404)
        .json({ message: "No observations found by this ID" });
    }

    console.log(`✅ Observations in ${req.params.id} updated in MongoDB-Atlas`);
    res.json(data); //Send response with updated data
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating observations" });
  }
});

/*<<Delete a specific observation filter by ID>>*/
router.delete("/users/id/:id", async (req, res) => {
  try {
    const filter = { _id: req.params.id }; // filter by ID to delete a specific observation
    const result = await userSchema.deleteOne(filter);
console.log(result);
    if (result.deletedCount === 0) {
      return res
        .status(404)
        .json({ message: "No observations found by this ID" });
    }

    console.log(`✅ Observation ${req.params.id} deleted in MongoDB-Atlas`);
    res.json({ message: "Observation deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting observation" });
  }
});
