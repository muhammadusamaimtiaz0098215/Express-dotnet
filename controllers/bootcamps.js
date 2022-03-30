// @Des     Get all bootcamps
//@route    GET /api/v1/bootcamps
//@access   Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: "Show all bootcamps",
  });
};

// @Des     Get all bootcamps
//@route    GET /api/v1/bootcamps/:id
//@access   Private
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Show bootcamp ${req.params.id}`,
  });
};

// @Des     Get all bootcamps
//@route    POST /api/v1/bootcamps
//@access   Private
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Create bootcamp ${req.params.id}`,
  });
};

// @Des     Get all bootcamps
//@route    PUT /api/v1/bootcamps/:id
//@access   Private
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Update bootcamp ${req.params.id}`,
  });
};

// @Des     Get all bootcamps
//@route    DELETE /api/v1/bootcamps/:id
//@access   Private
exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({
    success: true,
    msg: `Delete bootcamp ${req.params.id}`,
  });
};
