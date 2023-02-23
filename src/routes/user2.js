

/*<<Get an specific ID  of observation>>*/
 router.get("/users/:id", async (req, res) => {
   try {
     const data = await userSchema.findById(req.params.id); // Busca un documento por su ID

     if (!data) {
       // Si no se encontró ningún documento con ese ID, devuelve un error 404
       return res.status(404).json({ message: "Observation not found" });
     }
     console.log(
       `✅ Observation with ID ${req.params.id} retrieved from MongoDB-Atlas`
     );
     res.json(data);
   } catch (error) {
     console.error(error);
     res.status(500).json({ message: "Error retrieving observation" });
   }
 });


/*<<New observation>>*/
module.exports = router;


router.get("/users:_id", (req, res) => {
  const {_id} = req.params; // Get the ID from the URL parameters
	userSchema
  .findById(req.params._id) // Find the observation with that ID in the database
  .then(
    (data) => res.json(data),
    console.log("✅ New observation added to MongoDB-Atlas")
    )
    .catch((error) =>
    res.status(500).json({ message: "Error adding observation" })
    );
	});


	  router.get("/users/countryCode", async (req, res) => {
    try {
      const data = await userSchema.find({ countryCode: req.params.countryCode }); // Busca todas las observaciones con countryCode igual a "AU"

      if (data.length === 0) {
        // Si no se encontró ninguna observación con ese countryCode, devuelve un error 404
        return res
          .status(404)
          .json({ message: "No observations found in Australia" });
      }
      console.log(`✅ Observations in Australia retrieved from MongoDB-Atlas`);
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error retrieving observations" });
    }
  });