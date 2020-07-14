import fs from "fs"

module.exports.getAllTours = (req,res)=>{
    const tours = JSON.parse(
        fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`)
      );
    
    return res.json({
        message:'Available Tours',
        results:tours.length,
        info:tours
    })

}

exports.getTour = (req, res) => {
    console.log(req.params);
    const id = req.params.id * 1;
  
    const tour = tours.find(el => el.id === id);
  
    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  };

  exports.createTour = (req, res) => {
    // console.log(req.body);
  
    const newId = tours[tours.length - 1].id + 1;
    const newTour = Object.assign({ id: newId }, req.body);
  
    tours.push(newTour);
  
    fs.writeFile(
      `${__dirname}/dev-data/data/tours-simple.json`,
      JSON.stringify(tours),
      err => {
        res.status(201).json({
          status: 'success',
          data: {
            tour: newTour
          }
        });
      }
    );
  };
  
  exports.updateTour = (req, res) => {
    res.status(200).json({
      status: 'success',
      data: {
        tour: '<Updated tour here...>'
      }
    });
  };
  
  exports.deleteTour = (req, res) => {
    res.status(204).json({
      status: 'success',
      data: null
    });
  };
