const jwt = require('jsonwebtoken');

/**
 * It checks if the token is present in the request header, if it is, it verifies the token and if it's
 * valid, it attaches the decoded token to the request object
 * @param req - The request object
 * @param res - The response object.
 * @param next - This is a function that is called when the middleware is complete.
 * @returns the next middleware in the chain.
 */
const checkToken = async (req, res, next) => {
  const { headers } = req;

  /* It checks if the token is present in the request header, if it is, it verifies the token and if
  it's
   * valid, it attaches the decoded token to the request object */
  if (!headers.authorization)
    return res.status(500).json({
      statusCode: 500,
      message: 'Token not found',
    });

  /* Verifying the token and if it's valid, it attaches the decoded token to the request object. */
  const token = String(headers.authorization).replace('Bearer ', '');
  jwt.verify(token, 'key', (err, decode) => {
    if (err) {
      return res.status(500).json({
        statusCode: 500,
        message: 'Token invalid',
      });
    }
    req.userPayload = decode;
    return next();
  });
};

/* Exporting the function checkToken so that it can be used in other files. */
module.exports = checkToken;
