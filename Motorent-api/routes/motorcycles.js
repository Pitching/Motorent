/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const { getMotorcycleById, getMotorcycles } = require('../handlers/motorcycles');

const express = require('express');
const router  = express.Router();

router.get('/:id', getMotorcycleById);

router.get('/', getMotorcycles);

module.exports = router;
