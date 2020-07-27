import express from "express"
import tourController from "../controller/tourcontrol"

const router = express.Router();

//admin can see all the tours
router.get('/all',tourController.getAllTours)

//admin can add new tour
router.post('/newtour',tourController.createTour)


//admin can see monthly stats
router.get('/monthlystats/:year',tourController.getMonthlyStats)

//admin can get,update,delete tour by id
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);


module.exports = router