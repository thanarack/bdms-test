const { todo } = require('../mock/data');
const getLastId = require('../utils/getLastId');

/**
 * It creates a new todo item and adds it to the todo array
 * @param req - The request object.
 * @param res - The response object.
 */
const handlerTodoCreate = (req, res) => {
  const { title } = req.body;
  const { userId } = req.userPayload;

  const newTodo = {
    id: getLastId(todo),
    title,
    status: 'pending',
    userId,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  todo.push(newTodo);

  res.status(200).json({
    statusCode: 200,
    message: 'created',
    data: newTodo,
  });
};

/**
 * It filters the todo array to get the todo list of the user who is logged in
 * @param req - The request object.
 * @param res - The response object.
 */
const handlerTodoList = (req, res) => {
  const { userId } = req.userPayload;

  const getList = todo.filter((v) => v.userId === userId);

  res.status(200).json({
    statusCode: 200,
    data: getList,
  });
};

/**
 * It returns a todo with the given id
 * @param req - The request object.
 * @param res - The response object.
 */
const handlerTodoGetById = (req, res) => {
  const { id } = req.params;

  const result = todo.find((v) => v.id === +id);

  if (!result) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Cannot find todo with id',
    });
  }

  res.status(200).json({
    statusCode: 200,
    data: result,
  });
};

/**
 * It deletes a todo by id
 * @param req - The request object.
 * @param res - The response object.
 * @returns the index of the element in the array that matches the condition.
 */
const handlerTodoDeleteById = (req, res) => {
  const { id } = req.params;
  const { userId } = req.userPayload;

  const result = todo.findIndex((v) => v.id === +id && v.userId === userId);

  if (result === -1) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Cannot delete todo with id',
    });
  }

  todo.splice(result, 1);

  res.status(200).json({
    statusCode: 200,
    message: 'Deleted',
  });
};

/**
 * It updates a todo by id
 * @param req - The request object.
 * @param res - The response object.
 * @returns const handlerTodoUpdateById = (req, res) => {
 *   const { id } = req.params;
 *   const { title, status } = req.body;
 *   const { userId } = req.userPayload;
 */
const handlerTodoUpdateById = (req, res) => {
  const { id } = req.params;
  const { title, status } = req.body;
  const { userId } = req.userPayload;

  const result = todo.findIndex((v) => v.id === +id && v.userId === userId);

  if (result === -1) {
    return res.status(404).json({
      statusCode: 404,
      message: 'Cannot update todo with id',
    });
  }

  const oldValue = todo[result];

  todo[result] = {
    ...oldValue,
    title,
    status: status || oldValue.status,
    updatedAt: new Date().toISOString(),
  };

  res.status(200).json({
    statusCode: 200,
    message: 'Updated',
    data: todo[result],
  });
};

/* Exporting the functions to be used in the index.js file. */
module.exports = {
  handlerTodoCreate,
  handlerTodoList,
  handlerTodoGetById,
  handlerTodoDeleteById,
  handlerTodoUpdateById,
};
