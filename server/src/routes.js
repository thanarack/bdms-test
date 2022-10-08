const handlerHome = require('./controllers/home');
const { handlerUserLogin } = require('./controllers/user');
const checkToken = require('./utils/checkToken');
const {
  handlerTodoCreate,
  handlerTodoList,
  handlerTodoGetById,
  handlerTodoDeleteById,
  handlerTodoUpdateById,
} = require('./controllers/todo');

/**
 * It's a function that takes an Express app as an argument and returns the same app with routes
 * attached to it
 * @param app - The express app object
 * @returns The app object is being returned.
 */
const Routes = (app) => {
  app.get('/', handlerHome);

  app.post('/login', handlerUserLogin);

  app.post('/create', checkToken, handlerTodoCreate);

  app.get('/list', checkToken, handlerTodoList);

  app.get('/p/:id', checkToken, handlerTodoGetById);

  app.delete('/delete/:id', checkToken, handlerTodoDeleteById);

  app.put('/update/:id', checkToken, handlerTodoUpdateById);

  return app;
};

module.exports = Routes;
