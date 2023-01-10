// TODO 2: SETUP ROUTING (ROUTER)

// import express
const express = require("express");
// import controller patientController
const patientController = require("../controllers/patientController");
// object  router
const router = express.Router();
// routing home
router.get("/", (req, res) => {
    res.send("Hello Beryll Pradana Ramadhan!");
});


// route get all resources
router.get("/patients", patientController.index);
// route add resource
router.post("/patients", patientController.store);
// route update resouce
router.put("/patients/:id", patientController.update);
// Route delete 
router.delete("/patients/:id", patientController.destroy);
// Route show by id
router.get("/patients/:id", patientController.show);
// Route for search by name
router.get("/patients/search/:name", patientController.search);
// Route for search status positive
router.get("/patients/status/positive", patientController.positive);
// route for search status rocovered
router.get("/patients/status/recovered", patientController.recovered);
// route for search status dead
router.get("/patients/status/dead", patientController.dead);
// export routing
module.exports = router;