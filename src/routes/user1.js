// Importamos la librería Express
const express = require("express");

// Importamos el modelo de usuario (userSchema)
const userSchema = require("../models/user");

// Creamos el objeto router de Express
const router = express.Router();

// Definimos la ruta GET para obtener los últimos ingresos por fecha y limitar la respuesta a un máximo de 50 registros
router.get("/users", async (req, res) => {
  try {
    const data = await userSchema
      .find()
      .sort({ date: -1 }) // Ordena los documentos por fecha en orden descendente
      .limit(50); // Limita la respuesta a un máximo de 50 registros

    console.log("✅ Some observations retrieved from MongoDB-Atlas");
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error retrieving observations" });
  }
});

// Definimos la ruta POST para agregar un nuevo ingreso
router.post("/users", async (req, res) => {
  try {
    const newUser = new userSchema(req.body); // Crea una nueva instancia de userSchema con los datos de la solicitud
    const savedUser = await newUser.save(); // Guarda el nuevo usuario en la base de datos

    console.log("✅ Observation added to MongoDB-Atlas");
    res.json(savedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error adding observation" });
  }
});

// Definimos la ruta GET para obtener un ingreso específico por su ID
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

// Definimos la ruta PUT para actualizar un ingreso existente por su ID
router.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await userSchema.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ); // Busca un documento por su ID y lo actualiza con los datos de la solicitud

    if (!updatedUser) {
      // Si no se encontró ningún documento con ese ID, devuelve un error 404
      return res.status(404).json({ message: "Observation not found" });
    }

    console.log(
      `✅ Observation with ID ${req.params.id} updated in MongoDB-Atlas`
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating observation" });
  }
});

// Definimos la ruta DELETE para eliminar un ingreso existente por su ID
router.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await userSchema.findByIdAndDelete(req.params.id); // Busca un documento por su ID y lo elimina

    if (!deletedUser) {
      // Si no se encontró ningún
      return res.status(404).json({ message: "Observation not found" });
    }
    console.log(
      `✅ Observation with ID ${req.params.id} deleted from MongoDB-Atlas`
    );
    res.json(deletedUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting observation" });
  }
});
