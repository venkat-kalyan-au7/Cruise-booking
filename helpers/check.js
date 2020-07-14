
module.exports.checkID = (req, res, next, val) => {
    console.log(`Tour id is: ${val}`);
  
    if (req.params.id * 1 > tours.length) {
      return res.status(404).json({
        status: 'fail',
        message: 'Invalid ID'
      });
    }
    next();
  };
  
module.exports.checkBody = (req, res, next) => {
    if (!req.body.name || !req.body.price) {
      return res.status(400).json({
        status: 'fail',
        message: 'Missing name or price'
      });
    }
    next();
  };