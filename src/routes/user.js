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

  /*<<Get an specific number of observations>>*/
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

/*<<Get an specific number of observations>>*/
router.get("/users/id/:id", (req, res) => {
  const {id}= req.params;
  userSchema
  .findById(id)
  .then((data) => res.status(200).json(data), console.log("✅ Observation retrieved from MongoDB-Atlas"))
  .catch((err) => res.status(404).json({ message: "Observation not found"}))
});


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
/*<<Update an observation>>*/

router.get("/users/countryCode/:countryCode", async (req, res) => {
  try {
    const data = await userSchema
      .find({ countryCode: req.params.countryCode })
      .limit(10) // limit the number of observations to be returned
      .sort({ date: -1 }); // sort the observations by date in descending order

    if (data.length === 0) {
      // Si no se encontró ninguna observación con ese countryCode, devuelve un error 404
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
