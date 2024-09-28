const express = require('express')

const {createCategory} = require('../controllers/orderCategory')

const cateoryRouter = express.Router();

cateoryRouter.route('/').get(getUsers).post(createCategory);
module.exports = cateoryRouter;


