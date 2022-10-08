/**
 * It returns a JSON object with a message and a timestamp
 * @param req - The request object.
 * @param res - The response object.
 */
const handlerHome = (req, res) => {
  res.status(200).json({
    message: 'home',
    timestamp: +new Date(),
  });
};

/* Exporting the function `handlerHome` so that it can be used in other files. */
module.exports = handlerHome;
