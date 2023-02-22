const express = require("express");
const router = express.Router();
const userSchema = require("../models/user");

/*<<<<<<<<<<<<<<Routes>>>>>>>>>>>>>>>*/

/*<<New observation>>*/
router.post("/users", (req, res) => {
	const user = new userSchema(req.body);
	user
	.save()
	.then(
		(data) => res.json(data),
		log("✅ New observation added to MongoDB-Atlas")
		)
		.catch((error) => res.json({ message: error.message }));
	});

/*<<Get an specific # of observations>>*/
// router.get("/users", (req, res) => {
//   userSchema
//     .find()
//     .limit(1)            //limit the number of observations to be returned
//     .sort({ date: -1 })                //sort the observations by date in descending orders
//     .then((data) => {
//       res.status(200).json(data); // Status code for OK (200)
//       console.log("✅ All observations retrieved from MongoDB-Atlas");
//     })
//     .catch((error) => {
//       res.status(500).json({ message: "Error retrieving observations" }); // Status code for Internal Server Error (500)
//     });
// });

module.exports = router;

router.get("/users", async (req, res) => {
  try {
    const data = await userSchema
      .find()
      .limit(1) // limit the number of observations to be returned
      .sort({ date: -1 }); // sort the observations by date in descending orders
    res.status(200).json(data); // Status code for OK (200)
    console.log("✅ All observations retrieved from MongoDB-Atlas");
  } catch (error) {
    res.status(500).json({ message: "Error retrieving observations" }); // Status code for Internal Server Error (500)
  }
});
module.exports = router;
