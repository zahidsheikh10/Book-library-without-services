const express = require('express');
const debug = require('debug')('app:adminRoutes');
const passport = require('passport');
const bodyParser = require('body-parser');
const adminRouter = express.Router();
let Books = require('../../models/books');


function router(nav) {
  adminRouter.route('/addBook')
    .get((req, res) => {
      res.render('addBook', {
        nav,
        title: 'Add book'
      })
    })
    .post((req, res) => {
      const { title, author,description,genre } = req.body;
      const newBook = new Books ({
        title:title,
        author:author,
        description:description,
        genre:genre
      });
      newBook.save()
        .then(() => res.redirect('/books'))
        .catch(error => res.status(400).json('Error:' + error))
    });
  return adminRouter;
}

module.exports = router;
