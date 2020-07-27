
import express from "express"
import tourController from "../controller/tourcontrol"

const router = express.Router();

//to get the top5 best deals
router.get('/top5',tourController.aliasTopTours,tourController.getAllTours)

//get tour statistics with minimal fields
router.get('/tourstats',tourController.getTourStats)

//to see all the available tours
router.get('/all',tourController.getAllTours)

//to get the tour by id
router.get('./:id',tourController.getTour)
  

module.exports = router;
