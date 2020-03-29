const express = require("express");
const router = express.Router();
const courseRouter = require("./courses");
const Bootcamp = require("../models/Bootcamp");
const advancedResults = require("../middleware/advancedResults");
const { admin, publisher } = require("../types/roles");
const { authorize, protect } = require("../middleware/auth");
const {
  getBootcamps,
  getBootcamp,
  createBootcamp,
  updateBootcamp,
  deleteBootcamp,
  getBootcampsInRadius,
  bootcampPhotoUpload
} = require("../controllers/bootcamps");

// Re-route into other resource routes
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance/:unit").get(getBootcampsInRadius);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootcamps)
  .post(protect, authorize(admin, publisher), createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(protect, authorize(admin, publisher), updateBootcamp)
  .delete(protect, authorize(admin, publisher), deleteBootcamp);

router.route("/:id/photo").put(protect, bootcampPhotoUpload);

module.exports = router;
