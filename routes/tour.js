import express from "express"

const router = express.Router()

import tourController from "../controller/tourcontrol"

//importing helpers to check the routing parameters are present or not
import helper from "../helpers/check"

//it will check the url is id's are present or not
router.param('id', helper.checkID);

//to get all the tours details
router.get('/all',tourController.getAllTours)
//to add new tour
router.post('/newtour',helper.checkBody, tourController.createTour)

router
  .route('/:id')
  
//get a single tour data by providing an id in url
  .get(tourController.getTour)
  
//update a single tour data by providing an id in url
  .patch(tourController.updateTour)
  
//delete a single tour data by providing an id in url
  .delete(tourController.deleteTour);

module.exports = router;


