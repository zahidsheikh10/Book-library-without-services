const express = require('express');
const debug = require('debug')('app:adminRoutes');
const bookRouter = express.Router();
const bookController = require('../controllers/bookController');

function router(nav) {

    const { getIndex, getById, middleWare } = bookController(nav);

    bookRouter.use(middleWare);

    bookRouter.route('/')
        .get(getIndex);

    bookRouter.route('/:id')
        .get(getById);
    return bookRouter;
}


module.exports = router;
