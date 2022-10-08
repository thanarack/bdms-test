const jwt = require('jsonwebtoken');
const { users } = require('../mock/data');

/**
 * It takes in a username and password, checks if the user exists in the database, and if it does, it
 * returns a token
 * @param req - The request object.
 * @param res - The response object.
 * @returns A function that takes in a request and response object.
 */
const handlerUserLogin = (req, res) => {
  const { username, password } = req.body;

  const getUser = users.find(
    (v) => v.username === username && v.password === password
  );

  if (!getUser) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Username or password incorrect',
    });
  }

  const token = jwt.sign({ userId: getUser.id, username }, 'key', {
    expiresIn: '1h',
  });

  const userSession = {
    username,
    token,
  };

  res.status(200).json({
    statusCode: 200,
    message: 'Login successful',
    data: userSession,
  });
};

/* Exporting the handlerUserLogin function. */
module.exports = {
  handlerUserLogin,
};
